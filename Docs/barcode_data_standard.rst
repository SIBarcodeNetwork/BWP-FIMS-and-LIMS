Barcode Data Standard
=====================

Introduction
------------

The Barcode Data Standard was established by the Consortium of the Barcode of Life soon after the first scientific paper by Dr. Paul Hebert was published that proposed the method of DNA Barcoding. You can find a link to the official data standard document on the CBOL website at: http://www.barcodeoflife.org/sites/default/files/DWG_data_standards-Final.pdf.

.. image:: /images/data_standard_link.png
  :align: center
  :target: /en/latest/_images/data_standard_link.png

The data standard consists of several required and strongly recommended elements that have to do either with specimen metadata or sequence data. I will go through each element, give a brief explanation, and try to highlight any commonly seen mistakes.

+----------------------------------------+---------------------+------------------------------+
| **Specimen Metadata**                                                                       |
+========================================+=====================+==============================+
| | **Text from Standard**               | **GenBank Field**   | **Required or Recommended?** |
+----------------------------------------+---------------------+------------------------------+
| | "a unique identifier for the voucher | specimen_voucher    | Required                     |
| | specimen using a structured field    |                     |                              |
| | specified by CBOL and NCBI"          |                     |                              |
+----------------------------------------+---------------------+------------------------------+
| | "the name of a formally described    | organism            | Required                     |
| | species or a provisional label for   |                     |                              |
| | an unpublished species"              |                     |                              |
+----------------------------------------+---------------------+------------------------------+
| | "Country-Code using the controlled   | country             | Required                     |
| | vocabulary used by GenBank"          |                     |                              |
+----------------------------------------+---------------------+------------------------------+
| | "Latitude and longitude"             | lat_lon             | Strongly recommended         |
+----------------------------------------+---------------------+------------------------------+
| | "Name of the identifier"             | identified_by       | Strongly recommended         |
+----------------------------------------+---------------------+------------------------------+
| | "Name of the collector"              | collected_by        | Strongly recommended         |
+----------------------------------------+---------------------+------------------------------+
| | "Date of collection"                 | collection_date     | Strongly recommended         |
+----------------------------------------+---------------------+------------------------------+
| **Sequence Metadata**                                                                       |
+----------------------------------------+---------------------+------------------------------+
| | **Text from Standard**               | **GenBank Field**   | **Required or Recommended?** |
+----------------------------------------+---------------------+------------------------------+
| | "Come from a gene region             | gene                | Required                     |
| | accepted by CBOL as an effective     |                     |                              |
| | barcode" ... "Include the name of    |                     |                              |
| | the region used"                     |                     |                              |
+----------------------------------------+---------------------+------------------------------+
| | "the sequences of all forward and    | PCR_primers         | Required                     |
| | reverse primers used"                |                     |                              |
+----------------------------------------+---------------------+------------------------------+
| | "the names of the forward and        | PCR_primers         | Strongly recommended         |
| | reverse primers"                     |                     |                              |
+----------------------------------------+---------------------+------------------------------+
| | "trace files for the forward and     | NCBI Trace Archive  | Required                     |
| | reverse sequencing runs              |                     |                              |
| | submitted to the NCBI Trace          |                     |                              |
| | Archive or the Ensembl Trace         |                     |                              |
| | Server"                              |                     |                              |
+----------------------------------------+---------------------+------------------------------+
| | "at least 75% contiguous, high       | nucleotide_sequence | Required                     |
| | quality bases from within the        |                     |                              |
| | approved barcode region"             |                     |                              |
+----------------------------------------+---------------------+------------------------------+

Specimen Metadata
-----------------

Collection Metadata
~~~~~~~~~~~~~~~~~~~

Country -- Required

Latitude and Longitude -- Strongly Recommended

Collector Name -- Strongly Recommended

Collection Date -- Strongly Recommended

Voucher Metadata
~~~~~~~~~~~~~~~~



Sequence Metadata
-----------------