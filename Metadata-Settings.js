<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Metadata-Settings majorVersion="1" minorVersion="7">
  <Entitys>
    <Entity name="Entity_AppCode">
      <Description>Partner Conference</Description>
      <Workflow enable="true" code="GiftApprovalWorkflow"/>
      <DefaultColumn>RefNum,SubmissionDate,A4,Status,A1Requestor,A2b,CompletionDate,CompanyOrganisation,B14a</DefaultColumn>
      <SearchColumn/>
      <EntityTranslatedColumn>Status,A4,B1,B2,B3,B4,B11,B12,B13,B16,C1,C2,C211,C21a,C8,C7</EntityTranslatedColumn>
      <ListTranslatedColumn>RefNum,SubmissionDate,A4,Status,Requestor,A2b,CompletionDate,B1,B2,RealClientName,RealExistingClient,RealPotentialClient,B13,C1,C211,C8,B16,RealClientName,C21a,C7,A3</ListTranslatedColumn>
      <StringFormatColumn>SubmissionDate,CompletionDate,C7,A3</StringFormatColumn>
      <JoinFormatColumn>Office</JoinFormatColumn>
      <Columns>
        <Column name="RefNum" type="int" size="32" indexable="true">
          <description>Just Id</description>
          <Properties>
            <Property key="Label" value="CO Ref Number"/>
            <Property key="Width" value="50px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="RefNum"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="ref"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="1"/>
            <Property key="Require" value="false"/>
            <Property key="InvalidMsg" value=""/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="Requestdetails" type="string" size="200" indexable="true">
          <description>Requestdetails</description>
          <Properties>
            <Property key="Label" value="Requestdetails"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="Requestdetails"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="requestdetails"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="1"/>
            <Property key="Require" value="false"/>
            <Property key="InvalidMsg" value=""/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="RequestNatureOfGift" type="string" size="200" indexable="true">
          <description>RequestNatureOfGift</description>
          <Properties>
            <Property key="Label" value="RequestNatureOfGift"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="RequestNatureOfGift"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="RequestNatureOfGift"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="1"/>
            <Property key="Require" value="false"/>
            <Property key="InvalidMsg" value=""/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="CompanyOrganisation" type="string" size="200" indexable="true">
          <description>CompanyOrganisation</description>
          <Properties>
            <Property key="Label" value="Company / Organisation"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="CompanyOrganisation"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="CompanyOrganisation"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="1"/>
            <Property key="Require" value="false"/>
            <Property key="InvalidMsg" value=""/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="RealClientName" type="string" size="32" indexable="true">
          <description>Real Client Name</description>
          <Properties>
            <Property key="Label" value="Nature of gift"/>
            <Property key="Width" value="50px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="RealClientName"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="rcn"/>
            <Property key="DataSourceType" value="2"/>
            <Property key="DataSource" value="RealClientName"/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="4"/>
            <Property key="Require" value="false"/>
            <Property key="InvalidMsg" value=""/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="RealExistingClient" type="string" size="32" indexable="true">
          <description>Real Existing Client</description>
          <Properties>
            <Property key="Label" value="Are the recipients our existing clients?"/>
            <Property key="Width" value="50px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="RealExistingClient"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="rec"/>
            <Property key="DataSourceType" value="2"/>
            <Property key="DataSource" value="YesAndNo"/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="2"/>
            <Property key="Require" value="false"/>
            <Property key="InvalidMsg" value=""/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="RealPotentialClient" type="string" size="32" indexable="true">
          <description>Real Existing Client</description>
          <Properties>
            <Property key="Label" value="Are the recipients our potential clients?"/>
            <Property key="Width" value="50px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="RealPotentialClient"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="rpc"/>
            <Property key="DataSourceType" value="2"/>
            <Property key="DataSource" value="YesAndNo"/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="2"/>
            <Property key="Require" value="false"/>
            <Property key="InvalidMsg" value=""/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="_id" type="string" size="32" indexable="true">
          <description>Just Id</description>
          <Properties>
            <Property key="Label" value="Id"/>
            <Property key="Width" value="50px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="false"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="RecordId1"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="_i"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="0"/>
            <Property key="Require" value="false"/>
            <Property key="InvalidMsg" value=""/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=""/>
          </Properties>
        </Column>
        <Column name="CreateDate" type="dateTime" size="50" indexable="true">
          <description>Create Date</description>
          <Properties>
            <Property key="Label" value="Create Date"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="CreateDate"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="CreateDate"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="1"/>
            <Property key="Require" value="false"/>
            <Property key="InvalidMsg" value=""/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value="dd/MM/yyyy"/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="CreateBy" type="string" size="10" indexable="true">
          <description>CreateBy</description>
          <Properties>
            <Property key="Label" value="Create By"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="CreateBy"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="cb"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="1"/>
            <Property key="Require" value="false"/>
            <Property key="InvalidMsg" value=""/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="ModifyBy" type="string" size="10" indexable="true">
          <description>CreateBy</description>
          <Properties>
            <Property key="Label" value="Modify By"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="ModifyBy"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="mb"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="1"/>
            <Property key="Require" value="false"/>
            <Property key="InvalidMsg" value=""/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="RecordId" type="string" size="32" indexable="true">
          <description>Just Id</description>
          <Properties>
            <Property key="Label" value="Id"/>
            <Property key="Width" value="50px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="false"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="RecordId"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="ri"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="0"/>
            <Property key="Require" value="false"/>
            <Property key="InvalidMsg" value=""/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="SubmissionDate" type="dateTime" size="50" indexable="true">
          <description>Submission Date</description>
          <Properties>
            <Property key="Label" value="Submission Date"/>
            <Property key="Width" value="100px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="SubmissionDate"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="SubmissionDate"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="1"/>
            <Property key="Require" value="false"/>
            <Property key="InvalidMsg" value="Please fill in the date of request."/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value="dd/MM/yyyy"/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="CompletionDate" type="dateTime" size="50" indexable="true">
          <description>Completeion Date</description>
          <Properties>
            <Property key="Label" value="Completion Date"/>
            <Property key="Width" value="100px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="CompletionDate"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="CompletionDate"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="1"/>
            <Property key="Require" value="false"/>
            <Property key="InvalidMsg" value="Please fill in the date of request."/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value="dd/MM/yyyy"/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="StaffId" type="string" size="10" indexable="true">
          <description>StaffId?</description>
          <Properties>
            <Property key="Label" value="Staff Id"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="StaffId"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="si"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="1"/>
            <Property key="Require" value="false"/>
            <Property key="InvalidMsg" value=""/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="StaffName" type="string" size="200" indexable="true">
          <description>StaffName?</description>
          <Properties>
            <Property key="Label" value="Staff Name"/>
            <Property key="Width" value="auto"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="StaffName"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="sn"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="1"/>
            <Property key="Require" value="false"/>
            <Property key="InvalidMsg" value=""/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="COApprovalStatus" type="string" size="150" indexable="true">
          <description>CO Approval Status</description>
          <Properties>
            <Property key="Label" value="CO Approval Status"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="COApprovalStatus"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="coas"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="1"/>
            <Property key="Require" value="false"/>
            <Property key="InvalidMsg" value=""/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="BMAcknowledgeStatus" type="string" size="150" indexable="true">
          <description>BM Acknowledge Status</description>
          <Properties>
            <Property key="Label" value="BM Acknowledge Status"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="BMAcknowledgeStatus"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="bmas"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="1"/>
            <Property key="Require" value="false"/>
            <Property key="InvalidMsg" value=""/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="ActionName" type="string" size="200" indexable="true">
          <description>ActionName</description>
          <Properties>
            <Property key="Label" value="Office Phone Number"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="ActionName"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="acname"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="1"/>
            <Property key="Require" value="false"/>
            <Property key="InvalidMsg" value=""/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="OldStatus" type="string" size="200" indexable="true">
          <description>OldStatus</description>
          <Properties>
            <Property key="Label" value="OldStatus"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="OldStatus"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="oldstatus"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="1"/>
            <Property key="Require" value="false"/>
            <Property key="InvalidMsg" value=""/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="NewStatus" type="string" size="200" indexable="true">
          <description>NewStatus</description>
          <Properties>
            <Property key="Label" value="NewStatus"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="NewStatus"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="newstatus"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="1"/>
            <Property key="Require" value="false"/>
            <Property key="InvalidMsg" value=""/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="Status" type="string" size="200" indexable="true">
          <description>Status</description>
          <Properties>
            <Property key="Label" value="Status"/>
            <Property key="Width" value="170px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="Status"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="status"/>
            <Property key="DataSourceType" value="2"/>
            <Property key="DataSource" value="StatusName"/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="4"/>
            <Property key="Require" value="false"/>
            <Property key="InvalidMsg" value=""/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="IsDeleted" type="bool" size="8" indexable="true">
          <description>Is Deleted</description>
          <Properties>
            <Property key="Label" value="Is Deleted"/>
            <Property key="Width" value="160px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="false"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="IsDeleted"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="id"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="0"/>
            <Property key="Require" value="false"/>
            <Property key="InvalidMsg" value=""/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="A1" type="string" size="200" indexable="true">
          <description>A1 Requestor</description>
          <Properties>
            <Property key="Label" value="Requestor"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="A1"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="A1"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="0"/>
            <Property key="Require" value="true"/>
            <Property key="InvalidMsg" value="Please fill in Requestor."/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="A1Requestor" type="string" size="200" indexable="true">
          <description>A1 Name</description>
          <Properties>
            <Property key="Label" value="Requestor"/>
            <Property key="Width" value="100px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="A1Requestor"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="A1Requestor"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="0"/>
            <Property key="Require" value="false"/>
            <Property key="InvalidMsg" value="Please fill in Requestor."/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="A1Name" type="string" size="200" indexable="true">
          <description>A1 Name</description>
          <Properties>
            <Property key="Label" value="Requestor"/>
            <Property key="Width" value="100px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="A1Name"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="A1Name"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="1"/>
            <Property key="Require" value="false"/>
            <Property key="InvalidMsg" value="Please fill in Requestor."/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="A1Email" type="string" size="200" indexable="true">
          <description>A1 Email</description>
          <Properties>
            <Property key="Label" value="Requestor"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="A1Email"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="A1Email"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="1"/>
            <Property key="Require" value="false"/>
            <Property key="InvalidMsg" value="Please fill in Requestor."/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="A2a" type="string" size="200" indexable="true">
          <description>A2a Office</description>
          <Properties>
            <Property key="Label" value="Office"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="A2a"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="a2a"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="1"/>
            <Property key="Require" value="true"/>
            <Property key="InvalidMsg" value="Please fill in Office of Requestor."/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="A2b" type="string" size="200" indexable="true">
          <description>A2b LoS</description>
          <Properties>
            <Property key="Label" value="LoS"/>
            <Property key="Width" value="100px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="A2b"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="a2b"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="1"/>
            <Property key="Require" value="true"/>
            <Property key="InvalidMsg" value="Please fill in LoS of Requestor."/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="A2c" type="string" size="200" indexable="true">
          <description>A2c Business unit</description>
          <Properties>
            <Property key="Label" value="Business unit"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="A2c"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="a2c"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="1"/>
            <Property key="Require" value="true"/>
            <Property key="InvalidMsg" value="Please fill in Business unit of Requestor."/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="A3" type="datetime" size="200" indexable="true">
          <description>A3 Date Of Request</description>
          <Properties>
            <Property key="Label" value="Date Of Request"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="A3"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="dor"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="1"/>
            <Property key="Require" value="true"/>
            <Property key="InvalidMsg" value="Please fill in the date of request."/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value="dd/MM/yyyy"/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="A4" type="string" size="200" indexable="true">
          <description>A4 Type Of Request</description>
          <Properties>
            <Property key="Label" value="Type of Request"/>
            <Property key="Width" value="200px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="A4"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="a4"/>
            <Property key="DataSourceType" value="2"/>
            <Property key="DataSource" value="TypeOfRequest"/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="2"/>
            <Property key="Require" value="true"/>
            <Property key="InvalidMsg" value="Please choose Type of Request."/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="B1" type="string" size="200" indexable="true">
          <description>B1 Is it related to accepting gifts?</description>
          <Properties>
            <Property key="Label" value="Gift acceptance/offering?"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="B1"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="b1"/>
            <Property key="DataSourceType" value="2"/>
            <Property key="DataSource" value="YesAndNo"/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="2"/>
            <Property key="Require" value="true"/>
            <Property key="InvalidMsg" value="Is it related to accepting gift(s)?"/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="B2" type="string" size="200" indexable="true">
          <description>B2 Is the gift from a PRC GAAS Assurance client or its related entities?</description>
          <Properties>
            <Property key="Label" value="Gift from a PRC GAAS Assurance client or its related entities?"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="B2"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="b2"/>
            <Property key="DataSourceType" value="2"/>
            <Property key="DataSource" value="YesAndNo"/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="2"/>
            <Property key="Require" value="true"/>
            <Property key="InvalidMsg" value="Are the gifts from a PRC GAAS Assurance client or its related entities?"/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="B3" type="string" size="200" indexable="true">
          <description>Are the gifts from existing clients?</description>
          <Properties>
            <Property key="Label" value="Are the gifts from existing clients?"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="B3"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="b3"/>
            <Property key="DataSourceType" value="2"/>
            <Property key="DataSource" value="YesAndNo"/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="2"/>
            <Property key="Require" value="true"/>
            <Property key="InvalidMsg" value="Are the gifts from existing clients?"/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="B3a" type="string" size="500" indexable="true">
          <description>B3a Client Name</description>
          <Properties>
            <Property key="Label" value="Existing clients"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="B3a"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="b3a"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="5"/>
            <Property key="Require" value="true"/>
            <Property key="InvalidMsg" value="Please fill in the client name."/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="B3ahidden" type="string" size="500" indexable="true">
          <description>B3a Client Name</description>
          <Properties>
            <Property key="Label" value="B3a"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="B3ahidden"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="B3ahidden"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="0"/>
            <Property key="Require" value="false"/>
            <Property key="InvalidMsg" value="Please fill in the client name."/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="B3aCustomhidden" type="string" size="500" indexable="true">
          <description>B3a Client Name</description>
          <Properties>
            <Property key="Label" value="B3a"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="B3aCustomhidden"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="B3aCustomhidden"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="0"/>
            <Property key="Require" value="false"/>
            <Property key="InvalidMsg" value="Please fill in the client name."/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="B3aPickerhidden" type="string" size="500" indexable="true">
          <description>B3a Client Name</description>
          <Properties>
            <Property key="Label" value="B3a"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="B3aPickerhidden"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="B3aPickerhidden"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="0"/>
            <Property key="Require" value="false"/>
            <Property key="InvalidMsg" value="Please fill in the client name."/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="B4" type="string" size="200" indexable="true">
          <description>Are the gifts from potential clients?</description>
          <Properties>
            <Property key="Label" value="Are the gifts from potential clients?"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="B4"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="b4"/>
            <Property key="DataSourceType" value="2"/>
            <Property key="DataSource" value="YesAndNo"/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="2"/>
            <Property key="Require" value="true"/>
            <Property key="InvalidMsg" value="Are the gifts from potential clients?"/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="B4a" type="string" size="200" indexable="true">
          <description>B4a Client Name</description>
          <Properties>
            <Property key="Label" value="Potential clients"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="B4a"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="b4a"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="1"/>
            <Property key="Require" value="true"/>
            <Property key="InvalidMsg" value="Please fill in the client name."/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="B5" type="string" size="500" indexable="true">
          <description>B5 Details of the gift offerer:</description>
          <Properties>
            <Property key="Label" value="Details of the gift offerer"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="B5"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="b5"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="5"/>
            <Property key="Require" value="true"/>
            <Property key="InvalidMsg" value="please input details of the gift offerer."/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="B6" type="string" size="500" indexable="true">
          <description>B6 Details of your enquiry</description>
          <Properties>
            <Property key="Label" value="Details of your enquiry"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="B6"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="b6"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="5"/>
            <Property key="Require" value="true"/>
            <Property key="InvalidMsg" value="Please specify details of your enquiry"/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="B6hiden" type="string" size="500" indexable="true">
          <description>hiden pre 15 character B6Details of your enquiry</description>
          <Properties>
            <Property key="Label" value="B6"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="B6hiden"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="b6hiden"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="5"/>
            <Property key="Require" value="false"/>
            <Property key="InvalidMsg" value="Please specify details of your enquiry"/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="B11" type="string" size="200" indexable="true">
          <description>section B Are the recipients our existing clients?</description>
          <Properties>
            <Property key="Label" value="Are the recipients our existing clients?"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="B11"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="b11"/>
            <Property key="DataSourceType" value="2"/>
            <Property key="DataSource" value="YesAndNo"/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="2"/>
            <Property key="Require" value="true"/>
            <Property key="InvalidMsg" value="Are the recipients our existing clients?"/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="B12" type="string" size="200" indexable="true">
          <description>section B Are the recipients potential clients?</description>
          <Properties>
            <Property key="Label" value="B12"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="B12"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="b12"/>
            <Property key="DataSourceType" value="2"/>
            <Property key="DataSource" value="YesAndNo"/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="2"/>
            <Property key="Require" value="true"/>
            <Property key="InvalidMsg" value="Are the recipients potential clients?"/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="B13" type="string" size="200" indexable="true">
          <description>section B Are the recipients government officials (including SOE)?</description>
          <Properties>
            <Property key="Label" value="Government officials"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="B13"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="b13"/>
            <Property key="DataSourceType" value="2"/>
            <Property key="DataSource" value="YesAndNo"/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="2"/>
            <Property key="Require" value="true"/>
            <Property key="InvalidMsg" value="Are the recipients government officials (including SOE)? "/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="B13a" type="string" size="500" indexable="true">
          <description>section b Please specify the key responsibilities of these officials or government departments. </description>
          <Properties>
            <Property key="Label" value="The key responsibilities of these officials or government departments"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="B13a"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="b13a"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="5"/>
            <Property key="Require" value="true"/>
            <Property key="InvalidMsg" value="Please specify the key responsibilities of these officials or government departments. "/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="B14a" type="string" size="500" indexable="true">
          <description>section b4 i) Name </description>
          <Properties>
            <Property key="Label" value="Recipient"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="B14a"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="b14a"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="5"/>
            <Property key="Require" value="true"/>
            <Property key="InvalidMsg" value="Please input Name on Details of each recipient. "/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="B14b" type="string" size="500" indexable="true">
          <description>Section B4 ii) Position </description>
          <Properties>
            <Property key="Label" value="Recipient position"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="B14b"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="b14b"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="5"/>
            <Property key="Require" value="true"/>
            <Property key="InvalidMsg" value="Please input Position on Details of each recipient. "/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="B14c" type="string" size="500" indexable="true">
          <description>Section B4 iii) Company/ organisation </description>
          <Properties>
            <Property key="Label" value="Recipient company / organisation"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="B14c"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="b14c"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="5"/>
            <Property key="Require" value="true"/>
            <Property key="InvalidMsg" value="Please input Company/ organisation on Details of each recipient including."/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="B14chidden" type="string" size="500" indexable="true">
          <description>Section B4 iii) Company/ organisation </description>
          <Properties>
            <Property key="Label" value="Company/ organisation"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="B14chidden"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="B14chidden"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="0"/>
            <Property key="Require" value="false"/>
            <Property key="InvalidMsg" value="Please input Company/ organisation on Details of each recipient including."/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="B14cCustomhidden" type="string" size="500" indexable="true">
          <description>B14 Client Name</description>
          <Properties>
            <Property key="Label" value="B3a"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="B14cCustomhidden"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="B14cCustomhidden"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="0"/>
            <Property key="Require" value="false"/>
            <Property key="InvalidMsg" value="Please fill in the client name."/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="B14cPickerhidden" type="string" size="500" indexable="true">
          <description>B14 Client Name</description>
          <Properties>
            <Property key="Label" value="B3a"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="B14cPickerhidden"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="B14cPickerhidden"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="0"/>
            <Property key="Require" value="false"/>
            <Property key="InvalidMsg" value="Please fill in the client name."/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="B15" type="string" size="500" indexable="true">
          <description>section B Services we provide to / receive from the recipients</description>
          <Properties>
            <Property key="Label" value="Services we provide to / receive from the recipients"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="B15"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="b15"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="5"/>
            <Property key="Require" value="true"/>
            <Property key="InvalidMsg" value="Please fill in Services we provide to / receive from the recipients"/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="B16" type="string" size="200" indexable="true">
          <description>Is this a sensitive period?</description>
          <Properties>
            <Property key="Label" value="Sensitive period"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="B16"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="b16"/>
            <Property key="DataSourceType" value="2"/>
            <Property key="DataSource" value="YesAndNo"/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="2"/>
            <Property key="Require" value="true"/>
            <Property key="InvalidMsg" value="Is this a sensitive period?"/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="C1" type="string" size="200" indexable="true">
          <description>section C Is it a reimbursement approval request?</description>
          <Properties>
            <Property key="Label" value="Reimbursement approval request"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="C1"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="c1"/>
            <Property key="DataSourceType" value="2"/>
            <Property key="DataSource" value="YesAndNo"/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="2"/>
            <Property key="Require" value="false"/>
            <Property key="InvalidMsg" value="Is it a reimbursement approval request?"/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="C2" type="string" size="200" indexable="true">
          <description>section C Nature of gift</description>
          <Properties>
            <Property key="Label" value="C2"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="C2"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="c2"/>
            <Property key="DataSourceType" value="2"/>
            <Property key="DataSource" value="NatureOfGift"/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="4"/>
            <Property key="Require" value="true"/>
            <Property key="InvalidMsg" value="Please fill in nature of gift(s)."/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="C211" type="string" size="200" indexable="true">
          <description>section C Types of offering to government officials</description>
          <Properties>
            <Property key="Label" value="Types of offering to government officials"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="C211"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="c211"/>
            <Property key="DataSourceType" value="2"/>
            <Property key="DataSource" value="TypeOfOffering"/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="4"/>
            <Property key="Require" value="true"/>
            <Property key="InvalidMsg" value="Please fill in Types of offering to government officials."/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="C21" type="string" size="200" indexable="true">
          <description>Types of offering to government officials</description>
          <Properties>
            <Property key="Label" value="C21"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="C21"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="c21"/>
            <Property key="DataSourceType" value="2"/>
            <Property key="DataSource" value="TypeOfGift"/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="4"/>
            <Property key="Require" value="true"/>
            <Property key="InvalidMsg" value="Please fill in types of offering to government officials"/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="C21a" type="string" size="170" indexable="true">
          <description>Nature of gift</description>
          <Properties>
            <Property key="Label" value="C21a"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="C21a"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="c21a"/>
            <Property key="DataSourceType" value="2"/>
            <Property key="DataSource" value="NatureOfGift1"/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="4"/>
            <Property key="Require" value="true"/>
            <Property key="InvalidMsg" value="Please fill in nature of gift(s)."/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="C3" type="string" size="500" indexable="true">
          <description>Purpose of the offer</description>
          <Properties>
            <Property key="Label" value="Purpose of the offer"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="C3"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="c3"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="5"/>
            <Property key="Require" value="true"/>
            <Property key="InvalidMsg" value="Please fill in purpose of the offer."/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="C31" type="string" size="200" indexable="true">
          <description>Number of recipients </description>
          <Properties>
            <Property key="Label" value="Number of recipients"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="C31"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="c31"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="1"/>
            <Property key="Require" value="true"/>
            <Property key="InvalidMsg" value="Please fill in number of recipients."/>
            <Property key="InputRegular" value="(\d{1,3})+(,\d{3}){0,}(\.\d+)?"/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="C4" type="string" size="500" indexable="true">
          <description>Nature/details of the offer</description>
          <Properties>
            <Property key="Label" value="Nature/details of the offer"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="C4"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="c4"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="5"/>
            <Property key="Require" value="true"/>
            <Property key="InvalidMsg" value="Please fill in nature/details of the offer."/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="C4hiden" type="string" size="500" indexable="true">
          <description>hiden c4 pre 15 character Nature/details of the offer  </description>
          <Properties>
            <Property key="Label" value="C4hiden"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="C4hiden"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="c4hiden"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="5"/>
            <Property key="Require" value="false"/>
            <Property key="InvalidMsg" value="Please fill in Nature/details of the offer."/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="C5a" type="string" size="200" indexable="true">
          <description>a)Estimated value of the gifts/entertainment/favours per person </description>
          <Properties>
            <Property key="Label" value="Currency of estimated value"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="C5a"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="c5a"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="1"/>
            <Property key="Require" value="true"/>
            <Property key="InvalidMsg" value="Please fill in Currency on Estimated value of the offer."/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="C5b" type="string" size="200" indexable="true">
          <description>b)Estimated value of the offer </description>
          <Properties>
            <Property key="Label" value="Estimated value"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="C5b"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="c5b"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="1"/>
            <Property key="Require" value="true"/>
            <Property key="InvalidMsg" value="Please fill in Value on Estimated value of the offer."/>
            <Property key="InputRegular" value="(\d{1,3})+(,\d{3}){0,}(\.\d+)?"/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="C6a" type="string" size="200" indexable="true">
          <description>a)Estimated value of the gifts/entertainment/favours per person </description>
          <Properties>
            <Property key="Label" value="Currency of aggregate value"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="C6a"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="c6a"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="1"/>
            <Property key="Require" value="true"/>
            <Property key="InvalidMsg" value="Please fill in Currency on Aggregate value."/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="C6b" type="string" size="200" indexable="true">
          <description>b)Estimated value of the gifts/entertainment/favours per person </description>
          <Properties>
            <Property key="Label" value="Aggregate value"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="C6b"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="c6b"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="1"/>
            <Property key="Require" value="true"/>
            <Property key="InvalidMsg" value="Please fill in Value on Aggregate value."/>
            <Property key="InputRegular" value="(\d{1,3})+(,\d{3}){0,}(\.\d+)?"/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="C7" type="datetime" size="50" indexable="true">
          <description>Expected date of the offer </description>
          <Properties>
            <Property key="Label" value="Expected date of the offer"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="C7"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="c7"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="1"/>
            <Property key="Require" value="true"/>
            <Property key="InvalidMsg" value="Please fill in Expected date of the offer."/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value="dd/MM/yyyy"/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="C8" type="string" size="200" indexable="true">
          <description>Have you contacted BM team to process your gift order?</description>
          <Properties>
            <Property key="Label" value="Contacted BM team to process your gift order?"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="C8"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="c8"/>
            <Property key="DataSourceType" value="2"/>
            <Property key="DataSource" value="YesNoNA"/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="2"/>
            <Property key="Require" value="true"/>
            <Property key="InvalidMsg" value="Have you contacted BM team to process your gift order?"/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="C9" type="string" size="500" indexable="true">
          <description>Other information, if any</description>
          <Properties>
            <Property key="Label" value="Other information"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="C9"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="c9"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="5"/>
            <Property key="Require" value="false"/>
            <Property key="InvalidMsg" value=""/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="D1" type="string" size="200" indexable="true">
          <description>D1 Partner in charge</description>
          <Properties>
            <Property key="Label" value="Partner in charge"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="D1"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="d1"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="0"/>
            <Property key="Require" value="true"/>
            <Property key="InvalidMsg" value="Please input Partner in charge"/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="D1Name" type="string" size="200" indexable="true">
          <description>D1 Name</description>
          <Properties>
            <Property key="Label" value="Partner in charge"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="D1Name"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="D1Name"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="1"/>
            <Property key="Require" value="false"/>
            <Property key="InvalidMsg" value="Please fill in Requestor."/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="D1Email" type="string" size="200" indexable="true">
          <description>A1 Email</description>
          <Properties>
            <Property key="Label" value="D1Email"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="D1Email"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="D1Email"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="1"/>
            <Property key="Require" value="false"/>
            <Property key="InvalidMsg" value="Please fill in Requestor."/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="D2a" type="string" size="200" indexable="true">
          <description>d2 Office</description>
          <Properties>
            <Property key="Label" value="PIC office"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="D2a"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="d2a"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="1"/>
            <Property key="Require" value="true"/>
            <Property key="InvalidMsg" value="Please fill in Office of Partner in charge."/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="D2b" type="string" size="200" indexable="true">
          <description>D2 Los</description>
          <Properties>
            <Property key="Label" value="PIC LoS"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="D2b"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="d2b"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="1"/>
            <Property key="Require" value="true"/>
            <Property key="InvalidMsg" value="Please fill in LoS of Partner in charge"/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="D2c" type="string" size="200" indexable="true">
          <description>D2 Business unit</description>
          <Properties>
            <Property key="Label" value="PIC BU"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="D2c"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="d2c"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="1"/>
            <Property key="Require" value="false"/>
            <Property key="InvalidMsg" value=""/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="D3" type="string" size="2000" indexable="true">
          <description>D3 Please attach partner’s approval email correspondence. </description>
          <Properties>
            <Property key="Label" value="D3"/>
            <Property key="Width" value="160px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="D3"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="d3"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="0"/>
            <Property key="Require" value="true"/>
            <Property key="InvalidMsg" value="Please attach partner’s approval email correspondence."/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
          </Properties>
        </Column>
        <Column name="E1" type="string" size="200" indexable="true">
          <description>E1 Comment box</description>
          <Properties>
            <Property key="Label" value="Requester comment"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="E1"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="e1"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="5"/>
            <Property key="Require" value="false"/>
            <Property key="InvalidMsg" value=""/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="E2" type="string" size="2000" indexable="true">
          <description>E2 Other supplementary attachments </description>
          <Properties>
            <Property key="Label" value="E2"/>
            <Property key="Width" value="160px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="E2"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="e2"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="0"/>
            <Property key="Require" value="false"/>
            <Property key="InvalidMsg" value="Please attach other supplementary attachments."/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
          </Properties>
        </Column>
        <Column name="F1" type="string" size="200" indexable="true">
          <description>F1 Comment box</description>
          <Properties>
            <Property key="Label" value="CO comment"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="F1"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="f1"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="5"/>
            <Property key="Require" value="false"/>
            <Property key="InvalidMsg" value=""/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
        <Column name="F2" type="string" size="2000" indexable="true">
          <description>F2 Other supplementary attachments</description>
          <Properties>
            <Property key="Label" value="F2 Attachment"/>
            <Property key="Width" value="160px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="F2Attachment"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="f2"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="0"/>
            <Property key="Require" value="false"/>
            <Property key="InvalidMsg" value="Please attach files."/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
          </Properties>
        </Column>
        <Column name="OtherReviewStaffid" type="string" size="2000" indexable="true">
          <description>OtherReviewStaffid</description>
          <Properties>
            <Property key="Label" value="OtherReviewStaffid"/>
            <Property key="Width" value="160px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="OtherReviewStaffid"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="othstaffid"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="0"/>
            <Property key="Require" value="false"/>
            <Property key="InvalidMsg" value="Please choose Other Review"/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
          </Properties>
        </Column>
        <Column name="OtherReviewStaffName" type="string" size="2000" indexable="true">
          <description>OtherReviewStaffName</description>
          <Properties>
            <Property key="Label" value="OtherReviewStaffName"/>
            <Property key="Width" value="160px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="OtherReviewStaffName"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="othstaffname"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="0"/>
            <Property key="Require" value="false"/>
            <Property key="InvalidMsg" value="Please choose Other Review"/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
          </Properties>
        </Column>
        <Column name="G1" type="string" size="200" indexable="true">
          <description>G1 Comment box</description>
          <Properties>
            <Property key="Label" value="CO remarks"/>
            <Property key="Width" value="150px"/>
            <Property key="Order" value="0"/>
            <Property key="Visable" value="true"/>
            <Property key="Sortable" value="true"/>
            <Property key="SortName" value="G1"/>
            <Property key="Searchable" value="true"/>
            <Property key="ShortName" value="g1"/>
            <Property key="DataSourceType" value="0"/>
            <Property key="DataSource" value=""/>
            <Property key="DataSourceGroupBy" value=""/>
            <Property key="DataControlType" value="5"/>
            <Property key="Require" value="false"/>
            <Property key="InvalidMsg" value=""/>
            <Property key="InputRegular" value=""/>
            <Property key="DataFormat" value=""/>
            <Property key="JoinKeyword" value=";"/>
          </Properties>
        </Column>
      </Columns>
    </Entity>
  </Entitys>
</Metadata-Settings>