Barcode Data Standard
=====================

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

Voucher Metadata
~~~~~~~~~~~~~~~~

Sequence Metadata
-----------------