LIMS Connection Troubleshooting
===============================

The most common error report we have been receiving with the Barcode of Wildlife Project informatics is the inability to log in with the Biocode plug-in in Geneious.

Specifically, many users encounter issues with connecting to the BWP Remote LIMS database. Here is an example:

.. figure:: /images/lims_connection_failure.png
  :align: center
  :target: /en/latest/_images/lims_connection_failure.png

The most likely cause for this error is that a firewall is blocking you from connecting with the LIMS database.

.. note:: 
	**Technical Explanation**

	Without getting too technical, your computer uses different “TCP” port numbers to connect to other servers. There are 2 specific port numbers used to read web pages on the World Wide Web (Port 80 for sites starting with “http,” and Port 443 for sites starting with “https”), and several for sending and receiving e-mail.  Geneious uses TCP port number 3306 to connect with the database, and a lot of the time this port will be blocked by an institutional firewall.

How to check if Port 3306 is open
---------------------------------

We will be using a program called “Telnet client” to check if your computer can use Port 3306 to connect with the BWP LIMS. 

Install Telnet
~~~~~~~~~~~~~~

If you are using a Mac or Linux computer, then the Telnet client will already be installed on your computer. If you are on a Windows computer, then Telnet client will likely be “turned off” by default. Follow the instructions here: http://social.technet.microsoft.com/wiki/contents/articles/910.windows-7-enabling-telnet-client.aspx to enable Telnet client.

Open a terminal window
~~~~~~~~~~~~~~~~~~~~~~

*Windows*

* Go to "All Programs" > "Accessories" > "Command Prompt"

*Mac*

* Open "terminal" from your Apps folder (or press Apple-Space) and type "terminal" to launch the terminal program.

Use telnet to check if BWP LIMS port 3306 is accessible
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

* In the terminal, copy the following line, paste it into your terminal.

.. code-block:: bash
	telnet db.bwplims.info 3306

* Press Enter.

Two possible things will now happen.

Option 1
~~~~~~~~

The first option is that the terminal will clear, and you will get a cryptic message mentioning “mysql_native_password,” and then after several seconds it will tell you “Connection to host lost”. 

.. figure:: /images/windows_option1.png
  :align: center
  :target: /en/latest/_images/windows_option1.png

  Viewed on Windows

.. figure:: /images/mac_option1.png
  :align: center
  :target: /en/latest/_images/mac_option1.png

  Viewed on Mac

If this happens, then the most likely reason you are not able to log in to Geneious Biocode is because you password is incorrect. Please go back to your country-specific log-in information document, and check that you are using the correction information. E-mail Mike Trizna at triznam@si.edu immediately if you are still having issues.

Option 2
~~~~~~~~

The second option is that telnet will report that the connection failed. 

.. figure:: /images/windows_option2.png
  :align: center
  :target: /en/latest/_images/windows_option2.png

  Viewed on Windows

.. figure:: /images/mac_option2.png
  :align: center
  :target: /en/latest/_images/mac_option2.png

  Viewed on Mac

If this happens, then port 3306 is not accessible to you, and you will need to arrange with your IT department to have it opened. I put together the following e-mail below. Send it to the IT department at your institution and make sure to "cc" Mike Trizna (triznam@si.edu).

	Hello,

	We are experiencing difficulties connecting with a remote MySQL database used for collaboration on the Barcode of Wildlife Project.

	The project's informatics lead, Mike Trizna, says that this is probably being caused by the database server's MySQL port (3306) not being accessible.

	Here are all of the connection details:

	Server Address: db.bwplims.info

	Port: 3306

	Username: connection_test

	Password: DNABarcodes

	Please contact Mike Trizna at triznam@si.edu if you have any questions about the database, and he will be happy to help you.