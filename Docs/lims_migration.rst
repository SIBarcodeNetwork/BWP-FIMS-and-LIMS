Migrating the BWP LIMS Database
===============================

CBOL has generously supported hosting the Laboratory Information Management System (LIMS) database since the beginning of the Barcode of Wildlife Project, but can no longer maintain this arrangement. Here is a guide to exporting your country's data and setting it up locally.

About the LIMS database
-----------------------

In the overall workflow of the Barcode of Wildlife Project, the LIMS database stores all of the lab-specific data associated with barcode sequencing of samples. A typical lab workflow starts with DNA extraction, then amplification of targeted DNA regions via PCR, followed by sequencing. The LIMS database also stores final version of sequences submitted to GenBank through this platform. Users document the progress of this workflow in Geneious using the specially-designed Biocode plugin, but all supporting data is stored in the LIMS database.

The LIMS database itself is a relational MySQL database designed by the developers of Geneious for this purpose. It is made up of 20 tables, connected together by several foreign keys. Here is a diagram of the tables in the database:

.. figure:: /images/bwp_lims_model.png
  :align: center
  :target: /en/latest/_images/bwp_lims_model.png

  This is an Entity-Relationship diagram of the BWP LIMS database. You can click on it to see the full-size image.

Dumping and importing the database
----------------------------------

The same user account that was set up for troubleshooting connections to the database can be used to "dump" the contents for migration.

Use the tool "mysqldump", which should be installed if you have MySQL installed on your computer. The command is:

.. code-block:: bash

	mysqldump -h db.bwplims.info -u connection_test -p [DATABASE NAME] > lims_dump.sql

The country-specific database names are "kenya_lims", "mexico_lims", and "south_africa_lims". You will then be prompted for a password, which is "DNABarcodes".

I have prepared database dumps of each database on January 19, 2018 to profile the amount of space required, but it is a good idea to run the mysqldump command immediately prior to importing so that you get the "freshest" data.

.. csv-table::
   :header: "Database dump filename", "Uncompressed file size", "Compressed file size", "# of plates", "# of workflows"

   "`kenya_lims_2018_01_19.sql.gz <https://www.dropbox.com/s/bcfcz5dlct2uc6f/kenya_lims_2018_01_19.sql.gz?dl=0>`_","1.28 GB","433.7 MB","442","3284"
   "`mexico_lims_2018_01_19.sql.gz <https://www.dropbox.com/s/kwwuo4ncjkfvonl/mexico_lims_2018_01_19.sql.gz?dl=0>`_","2.69 GB","1.03 GB","429","11323"
   "`south_africa_2018_01_19.sql.gz <https://www.dropbox.com/s/k7jjx19eh65mbvj/south_africa_lims_2018_01_19.sql.gz?dl=0>`_","1.1 GB","384.8 MB","755","2402"

To import this SQL dump file into your own database, first set up an empty database in MySQL using the "CREATE DATABASE [DATABASE NAME]" command. It would probably be easier to keep the name the same, but you can change it to whatever you like.

After the database is created, you can import the SQL file with the following command:

.. code-block:: bash
	
	mysql -u [USERNAME] -p [DATABASE NAME] < lims_dump.sql

Again, you will be prompted for a password, but this time it will be for the USERNAME that you have set up on your local MySQL instance.

User management
---------------

Unfortunately the Biocode plug-in and LIMS database system are configured in a way such that all users are able to log in and modify ANY data contained in the database. You can create user accounts for each user, but we found that it's easier to just create 1 account for each country.

To create a user in the LIMS database with the correct permissions needed to connect and use the BioCode plugin, use the following command after logging into the database as root:

.. code-block:: sql

	GRANT SELECT, UPDATE, INSERT, DELETE 
	ON [DATABASE NAME].*
	TO '[USERNAME]'@'%'
	IDENTIFIED BY '[PASSWORD]';

