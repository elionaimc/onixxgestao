<?php
namespace EMC\Helpers;

class Psr4Autoloader
{
    protected $namespaces = array();

    public function register()
    {
        spl_autoload_register(array($this, 'loadClass'));
    }

    public function addNamespace($namespace, $mapped_to, $prepend = false)
    {
        // ensures that namespaces get double backslashes at the end
        $namespace = trim($namespace, '\\') . '\\';

        if(!is_array($mapped_to)){
            $this->prepareNamespaces($namespace, $mapped_to, $prepend);
        } else {
            foreach ($mapped_to as $base_dir) {
                $this->prepareNamespaces($namespace, $base_dir, $prepend);
            }
        }
    }

    public function loadClass($class)
    {
        $namespace = $class;

        while (false !== $pos = strrpos($namespace, '\\')) {
            $namespace = substr($class, 0, $pos + 1);
            $relative_class = substr($class, $pos + 1);
            $mapped_file = $this->loadMappedFile($namespace, $relative_class);

            if ($mapped_file) {
                return $mapped_file;
            }

            $namespace = rtrim($namespace, '\\');
        }

        return false;
    }

    protected function prepareNamespaces($namespace, $mapped_to, $prepend)
    {
        $mapped_to = rtrim($mapped_to, DIRECTORY_SEPARATOR) . '/';

        if (isset($this->namespaces[$namespace]) === false) {
            $this->namespaces[$namespace] = array();
        }

        if ($prepend) { // if actual namespace mapping needs to be before others
            array_unshift($this->namespaces[$namespace], $mapped_to);
        } else {
            array_push($this->namespaces[$namespace], $mapped_to);
        }
    }

    protected function loadMappedFile($namespace, $relative_class)
    {
        if (isset($this->namespaces[$namespace]) === false) {
            return false;
        }

        // do search all mapped classes and loads these existing
        foreach ($this->namespaces[$namespace] as $base_dir) {
            $file = $base_dir.str_replace('\\', '/', $relative_class).'.php';

            if ($this->requireFile($file)) {
                return $file;
            }
        }

        return false;
    }

    protected function requireFile($file)
    {
        if (file_exists($file)) {
            require $file;
            return true;
        }

        return false;
    }
}
