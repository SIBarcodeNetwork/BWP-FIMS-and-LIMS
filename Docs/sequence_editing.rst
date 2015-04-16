Sequence Editing Checklist
==========================

* Trim the appropriate **PCR primer** from each assembly (you can choose as many primers as you wish, for example, you can trim all 8 primers from the Mammals primer cocktail).
* In the Trim window, select '2' for 'Allow Mismatches'
* In the Trim window, leave "At least" UNCHECKED for both 5' and 3' end
.. image:: /images/trim_window.png
	:align: center
* If you are using M13 tagged PCR primers, make sure to trim either just the untagged portion of the primer or the entire primer, including the M13 tag (initially, we saw editing of only the M13 primer).
* Go through EACH disagreement in the assembly and assess whether or not the disagreement needs a manual edit.
* **A manual edit ONLY needs to made if you feel the consensus sequences has been called incorrectly (or there is a gap that needs to be deleted). If Geneious calls the consensus sequence correctly, NO changes should be made to individual traces.**
* If more than a handful of edits need to be made to the consensus sequence, the assembly should be discarded and the sample re-sequenced.
* Make sure you have 'Translation' selected and that you are 
	- using the **correct genetic code** ("Vertebrate or Invertebrate Mitochondrial" for COI, or "Bacterial" for rbcL and matK) and 
	- you are in the **correct reading frame** (no black dots = stop codons).
.. image:: /images/genetic_code.png
	:align: center
* **Align your sequences** based on the gene you are using (all COI sequences together, all rbcL together, matK, etc)
* Address any issue that you can see in your alignment i.e. **Gaps must be assessed and resolved.**
* Organize all of your """FINAL/READY TO SUBMIT""" sequences in your "Local" Folder
* Each team should designate a team lead/gatekeeper of all final folders that are ready to be uploaded to GenBank.

Once the "FINAL/READY TO SUBMIT" sequences are organized in your "Local" folder, you are ready to "Mark as Pass in LIMS"

Marking as "Pass" or "Fail" in LIMS
-----------------------------------

Mark as Pass
~~~~~~~~~~~~

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

Mark as Fail
~~~~~~~~~~~~

Once you have marked your final sequences as "Passed" in LIMS, you need to mark your failed sequences in LIMS in the same manner:

* Select your failed sequences
* Select the "Biocode" Icon on the toolbar and then "Mark as FAIL in LIMS"
* Uncheck "Also attach raw traces to sequencing reaction in LIMS"
* Populate the "Reason Details" and "Notes" fields with any relevant information
* Keep the Consensus sequence settings at their default, and press "OK"
.. image:: /images/mark_as_fail.png
	:align: center