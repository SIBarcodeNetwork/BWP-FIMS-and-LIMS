Sequence Editing Checklist
==========================

Assembly Trim Options
---------------------

When creating your assemblies, be sure to select the correct options in the 'Trim Options' window.

Primer Trimming
~~~~~~~~~~~~~~~

* Trim the appropriate **PCR primers** from each assembly. You can choose as many primers as you wish, for example, you can trim all 8 primers from the Mammals primer cocktail. Hitting the “Choose” button points you to the list of primers you have saved.
* If you are using M13 tagged PCR primers, you have two options for trimming. You can trim the full primers including the M13 tag or alternatively you can just trim the untagged portion of the primers. We would lean towards the latter option since the chances of finding the longer tagged version of the primer is slimmer than finding the untagged version.
* For *Allow Mismatches* we suggest you select ‘2’ - if you insert too high a number here it will “find” the primers at the incorrect locations of the read.
* For a primer of 15-20 bp in length, we suggest you select ‘10’ for *Minimum Match Length*. If you select too low a number here it will “find” the primers at incorrect locations of the read.

Sequence Trimming
~~~~~~~~~~~~~~~~~

* Select both *Trim 5’ End* and *Trim 3’ End* options, but leave “At least” UNCHECKED
* Leave “Maximum length after trim” UNCHECKED

.. image:: /images/trim_window.png
	:align: center

Checking and Editing Assemblies
-------------------------------

Manually Editing Assemblies
~~~~~~~~~~~~~~~~~~~~~~~~~~~

* Make sure you have the 'Translation' option selected from the right hand menu of the Display and be sure to:
	- set the **correct genetic code** (“Vertebrate Mitochondrial” or “Invertebrate Mitochondrial” for COI, or “Bacterial” (www.ncbi.nlm.nih.gov/Taxonomy/Utils/wprintgc.cgi#SG11) for rbcL and matK) and 
	- select the **correct reading frame** (black dots = stop codons, so we do not want any of these)
.. image:: /images/genetic_code.png
	:align: center
* Quickly scan through the individual assemblies and assess whether or not each disagreement (if present) needs a manual edit.
* **A manual edit ONLY needs to made if you feel the consensus sequences has been called incorrectly (or there is a gap that needs to be deleted). If Geneious calls the consensus sequence correctly, NO changes should be made to individual traces.**

Checking Sequence Quality with Alignments
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

* A second quality check is made by aligning your sequences based on the gene - align COI sequences together, rbcL together, etc. 
* For alignments of protein coding regions Geneious’s Translation Alignment program doesn’t work like it should, so use an alternate program such an online program called TranslatorX (http://translatorx.co.uk) to create an alignment. 
* It's important to note that TranslatorX only checks the forward reading frames, so you need to Reverse-Complement the matK sequences before putting them into this alignment program otherwise you will receive errors. 
* Export the consensus sequences (of good assemblies only) as a FASTA file then import this into the program. We suggest you leave the Protein Alignment Option method selected as “Muscle”. In the Genetic Code box select the relevant reading frame and be sure to check the “Guess most likely reading frame” option. Then hit Submit Query.
* If the program runs OK and doesn't encounter any errors, it will return an alignment of the nucleotides and also an alignment of the amino acids. You may download the FASTA file of both, however, the alignment of amino acids is what will be used for the second quality check. Import the FASTA file(s) of the alignments into Geneious for further analyses.
* Use the alignment to address any issue that you can see i.e. a clear difference between one sequence to the others (Remember this can be possible if the sequences are distantly related but still cross reference the alignment to the individual assemblies). Also, gaps must be assessed and resolved. Major differences in the alignment may also indicate that one or more of the sequences are contaminants (use BLAST to determine this).
* You may need to repeat the alignment step a number of times as you cross reference the assemblies and make edits. Save the edits, re-export all the consensus sequences and create a new alignment with these new consensus FASTA files.
* If more than a handful of edits need to be made to the consensus sequence, the assembly should be discarded and the sample re-sequenced. You need to make a judgement call on this.

Organizing Completed Assemblies
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

* Organize all of your high quality “FINAL/READY TO SUBMIT” sequences in your “Local” Folder
* Each team should designate a team lead/gatekeeper of all final folders that are ready to be uploaded to GenBank. 

Once the ‘FINAL/READY TO SUBMIT’ sequences are organized in your ‘Local’ folder, you are ready to “Mark as Pass in LIMS”

Using the "Mark as Pass in LIMS" tool in LIMS
---------------------------------------------

(Make sure you are connected to the Biocode plugin)

* Select the assemblies that you want to pass in LIMS
* Select the "Biocode" Icon on the toolbar and then "Mark as Pass in LIMS"
.. image:: /images/biocode_dropdown.png
	:align: center
* Leave the "Remove previous final sequencing results" checked
* **Uncheck** "Also attach raw traces to sequencing reactions in LIMS"
* Add any relevant notes in the notes field under your name 
* Leave the rest of the fields as the default selection, and press OK
.. image:: /images/mark_as_pass.png
	:align: center

Using the "Mark as Fail in LIMS" tool in LIMS
---------------------------------------------

Once you have marked your final sequences as "Passed" in LIMS, you need to mark your failed sequences in LIMS in the same manner:

* Select your failed sequences
* Select the "Biocode" Icon on the toolbar and then "Mark as FAIL in LIMS"
* Uncheck "Also attach raw traces to sequencing reaction in LIMS"
* Populate the "Reason Details" and "Notes" fields with any relevant information
* Keep the Consensus sequence settings at their default, and press "OK"
.. image:: /images/mark_as_fail.png
	:align: center