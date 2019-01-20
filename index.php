<?php
require_once './src/Helpers/Psr4Autoloader.php';

// Instantiate the loader
$loader = new EMC\Helpers\Psr4Autoloader;

// Register the loader
$loader->register();

// Do register the base directories for the namespace prefix
// These 2 lines MUST cause the same behaviour as the line below
// $loader->addNamespace("EMC\\Helpers\\", array("src/EMC/Helpers", "tests/EMC/Helpers"));
$loader->addNamespace("EMC\\Helpers\\", "src/EMC/Helpers");
$loader->addNamespace("EMC\\Helpers\\", "tests/EMC/Helpers");

