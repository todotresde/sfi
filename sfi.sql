-- MySQL dump 10.13  Distrib 5.7.19, for Linux (x86_64)
--
-- Host: localhost    Database: sfi
-- ------------------------------------------------------
-- Server version	5.7.19-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `DATABASECHANGELOG`
--

DROP TABLE IF EXISTS `DATABASECHANGELOG`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `DATABASECHANGELOG` (
  `ID` varchar(255) NOT NULL,
  `AUTHOR` varchar(255) NOT NULL,
  `FILENAME` varchar(255) NOT NULL,
  `DATEEXECUTED` datetime NOT NULL,
  `ORDEREXECUTED` int(11) NOT NULL,
  `EXECTYPE` varchar(10) NOT NULL,
  `MD5SUM` varchar(35) DEFAULT NULL,
  `DESCRIPTION` varchar(255) DEFAULT NULL,
  `COMMENTS` varchar(255) DEFAULT NULL,
  `TAG` varchar(255) DEFAULT NULL,
  `LIQUIBASE` varchar(20) DEFAULT NULL,
  `CONTEXTS` varchar(255) DEFAULT NULL,
  `LABELS` varchar(255) DEFAULT NULL,
  `DEPLOYMENT_ID` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `DATABASECHANGELOG`
--

LOCK TABLES `DATABASECHANGELOG` WRITE;
/*!40000 ALTER TABLE `DATABASECHANGELOG` DISABLE KEYS */;
INSERT INTO `DATABASECHANGELOG` VALUES ('00000000000001','jhipster','config/liquibase/changelog/00000000000000_initial_schema.xml','2017-09-03 09:51:51',1,'EXECUTED','7:289534c28c020e6fefc04422562ad4a2','createTable tableName=jhi_user; createIndex indexName=idx_user_login, tableName=jhi_user; createIndex indexName=idx_user_email, tableName=jhi_user; createTable tableName=jhi_authority; createTable tableName=jhi_user_authority; addPrimaryKey tableN...','',NULL,'3.5.3',NULL,NULL,'4443104423'),('20170828092714-1','jhipster','config/liquibase/changelog/20170828092714_added_entity_Employee.xml','2017-09-03 09:51:52',2,'EXECUTED','7:ebfc197d2bfc7eb0fad35cdbdfb4d09f','createTable tableName=employee','',NULL,'3.5.3',NULL,NULL,'4443104423'),('20170828092715-1','jhipster','config/liquibase/changelog/20170828092715_added_entity_Line.xml','2017-09-03 09:51:52',3,'EXECUTED','7:cae0a425a082ad51c06ea6444bde1832','createTable tableName=line','',NULL,'3.5.3',NULL,NULL,'4443104423'),('20170828092716-1','jhipster','config/liquibase/changelog/20170828092716_added_entity_WSConfiguration.xml','2017-09-03 09:51:55',4,'EXECUTED','7:c832511c78e989c45c3e5d3cc324e675','createTable tableName=ws_configuration; createTable tableName=wsconfiguration_supply_type; addPrimaryKey tableName=wsconfiguration_supply_type; createTable tableName=wsconfiguration_employee; addPrimaryKey tableName=wsconfiguration_employee','',NULL,'3.5.3',NULL,NULL,'4443104423'),('20170828092717-1','jhipster','config/liquibase/changelog/20170828092717_added_entity_WorkStation.xml','2017-09-03 09:51:55',5,'EXECUTED','7:bdb443307404ef105d0902fb771e8ae5','createTable tableName=work_station','',NULL,'3.5.3',NULL,NULL,'4443104423'),('20170828092718-1','jhipster','config/liquibase/changelog/20170828092718_added_entity_ManufacturingOrder.xml','2017-09-03 09:51:55',6,'EXECUTED','7:10423a8b8d4407d52ab476319c22f7fa','createTable tableName=manufacturing_order; dropDefaultValue columnName=order_date, tableName=manufacturing_order','',NULL,'3.5.3',NULL,NULL,'4443104423'),('20170828092719-1','jhipster','config/liquibase/changelog/20170828092719_added_entity_MOProduct.xml','2017-09-03 09:51:56',7,'EXECUTED','7:7bb444b4512d5f0cf103a961197adfa0','createTable tableName=mo_product','',NULL,'3.5.3',NULL,NULL,'4443104423'),('20170828092720-1','jhipster','config/liquibase/changelog/20170828092720_added_entity_Supply.xml','2017-09-03 09:51:56',8,'EXECUTED','7:ffbe4dfbc1038e3382bd9733312c7b4a','createTable tableName=supply','',NULL,'3.5.3',NULL,NULL,'4443104423'),('20170828092721-1','jhipster','config/liquibase/changelog/20170828092721_added_entity_SupplyType.xml','2017-09-03 09:51:58',9,'EXECUTED','7:67e4900af1d54626bf48928f51cb7097','createTable tableName=supply_type; createTable tableName=supply_type_st_attribute; addPrimaryKey tableName=supply_type_st_attribute','',NULL,'3.5.3',NULL,NULL,'4443104423'),('20170828092722-1','jhipster','config/liquibase/changelog/20170828092722_added_entity_STAttribute.xml','2017-09-03 09:51:58',10,'EXECUTED','7:6d13898b8e9a10c08564305b7d4eeee7','createTable tableName=st_attribute','',NULL,'3.5.3',NULL,NULL,'4443104423'),('20170828092723-1','jhipster','config/liquibase/changelog/20170828092723_added_entity_Product.xml','2017-09-03 09:51:59',11,'EXECUTED','7:7be200d4d68b57edd1f04c0acc9666e6','createTable tableName=product; createTable tableName=product_supply; addPrimaryKey tableName=product_supply','',NULL,'3.5.3',NULL,NULL,'4443104423'),('20170828092724-1','jhipster','config/liquibase/changelog/20170828092724_added_entity_ProductType.xml','2017-09-03 09:52:00',12,'EXECUTED','7:a4e53bf85b8eb27a880d0130e71b3513','createTable tableName=product_type; createTable tableName=product_type_pt_attribute; addPrimaryKey tableName=product_type_pt_attribute','',NULL,'3.5.3',NULL,NULL,'4443104423'),('20170828092725-1','jhipster','config/liquibase/changelog/20170828092725_added_entity_PTAttribute.xml','2017-09-03 09:52:01',13,'EXECUTED','7:300f91c007518cd172bf9e54e174e038','createTable tableName=pt_attribute','',NULL,'3.5.3',NULL,NULL,'4443104423'),('20170828092726-1','jhipster','config/liquibase/changelog/20170828092726_added_entity_Tracer.xml','2017-09-03 09:52:01',14,'EXECUTED','7:95cbd60d42b35ad7377893f13dbe76b1','createTable tableName=tracer; dropDefaultValue columnName=in_time, tableName=tracer; dropDefaultValue columnName=start_time, tableName=tracer; dropDefaultValue columnName=end_time, tableName=tracer','',NULL,'3.5.3',NULL,NULL,'4443104423'),('20170828092716-2','jhipster','config/liquibase/changelog/20170828092716_added_entity_constraints_WSConfiguration.xml','2017-09-03 09:52:08',15,'EXECUTED','7:1a58e6a218424109024de50d03435d2f','addForeignKeyConstraint baseTableName=ws_configuration, constraintName=fk_wsconfiguration_work_station_id, referencedTableName=work_station; addForeignKeyConstraint baseTableName=ws_configuration, constraintName=fk_wsconfiguration_prev_work_statio...','',NULL,'3.5.3',NULL,NULL,'4443104423'),('20170828092719-2','jhipster','config/liquibase/changelog/20170828092719_added_entity_constraints_MOProduct.xml','2017-09-03 09:52:09',16,'EXECUTED','7:ce3071d4598a6a899084a7e728553d93','addForeignKeyConstraint baseTableName=mo_product, constraintName=fk_moproduct_manufacturing_order_id, referencedTableName=manufacturing_order; addForeignKeyConstraint baseTableName=mo_product, constraintName=fk_moproduct_product_id, referencedTabl...','',NULL,'3.5.3',NULL,NULL,'4443104423'),('20170828092720-2','jhipster','config/liquibase/changelog/20170828092720_added_entity_constraints_Supply.xml','2017-09-03 09:52:10',17,'EXECUTED','7:498f72a20a7d94ad10f4373294b39228','addForeignKeyConstraint baseTableName=supply, constraintName=fk_supply_supply_type_id, referencedTableName=supply_type','',NULL,'3.5.3',NULL,NULL,'4443104423'),('20170828092721-2','jhipster','config/liquibase/changelog/20170828092721_added_entity_constraints_SupplyType.xml','2017-09-03 09:52:12',18,'EXECUTED','7:23008a38fa2981a58d109294dac43de2','addForeignKeyConstraint baseTableName=supply_type_st_attribute, constraintName=fk_supply_type_st_attribute_supply_types_id, referencedTableName=supply_type; addForeignKeyConstraint baseTableName=supply_type_st_attribute, constraintName=fk_supply_t...','',NULL,'3.5.3',NULL,NULL,'4443104423'),('20170828092723-2','jhipster','config/liquibase/changelog/20170828092723_added_entity_constraints_Product.xml','2017-09-03 09:52:14',19,'EXECUTED','7:52ab8de274a6c4341295f17e5797744a','addForeignKeyConstraint baseTableName=product_supply, constraintName=fk_product_supply_products_id, referencedTableName=product; addForeignKeyConstraint baseTableName=product_supply, constraintName=fk_product_supply_supplies_id, referencedTableNam...','',NULL,'3.5.3',NULL,NULL,'4443104423'),('20170828092724-2','jhipster','config/liquibase/changelog/20170828092724_added_entity_constraints_ProductType.xml','2017-09-03 09:52:16',20,'EXECUTED','7:3c9afb3387da4f1772d0cad75d07d4e2','addForeignKeyConstraint baseTableName=product_type_pt_attribute, constraintName=fk_product_type_pt_attribute_product_types_id, referencedTableName=product_type; addForeignKeyConstraint baseTableName=product_type_pt_attribute, constraintName=fk_pro...','',NULL,'3.5.3',NULL,NULL,'4443104423'),('20170828092726-2','jhipster','config/liquibase/changelog/20170828092726_added_entity_constraints_Tracer.xml','2017-09-03 09:52:26',21,'EXECUTED','7:375f7e1af61cf61cbcfe6ab0a541ea74','addForeignKeyConstraint baseTableName=tracer, constraintName=fk_tracer_ws_configuration_id, referencedTableName=ws_configuration; addForeignKeyConstraint baseTableName=tracer, constraintName=fk_tracer_manufacturing_order_id, referencedTableName=ma...','',NULL,'3.5.3',NULL,NULL,'4443104423');
/*!40000 ALTER TABLE `DATABASECHANGELOG` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `DATABASECHANGELOGLOCK`
--

DROP TABLE IF EXISTS `DATABASECHANGELOGLOCK`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `DATABASECHANGELOGLOCK` (
  `ID` int(11) NOT NULL,
  `LOCKED` bit(1) NOT NULL,
  `LOCKGRANTED` datetime DEFAULT NULL,
  `LOCKEDBY` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `DATABASECHANGELOGLOCK`
--

LOCK TABLES `DATABASECHANGELOGLOCK` WRITE;
/*!40000 ALTER TABLE `DATABASECHANGELOGLOCK` DISABLE KEYS */;
INSERT INTO `DATABASECHANGELOGLOCK` VALUES (1,'\0',NULL,NULL);
/*!40000 ALTER TABLE `DATABASECHANGELOGLOCK` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `employee` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `user_id` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jhi_authority`
--

DROP TABLE IF EXISTS `jhi_authority`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jhi_authority` (
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jhi_authority`
--

LOCK TABLES `jhi_authority` WRITE;
/*!40000 ALTER TABLE `jhi_authority` DISABLE KEYS */;
INSERT INTO `jhi_authority` VALUES ('ROLE_ADMIN'),('ROLE_USER');
/*!40000 ALTER TABLE `jhi_authority` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jhi_persistent_audit_event`
--

DROP TABLE IF EXISTS `jhi_persistent_audit_event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jhi_persistent_audit_event` (
  `event_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `principal` varchar(50) NOT NULL,
  `event_date` timestamp NULL DEFAULT NULL,
  `event_type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`event_id`),
  KEY `idx_persistent_audit_event` (`principal`,`event_date`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jhi_persistent_audit_event`
--

LOCK TABLES `jhi_persistent_audit_event` WRITE;
/*!40000 ALTER TABLE `jhi_persistent_audit_event` DISABLE KEYS */;
/*!40000 ALTER TABLE `jhi_persistent_audit_event` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jhi_persistent_audit_evt_data`
--

DROP TABLE IF EXISTS `jhi_persistent_audit_evt_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jhi_persistent_audit_evt_data` (
  `event_id` bigint(20) NOT NULL,
  `name` varchar(150) NOT NULL,
  `value` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`event_id`,`name`),
  KEY `idx_persistent_audit_evt_data` (`event_id`),
  CONSTRAINT `fk_evt_pers_audit_evt_data` FOREIGN KEY (`event_id`) REFERENCES `jhi_persistent_audit_event` (`event_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jhi_persistent_audit_evt_data`
--

LOCK TABLES `jhi_persistent_audit_evt_data` WRITE;
/*!40000 ALTER TABLE `jhi_persistent_audit_evt_data` DISABLE KEYS */;
/*!40000 ALTER TABLE `jhi_persistent_audit_evt_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jhi_user`
--

DROP TABLE IF EXISTS `jhi_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jhi_user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `login` varchar(50) NOT NULL,
  `password_hash` varchar(60) DEFAULT NULL,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `image_url` varchar(256) DEFAULT NULL,
  `activated` bit(1) NOT NULL,
  `lang_key` varchar(5) DEFAULT NULL,
  `activation_key` varchar(20) DEFAULT NULL,
  `reset_key` varchar(20) DEFAULT NULL,
  `created_by` varchar(50) NOT NULL,
  `created_date` timestamp NOT NULL,
  `reset_date` timestamp NULL DEFAULT NULL,
  `last_modified_by` varchar(50) DEFAULT NULL,
  `last_modified_date` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `login` (`login`),
  UNIQUE KEY `idx_user_login` (`login`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `idx_user_email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jhi_user`
--

LOCK TABLES `jhi_user` WRITE;
/*!40000 ALTER TABLE `jhi_user` DISABLE KEYS */;
INSERT INTO `jhi_user` VALUES (1,'system','$2a$10$mE.qmcV0mFU5NcKh73TZx.z4ueI/.bDWbj0T1BYyqP481kGGarKLG','System','System','system@localhost','','','en',NULL,NULL,'system','2017-09-03 12:51:48',NULL,'system',NULL),(2,'anonymoususer','$2a$10$j8S5d7Sr7.8VTOYNviDPOeWX8KcYILUVJBsYV83Y5NtECayypx9lO','Anonymous','User','anonymous@localhost','','','en',NULL,NULL,'system','2017-09-03 12:51:48',NULL,'system',NULL),(3,'admin','$2a$10$gSAhZrxMllrbgj/kkK9UceBPpChGWJA7SYIb1Mqo.n5aNLq1/oRrC','Administrator','Administrator','admin@localhost','','','en',NULL,NULL,'system','2017-09-03 12:51:48',NULL,'system',NULL),(4,'user','$2a$10$VEjxo0jq2YG9Rbk2HmX9S.k1uZBGYUHdUcid3g/vfiEl7lwWgOH/K','User','User','user@localhost','','','en',NULL,NULL,'system','2017-09-03 12:51:48',NULL,'system',NULL);
/*!40000 ALTER TABLE `jhi_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jhi_user_authority`
--

DROP TABLE IF EXISTS `jhi_user_authority`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jhi_user_authority` (
  `user_id` bigint(20) NOT NULL,
  `authority_name` varchar(50) NOT NULL,
  PRIMARY KEY (`user_id`,`authority_name`),
  KEY `fk_authority_name` (`authority_name`),
  CONSTRAINT `fk_authority_name` FOREIGN KEY (`authority_name`) REFERENCES `jhi_authority` (`name`),
  CONSTRAINT `fk_user_id` FOREIGN KEY (`user_id`) REFERENCES `jhi_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jhi_user_authority`
--

LOCK TABLES `jhi_user_authority` WRITE;
/*!40000 ALTER TABLE `jhi_user_authority` DISABLE KEYS */;
INSERT INTO `jhi_user_authority` VALUES (1,'ROLE_ADMIN'),(3,'ROLE_ADMIN'),(1,'ROLE_USER'),(3,'ROLE_USER'),(4,'ROLE_USER');
/*!40000 ALTER TABLE `jhi_user_authority` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `line`
--

DROP TABLE IF EXISTS `line`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `line` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `line`
--

LOCK TABLES `line` WRITE;
/*!40000 ALTER TABLE `line` DISABLE KEYS */;
INSERT INTO `line` VALUES (1,'Linea 1'),(2,'Linea 2');
/*!40000 ALTER TABLE `line` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `manufacturing_order`
--

DROP TABLE IF EXISTS `manufacturing_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `manufacturing_order` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) NOT NULL,
  `order_date` timestamp NOT NULL ON UPDATE CURRENT_TIMESTAMP,
  `status` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `manufacturing_order`
--

LOCK TABLES `manufacturing_order` WRITE;
/*!40000 ALTER TABLE `manufacturing_order` DISABLE KEYS */;
INSERT INTO `manufacturing_order` VALUES (1,'MO 1','2017-09-16 03:00:00',0,'MO 1');
/*!40000 ALTER TABLE `manufacturing_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mo_product`
--

DROP TABLE IF EXISTS `mo_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mo_product` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `quantity` int(11) NOT NULL,
  `manufacturing_order_id` bigint(20) NOT NULL,
  `product_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_moproduct_manufacturing_order_id` (`manufacturing_order_id`),
  KEY `fk_moproduct_product_id` (`product_id`),
  CONSTRAINT `fk_moproduct_manufacturing_order_id` FOREIGN KEY (`manufacturing_order_id`) REFERENCES `manufacturing_order` (`id`),
  CONSTRAINT `fk_moproduct_product_id` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mo_product`
--

LOCK TABLES `mo_product` WRITE;
/*!40000 ALTER TABLE `mo_product` DISABLE KEYS */;
INSERT INTO `mo_product` VALUES (2,10,1,1),(3,5,1,2);
/*!40000 ALTER TABLE `mo_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `product_type_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_product_product_type_id` (`product_type_id`),
  CONSTRAINT `fk_product_product_type_id` FOREIGN KEY (`product_type_id`) REFERENCES `product_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'0001',1),(2,'0002',1);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_supply`
--

DROP TABLE IF EXISTS `product_supply`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_supply` (
  `supplies_id` bigint(20) NOT NULL,
  `products_id` bigint(20) NOT NULL,
  PRIMARY KEY (`products_id`,`supplies_id`),
  KEY `fk_product_supply_supplies_id` (`supplies_id`),
  CONSTRAINT `fk_product_supply_products_id` FOREIGN KEY (`products_id`) REFERENCES `product` (`id`),
  CONSTRAINT `fk_product_supply_supplies_id` FOREIGN KEY (`supplies_id`) REFERENCES `supply` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_supply`
--

LOCK TABLES `product_supply` WRITE;
/*!40000 ALTER TABLE `product_supply` DISABLE KEYS */;
INSERT INTO `product_supply` VALUES (1,1),(1,2),(3,2),(4,1),(5,1),(5,2);
/*!40000 ALTER TABLE `product_supply` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_type`
--

DROP TABLE IF EXISTS `product_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_type` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_type`
--

LOCK TABLES `product_type` WRITE;
/*!40000 ALTER TABLE `product_type` DISABLE KEYS */;
INSERT INTO `product_type` VALUES (1,'Cortina Roller');
/*!40000 ALTER TABLE `product_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_type_pt_attribute`
--

DROP TABLE IF EXISTS `product_type_pt_attribute`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_type_pt_attribute` (
  `pt_attributes_id` bigint(20) NOT NULL,
  `product_types_id` bigint(20) NOT NULL,
  PRIMARY KEY (`product_types_id`,`pt_attributes_id`),
  KEY `fk_product_type_pt_attribute_pt_attributes_id` (`pt_attributes_id`),
  CONSTRAINT `fk_product_type_pt_attribute_product_types_id` FOREIGN KEY (`product_types_id`) REFERENCES `product_type` (`id`),
  CONSTRAINT `fk_product_type_pt_attribute_pt_attributes_id` FOREIGN KEY (`pt_attributes_id`) REFERENCES `pt_attribute` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_type_pt_attribute`
--

LOCK TABLES `product_type_pt_attribute` WRITE;
/*!40000 ALTER TABLE `product_type_pt_attribute` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_type_pt_attribute` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pt_attribute`
--

DROP TABLE IF EXISTS `pt_attribute`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pt_attribute` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pt_attribute`
--

LOCK TABLES `pt_attribute` WRITE;
/*!40000 ALTER TABLE `pt_attribute` DISABLE KEYS */;
/*!40000 ALTER TABLE `pt_attribute` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `st_attribute`
--

DROP TABLE IF EXISTS `st_attribute`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `st_attribute` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `st_attribute`
--

LOCK TABLES `st_attribute` WRITE;
/*!40000 ALTER TABLE `st_attribute` DISABLE KEYS */;
INSERT INTO `st_attribute` VALUES (1,'width'),(2,'height');
/*!40000 ALTER TABLE `st_attribute` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `supply`
--

DROP TABLE IF EXISTS `supply`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `supply` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `supply_type_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_supply_supply_type_id` (`supply_type_id`),
  CONSTRAINT `fk_supply_supply_type_id` FOREIGN KEY (`supply_type_id`) REFERENCES `supply_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `supply`
--

LOCK TABLES `supply` WRITE;
/*!40000 ALTER TABLE `supply` DISABLE KEYS */;
INSERT INTO `supply` VALUES (1,'Tela Roja',1),(2,'Tela Verde',1),(3,'Roller 1',2),(4,'Roller 2',2),(5,'Motor RJ1',3);
/*!40000 ALTER TABLE `supply` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `supply_type`
--

DROP TABLE IF EXISTS `supply_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `supply_type` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `supply_type`
--

LOCK TABLES `supply_type` WRITE;
/*!40000 ALTER TABLE `supply_type` DISABLE KEYS */;
INSERT INTO `supply_type` VALUES (1,'Tela'),(2,'Sistema'),(3,'Motor');
/*!40000 ALTER TABLE `supply_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `supply_type_st_attribute`
--

DROP TABLE IF EXISTS `supply_type_st_attribute`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `supply_type_st_attribute` (
  `st_attributes_id` bigint(20) NOT NULL,
  `supply_types_id` bigint(20) NOT NULL,
  PRIMARY KEY (`supply_types_id`,`st_attributes_id`),
  KEY `fk_supply_type_st_attribute_st_attributes_id` (`st_attributes_id`),
  CONSTRAINT `fk_supply_type_st_attribute_st_attributes_id` FOREIGN KEY (`st_attributes_id`) REFERENCES `st_attribute` (`id`),
  CONSTRAINT `fk_supply_type_st_attribute_supply_types_id` FOREIGN KEY (`supply_types_id`) REFERENCES `supply_type` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `supply_type_st_attribute`
--

LOCK TABLES `supply_type_st_attribute` WRITE;
/*!40000 ALTER TABLE `supply_type_st_attribute` DISABLE KEYS */;
INSERT INTO `supply_type_st_attribute` VALUES (1,1),(1,2),(2,1);
/*!40000 ALTER TABLE `supply_type_st_attribute` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tracer`
--

DROP TABLE IF EXISTS `tracer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tracer` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) NOT NULL,
  `in_time` timestamp NOT NULL ON UPDATE CURRENT_TIMESTAMP,
  `start_time` timestamp NULL,
  `end_time` timestamp NULL,
  `jhi_time` int(11) DEFAULT NULL,
  `status` int(11) NOT NULL,
  `ws_configuration_id` bigint(20) NOT NULL,
  `manufacturing_order_id` bigint(20) NOT NULL,
  `mo_product_id` bigint(20) NOT NULL,
  `line_id` bigint(20) NOT NULL,
  `work_station_id` bigint(20) NOT NULL,
  `prev_work_station_id` bigint(20) DEFAULT NULL,
  `next_work_station_id` bigint(20) DEFAULT NULL,
  `next_tracer_id` bigint(20) DEFAULT NULL,
  `prev_tracer_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_tracer_ws_configuration_id` (`ws_configuration_id`),
  KEY `fk_tracer_manufacturing_order_id` (`manufacturing_order_id`),
  KEY `fk_tracer_mo_product_id` (`mo_product_id`),
  KEY `fk_tracer_line_id` (`line_id`),
  KEY `fk_tracer_work_station_id` (`work_station_id`),
  KEY `fk_tracer_prev_work_station_id` (`prev_work_station_id`),
  KEY `fk_tracer_next_work_station_id` (`next_work_station_id`),
  KEY `fk_tracer_next_tracer_id` (`next_tracer_id`),
  KEY `fk_tracer_prev_tracer_id` (`prev_tracer_id`),
  CONSTRAINT `fk_tracer_line_id` FOREIGN KEY (`line_id`) REFERENCES `line` (`id`),
  CONSTRAINT `fk_tracer_manufacturing_order_id` FOREIGN KEY (`manufacturing_order_id`) REFERENCES `manufacturing_order` (`id`),
  CONSTRAINT `fk_tracer_mo_product_id` FOREIGN KEY (`mo_product_id`) REFERENCES `mo_product` (`id`),
  CONSTRAINT `fk_tracer_next_tracer_id` FOREIGN KEY (`next_tracer_id`) REFERENCES `tracer` (`id`),
  CONSTRAINT `fk_tracer_next_work_station_id` FOREIGN KEY (`next_work_station_id`) REFERENCES `work_station` (`id`),
  CONSTRAINT `fk_tracer_prev_tracer_id` FOREIGN KEY (`prev_tracer_id`) REFERENCES `tracer` (`id`),
  CONSTRAINT `fk_tracer_prev_work_station_id` FOREIGN KEY (`prev_work_station_id`) REFERENCES `work_station` (`id`),
  CONSTRAINT `fk_tracer_work_station_id` FOREIGN KEY (`work_station_id`) REFERENCES `work_station` (`id`),
  CONSTRAINT `fk_tracer_ws_configuration_id` FOREIGN KEY (`ws_configuration_id`) REFERENCES `ws_configuration` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tracer`
--

LOCK TABLES `tracer` WRITE;
/*!40000 ALTER TABLE `tracer` DISABLE KEYS */;
/*!40000 ALTER TABLE `tracer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `work_station`
--

DROP TABLE IF EXISTS `work_station`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `work_station` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `short_name` varchar(255) NOT NULL,
  `ip` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `work_station`
--

LOCK TABLES `work_station` WRITE;
/*!40000 ALTER TABLE `work_station` DISABLE KEYS */;
INSERT INTO `work_station` VALUES (1,'Puesto 1','P1','192.168.1.1'),(2,'Puesto 2','P2','192.168.1.2'),(3,'Puesto 3','P3','192.168.1.3');
/*!40000 ALTER TABLE `work_station` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ws_configuration`
--

DROP TABLE IF EXISTS `ws_configuration`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ws_configuration` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `first` bit(1) DEFAULT NULL,
  `last` bit(1) DEFAULT NULL,
  `work_station_id` bigint(20) NOT NULL,
  `prev_work_station_id` bigint(20) DEFAULT NULL,
  `next_work_station_id` bigint(20) DEFAULT NULL,
  `line_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_wsconfiguration_work_station_id` (`work_station_id`),
  KEY `fk_wsconfiguration_prev_work_station_id` (`prev_work_station_id`),
  KEY `fk_wsconfiguration_next_work_station_id` (`next_work_station_id`),
  KEY `fk_wsconfiguration_line_id` (`line_id`),
  CONSTRAINT `fk_wsconfiguration_line_id` FOREIGN KEY (`line_id`) REFERENCES `line` (`id`),
  CONSTRAINT `fk_wsconfiguration_next_work_station_id` FOREIGN KEY (`next_work_station_id`) REFERENCES `work_station` (`id`),
  CONSTRAINT `fk_wsconfiguration_prev_work_station_id` FOREIGN KEY (`prev_work_station_id`) REFERENCES `work_station` (`id`),
  CONSTRAINT `fk_wsconfiguration_work_station_id` FOREIGN KEY (`work_station_id`) REFERENCES `work_station` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ws_configuration`
--

LOCK TABLES `ws_configuration` WRITE;
/*!40000 ALTER TABLE `ws_configuration` DISABLE KEYS */;
INSERT INTO `ws_configuration` VALUES (1,'','\0',1,NULL,3,1),(2,'\0','\0',2,1,3,1),(3,'\0','',3,2,NULL,1);
/*!40000 ALTER TABLE `ws_configuration` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wsconfiguration_employee`
--

DROP TABLE IF EXISTS `wsconfiguration_employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `wsconfiguration_employee` (
  `employees_id` bigint(20) NOT NULL,
  `wsconfigurations_id` bigint(20) NOT NULL,
  PRIMARY KEY (`wsconfigurations_id`,`employees_id`),
  KEY `fk_wsconfiguration_employee_employees_id` (`employees_id`),
  CONSTRAINT `fk_wsconfiguration_employee_employees_id` FOREIGN KEY (`employees_id`) REFERENCES `employee` (`id`),
  CONSTRAINT `fk_wsconfiguration_employee_wsconfigurations_id` FOREIGN KEY (`wsconfigurations_id`) REFERENCES `ws_configuration` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wsconfiguration_employee`
--

LOCK TABLES `wsconfiguration_employee` WRITE;
/*!40000 ALTER TABLE `wsconfiguration_employee` DISABLE KEYS */;
/*!40000 ALTER TABLE `wsconfiguration_employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wsconfiguration_supply_type`
--

DROP TABLE IF EXISTS `wsconfiguration_supply_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `wsconfiguration_supply_type` (
  `supply_types_id` bigint(20) NOT NULL,
  `wsconfigurations_id` bigint(20) NOT NULL,
  PRIMARY KEY (`wsconfigurations_id`,`supply_types_id`),
  KEY `fk_wsconfiguration_supply_type_supply_types_id` (`supply_types_id`),
  CONSTRAINT `fk_wsconfiguration_supply_type_supply_types_id` FOREIGN KEY (`supply_types_id`) REFERENCES `supply_type` (`id`),
  CONSTRAINT `fk_wsconfiguration_supply_type_wsconfigurations_id` FOREIGN KEY (`wsconfigurations_id`) REFERENCES `ws_configuration` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wsconfiguration_supply_type`
--

LOCK TABLES `wsconfiguration_supply_type` WRITE;
/*!40000 ALTER TABLE `wsconfiguration_supply_type` DISABLE KEYS */;
INSERT INTO `wsconfiguration_supply_type` VALUES (1,1),(2,2),(3,3);
/*!40000 ALTER TABLE `wsconfiguration_supply_type` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-09-03 10:01:45
