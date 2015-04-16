FIMS Spreadsheet Validation and Upload
======================================

Downloading and renaming the FIMS spreadsheet
---------------------------------------------

Go to the Barcode of Wildlife Term Definitions web page at http://barcodeofwildlife.org/fims/terms.html and download a FIMS spreadsheet template.

.. figure:: /images/spreadsheet_save_as.png
  :align: center

It is a good idea to immediately change the rename this spreadsheet file with the name of your dataset according to the :ref:`conventions-link`. For this example, I’m going to name my spreadsheet "CBOL_MGT_001.xlsx". This is because my institution is CBOL, my initials are MGT, and this is the first dataset I am uploading to the FIMS.

What is a dataset?
~~~~~~~~~~~~~~~~~~

A dataset in the Biocode FIMS is a collection of specimen records that will go through the entire laboratory pipeline together. They are often grouped together taxonomically. It is important to choose an appropriate size for your dataset. For example, at the Smithsonian we run extractions, PCR, and sequencing reactions in 96-well plates. Because of the 94 specimen batch size (96 - 2 controls), all FIMS datasets contain 94 specimen records.

What do these columns mean? Where did they come from?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Validating and then uploading the spreadsheet
---------------------------------------------

Our next step will be to validate and upload the spreadsheet. The validation step checks every specimen record to make sure that they meet the set of rules established by the project. Go to http://biscicol.org/biocode-fims/ and click the Login button at the top. Log in with your pre-assigned BiSciCol username and password. (You do not need to log in to validate your spreadsheet, but you must be logged in to upload it to the database). After logging in, click on the Tools button at the top, and then choose Validation.

.. image:: /images/tools_validation.png
  :align: center

On the Validation page, click the Choose File button to select your spreadsheet. Select your Project from the Project drop-down. If you are ready to upload your spreadsheet, select the Upload tick box. Once you check that box, the Dataset Code dropdown will appear. You can either leave it as Create New Dataset to upload the spreadsheet as a new dataset, or you can select one of your previously created datasets to overwrite. Press Submit. 

.. image:: /images/fims_validation_upload.png
  :align: center

If you chose to Create New Dataset, you will be asked to enter a code. Remember to follow the BWP :ref:`conventions-link`, and make sure not to repeat a previously created dataset code. Click Create.

Can I add a few records to an existing dataset by just uploading those records?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

NO. When you choose to upload to a previously created dataset, the old dataset will be completely deleted and replaced by the data in the new spreadsheet.

Check that the spreadsheet was successfully uploaded
----------------------------------------------------

Even though we got a success message, let’s make sure your data made it into the database successfully. This will also show how to retrieve data from the FIMS if you ever want to make changes. Click on the Tools button up top, and choose Query.

.. image:: /images/tools_query.png
  :align: center

On the Query page, you will be able to view the data from any dataset on any of the projects in the Biocode FIMS. This is why it is so important not to include sensitive information (such as highly accurate GPS coordinates) in spreadsheet uploads. To see the dataset we just uploaded, choose Barcode of Wildlife Training from the Choose Projects dropdown. Once the project is chosen, the list of datasets will be populated. Scroll through the list of projects until you find the dataset you just created. If you do not see it in this list, then your data was not successfully uploaded.

Select the dataset you just uploaded and click the Table button. This will display an HTML table view of the specimen records in this dataset. It will be incredibly hard to read and scroll through, but be happy it made it in there. 

You can click the Excel button to download a fresh Excel spreadsheet of this dataset. However, be advised that you will lose any styling (colors, bold/italics, etc.) from when you originally uploaded the spreadsheet. Also, the default spreadsheet name is "biocode-fims-output.xls", so be sure to rename it with your dataset name immediately.