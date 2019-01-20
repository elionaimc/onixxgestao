<?php
namespace EMC\Helpers;

class Database extends \PDO
{
    protected $dsn = '';
    protected $prefix = '';
    protected $name = '';
    protected $user = '';
    protected $password = '';
    protected $port = '';
    protected $host = '';
    protected $charset = '';
    protected $transactionCounter = 0;
    public $handle = null;
    public static $instance = null;

    public function __construct(
        $prefix = '',
        $name = '',
        $user = '',
        $password = '',
        $port = '',
        $host = "localhost",
        $charset = "utf8"
    ) {
        $this->prefix = $prefix;
        $this->name = $name;
        $this->user = $user;
        $this->password = $password;
        $this->port = $port;
        $this->host = $host;
        $this->charset = $charset;

        $this->prefix = strtolower($this->prefix);
        $this->charset = strtolower($this->charset);

        try {
            if ($this->handle == null) {
                if ($this->prefix === "mysql" || $this->prefix === "pgsql") {
                    $this->createSGDBDatabase();
                } else {
                    $this->createSQLiteDatabase();
                }

                return $this->handle;
            }
        }
        catch (\PDOException $e) {
            throw new \PDOException($e->getMessage());
            return false;
        }
    }

    protected function createSGDBDatabase()
    {
        $this->dsn = $this->prefix.':host='. $this->host;

        if ($this->port !== '') $this->dsn .= ';port:'. $this->port; // sets a specifc port, if defined

        $this->dsn .= ';dbname='. $this->name;

        $pdoh = parent::__construct($this->dsn, $this->user, $this->password);

        $this->setAttribute(self::ATTR_ERRMODE, self::ERRMODE_EXCEPTION);
        $this->handle = $pdoh;

        if ($this->prefix === "mysql" && $this->charset === "utf8") {
            $this->setAttribute(self::MYSQL_ATTR_INIT_COMMAND, 'SET NAMES utf8'); // sets UTF-8 as default encoding
            $this->exec("USE " . $this->name); // prevent the syntax database(.)table when using MySQL databases
        } elseif ($this->prefix === "pgsql" && $this->charset === "utf8") {
            $this->exec("SET NAMES 'UTF8'"); // sets UTF-8 as default encoding
        }
    }

    protected function createSQLiteDatabase()
    {
        $persist = array(self::ATTR_PERSISTENT => true);
        $this->dsn = "sqlite:/tmp/test.db"; // sets SQLITE as default database
        $this->handle = parent::__construct($this->dsn, null, null, $persist);
    }

    public function beginTransaction()
    {
        if (!$this->transactionCounter++) return parent::beginTransaction();

        return $this->transactionCounter >= 0;
    }

    public function commit()
    {
        if (!--$this->transactionCounter) return parent::commit();

        return $this->transactionCounter >= 0;
    }

    public function rollback()
    {
        if ($this->transactionCounter >= 0) {
            $this->transactionCounter = 0;
            return parent::rollback();
        }

        $this->transactionCounter = 0;
        return false;
    }

    final public function destroy(){
        $this->handle = null;
    }
}
