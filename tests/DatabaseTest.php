<?php
use EMC\Helpers\Database as Database;
use PHPUnit_Framework_TestCase as PHPUnit;

require_once '../src/EMC/Helpers/Database.php';

class DatabaseTest extends PHPUnit {
  public function testIfMySQLDatabaseWorks()
  {
      $this->db = new Database("mysql", "onixxgestor", "root", "123456");

      $command = "select * from users";
      $query = $this->db->prepare($command);
      $query->execute();
      $result = $query->fetch($this->db::FETCH_ASSOC);
      $this->assertEquals("admin", $result["login"]);
  }
}
