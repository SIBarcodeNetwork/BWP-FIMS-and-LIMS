Barcode Data Standard
=====================

It is important for us to remember what the goal of this project is -- the construction of a high quality DNA barcode reference library of endangered species. The "books" in this library are GenBank records with the "BARCODE" keyword. The Barcode Data Standard was created over 10 years ago to ensure not only high quality sequences from approved barcoding regions, but that they are associated with complete, traceable voucher specimens. You can read the full text of the Data Standard here: http://www.barcodeoflife.org/content/resources/standards-and-guidelines.


.. image:: /images/data_standard_link.png
  :align: center

In addition to the existing BARCODE data standard, the Barcode of Wildlife Project takes all of the "highly recommended" fields and makes them required. BWP also adds several fields having to do with the identification process.

Here is a summary table of all of the metadata fields that will be required for a GenBank record:

+----------------------------------+--------+------------------------------------------------------+--------------------+-----------+
| GenBank Field                    | Source | FIMS Field                                           | BARCODE Level      | BWP Level |
+==================================+========+======================================================+====================+===========+
| specimen_voucher                 | FIMS   | voucherID                                            | Required           | Required  |
+----------------------------------+--------+------------------------------------------------------+--------------------+-----------+
| organism                         | FIMS   | scientificName                                       | Required           | Required  |
+----------------------------------+--------+------------------------------------------------------+--------------------+-----------+
| country                          | FIMS   | (locality OR state) AND countryOrOcean               | Required           | Required  |
+----------------------------------+--------+------------------------------------------------------+--------------------+-----------+
| lat_lon                          | FIMS   | decimalLatitude AND decimalLongitude                 | Highly recommended | Required  |
+----------------------------------+--------+------------------------------------------------------+--------------------+-----------+
| identified_by                    | FIMS   | identifiedBy                                         | Highly recommended | Required  |
+----------------------------------+--------+------------------------------------------------------+--------------------+-----------+
| collected_by                     | FIMS   | collectedBy                                          | Highly recommended | Required  |
+----------------------------------+--------+------------------------------------------------------+--------------------+-----------+
| collection_date                  | FIMS   | Collection Date                                      | Highly recommended | Required  |
+----------------------------------+--------+------------------------------------------------------+--------------------+-----------+
| basisOfID                        | FIMS   | basisOfID                                            | Not mentioned      | Required  |
+----------------------------------+--------+------------------------------------------------------+--------------------+-----------+
| typeStatus                       | FIMS   | typeStatus                                           | Not mentioned      | Required  |
+----------------------------------+--------+------------------------------------------------------+--------------------+-----------+
| identificationDate               | FIMS   | dayIdentified AND monthIdentified AND yearIdentified | Not mentioned      | Required  |
+----------------------------------+--------+------------------------------------------------------+--------------------+-----------+
| identificationConfidence         | FIMS   | identificationConfidence                             | Not mentioned      | Required  |
+----------------------------------+--------+------------------------------------------------------+--------------------+-----------+
| chainOfCustody                   | FIMS   | chainOfCustody                                       | Not mentioned      | Required  |
+----------------------------------+--------+------------------------------------------------------+--------------------+-----------+
| PCR_primers [fwd_seq, rev_seq]   | LIMS   | Forward Primer Sequence, Reverse Primer Sequence     | Required           | Required  |
+----------------------------------+--------+------------------------------------------------------+--------------------+-----------+
| PCR_primers [fwd_name, rev_name] | LIMS   | Forward Primer Name, Reverse Primer Name             | Highly recommended | Required  |
+----------------------------------+--------+------------------------------------------------------+--------------------+-----------+
| gene                             | LIMS   | Locus                                                | Required           | Required  |
+----------------------------------+--------+------------------------------------------------------+--------------------+-----------+
| nucleotide_sequence              | LIMS   | Your Sequence                                        | Required           | Required  |
+----------------------------------+--------+------------------------------------------------------+--------------------+-----------+
| Traces                           | LIMS   | Your Traces                                          | Required           | Required  |
+----------------------------------+--------+------------------------------------------------------+--------------------+-----------+

Here is an example GenBank record with all BARCODE Required and Highly Recommended fields in correct formats: http://www.ncbi.nlm.nih.gov/nuccore/AB576656