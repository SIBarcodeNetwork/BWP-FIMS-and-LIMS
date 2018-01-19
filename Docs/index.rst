.. _`Barcode of Wildlife Project`: http://barcodeofwildlife.org/

Welcome to the BWP Informatics Documentation!
=============================================

This documentation site describes the best practices for the informatics pipeline of the `Barcode of Wildlife Project`_.

.. _updates-link:

Updates
-------

.. image:: https://img.shields.io/badge/Biocode%20Plugin%20Version-3.0.0-green.svg
    :target: http://assets.geneious.com/plugins/biocode/Biocode_3_0_0.gplugin

.. image:: https://img.shields.io/badge/GenBank%20Upload%20Plugin%20Version-1.6.5-green.svg
    :target: https://www.geneious.com/assets/plugins/GenbankSubmission_1_6_5.gplugin

20 September, 2016
	The GenBank submission plugin was updated to version 1.6.5 with many minor bug fixes. The most important one to the BWP project is that the plugin will now attemp to replace non-ASCII characters (such as accented characters) with equivalent ASCII characters. This has been a problem in the past, since the previous default action was to simply omit these characters.

15 June, 2016
	The Biocode Plugin was updated to version 3.0.0, and the GenBank Upload Plugin was updated to version 1.6.4. You can read about the updates to the Biocode Plugin `here <http://software.mooreabiocode.org/index.php?title=Release_Notes#Biocode_Plugin_3.0.0_-_9_June_2016>`_. You can read about the updates to the GenBank Upload Plugin `here. <http://www.geneious.com/plugins/genbank-submission-plugin#history>`_ Additionally, the back-end LIMS database was split up by country and new login information was provided to each BWP partner via email.

.. toctree::
	:caption: Background

	workflow
	software_components
	barcode_data_standard
	bwp_data_standard
	conventions

.. toctree::
	:maxdepth: 2
	:caption: FIMS

	fims_spreadsheet_pop
	fims_spreadsheet_val

.. toctree::
	:maxdepth: 2
	:caption: LIMS

	geneious_intro
	biocode_plugin
	extraction_plates
	pcr_plates
	cyclesequencing_plates
	
.. toctree::
	:maxdepth: 2
	:caption: Sequence Assembly and Publication

	downloading_traces
	assembling_contigs
	sequence_qc
	mark_pass
	gb_upload
	its_annotation

.. toctree::
	:maxdepth: 2
	:caption: Troubleshooting

	lims_connection
	lims_migration