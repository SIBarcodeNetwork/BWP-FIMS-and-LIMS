GenBank Upload
==============

Installing the Geneious Plug-in
-------------------------------
We will be using Geneious's GenBank Submission plug-in to submit completed sequences to GenBank. The Geneious GenBank Submission Plug-in does all of the hard work of bundling together the various parts of a GenBank submission -- sequence data, specimen metadata, trace files, etc.

The easiest way to install the plug-in is within Geneious. Go to Tools > Plugins. In the top "Available Plugins" section, you should see "GenBank Submission" as one of the featured plugins (that's why there is a star next to it).

.. image:: /images/plugin_list.png
  :align: center

Click "Install", and Geneious will start downloading it from the Internet. If all goes well, you should see a message telling you that installation was successful, and that a restart will be needed. Restart Geneious.

.. image:: /images/install_success.png
  :align: center

Using the Plug-in
-----------------
Because traces are a required part of a BARCODE keyword record on GenBank, **use the Assembly as the basis of GenBank submission.**

.. image:: /images/genbank_submit_colorcoded.png
  :align: center


Submission Details
------------------
The first part of the GenBank submission deals with filling out the contact details and attributions for your sequence submission, as well as choosing how to submit to GenBank.

.. image:: /images/submission_details.png
  :align: center

Click on the "Edit Publisher Details…" button to bring up the Publisher Details dialog box.

.. image:: /images/publisher_details.png
  :align: center

Fill out the top section with the contact information for your submission. Note in the screenshot that I blacked out "First Name", "Last Name", "Phone", "Fax", and "Email". These fields will not be shown in the GenBank record, but the others will.

.. image:: /images/gb_record_example.png
  :align: center

Field Mapping
-------------
The next part of the GenBank submission, will be to map all of the different specimen metadata fields to your GenBank record.

.. image:: /images/field_mapping.png
  :align: center
.. image:: /images/structured_comments.png
  :align: center  

Consensus and Primers
---------------------
Since we are submitting from an assembly of traces, we need to specify to Geneious how to calculate the sequence to submit to GenBank. Keep the default settings.

.. image:: /images/consensus_defaults.png
  :align: center
PCR Primers are a required component of the Barcode Data Standard. You will need to tell Geneious which of your fields holds the PCR primer names, and PCR primer sequences.

.. image:: /images/primer_defaults.png
  :align: center

Traces and Sequencing Primers
-----------------------------
This is just a test change.

.. image:: /images/traces_defaults.png
  :align: center
.. image:: /images/sequencing_primers_defaults.png
  :align: center  
