Barcode Data Standard
=====================

Introduction
------------

The Barcode Data Standard was established by the Consortium of the Barcode of Life soon after the first scientific paper by Dr. Paul Hebert was published that proposed the method of DNA Barcoding. You can find a link to the official data standard document on the CBOL website at: http://www.barcodeoflife.org/sites/default/files/DWG_data_standards-Final.pdf.

.. image:: /images/data_standard_link.png
  :align: center
  :target: /en/latest/_images/data_standard_link.png

The data standard consists of several required and strongly recommended elements that have to do either with specimen metadata or sequence data. We will go through each element, give a brief explanation, and try to highlight any commonly seen mistakes.

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

Specimen metadata
-----------------

Collection metadata
~~~~~~~~~~~~~~~~~~~

Country -- Required
	The GenBank field name “Country” is slightly confusing -- not just because the INSDC country controlled vocabulary list (http://www.insdc.org/country.html) includes oceans and seas in addition to countries -- but because the country name is often concatenated with a colon to provide more specific location information about where a specimen was collected.

Latitude and Longitude -- Strongly Recommended
	The geographical coordinates of the location of where a specimen was collected are stored in the “lat_lon” field in decimal format. GenBank uses the specific format "d[d.dddd] N|S d[dd.dddd] W|E". An example of this is "38.891262 N 77.026093 W" for the Smithsonian Natural History Museum.

Collector Name -- Strongly Recommended
	The name of the person(s) or institute that collected the specimen. GenBank does not provide any guidance on how to structure name ("Give Name Surname" vs. "Surname, Given Name") or how to group multiple names, but at least be consistent.

Collection Date -- Strongly Recommended
	The date(s) on which the specimen was collected. Date ranges are supported by providing two collection dates from among the supported value formats, delimited by a forward-slash character.

	Here are the supported value formats, with examples: 

		* "DD-Mmm-YYYY": 01-Jan-2016
		* "Mmm-YYYY": Jan-2016
		* "YYYY": 2016
		* "YYYY-MM-DD": 2016-01-01
		* "YYYY-MM": 2016-01


Voucher metadata
~~~~~~~~~~~~~~~~

Specimen Voucher -- Required
	The specimen voucher field is the most important portion of the Barcode Data Standard, because it serves as the bridge between genetic data and specimen data. This field is even more important for plants, because the plant barcode consists of more than one gene region. The two sequences that make up a plant barcode are published as two separate GenBank records, so a unique specimen voucher field is the only thing that asserts that these sequences came from the same individual.
	
	Not only is a unique identifier required for the specimen voucher, but it also needs to be in a specific format. It is very easy to miss since this format is specified in a footnote, but the data standard document specifies that the voucher specimen identifier should use a triplet structure based on elements of the Darwin Core (DwC) separated by a colon::

		institutionCode:collectionCode:catalogNumber

	To ensure that specimen voucher identifiers are unique and traceable, CBOL maintains the Global Registry of Biorepositories (`GRBio.org <http://grbio.org/>`_), which is a community-curated directory of all biological collections in natural history museums, herbaria, and other biorepositories.

Organism -- Required
	The scientific name of the organism that provided the sequenced genetic material. The text from the data standard reads "the name of a formally described species or a provisional label for an unpublished species", which allows for the exception of allowing for organism names only identified to the Order or Family level. It is recommended by GenBank to give provisional names the values of the specimen voucher for reproducibility reasons.

Identifier Name -- Highly Recommended
	The name of the person(s) or institute that identified the specimen. Just as with Collector Name, GenBank does not provide any guidance on how to structure name ("Give Name Surname" vs. "Surname, Given Name") or how to group multiple names, but at least be consistent.

Sequence metadata
-----------------

Nucleotide Sequence -- Required
	This is the DNA sequence of the barcode record.

PCR Primer Sequence(s) -- Required
	This refers to the sequences for the PCR primers used to amplify the DNA Barcode region. All sequences should be presented in 5'>3' order.

	Fill this in with complicated examples of cocktail primers vs. multiple pcr attempts.

PCR Primer Name(s) -- Highly Recommended
	This refers to the "common names" of the primer sequences. Unfortunately this field is optional, and the vast majority of BARCODE keyword records do not have primer names listed.

Trace Files -- Required
	Trace files for the forward and reverse sequencing runs must be submitted to the NCBI Trace Archive or the Ensembl Trace Server.	
