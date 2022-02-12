import { Component, OnInit } from '@angular/core';
import { jsPDF } from "jspdf";

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {

  constructor() { }
  finalDataArray: any = [];
  foyer1="";
  tempCal1=0.00;
  tempCal2=0.00;
  totalFoyerAmount = "0.00";
  totalLivingAmount = "0.00";
  totalDiningAmount = "0.00";
  totalKitchenAmount = "0.00";
  totalServicesAmount = "0.00";
  totalKidsBedroomAmount = "0.00";
  totalGuestBedroomAmount = "0.00";
  totalMasterBedroomAmount = "0.00";
  totalQuatValue = "0.00";
  discount = "0";
  discountAmount = "0.00";
  subTotal = "0.00";
  gst = "0";
  customerTotalAmt = "0.00";

  name:string = "";
  emailAddress:string = "";
  phone:string = "";
  date:string = new Date().getDate()+"/"+new Date().getMonth()+"/"+new Date().getFullYear();

  waterproofSpec:string = "";
  commercialSpec:string = "";
  edgebandingSpec:string = "";
  hingesSpec:string = "";
  laminatesSpec:string ="";
  kitchenSpec:string = "";
  locksSpec:string = "";
  mirrorSpec:string = "";
  falseCeilingSpec:string = "";
  electricalsSpec:string = "";
  flooringSpec:string = "";

  submitted:boolean =false;

  data = {
    "foyer": [
      {
        "index": "1",
        "particulars_header": "SHOE UNIT",
        "particulars_sub_header": "Made in plywood with selected finish & necessary hardware and fittings",
        "code_material": "Plywood",
        "finish_type": "Laminate",
        "area_or_quantity": "24.1",
        "aq": "Area",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "2",
        "particulars_header": "SHOE RACK SEATER",
        "particulars_sub_header": "Made in plywood with selected finish & necessary hardware and fittings",
        "code_material": "Plywood",
        "finish_type": "Veneer",
        "area_or_quantity": "4.5",
        "aq": "Area",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "3",
        "particulars_header": "SEATING CUSHION",
        "particulars_sub_header": "Providing and fixing of seating cushion in Fabric (Fabric upto Rs 300/meter)",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "4.5",
        "aq": "Area",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "4",
        "particulars_header": "LOUVERS",
        "particulars_sub_header": "Louvers",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "2",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "5",
        "particulars_header": "TINTED MIRROR",
        "particulars_sub_header": "N/A",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "6",
        "aq": "Area",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "6",
        "particulars_header": "TINTED MIRROR",
        "particulars_sub_header": "N/A",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "7.4",
        "aq": "Area",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "7",
        "particulars_header": "MS FRAME WITH POWDER COATING",
        "particulars_sub_header": "N/A",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "1",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "8",
        "particulars_header": "GOLA PROFILE HANDLE",
        "particulars_sub_header": "Gola Profile handle",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "2",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "9",
        "particulars_header": "SOFT CLOSING - HINGES",
        "particulars_sub_header": "Hettich",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "7",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "10",
        "particulars_header": "FALSE CEILING WITH PAINT",
        "particulars_sub_header": "False Ceiling made with gypsum board with paint",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "120",
        "aq": "cus",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "11",
        "particulars_header": "FALSE CEILING LIGHT POINT",
        "particulars_sub_header": "N/A",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "6",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "12",
        "particulars_header": "FALSE CEILING LIGHT",
        "particulars_sub_header": "N/A",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "6",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "13",
        "particulars_header": "COVE LIGHT POINT",
        "particulars_sub_header": "N/A",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "1",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "14",
        "particulars_header": "COVE LIGHT",
        "particulars_sub_header": "N/A",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "1",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "15",
        "particulars_header": "ADAPTER",
        "particulars_sub_header": "N/A",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "1",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "16",
        "particulars_header": "HANGING LIGHT INSTALLATION",
        "particulars_sub_header": "N/A",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "1",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "17",
        "particulars_header": "COVE LIGHT POINT",
        "particulars_sub_header": "N/A",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "1",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "18",
        "particulars_header": "COVE LIGHT",
        "particulars_sub_header": "N/A",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "1",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "19",
        "particulars_header": "CPROFILE (FOR STRIP LIGHT)(2 MTS/STRIP)",
        "particulars_sub_header": "N/A",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "1",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "20",
        "particulars_header": "ADAPTER",
        "particulars_sub_header": "N/A",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "1",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      }
    ],
    "living": [
      {
        "index": "1",
        "particulars_header": "TV UNIT PANELING",
        "particulars_sub_header": "Made in plywood with selected finish & necessary hardware and fittings",
        "code_material": "Plywood",
        "finish_type": "Laminate",
        "area_or_quantity": "52.2",
        "aq": "Area",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "2",
        "particulars_header": "TV UNIT BELOW STORAGE",
        "particulars_sub_header": "Storage unit of selected ply and finish",
        "code_material": "Plywood",
        "finish_type": "Laminate",
        "area_or_quantity": "12.7",
        "aq": "Area",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "3",
        "particulars_header": "LEDGE MORE THAN 25MM",
        "particulars_sub_header": "Any Ledge where the width is more than 25mm",
        "code_material": "Plywood",
        "finish_type": "Laminate",
        "area_or_quantity": "15.8",
        "aq": "Area",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "4",
        "particulars_header": "DRAWERS",
        "particulars_sub_header": "Made in plywood with selected finish & necessary hardware and fittings",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "4",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "5",
        "particulars_header": "SOFT CLOSING - CHANNELS",
        "particulars_sub_header": "Hettich",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "4",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "6",
        "particulars_header": " GYPSUM PARTITION WITH PAINTING",
        "particulars_sub_header": "N/A",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "32.4",
        "aq": "Area",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "7",
        "particulars_header": "FALSE CEILING WITH PAINT",
        "particulars_sub_header": "False Ceiling made with gypsum board with paint",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "287",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "8",
        "particulars_header": "FALSE CEILING WITH PAINT",
        "particulars_sub_header": "N/A",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "18",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "9",
        "particulars_header": "FALSE CEILING LIGHT",
        "particulars_sub_header": "N/A",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "18",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "10",
        "particulars_header": "COVE LIGHT POINT",
        "particulars_sub_header": "N/A",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "3",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "11",
        "particulars_header": "COVE LIGHT",
        "particulars_sub_header": "N/A",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "3",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "12",
        "particulars_header": "GOLA PROFILE HANDLE",
        "particulars_sub_header": "Gola Profile handle",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "2",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "13",
        "particulars_header": "ADAPTER",
        "particulars_sub_header": "N/A",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "3",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "14",
        "particulars_header": "HANGING LIGHT INSTALLATION",
        "particulars_sub_header": "N/A",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "1",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "15",
        "particulars_header": "COVE LIGHT",
        "particulars_sub_header": "N/A",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "1",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "16",
        "particulars_header": "COVE LIGHT POINT",
        "particulars_sub_header": "N/A",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "1",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "17",
        "particulars_header": "ADAPTER",
        "particulars_sub_header": "N/A",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "2",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "18",
        "particulars_header": "PROFILE (FOR STRIP LIGHT)(2 MTS/STRIP)",
        "particulars_sub_header": "N/A",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "2",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      }
    ],
    "dining": [
      {
        "index": "1",
        "particulars_header": "CROCKERY UNIT BOTTOM UNIT",
        "particulars_sub_header": "Made in plywood with selected finish & necessary hardware and fittings",
        "code_material": "Plywood",
        "finish_type": "Laminate",
        "area_or_quantity": "14.8",
        "aq": "Area",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "2",
        "particulars_header": "CROCKERY UNIT TOP UNIT",
        "particulars_sub_header": "Made in plywood with selected finish & necessary hardware and fittings",
        "code_material": "Plywood",
        "finish_type": "Laminate",
        "area_or_quantity": "6.2",
        "aq": "Area",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "3",
        "particulars_header": "ROSE GOLD FINISH ALUMINIUM FRAME WITH CLEAR GLASS",
        "particulars_sub_header": "N/A",
        "code_material": "N/A",
        "finish_type": "Laminate",
        "area_or_quantity": "14.2",
        "aq": "Area",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "4",
        "particulars_header": "ROSE GOLD FINISH ALUMINIUM FRAME WITH CLEAR GLASS",
        "particulars_sub_header": "N/A",
        "code_material": "N/A",
        "finish_type": "Laminate",
        "area_or_quantity": "9",
        "aq": "Area",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "5",
        "particulars_header": "CROCKERY TALL UNIT",
        "particulars_sub_header": "Made in plywood with selected finish & necessary hardware and fittings",
        "code_material": "Plywood",
        "finish_type": "Laminate",
        "area_or_quantity": "10.2",
        "aq": "Area",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "6",
        "particulars_header": "CROCKERY TALL UNIT",
        "particulars_sub_header": "Made in plywood with selected finish & necessary hardware and fittings",
        "code_material": "Plywood",
        "finish_type": "Laminate",
        "area_or_quantity": "6.3",
        "aq": "Area",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "7",
        "particulars_header": "ADDITIONAL LAMINATE",
        "particulars_sub_header": "N/A",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "3",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "8",
        "particulars_header": "BEVELLED MIRROR TILES WITH PLY BACKING",
        "particulars_sub_header": "Bevelled Mirror Tiles with Ply Backing",
        "code_material": "Plywood",
        "finish_type": "N/A",
        "area_or_quantity": "13.8",
        "aq": "Area",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "9",
        "particulars_header": "GOLA PROFILE HANDLE",
        "particulars_sub_header": "Gola Profile handle",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "2",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "10",
        "particulars_header": "SOFT CLOSING - HINGES",
        "particulars_sub_header": "Hettich",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "13",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "11",
        "particulars_header": "COVE LIGHT",
        "particulars_sub_header": "N/A",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "2",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "12",
        "particulars_header": "COVE LIGHT POINT",
        "particulars_sub_header": "N/A",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "8",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "13",
        "particulars_header": "ADAPTER",
        "particulars_sub_header": "N/A",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "8",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "14",
        "particulars_header": "PROFILE (FOR STRIP LIGHT)(2 MTS/STRIP)",
        "particulars_sub_header": "N/A",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "4",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      }
    ],
    "kitchen": [
      {
        "index": "1",
        "particulars_header": "KITCHEN BOTTOM CABINET",
        "particulars_sub_header": "Made in plywood with selected finish & necessary hardware and fittings",
        "code_material": "Plywood",
        "finish_type": "Acrylic - Euro- Icore 1mm",
        "area_or_quantity": "36",
        "aq": "Area",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "2",
        "particulars_header": "KITCHEN TOP CABINET",
        "particulars_sub_header": "Made in plywood with selected finish & necessary hardware and fittings",
        "code_material": "Plywood",
        "finish_type": "Lacquered Glass",
        "area_or_quantity": "16.1",
        "aq": "Area",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "3",
        "particulars_header": "LOFT",
        "particulars_sub_header": "Frame and Shutter Made in Plywood with Selected Finish",
        "code_material": "Plywood",
        "finish_type": "Acrylic Rehau",
        "area_or_quantity": "37.7",
        "aq": "Area",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "4",
        "particulars_header": "KITCHEN TOP CABINET",
        "particulars_sub_header": "Made in plywood with selected finish & necessary hardware and fittings",
        "code_material": "Plywood",
        "finish_type": "Acrylic Rehau",
        "area_or_quantity": "5.9",
        "aq": "Area",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "5",
        "particulars_header": "KITCHEN TOP UNIT",
        "particulars_sub_header": "Made in plywood with selected finish & necessary hardware and fittings",
        "code_material": "Acrylic - Euro- Icore 1mm",
        "finish_type": "Acrylic Rehau",
        "area_or_quantity": "23.1",
        "aq": "Area",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "6",
        "particulars_header": "CORNER CAROUSEL(HETTICH)",
        "particulars_sub_header": "N/A",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "1",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "7",
        "particulars_header": "TANDEM BOX",
        "particulars_sub_header": "Hettich",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "5",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "8",
        "particulars_header": "SS FINISH BASKETS(600MM)",
        "particulars_sub_header": "Kitchen Accessory- Hettich",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "1",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "9",
        "particulars_header": "ORGA TRAY 440",
        "particulars_sub_header": "Kitchen Accessory- Hettich",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "1",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "10",
        "particulars_header": "GOLA PROFILE HANDLE",
        "particulars_sub_header": "Gola Profile handle",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "8",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "11",
        "particulars_header": "BOTTLE PULL OUT 3 TIER",
        "particulars_sub_header": "Hettich",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "1",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "12",
        "particulars_header": "SOFT CLOSING - CHANNELS",
        "particulars_sub_header": "Hettich",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "2",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "13",
        "particulars_header": "SOFT CLOSING - HINGES",
        "particulars_sub_header": "Hettich",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "10",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "14",
        "particulars_header": "THALI INLET(600MM)",
        "particulars_sub_header": "Hettich",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "1",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "15",
        "particulars_header": "SOFT CLOSING - CHANNELS",
        "particulars_sub_header": "Hettich",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "4",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "16",
        "particulars_header": "SOFT CLOSING - HINGES",
        "particulars_sub_header": "Hettich",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "15",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "17",
        "particulars_header": "CARGO DUO PULLOUT",
        "particulars_sub_header": "Hettich",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "1",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "18",
        "particulars_header": "COVE LIGHT POINT",
        "particulars_sub_header": "N/A",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "2",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "19",
        "particulars_header": "COVE LIGHT",
        "particulars_sub_header": "N/A",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "1",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "20",
        "particulars_header": "PROFILE (FOR STRIP LIGHT)(2 MTS/STRIP)",
        "particulars_sub_header": "N/A",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "2",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "21",
        "particulars_header": "ADAPTER",
        "particulars_sub_header": "N/A",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "2",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "22",
        "particulars_header": "HANGING LIGHT POINT",
        "particulars_sub_header": "N/A",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "2",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "23",
        "particulars_header": "HANGING LIGHT INSTALLATION",
        "particulars_sub_header": "N/A",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "2",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      }
    ],
    "kids_bedroom": [
      {
        "index": "1",
        "particulars_header": "WARDROBE",
        "particulars_sub_header": "Made in plywood with selected finish & necessary hardware and fittings",
        "code_material": "Plywood",
        "finish_type": "Laminate",
        "area_or_quantity": "52.9",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "2",
        "particulars_header": "LOFT",
        "particulars_sub_header": "Frame and Shutter Made in Plywood with Selected Finish",
        "code_material": "Plywood",
        "finish_type": "Laminate",
        "area_or_quantity": "16.4",
        "aq": "Area",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "3",
        "particulars_header": "DRAWERS",
        "particulars_sub_header": "Made in plywood with selected finish & necessary hardware and fittings",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "2",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "4",
        "particulars_header": "SOFT CLOSING - HINGES",
        "particulars_sub_header": "Hettich",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "14",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "5",
        "particulars_header": "SOFT CLOSING - CHANNELS",
        "particulars_sub_header": "Hettich",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "6",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "6",
        "particulars_header": "STUDY BOTTOM STORAGE",
        "particulars_sub_header": "Made in plywood with selected finish & necessary hardware and fittings",
        "code_material": "Plywood",
        "finish_type": "Laminate",
        "area_or_quantity": "3.9",
        "aq": "Area",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "7",
        "particulars_header": "DRAWERS",
        "particulars_sub_header": "Made in plywood with selected finish & necessary hardware and fittings",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "2",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "8",
        "particulars_header": "STUDY UNIT LEDGE",
        "particulars_sub_header": "Study unit Ledge",
        "code_material": "Plywood",
        "finish_type": "Laminate",
        "area_or_quantity": "12.2",
        "aq": "Area",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "9",
        "particulars_header": "STUDY TABLE TOP STORAGE",
        "particulars_sub_header": "Made in plywood with selected finish & necessary hardware and fittings",
        "code_material": "Plywood",
        "finish_type": "Laminate",
        "area_or_quantity": "13.8",
        "aq": "Area",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "10",
        "particulars_header": "SOFT CLOSING - CHANNELS",
        "particulars_sub_header": "Hettich",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "2",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "11",
        "particulars_header": "QUEEN SIZE BED WITH HYDRAULIC",
        "particulars_sub_header": "Made in plywood in selected finish with normal storage, headboard in ply",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "1",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "12",
        "particulars_header": "HYDRAULIC TOP LIFT",
        "particulars_sub_header": "N/A",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "4",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "13",
        "particulars_header": "SIDE TABLE (2 DRAWERS)",
        "particulars_sub_header": "N/A",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "4",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "14",
        "particulars_header": "CUSTOM MADE HEADBOARD WITH CUSHION",
        "particulars_sub_header": "Made in plywood with selected finish & necessary hardware and fittings with Cushion",
        "code_material": "Plywood",
        "finish_type": "Laminate",
        "area_or_quantity": "13.2",
        "aq": "Area",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "15",
        "particulars_header": "FALSE CEILING WITH PAINT",
        "particulars_sub_header": "False Ceiling made with gypsum board with paint",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "110",
        "aq": "cus",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "16",
        "particulars_header": "FALSE CEILING LIGHT POINT",
        "particulars_sub_header": "N/A",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "5",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "17",
        "particulars_header": "FALSE CEILING LIGHT",
        "particulars_sub_header": "N/A",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "5",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "18",
        "particulars_header": "COVE LIGHT",
        "particulars_sub_header": "N/A",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "5",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "19",
        "particulars_header": "COVE LIGHT POINT",
        "particulars_sub_header": "N/A",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "1",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "20",
        "particulars_header": "ADAPTER",
        "particulars_sub_header": "N/A",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "1",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      }
    ],
    "guest_bedroom": [
      {
        "index": "1",
        "particulars_header": "WARDROBE",
        "particulars_sub_header": "Made in plywood with selected finish & necessary hardware and fittings",
        "code_material": "Plywood",
        "finish_type": "Laminate",
        "area_or_quantity": "58.3",
        "aq": "Area",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "2",
        "particulars_header": "LOFT",
        "particulars_sub_header": "Frame and Shutter Made in Plywood with Selected Finish",
        "code_material": "Plywood",
        "finish_type": "Laminate",
        "area_or_quantity": "18.1",
        "aq": "Area",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "3",
        "particulars_header": "EXTENDED LOFT",
        "particulars_sub_header": "Made in plywood with selected finish & necessary hardware and fittings",
        "code_material": "Plywood",
        "finish_type": "Laminate",
        "area_or_quantity": "8.4",
        "aq": "Area",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "4",
        "particulars_header": "EXTERNAL DRAWERS",
        "particulars_sub_header": "Made with necessary hardware and fittings",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "2",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "5",
        "particulars_header": "SOFT CLOSING - CHANNELS",
        "particulars_sub_header": "Hettich",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "6",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "6",
        "particulars_header": "SOFT CLOSING - HINGES",
        "particulars_sub_header": "Hettich",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "10",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "7",
        "particulars_header": "CUSTOM POOJA UNIT",
        "particulars_sub_header": "Made in plywood with selected finish & necessary hardware and fittings",
        "code_material": "Plywood",
        "finish_type": "Laminate",
        "area_or_quantity": "14.6",
        "aq": "Area",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "8",
        "particulars_header": "CNC JALI CUTOUT",
        "particulars_sub_header": "CNC Jali Cutout",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "9",
        "aq": "Area",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "9",
        "particulars_header": "DRAWERS",
        "particulars_sub_header": "Made in plywood with selected finish & necessary hardware and fittings",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "4",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "10",
        "particulars_header": "GOPURAM LEDGES",
        "particulars_sub_header": "Gopuram Ledges of selected ply and finish",
        "code_material": "Plywood",
        "finish_type": "Laminate",
        "area_or_quantity": "3.5",
        "aq": "Area",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "11",
        "particulars_header": "GOPURAM LEDGES",
        "particulars_sub_header": "Gopuram Ledges of selected ply and finish",
        "code_material": "Plywood",
        "finish_type": "Laminate",
        "area_or_quantity": "1.7",
        "aq": "Area",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "12",
        "particulars_header": "CUPOLAS ON GOPURAM",
        "particulars_sub_header": "N/A",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "2",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "13",
        "particulars_header": "QUEEN SIZE BED WITH HYDRAULIC",
        "particulars_sub_header": "Made in plywood in selected finish with normal storage, headboard in ply",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "1",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "14",
        "particulars_header": "CUSTOM MADE HEADBOARD WITH CUSHION",
        "particulars_sub_header": "Made in plywood with selected finish & necessary hardware and fittings with Cushion",
        "code_material": "Plywood",
        "finish_type": "Laminate",
        "area_or_quantity": "13.2",
        "aq": "Area",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "15",
        "particulars_header": "SIDE TABLE (2 DRAWERS)",
        "particulars_sub_header": "Made in plywood with selected finish & necessary hardware and fittings",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "1",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "16",
        "particulars_header": "FALSE CEILING WITH PAINT",
        "particulars_sub_header": "False Ceiling made with gypsum board with paint",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "120",
        "aq": "cus",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "17",
        "particulars_header": "FALSE CEILING LIGHT POINT",
        "particulars_sub_header": "N/A",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "4",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "18",
        "particulars_header": "FALSE CEILING LIGHT",
        "particulars_sub_header": "N/A",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "4",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "19",
        "particulars_header": "COVE LIGHT",
        "particulars_sub_header": "N/A",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "4",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "20",
        "particulars_header": "COVE LIGHT POINT",
        "particulars_sub_header": "N/A",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "1",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "21",
        "particulars_header": "ADAPTER",
        "particulars_sub_header": "N/A",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "1",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "22",
        "particulars_header": "G-PROFILE HANDLE",
        "particulars_sub_header": "G-Profile handle",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "7",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      }
    ],
    "master_bedroom": [
      {
        "index": "1",
        "particulars_header": "ARISTO WARDROBE CARCASS",
        "particulars_sub_header": "Made in plywood with liner finish & necessary hardware and fittings",
        "code_material": "Plywood",
        "finish_type": "Laminate",
        "area_or_quantity": "76.6",
        "aq": "Area",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "2",
        "particulars_header": "ARISTO SHUTTER",
        "particulars_sub_header": "Lacquered glass shutters with soft close and locks",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "76.6",
        "aq": "Area",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "3",
        "particulars_header": "MOULDINGS",
        "particulars_sub_header": "Mouldings",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "32",
        "aq": "Area",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "4",
        "particulars_header": "MOULDINGS",
        "particulars_sub_header": "Mouldings",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "14.4",
        "aq": "Area",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "5",
        "particulars_header": "STUDY BOTTOM STORAGE",
        "particulars_sub_header": "Made in plywood with selected finish & necessary hardware and fittings",
        "code_material": "Plywood",
        "finish_type": "Laminate",
        "area_or_quantity": "4.4",
        "aq": "Area",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "6",
        "particulars_header": "STUDY UNIT LEDGE",
        "particulars_sub_header": "Study unit Ledge",
        "code_material": "Plywood",
        "finish_type": "Laminate",
        "area_or_quantity": "8.9",
        "aq": "Area",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "7",
        "particulars_header": "STUDY TABLE TOP STORAGE",
        "particulars_sub_header": "Made in plywood with selected finish & necessary hardware and fittings",
        "code_material": "Plywood",
        "finish_type": "Laminate",
        "area_or_quantity": "9.5",
        "aq": "Area",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "8",
        "particulars_header": "STUDY UNIT TALL UNIT",
        "particulars_sub_header": "Study unit Tall unit",
        "code_material": "Plywood",
        "finish_type": "Laminate",
        "area_or_quantity": "5.9",
        "aq": "Area",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "9",
        "particulars_header": "DRAWERS",
        "particulars_sub_header": "Made in plywood with selected finish & necessary hardware and fittings",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "3",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "10",
        "particulars_header": "SOFT CLOSING - CHANNELS",
        "particulars_sub_header": "Hettich",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "3",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "11",
        "particulars_header": "SOFT CLOSING - HINGES",
        "particulars_sub_header": "Hettich",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "1",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "12",
        "particulars_header": "QUEEN SIZE BED WITH HYDRAULIC",
        "particulars_sub_header": "Made in plywood in selected finish with normal storage, headboard in ply",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "1",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "13",
        "particulars_header": "SIDE TABLE (2 DRAWERS)",
        "particulars_sub_header": "Made in plywood with selected finish & necessary hardware and fittings",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "2",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "14",
        "particulars_header": "SOFT CLOSING - CHANNELS",
        "particulars_sub_header": "Hettich",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "4",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "15",
        "particulars_header": "FALSE CEILING WITH PAINT",
        "particulars_sub_header": "False Ceiling made with gypsum board with paint",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "160",
        "aq": "cus",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "16",
        "particulars_header": "FALSE CEILING LIGHT",
        "particulars_sub_header": "N/A",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "7",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "17",
        "particulars_header": "FALSE CEILING LIGHT POINT",
        "particulars_sub_header": "N/A",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "9",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "18",
        "particulars_header": "FALSE CEILING COVE LIGHT",
        "particulars_sub_header": "N/A",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "2",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "19",
        "particulars_header": "COVE LIGHT POINT",
        "particulars_sub_header": "N/A",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "2",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "20",
        "particulars_header": "ADAPTER",
        "particulars_sub_header": "N/A",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "2",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "21",
        "particulars_header": "HANGING LIGHT INSTALLATION",
        "particulars_sub_header": "N/A",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "2",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      }
    ],
    "services": [
      {
        "index": "1",
        "particulars_header": "FLOOR COVERING WITH TARPAULIN",
        "particulars_sub_header": "Floor Covering with tarpaulin",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "1",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      },
      {
        "index": "2",
        "particulars_header": "DEEP CLEANING INCLUDES CLEANING OF FURNITURE, HOUSE AND DEBRIS REMOVAL",
        "particulars_sub_header": "Deep Cleaning includes cleaning of furniture, house and debris removal",
        "code_material": "N/A",
        "finish_type": "N/A",
        "area_or_quantity": "1",
        "aq": "Qty",
        "cost_per_quantity": "",
        "total_costing": ""
      }
    ]
  };

  summaryObject = [
    {
      index: "1",
      label: "FOYER",
      amount: ""
    },
    {
      index: "2",
      label: "LIVING",
      amount: ""
    },
    {
      index: "3",
      label: "DINING",
      amount: ""
    },
    {
      index: "4",
      label: "KITCHEN",
      amount: ""
    },
    {
      index: "5",
      label: "KBR: KID'S BEDROOM",
      amount: ""
    },
    {
      index: "6",
      label: "GBR: GUEST BEDROOM",
      amount: ""
    },
    {
      index: "7",
      label: "MBR :MASTER BEDROOM",
      amount: ""
    },
    {
      index: "8",
      label: "SERVICES",
      amount: ""
    }
  ];
  
  ngOnInit() {

  }

  getCustomerName(event:any){
    this.name = event.target.value;
  }

  calculateAmount(event:any, index:string, number:string){
    this.tempCal1 = parseFloat(event.target.value);
  }

  calculateAmountSecond(event:any, index:string, number:string){
    this.submitted =false;
    const dollarIndianLocale = Intl.NumberFormat('en-IN');
    this.tempCal2 = event.target.value;
    if(index === "foyer"){
      this.data.foyer[parseInt(number)-1].total_costing = ((parseFloat((this.tempCal1).toString()) * parseFloat((this.tempCal2).toString()))).toString();
      let totalFoyerAmount = 0.00
      for(let i = 0; i<this.data.foyer.length;i++){
        if(this.data.foyer[i].total_costing !=="" && this.data.foyer[i].area_or_quantity !==""){
          totalFoyerAmount = (parseFloat(totalFoyerAmount.toString()) + parseFloat((this.data.foyer[i].total_costing).replace(/,/g,"")));
        }
      }
      console.log(this.data.foyer.length+"----"+totalFoyerAmount)
      this.summaryObject[0].amount = dollarIndianLocale.format(totalFoyerAmount);
      this.totalFoyerAmount = dollarIndianLocale.format(totalFoyerAmount);
      this.data.foyer[parseInt(number)-1].total_costing = dollarIndianLocale.format((parseFloat((this.tempCal1).toString()) * parseFloat((this.tempCal2).toString())));
    }else if(index === "living"){
      this.data.living[parseInt(number)-1].total_costing = dollarIndianLocale.format(parseFloat((this.tempCal1).toString()) * parseFloat((this.tempCal2).toString()));
      let totalLivingAmount = 0.00
      for(let i = 0; i<this.data.living.length;i++){
        if(this.data.living[i].total_costing !=="" && this.data.living[i].area_or_quantity !==""){
          totalLivingAmount = parseFloat((totalLivingAmount).toString()) + parseFloat((this.data.living[i].total_costing).replace(/,/g,""));
        }
      }
      this.summaryObject[1].amount = dollarIndianLocale.format((totalLivingAmount));
      this.totalLivingAmount = dollarIndianLocale.format(totalLivingAmount);
    }else if(index === "dining"){
      this.data.dining[parseInt(number)-1].total_costing = dollarIndianLocale.format(parseFloat((this.tempCal1).toString()) * parseFloat((this.tempCal2).toString()));
      let totalDiningAmount = 0.00
      for(let i = 0; i<this.data.dining.length;i++){
        if(this.data.dining[i].total_costing !=="" && this.data.dining[i].area_or_quantity !==""){
          totalDiningAmount = parseFloat((totalDiningAmount).toString()) + parseFloat((this.data.dining[i].total_costing).replace(/,/g,""));
        }
      }
      this.summaryObject[2].amount = dollarIndianLocale.format(parseFloat(this.totalDiningAmount));
      this.totalDiningAmount = dollarIndianLocale.format(totalDiningAmount);
    }else if(index === "kitchen"){
      this.data.kitchen[parseInt(number)-1].total_costing = dollarIndianLocale.format(parseFloat((this.tempCal1).toString()) * parseFloat((this.tempCal2).toString()));
      let totalKitchenAmount = 0.00
      for(let i = 0; i<this.data.kitchen.length;i++){
        if(this.data.kitchen[i].total_costing !=="" && this.data.kitchen[i].area_or_quantity !==""){
          totalKitchenAmount = parseFloat((totalKitchenAmount).toString()) + parseFloat((this.data.kitchen[i].total_costing).replace(/,/g,""));
        }
      }
      this.summaryObject[3].amount = dollarIndianLocale.format(parseFloat(this.totalKitchenAmount));
      this.totalKitchenAmount = dollarIndianLocale.format(totalKitchenAmount);
    }else if(index === "kids_bedroom"){
      this.data.kids_bedroom[parseInt(number)-1].total_costing = dollarIndianLocale.format(parseFloat((this.tempCal1).toString()) * parseFloat((this.tempCal2).toString()));
      let totalKidsBedroomAmount = 0.00
      for(let i = 0; i<this.data.kids_bedroom.length;i++){
        if(this.data.kids_bedroom[i].total_costing !=="" && this.data.kids_bedroom[i].area_or_quantity !==""){
          totalKidsBedroomAmount = parseFloat((totalKidsBedroomAmount).toString()) + parseFloat((this.data.kids_bedroom[i].total_costing).replace(/,/g,""));
        }
      }
      this.summaryObject[4].amount = dollarIndianLocale.format(parseFloat(this.totalKidsBedroomAmount));
      this.totalKidsBedroomAmount = dollarIndianLocale.format(totalKidsBedroomAmount);
    }else if(index === "guest_bedroom"){
      this.data.guest_bedroom[parseInt(number)-1].total_costing = dollarIndianLocale.format(parseFloat((this.tempCal1).toString()) * parseFloat((this.tempCal2).toString()));
      let totalGuestBedroomAmount = 0.00
      for(let i = 0; i<this.data.guest_bedroom.length;i++){
        if(this.data.guest_bedroom[i].total_costing !=="" && this.data.guest_bedroom[i].area_or_quantity !==""){
          totalGuestBedroomAmount = parseFloat((totalGuestBedroomAmount).toString()) + parseFloat((this.data.guest_bedroom[i].total_costing).replace(/,/g,""));
        }
      }
      this.summaryObject[5].amount = dollarIndianLocale.format(parseFloat(this.totalGuestBedroomAmount));
      this.totalGuestBedroomAmount = dollarIndianLocale.format(totalGuestBedroomAmount);
    }else if(index === "master_bedroom"){
      this.data.master_bedroom[parseInt(number)-1].total_costing = dollarIndianLocale.format((parseFloat((this.tempCal1).toString()) * parseFloat((this.tempCal2).toString())));
      let totalMasterBedroomAmount = 0.00
      for(let i = 0; i<this.data.master_bedroom.length;i++){
        if(this.data.master_bedroom[i].total_costing !=="" && this.data.master_bedroom[i].area_or_quantity !==""){
          totalMasterBedroomAmount = parseFloat((totalMasterBedroomAmount).toString()) + parseFloat((this.data.master_bedroom[i].total_costing).replace(/,/g,""));
        }
      }
      this.summaryObject[6].amount = dollarIndianLocale.format(parseFloat(this.totalMasterBedroomAmount));
      this.totalMasterBedroomAmount = dollarIndianLocale.format(totalMasterBedroomAmount);
    }else if(index === "services"){
      this.data.services[parseInt(number)-1].total_costing = dollarIndianLocale.format((parseFloat((this.tempCal1).toString()) * parseFloat((this.tempCal2).toString())));
      let totalServicesAmount = 0.00
      for(let i = 0; i<this.data.services.length;i++){
        if(this.data.services[i].total_costing !=="" && this.data.services[i].area_or_quantity !==""){
          totalServicesAmount = parseFloat((totalServicesAmount).toString()) + parseFloat((this.data.services[i].total_costing).replace(/,/g,""));
        }
      }
      
      this.summaryObject[7].amount = dollarIndianLocale.format(parseFloat(this.totalServicesAmount));
      this.totalServicesAmount = dollarIndianLocale.format(totalServicesAmount);
    }
    this.totalQuatValue = dollarIndianLocale.format((this.totalFoyerAmount !==""? (parseFloat(this.totalFoyerAmount.replace(/,/g,""))): 0.00) + (this.totalLivingAmount !==""? (parseFloat((this.totalLivingAmount.replace(/,/g,"")))):0.00) + (this.totalDiningAmount !==""? (parseFloat(this.totalDiningAmount.replace(/,/g,""))):0.00) + (this.totalKitchenAmount !==""? parseFloat(this.totalKitchenAmount.replace(/,/g,"")):0.00) + (this.totalKidsBedroomAmount !==""? parseFloat(this.totalKidsBedroomAmount.replace(/,/g,"")):0.00) + (this.totalGuestBedroomAmount !==""? parseFloat(this.totalGuestBedroomAmount.replace(/,/g,"")):0.00) + (this.totalMasterBedroomAmount !==""? parseFloat(this.totalMasterBedroomAmount.replace(/,/g,"")):0.00) + (this.totalServicesAmount !==""? parseFloat(this.totalServicesAmount.replace(/,/g,"")):0.00));
  }

  calculateDiscount(event:any){
    const dollarIndianLocale = Intl.NumberFormat('en-IN');
    const discountPercent = parseFloat(event.target.value)/100;
    this.discount = event.target.value !== "" ? event.target.value : 0;
    const tempV = (this.totalQuatValue !==""? parseFloat(this.totalQuatValue.replace(/,/g,"")): 0)
    const tempDisc:number = tempV * discountPercent;
    this.discountAmount = dollarIndianLocale.format(tempDisc);
    const subTotal:number = tempV - tempDisc;
    this.subTotal = dollarIndianLocale.format(parseFloat((subTotal).toString()));
    this.gst = dollarIndianLocale.format(subTotal * 0.18);
    this.customerTotalAmt = dollarIndianLocale.format(subTotal + parseFloat(this.gst))
  }

  specification(event:any, condtion:string){
    if(condtion === "WaterproofSpec"){
      this.waterproofSpec = event.target.value;
    }else if(condtion === "CommercialSpec"){
      this.commercialSpec = event.target.value;
    }else if(condtion === "EdgebandingSpec"){
      this.edgebandingSpec = event.target.value;
    }else if(condtion === "HingesSpec"){
      this.hingesSpec = event.target.value;
    }else if(condtion === "Laminates"){
      this.laminatesSpec = event.target.value;
    }else if(condtion === "KitchenSpec"){
      this.kitchenSpec = event.target.value;
    }else if(condtion === "LocksSpec"){
      this.locksSpec = event.target.value;
    }else if(condtion === "MirrorSpec"){
      this.mirrorSpec = event.target.value;
    }else if(condtion === "FalseCeilingSpec"){
      this.falseCeilingSpec = event.target.value;
    }else if(condtion === "ElectricalsSpec"){
      this.electricalsSpec = event.target.value;
    }else if(condtion === "FlooringSpec"){
      this.flooringSpec = event.target.value;
    }
  } 


  openPDF() {
    var imgData = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QDGRXhpZgAATU0AKgAAAAgABwEyAAIAAAAUAAAAYgE+AAUAAAACAAAAdgE/AAUAAAAGAAAAhgMBAAUAAAABAAAAtlEQAAEAAAABAQAAAFERAAQAAAABAAAAAFESAAQAAAABAAAAAAAAAAAyMDIxOjA3OjIzIDE0OjI0OjEwAAAAeiYAAYagAACAhAABhqAAAPoAAAGGoAAAgOgAAYagAAB1MAABhqAAAOpgAAGGoAAAOpgAAYagAAAXcAABhqAAAYagAACxj//bAEMAAgEBAgEBAgICAgICAgIDBQMDAwMDBgQEAwUHBgcHBwYHBwgJCwkICAoIBwcKDQoKCwwMDAwHCQ4PDQwOCwwMDP/bAEMBAgICAwMDBgMDBgwIBwgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDP/AABEIBGIHVQMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AP38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooJxTS9ADqKZvNJ5nvQBJRTRJTg2aACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKM0AFFNL4oL5oAdmkLYpmaKAHeZSNLimM9NzQA7zW9aQyN600timM2aAHtLTGmx/FUM10EFZeoawsSn5uB+VAGo9/t/ioS/yfvKa+K/2sf+Cp+h/DTWp/CvgdrfxF4lV/Jur4MH0/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7V95gMp9pwticXbVVIv5RVv/AG5n5fmmfey44weBb0dKa+cmn/7ZE/UmGVQOtWFlKisvTpvMRfyq/E3FfBn6gSmRmNOByKjpytigB1BOKaXzTc0AOL00nNBOKY0wHTmgB9NaQLUbSFqjL4oAkeXNRvLke1QzXIWqd5qXlqaALFzeKgrH1fXlt423MFUVx/xk+Onh/wCDXhK61vxJq1rpOmWo+aWZuXbkhEUZZ3ODhVBY9gTX5lftc/8ABQnxN+05JcaNof2vwx4JcNHJEJNt5qqng+cyn5YyOPKUkEE7mYEKv1HDHCOYZ5X9nhY2gvim/hX+b8lr6LU+J404+yrhnDe1x0rzfwwXxS/yXeT07Xeh77+2Z/wVUtvDs114Z+GMlrrGsANFc62f3tlp5PGIu00g655jU4zvwyD4L1XUbzXtcutW1a9utU1a/k825u7qQySzN0yWPPAAA9AABwBVeKOO0iEcShVFGa/qjhXgvAZHR5cOuao/im93/kvJfO71P4c458Rs14nxHPi5ctJP3aa+GPr/ADS838rLQVm3Gkoor7A+ACiiigB8E7W8gZeCK9q/Z9+PM3hzUIIJriSPy3Vo5FYq0bA5BB7EHnNeJVJa3LWkyupIKntXBmGX0sXRdKqrpnp5TmtfAYiOIoOzTP2N/Zx/aIg+J2kx2t1NGurQoCcYVbtf76j+96gdOo4OB7PY3y3C/e+b+dfkH+zp+0FceHdStY3upIJYXDQzK2GjYd//AK3Q9DX6Qfs+/Hy1+KmjJHJJHDq9ugM0QPEy8DzE/wBknqOqk4PBBP8AKHHHBdXKK7rUl+6f4f8AA7dtj+7fDPxHoZ/ho0K8rV0v/Av+D377rrb2mKTB/nU6SZFZFjqHmAbj+NX4Zv8A64r89P1gths05WxUStkZpytQBMDTlfNRK2KeDmgCSimq1OoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiikLYoAWgnFML5pKAHNJgVGZGPehzTWOBQA2VsCvO/2hvFy+Efhhq94zbfLt2P6Gu/nfalfKn/AAVE+J6/D79nDWpjJtaSFwOfagD8IfiN4mf4r/tp6zqDM0i285VfT5nJ/wDZR+dfdnwy8WHwfo3hPxEJPL/4RXWrDUZG9IknQS59jEz59q/P79mi2bxN8QNW1Z/m+0XbupPoDt/mDX3L8NbZfE3gLVNJcblurWSHB/2lI/rX9IcO5JzcHui1rUTf/gSdvzR/HfF3EnJ4hLEp6UpRX/gLV/vsz9n9BuvMiUg5DAEe9bUUgavHf2P/AIiN8UP2dfBOuyNuuNQ0a2e59pxGFlH4OGH4V65C2MV/N5/Ym+qLQan1FvFBmOOKAJScVG02OlRk7jRQArMWNNLYpGfAqF5wBQBI74HNV57rAqG7vVjGWNYOu+KY7C3kkeRYo4wWZmOAB6mgDS1DVVgB+avnH9sD9v7wv+zLYGzZv7c8UXCbrbR7WUCQDHDzNg+TGf7xBJ52q2Gx4J+2L/wVSZ57rw18LZorq5VmjufEJVZbeHHGLYHKytnP7wjYMDAfdlfiKeSW61C4vby4uL/ULyQy3FzcSGWadz1ZmbJZj6k5r9f4K8LcRmHLjM0vTpbqO0pf/Irz3fS25/P3iR44YTKebL8kaq19nLeEH/7dJdtl1vqjp/jR8bfFX7Rfi/8AtzxhqTXckZb7JZRZSz09T1WKPJxnAyxJZsDLHAxyzSZHoPSkZtxpK/pTAZfh8FQjh8LBRhHZLY/jjNM1xeY4mWLxtR1Kkndtu7f/AAOy2XQKKKK7TzwooooAKKKKACiiigCazvHsp1dGKlTnivoD9nD9oy58O6naq13JbXFu4aCdT80Z6fiCMgg8EEgggkV881NY3sljOskbFSpzxXmZpldHHUXRrK6Z7GSZ1icsxMcRh5NNO+h+zXwF+PNn8VtGVWaOHVoEBnhU/LIOnmJ3Kn05Kk4Ocqzep2V7uHJ+lfkr+zh+0dc+H9StFa6kt7m2YNDMp+ZD0/EHkEHggkHIOK/Rf4D/AB7s/inpCqzRw6pCgM0IPyuOnmJ6qSRx1UkA5yrN/J/GnBdbJ67qU1ek/wAP+B2fyfn/AHd4ceI2G4gw0aVWSVdLX+95rz7r5rql7HBcYPNWQdwrGs7wMPmP0q/b3G018EfqRcVqeGxUQbcKcrUATA5FOVsVCDg1IDkUASUUxWxT85oAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoJxQWxUZOaAHF802iigAooLYphbNACM1MZs0SSioJZjigCHUZ9kJ5r8wv+DgL4wL4a+CsmnLLtadcEZr9Ldbn2WzV+GP/AAcI/FI+JfiHY+H45SVkmWMgHOAWANaUabqVI047tpfeY4itGjSlVntFNv0SufNv7H/h42PhOOdl2vIoZvqeT+pNfWHwN1LyNW8o/wAQxXg/wK0b+y/Blv8ALgsoNetfDbUPsPiKE5/iFf2vl+BVLKY0I9Ir8j/N3Ns0lXz6eKk95P8AM/Sr/glt4oWb4FaloO4lvCviC9slVjyscrC7j/DbcAfhX1dazmVK+Cf+CbPir+xvjl420NpB5WtaZZaxCv8AtRM8Ep/ENB+Qr7q0+5DRDbX8d5/hfq2ZV6HRSdvRu6/Bn+hHCuO+uZPhsT1lCN/VKz/FM1kenb6rJNmnmevIPoCYuBUck9QvN71Xnu9o64oAmln2/eOT6VRvtT2A84qnqGrrAvWvmX9sn/gob4d/Zwhk0mz26/4xkTMWmQvhbbIyHuHGfLXBBC8u2RgYJYdmX5ficdXjhsJBznLZL+tF3b0R5+a5tg8tw0sZj6ip047t/wBat9EtX0PXPjr+0N4b+BXgy41zxLqkOnWMPyJuO6SdyCRHGg+Z3IBIVQTgE9ASPzJ/ay/br8UftVXVxptr9o8O+B9526eGxcago6G5YHGO/lKdgJ5LlVYea/Fb4q+JPjv4yk8Q+MNSfUb5twghXK21ihOfLhjyQijA9WbALFjyefd9309K/pTgnwuw+XcuMzK1StulvGP+b83t0XU/jXxI8bcXnHNl+T3pYfZvac15/wAsX2Wr6vWwiBbePZGoVR6UlFFfr6Vj8BvcKKKKYBRRTXkCCgB2cVXvdSisE3SOqL6k1zvjn4o6f4PtGaWZfMA4XNfI/wC0Z+3KLaeaz06T7VdA7RHG3yRn/aP9Bz9K+X4g4swOVUnPETV+x9pwrwLmee11SwsHbv0PtGx8TWmoSbYpkZvQGtFW3Cvzo/Z+/av1q08TR2muTNHc3D77dyNiSA/wEdm9PXp16/c/ww+JVt410iN1kXzQPmGa5eF+MsJnNPnpaPs9zu428Pcfw5W9nXXMu629V5HYUUA5FFfZH56FFFFAE1jfSWM6yRsVZTnivoL9nL9o+68Panaq13Jb3FuwaGdT8yHp9CCMgg8EEgggmvneprK9ksZldGKlTnivMzTK6GOoujWV0z2MkzvE5ZiY4jDyaafQ/Zb4CfH6z+KOkrHI0VvqkKAywg/LIP8Anoncr7dVJwcghj6tZ3u9QDX5G/s8/tG3Hh3UbVJLqS3mt3DQzK2GjP8Angg8EEg5BNfol+z9+0RZ/E7To7e4kjh1REyyg/JOP7yf1XqPcc1/KXGnBFfKKrq0lek/w/4Hn9/n/dXhx4lYbiDDxo1pJV1/5N/we667rsvcILjaf881ZR94rEs73cPatC3uPevz8/Vi8rYpwOKhjk3ipFbFAEwbNKrYqIGnq2aAJQciiowcGpAcigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApGbApScCoycmgAzmiignAoAM01npGbNMZ80AKzYqKR804nAqMnJoARmxUEr8U6abniqs8mASTQBz/AMQNYXS9Eupmb/Vxsf0r+c//AIKW+OJPip+221uH8yOzmZiM56fL/Miv3u/au8aDwp8JtZu9wXy4GwfwNfznnUn+J/7WWv6nJmRUuNit16sSf5LX0nCGDeKzihS/vX+7U+O8QMx+pcP4qv8A3Wv/AALT8mz6E8GWP9n6Bbx9NqCui0G4+zanE3owrNsYvJtlX0AFWYH2TK3vX9rRppUuTyP83p1XKq6nnc+tP2UfFq+F/wBpz4eai3yw6ul3oc7+glh82P8AOW3Qf8Cr9KdFuVZfrzX5C+HPFJ8P+EdJ8QKzK/hfU7PVsr1CwTo7/mgcfjX6yeG9QW5to3VtysAQwPUV/I/iZgfq+dSn/Ok/mvd/RH99eDGZfWuHIwvrTk18naX5tnVC4waHn/yKpx3SqvXNV7vVPLH3gtfnp+sFy4vNorn/ABJ4uttDsJ7q5uIbe3t0aSWaVwqRqBksSeAAATk9MVwf7Qn7Tnhn9nzwfNrHiXUo7WEZWC3U7ri8k7RxR9XY/kByxABI/M39qb9tLxZ+1bqMtrM02g+DlcGHSIpfmugpyr3LDHmNkBgn3FIXhmXefsOFeC8wz2raguWmvim9l5Lu/JfNo/P+OvEfKuGKF8VLnrNe7TT95+b/AJY+b+SZ7d+2H/wVHuPEM154Z+Fs+2HJiuvEZXr/AHhaqevp5rcddgOVkHxptIuZriaWa6vLmRpZ55nMkkzscs7MeWYkkkk5JNKu2FNka7VHpTa/qfhnhHAZJQ9lhI+8/ik/il8+3ZLQ/h3jTj3NeJcV7bHz9xfDBaRj6Lq+7er9LATuNFFFfUnxIUUUUAFBOKbJKIxk1x3j74u6f4OtW3TK0uOFBrnxGJp0Y89R2R04XCVsRNU6MW2zp9U1mDSoGkmkWNVGeTXiPxz/AGs9N8EabNtuo4lXI3k8k+gHUn2FeFfH39tmbVtQbTdF3ahfSP5aRw5ZFY8AccsfYVsfsxf8E2fGf7TXiGDXPHEl1bWDkOtrkq7LnODj7g9l556g1+J8XeK1KhzYbLvel36L+uy/A/pHw/8AAutieXGZx7kN0ur+XT1fyTPNh4o+IH7X/ixtK8KWd0tnI+yW5bKqoP8Aefnb1+6uW/CvfYv+CRFz4J+FT6pJLJf6z5e9nZcYOOirzt/U+9foj+zx+yF4b+Cfh63s9N022hEKgAJGBj/Jr1i78HQ3Vi8MkatGwwQR2r8BzDMsTjarrYmblL+tux/VmU5Pg8toLDYKChFduvq+p/O38Rfh7c+HdTm0++jkgmhc7GxhkI6EV6d+y9+0le6FrUelanNt1CH7jk/LeIO/+9j8/rmvuj/goZ/wT+h8R2Fxrmi24WZQXYIvWvzC8ceCrjQ9Ve2nElteWcmYpBlWjYHg/pXXkeeYjK8SsRQfqu6/z7M8/ibhrC53g5YTEr0fZ/5d1+tj9P8A4eePrbxlpMcscil8cjNdMDkV8B/sr/tO3NlqK6fqEnlalb8OmcLcqP419/Ufj06fbngbxvbeLtLjmhkViw5Ga/rnhXijD5tho1IPX+vxP4F454JxeQ42VKrH3b6Pp/wx0FFGc0V9cfBhRRRQBJaXb2codDgivbvgH+0NceHL+3hnuJI/LYNHIrbWjYdCD2NeG1JBO1vIGU4Irz8xy2jjKTpVldM9TKc2xGX1418PJppn7Afs6/tLWvxFsIbG/mjj1QL+7cYCXg9R6OOpX8RxkL7VZXwYDmvxy+CPx6uPDN3DBcSv5asCrBsMhByCD1BHXIr9C/2a/wBqm38aWlrp+qXEZupMJb3OQFuD2Vuwc9uzHjg4B/lvjfgGtldR4jDK9Pdrt/wPy9Nv7c8NfFTDZ3SjhMZJRrbJv7Xk/P8AP13+koLj3/8ArVcjl31gWN+HUEGtK3uMj/PFfmZ+0GgGxTwc1BHNvH+eaeDigCZWzTgcVGGzTlagCYHIoqMHFPVs0ALRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUU1zigBGOTSUUUABOBUZOTSs2TSUANc02gnmmO9AAzZNRTSce1DNmq9w+40AMllz0qpfSbIjU8j4rK1m62xNzjigD5F/wCCs3xRXwH+zlrDeZsaWFlH5V+IX7JOnHW9f1DVWG77VcySZ/Hb/wCy1+j/APwcDfFv+xfhiNNjkx5wwQDXwj+yP4bOkeDIWZfm2AE+pxz+tfq3hHgPbZu6z2gvzf8AwD8L8fs0+r5BHDp61Jfgl/wUeyoNq0oODQOKK/qo/hs9S+Far4h8KalpcmCt1bvCQfRlI/rX6RfsafEFvH37NngvU523XUmlQRXLZzmeNfKl/wDH0avzJ+BuoeVrqwlsCTivtP8AYc8eW3gH4W+KNJ1C4hsbXwrrd05kmlEccVvOq3YcseAoMzjJ4+U1/OfjJgbVKOIj3a+9Jr8mf139HbNL0cRhZPSyl6craf8A6UvuPrmXWFgj+9+Oa+Yf2xv+CjWh/AM3Gh6GsPiLxkyYFrHJmDTyejXDjoe/lr85GM7Awevn79q7/gpdqnj57nw98OZrjTdNIMV1rrKUuJ88EWwPMa4/5aEB+TtCYDH5Ugt47Pdty0khLO7HLMx5JJ7k9a5eCvCmti+XGZwnCnuobSl6/wAq8t35Hd4keOmHwHNl/D7VSrs6m8I/4ekn5/CvPptfEX4g6/8AGDxjN4i8WapNq2rTDapfiO2TORHEg4RBnoOpJJySScdn3fT0ppOTRX9GYTB0cNSjQoRUYx0SSskfyFjsfiMbXlicVNznJ3bbu2/NhRRRXUcYUUVHNOsK7mIA9TRe24EhOKz9a8RW2iWzSTyKiqM8muP+I/xw07wZayfvkaRQT16V8ffGz9snUvG+s/2T4bjm1S+ncxoIVLqD/sgcsfpx9a+N4k40wGU026sry6LqfoPB/hzmmfVlGhBqPVvZL1/ryPdfj3+2Fp3gywkVLpY15C45dz6KO9fNejQfET9tHxObHw/a3NrpMkmyW5bO3Hfcw+8f9lfbJ717D+yn/wAEs/E3xu1qHX/iBJOY5CHFoX6j0dh2/wBleOOpHFfpz8CP2WtA+EeiW9ppun28KwqEXZGFCgdgK/mvifjzH5vJxTcKfZbv1/yX4n9k8FeFuV5DBTcVUq92tE/Jfq/lY+Yf2KP+CUmg/COC31PVoBqOsMoLzzqCwPcKP4V9h+JNfc3gr4a2+i2kcNtbxwxqMAKtdDoXhTaFwuMV1uk6AI1+79MivhT9OM3SvCgjjHy/pVq68O4i4X610ltp2wDj9OtST2fmJ91aAPJ/GXhCHU7OWGaPdHICCMV+a/8AwUV/4J/MXuNe0S39XdUWv1i1vSRKp+XFee+O/A8GuWE1vcRLJFICCCM0Afzh+KPDF1o+qDmSz1KyfMUoyrIwP8q96/ZX/akmivFsb5vs+o2/E0JOFlH99f6j+lfSX/BQ3/gny1pNc67odsccuyotfnl4k8N3mi6srK0ljqdi+YpR8rKR2Pt/n1B+g4d4hxGU4lVqL06rv/wT5Xi3hPCZ9g3h8QlzfZfbyfl/w5+p/grxra+LNMjmhkVtw5Ga3s5r4P8A2WP2qJVu1s7xvs+oW/E8BOBIP76f1Hb6c19peCfG1r4s0yOaGRW3DkZ6V/W3DHFGGzbDRqU5an8E8acF4zIcZKjWi+W/9fLszeooBzRX1R8OFFFFADo5Wifcpwa9L+D/AMbLjwndrDM5kt24ZWPavMqVWKHIrlxeDp4im6dRXR2YHH1sJVVai7NH6k/sx/te2+q2NtY6xeLJbsAkV47fNF6CU+n+2en8XGWH05p2prMisrZzX4p/C34uXngvUE/eMYs8qTX3N+yt+2JHaWdvZ3kzXGl8Lj70lmP9kdWQf3eoH3em0/zbx14cVMLKWLwEbx3cV+n+X3dj+xfDHxgo46EcBmsrT2Un+T/z+/ufbdvc7h/SrsM4YVynh3xLb63YQ3VpcR3FvMoeORG3KwPcGty2ud496/G3daM/oZNNXRpg4p6tmq0FxuGP8ipgaBkqting1Cr04HBoAmVs06ow2acr0AOooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAJwKjJyac5ptABTXalY4FMoAKa7UrNionbmgBGbNRE5NOdqjdsUANlk4xVaSSnzPhfrVV2oAZcy7VrnfE97stpGPpWveT4B/ziuD+KGurpXhq9nZtvlxM+c+1AH4m/8F2/iY3jT416doMbM6GdVZQe27n9Aa5r4L6P/ZXg21XbgsoNec/tt+LW+K/7b867vMjs5HYYPfO3/wBmNey+FrMWOjQRgfdQV/RXgvgOXDVcU/tO3yX/AAbn8h/SNzTnxtDAxfwxu/Vu/wCVjSooor92P5jNHw1rT6HqKTIdrKciur8T/E9tdsb6NpJtupeSbmPzD5UhiBCEr0yATya4OjNefissw+IqQqVoqTi7q/R915np4LOMXhKU6OHm4xmrSSdrp7p+TtsPeQDhRtX2plFFd6VjzAooopgFBbFQ3V5HaRlnYKo7mvMvit+0Vpvgmxm23Ee6MEs7MAqfU1x4zH0MLTdStJJI9DL8rxONqqlhouTZ3niPxfZ+G7VpLiZVCjOM184/tCftpWPhS1kijuNrsDsijOZJPoOw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ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKCcUAFFNMijvR5q+tADqKaZlHrSeePegB9FM88e9Hnr70APopvmr60CRT3oAdRQGzRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUADHAqOlY5NJQAE4FRk5NOc5ptACMcCo2OBSscmmMcmgBkhqOQ4WnueagkfcfagBk0nWq0j7VpzycfU1Vll3GgCO4k2pWZfXXlj3qe/vAgNc5rmsLAjHdQBS8S6usEb5avyn/4LY+Nbjx5c2HhHTZt11ev84U5MafxMR6D+eBX1Z+2r+3tp3wZM3h/Q0h1rxdNH/x778w6cGGVecjnoQwjBDMCOVBDV+fupfa/EviG61vWrqTUtYv23z3Ev3mPYAdFUdlAAHYCv07gfw6xOcTji8UuSgn85+S8u7+7y/FfEzxewXD8JYDBNVMU1ay2h5y8+0fvt15T4RfD2LwD4Yt7SNdvloF+gArr6AMUV/VeGw8KFNUqaslofwzi8VUxNaVeq7yk7sKKKC2K3OcKbJMsa5JrM8QeLLTw9atJcTKgUdCa+evj7+2Zp/hG0kjS5Ee4YRV+aST/AHR/XpXi5tn2Ey+k6uImkkfQZDwzj82rqhg6bk35Hsvj/wCMWneDrZt0ytKB90Gvkb49/tvSalfSafo+7ULyRvLSOIkopJxgkcsfYfpXF+HtK+JH7Z/iL7JodrdWejyPtkuDnaRnnLdWP+yvHYnvX3z+xd/wSa0L4Vx22paxD9v1bALTzLlge4UdFHXgfiTX888WeKeIxjdDL/dj/N1+S/z+4/rXgTwPwmXqOJzb3578vRer/RfefIn7Of8AwTt8d/tS6/b6x4wku7LTXIdbf7sjKecY6IPYfN64Nfp1+zR+w94Z+B+hW1rp+m28ZiUdE6n1J7k9z1Ne0eCPhfa6BaRw2ttHDGowABiu+0fwwsIHy/pX5HUqzqSc6jbb3b3P3+jRp0YKnSioxWySskYfh7wWsCKFjCqOwFdZpXh9YQML+NaVjo+wdPyrSgtFj61maFex0oL2/Gta1sQBwP8A69JAV6Dp6Vct8AjGOPrQBLDZ4A/U1etrTFR28gY+3tmr1uVoAktrXNXYYM1HbMpPpV+ALQA2K24qYR4HFSrGAKZJIAPvY+goAjKVDNAB24/lUj3CgdfzNV3u8nr+tAEc0Oap3FuM9BVmS5GarT3AoAz7q3rPuLfNak8qt/8ArqrKu4UAYOo2AdemR2rl9c0DKnA/+tXdzwbhWdeacrCgDyHxN4WS8gkikjV0YEEEda+J/wBuX/gn5YfEXSLrUNLtVjvFBb5V5Nfojreg793y1x3iDw6sqMrIGVuDkdaAP51Pi38GtQ8AarcafqlrIqoxAJXGPcGovhN8bdS+EWpQ219NNPpO4CG4GS9t7H1X2/L0r9hP2xf2GdK+MGhXE1vapHe7SQQvOa/KX9oL9mjWPg1rlxa31m7W+4jJXKkV3ZfmFfBVlXw8rSX4+TPNzbKcLmWHeGxceaL+9ea7P+nofXXwN/aLtfFNhbxzXEcgkUGORWyrj1Br2S1vEu4g6MGVuhFfk/4I8e6p8HtR8y1Ml1pLNukt93zQ+rKf8g9/Wvsz9nb9qu18QadBuuluLd8Luz80Z9GHY1/S3BPiJQx8Fh8S+Wa7/wBar+mfxn4k+EeJyqo8VglzU32/Lyf59D6aoqjo2uQazarLDIrKwzwavZzX61GakrxPweUZRfLJahRRRVEhQDtNFFAHS+B/iNe+EL5JIZWCqema+uf2Y/2zLjQJ41iuFaORgZrOVsRzHuR/dbH8Q9sggAV8Q1c0jXJ9HuVkhkZWU54NfN59wzhM0ounXinf+v6Z9fwrxlmGSYiNbDTat/X9LY/a74XfGLSfiXpYmsJwJkA822cgSwn3HcejDIPPcEDuLXUN+Nx/GvyV+Bf7U134d1G2aS6lt7iAgxTo2GX/ABB7g8EcHIr7u+BP7XGneOLa3tdWmgtLx8KlyGCwXB7Z/uMfQ8E9CCQtfzHxXwDjMpm6lNOVP8V6915/ef2nwL4qZfntONKtJQrdujfl2fk/k+h9FQ3OPpVqOYOK56y1LI68fzrSt7rdyp+or8/P1Y0Q2KkDZqrDcbutTBs9KAJQ2Ker1Cr06gCdWzS1CHqRXoAdRRmigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACijNNL0AOpC6jvUTyFqbmgCQz+1NMzGmFgB1phmHqPzoAlLk96TNRGQf3h+dIZlH8VAEu4UbhUH2haPtP+c0AT7hRuFV/tP0o+0fSgCxuFG4VX+0fSj7R9KALG4UbhUH2n/OaBcigCfcKUSY71X+0LR9oWgCyJyP4qUXGarCdT3pRMp/ioAtCbNOD5qoJF/vD86US4/iH50AXM5oqvHPUqzA9eKAH0UA5ooAKKKKACiiigAooooAKKC2KY0u0UAPoJxUJkY96aW5oAmMqjvSGce9QNIq96aZc/xD86ALHn+1NM/0qDePUfnSeYv95fzoAsfaP84o8+q/nL/epDOooAs+fR5/1qr9oWj7QtAFsTj+9SiTPeqvnL/eoEqn+IfnQBc3mgPVUT4/i/WnC6H+z+dAFoHNFVxcqT1/WpEmz1oAkooooAKKKCcUAFNds0M2abQAUjHApaYxyaAEprmnE4FRk0ANc4FMY4FKTk1HI+OaAI5n/hqvI/y06R81Wml/+tQA2V8f0rOvr5YV606/vhEp5rhfid8UNJ+Hfhy81bWtQttN06wjMk9xcSBEjHTkn1JAA6kkAc04xcnZbkykopyk7JGlr+vrbRMWYBRyc18C/tof8FI5NWubvwn8NbpZZcmK91+MhooR0KW3Z29ZPuqPu7idyeb/ALYP7e2tftK315oPhmS80XwO2YZpTmK61leh3944T08vqy/fxuKDwe3t47KERxKFUelfvPAnhW58uPzqOm8af6z/APkfv7H8ueKHjkqfPlXDkrvVSqrp3UP/AJL/AMB6MbbWn2aSSWSSS4urh2lmmlYv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TeEi1rZa7eXT/NfivI/pfgvx8fu4fOFzdObr/k/nZ+Z+rlrqufvGr0VysvQ18r/B/wDbjsdegii1pUXPH2u1BZfq8fLD6rnJPQCvfvDfjKz8Q2KXVjd291byfdkhkDqfxHcelfiuZZTi8BU9nioOL/B+jP6QyfPsBmlL2uBqKS7dV6rf9DsUn/GpUkz0NY1rq27735irsVysnQ15p7BfD5paqpPj3qZJc9DQBJTllK+9Rh6dnNAEyyq1OqvTlkZaAJqKYswPXing5oAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAGueKbSsctSUABOBUbNTnNRucmgBtNc4FOJwKhkagBsjZFQySbfrUkrbVqrK+2gCK4fFULxtw/CrEz7uaz72bmgCnehQMfnXK+JLVZFZccV0l5PvzWDrLbkI4oA+bf2vfBEfiz4W6xaugbdA2OPavzJ/YEuW8L+LdR0Vvl/s+9uLVU/uIkrBB/wB8ba/W74xWC3ugX0eM742H6V+SvwstW8H/ALYvjCz27FbUxKg9VaGL/wBmDV+O+OWBWI4YnLrGSf4Nf5H3nhziHSziK/mVvxR9pRnKCnVHatvt1PtUlf52n9UBSO21c0tWLKz+3Fox3FVCLk+VClJJXZjv4jtYrjy2lVW9CavRTLMoZTnNfmb+2T+2F4q/Zz/bX8SeH9UkuJPDMBt5LeWKP57HfCjEkDlkJJJ7jPGelfUH7MX7Ylh480q0juLuGUXCBoplcMkoPQg1+jZ34a5nl+XUMztzU6sIzTXaST+9X1X6anyuX8XYPFYqphL2lCTi0+6dvufQ+lKKr2GoR6hAskbKysMgg1Yr84aadmfV7hRRRSAKKKKACgHBoooA3vCXjW48O3SsrttzyM10F14bub7xGfGfgG/h0Hxmqj7TC/8Ax5a2g58udPU9nHIP4EcDWjoXiGfRbpZI3ZcH1r9A4J8QMw4fxUatCb5eq8uzXVeR8xxFwzhc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UoXFADAuadsp1FADfLo2U6igBuyjZTqKAG+XTSMVJRQBHRtzTymaTZQBHso2U/YaNpFADNlHl0/YaXYaAI/Lo2VJ5dLsoAi2UbKmxSbRQBFso2VLsFGwUARbKNlSeXRsoAj8ujy6fsNGw0AM8ujZUmw0bKAI9lGypNlGygCPy6PLqXYKTZQBHso2VJ5dJsNADClN8v2qTGKKAI9nt+lBX2qSigCLYKUL7VJRQBHt9v0pdhp9FADQlKFxShc04JQA2gDNPCYpaAGhMU6nBKcBigBoSndKKKACijrTlXFAAqU6iigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooACM00pinUUAR0VIRmmlKAG0UEYooAKMZoooATYKTZTqKAG7KNlOooAbspdgpaKAE2gUuKKKACiiigAooooAKKKKACiijGaACijFGKACijFGKACil2GjYaAEopdhpdhoAbRTtlGygBtFO2UbKAG0U7YaTYaAEoo2kUYoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACjbmiigBuyjZTqKAGbSKSpKOtAEdGKfsFJsoAZtFGwU/ZSbDQA3YKNgp2w0bDQA3YKNgp2w0bDQA3YKXFLsNLsoAbRTtlHl0ANop2yl2CgBlFSYoxigCOipKKAI6KkooAjoqSigCOipKKAI6KkooAjoqSigCOipKKAI6Kk60YoAjoqTFGKAI6KkxRigCOipMUYoAjoqTFFAEdHWpKKAI8Uu00+igBuw0bKdRQA3y6PLp1FADdlGynUUAN8ujy6dRQA3ZSbDT6KAI8GipKKAI6KkxSbRQAzFJsFSbKTZQAzYKNgp+yjZQAzYKXFO2UuwUAMoqTbRQBHil2Gn0UAN2UeXTqKAG7KNlOooATYKNgpaKAE2Ck2U6igBuyjy6dRQA3ZSbDT6KAGbTSYqSigCPFGMVJRQBHRUlFAEdFSUUAR0VJRQBHRUlFAEdFSUUAR0VJRigCOipMUm0GgBlFP2CjYKAGUYzTtlGygBm0GjYKfso2UAM2CjYKfspdgoAZtxR0qTbijGKAIwM04JTqKAGhKd0oooAKKKUJmgBKcEzShcUtAABiiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKCuaKKAG7KPLp1FADdhpNhp9FADNho2Gn0UAM2GjYafRQA3ZRsp1FADfLo2U6igBNgo2ilooAMUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFGKKKADbmk2ClooATYKTZTqKAG7KNlOooAbspdgpaKAE2CjYKWigBuyjZTqKAG+XRsNOooAZtIpKkooAjoqTbmm7KAG0U7y6NhoAbRS7SKTFABRRRQAUUUUAFFGM0YoAKKXaTRsNACUU7ZR5dADaKd5dGygBtFO2UuwUAMop+wUbBQAyin7BRsFADKKfsFGwUAMop+wUbBQAyin7BRsFADKKfsFGwUAMop+wUbBQAyin7BRsFADKKdso2UANop2yjZQA2in7BRsFADKKfsFLtxQBHRUmKKAI8ZowakooAZsNGw0+igBuw0bDTqKAGbDRtNPooAjxRUlFAEdFSYpNooAZRTtlHl0ANop3l0bKAG0U7ZRsoAbRTtlHl0ANop2yl2UAMoqTbijpQBHjNLtNPooAbsNGynUUAN2UeXTqKAG7KNlOooAbsNJsNPooAj2mjFSUUAR0VJRQBHRUmKMUAR0VJijFAEdFSYpNgoAZRT9go2CgBlFP2CjYKAGUU/YKNgoAZRTtlGygBtFO2UeXQA2ineXRsoAbRTtlGygBtFO2GjZQA2inbKNlADaKd5dGygBtFP2gUtADApNKEp1FAABiiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9k=';



    var imgData1 = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAAfAzIDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDDooor/QA/ynCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiivUvgp8FP7X8rWNYi/0Th7a2cf8AHx6O4/ueg/i6n5fvfnXih4oZFwFkVTPs+qcsI6QgvjqT6Qgusn90VeUmops+/wDDbw2zvjjO6eSZJTvN6yk/gpw6zm+iX3ydoxTbSLPwA+FEn2iPXtSgTytu6yikX5i3BE2Ow/u5653DGFJ9hoor/CHxf8WM48Q+IqnEGb+7f3adNNuNKmtoRvvu3KWnNJt2Ssl/tn4U+F+U8BZBTyLKvet71So1aVSb3k7bdox15YpK7d2yiiivy4/SgooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD5Dooor/AKdD/nDCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKK9P+Bvwcj8QpFreqKkliGP2a3PInZSQWf/ZBBG3uRzx97898UPE3JOAsgq8Q59O1OPuxiviqVGm404LrKVm+yScpNRTa+98NvDnOeN89p5DkkL1Jayk/hpwTSlOb6RV15ttRScmkP+CnwU/tfytY1iL/AETh7a2cf8fHo7j+56D+Lqfl+97VRRX+E3jF4xZ74jZ7LOc5lywjdUqSfuUofyx7yejnNq832ioxj/td4TeE2SeH+SRynKY3m7OrVa9+rPu+yWqhBO0V3blKRRRRX5MfqIUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAf/9k='
    var imgData2 = 'data:image/jpeg;base64,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';
    var doc = new jsPDF()

    addBorder()


    doc.setFontSize(12)
    doc.text('+91 8050401092', 165, 35)
    doc.text('nanointeriors08@gmail.com', 151, 40)
    doc.text('created by:- ', 151, 45)
    doc.text('ArunKumar R', 174, 45)

    doc.setFontSize(13)
    var img = "";
    doc.addImage(imgData, 'JPEG', 9, 30, 55, 25)
    doc.addImage(imgData1, 'JPEG', 8.4, 9.4, 194.2, 6)
    doc.text('Date: ', 13, 65)
    doc.text(''+this.date, 25, 65)
    doc.setFontSize(13)
    doc.text('Dear Ms/Mr. '+this.name+",", 13, 71)

    doc.setFontSize(14)
    doc.text('Greetings from Nano Interiors.', 13, 85)
    doc.setLineWidth(0.8)
    doc.line(13, 86, 50, 86);
    doc.setFontSize(12)
    doc.text('Nano Interiors, exult in successful delivering for more than 1000+ interior designs with the Upmost', 13, 95)
    doc.text('Professionalism. Our experience ensures that your projects will be done Right and with excellant', 13, 100)
    doc.text(' Designs and Fully Featured services.', 13, 105);

    doc.setFontSize(16)
    
    doc.setFont("Helvetica", "", "bold");
    doc.text('Nano Interiors:', 13, 120)

    doc.setLineWidth(0.8)
    doc.setDrawColor(255, 0, 0)
    doc.line(25, 135, 45, 135)
    doc.line(25, 150, 45, 150)
    doc.line(25, 150, 25, 135)
    doc.line(45, 150, 45, 135)

    doc.line(67, 135, 87, 135)
    doc.line(67, 150, 87, 150)
    doc.line(67, 150, 67, 135)
    doc.line(87, 150, 87, 135)

    doc.line(109, 135, 129, 135)
    doc.line(109, 150, 129, 150)
    doc.line(109, 150, 109, 135)
    doc.line(129, 150, 129, 135)

    doc.line(151, 135, 171, 135)
    doc.line(151, 150, 171, 150)
    doc.line(151, 150, 151, 135)
    doc.line(171, 150, 171, 135)

    doc.setFontSize(8)
    
    doc.setFont("Helvetica", "", "normal");
    doc.setTextColor(255, 0, 0)
    doc.text("UNMATCHED", 25, 153)
    doc.text("PRICE:", 31, 156)

    doc.text("CREATIVITY &", 67, 153)
    doc.text("QUALITY:", 70, 156)

    doc.text("WARRANTY &", 110, 153)
    doc.text("SERVICE VISITS:", 108.5, 156)

    doc.text("60 DAYS &", 154.5, 153)
    doc.text("EXECUTION:", 153, 156)

    doc.setTextColor(0, 0, 0)
    doc.setFontSize(8)
    doc.text("We assure you of never heard", 18, 160)
    doc.text("before prices for the given quality &", 14, 163.5)
    doc.text("services", 30, 167)

    doc.text("We use quality materials.", 63, 160)
    doc.text("Plywood, before prices for the", 60.5, 163.5)
    doc.text("given quality & etc.", 66, 167)

    doc.text("We provide comprehensive", 103, 160)
    doc.text("warranty of 10 years with regular", 101, 163.5)
    doc.text("service visits every 180 days post", 100, 167)
    doc.text("project delivery.", 110, 170.5)

    doc.text("Assured Turn around time", 147, 160)

    doc.setFontSize(11)
    doc.text("Referring to our discussions, kindly find attached our proposal for designing your lovely home and in the ", 13, 180)
    doc.text("meantime, kindly go through our website www.nanointeriors.com for completed projects by us; we are sure ", 13, 185)
    doc.text("you will end up loving our work like our other customers have!", 13, 190)

    doc.setFontSize(12)
    
    doc.setFont("Helvetica", "", "bold");
    doc.text("Looking forward to making your home a beautiful ", 13, 250)
    doc.setTextColor(255, 0, 0)
    doc.text("#nanointeriors", 113.5, 250)

    //Signature
    
    doc.setFont("Helvetica", "", "normal");
    doc.setTextColor(0, 0, 0)
    doc.text("Yours Sincerely,", 162, 260)
    doc.setTextColor(255, 0, 0)
    doc.text("("+this.name+")", 157.5, 277)
    doc.setTextColor(0, 0, 0)
    //adding new page
    doc.addPage();
    addBorder();

    doc.setFontSize(24)
    doc.addImage(imgData, 'JPEG', 145, 20, 55, 25)
    doc.addImage(imgData1, 'JPEG', 8.5, 9.5, 194, 5)
    
    doc.setFont("Helvetica", "", "bold");
    doc.setTextColor(0, 0, 0)
    doc.text('QUOTATION', 13, 25)
    doc.setTextColor(255, 0, 0)
    var initHeight = 60;
    var space = 15;

    for (var i = 0; i <= 9; i++) {

      if (i === 0) {
        doc.line(45, initHeight, 160, initHeight)
        doc.line(45, initHeight + 10, 160, initHeight + 10)
        doc.line(45, 60, 45, 265)
        doc.line(160, 60, 160, 265)
        doc.setFontSize(12)
        doc.text("SUMMARY", initHeight + 28, initHeight + 7)
      } else if (i === 9) {
        space = space + 60
        doc.setTextColor(0, 0, 0)
        doc.text("TOTAL QUOTATION", 75, initHeight + space - 57)
        doc.text("VALUE", 75, initHeight + space - 53)
        doc.text(""+this.totalQuatValue, 140, initHeight + space - 57)
        doc.text("DISCOUNT @ "+this.discount+" %", 75, initHeight + space - 45)
        doc.text(""+this.discountAmount, 140, initHeight + space - 45)
        doc.line(140, initHeight + space - 44, 155, initHeight + space - 44)
        doc.text("SUB TOTAL", 75, initHeight + space - 38)
        doc.text(""+this.subTotal, 140, initHeight + space - 38)
        doc.text("GST @ 18%", 75, initHeight + space - 30)
        doc.text(""+this.gst, 140, initHeight + space - 30)
        doc.text("TOTAL", 75, initHeight + space - 22)
        doc.text(""+this.customerTotalAmt, 140, initHeight + space - 22)
        doc.text("TOTAL CUSTOMER", 75, initHeight + space - 12)
        doc.text(""+this.customerTotalAmt, 140, initHeight + space - 12)
        doc.line(75, initHeight + space - 20, 157, initHeight + space - 20)
        doc.text("OUTFLOW", 75, initHeight + space - 8)
        doc.line(45, initHeight + space + 10, 160, initHeight + space + 10)
      } else {
        doc.setFontSize(9)
        doc.setFont("Helvetica", "", "normal");
        doc.setTextColor(0, 0, 0)
        doc.text("" + i, 47.5, initHeight + space + 1)
        doc.setTextColor(255, 0, 0)
        doc.setFont("Helvetica", "", "bold");
        doc.text(this.summaryObject[i-1].label, 55, initHeight + space + 0.9)
        doc.text((this.summaryObject[i-1].amount) !== "" ? (this.summaryObject[i-1].amount) : "0.00", 140, initHeight + space + 0.9)
        doc.setDrawColor(0, 0, 0)
        doc.line(45, initHeight + space + 10, 160, initHeight + space + 10)
        space = space + 15
      }
    }


    //adding new page
    doc.addPage();
    addBorder();

    doc.setFontSize(24)
    doc.addImage(imgData, 'JPEG', 145, 20, 55, 25)
    doc.addImage(imgData1, 'JPEG', 8.5, 9.5, 194, 5)
    doc.text('QUOTATION', 13, 25)
    doc.setFontSize(14)
    doc.setTextColor(255, 0, 0)
    
    doc.setFont("Helvetica", "", "bold");
    doc.text("FOYER", 94, 60)
    doc.setTextColor(0, 0, 0)
    doc.setFontSize(8)
    doc.line(12.5, 65, 198, 65)
    doc.text("S.NO.", 15, 69)
    doc.text("PARTICULARS", 28, 69)
    doc.text("CORE MATERIAL", 63, 69)
    doc.text("FINISH TYPE", 95, 69)
    doc.text("AREA/QTY", 122, 69)
    doc.setFontSize(6)
    doc.text("(In Sq Feet)", 124, 73)
    doc.setFontSize(8)
    doc.text("COST", 155, 69)
    doc.setFontSize(6)
    doc.text("Per Sq Feet/Qty)", 147, 73)
    doc.setFontSize(8)
    doc.text("TOTAL COSTING", 172, 69)
    doc.line(12.5, 75, 198, 75)
    /////foyer page 
    const foyerArray = this.finalDataArray[0].foyer;
    for (var i = 0; i < foyerArray.length; i++) {
      if (i <= 10) {
        doc.text("" + (i + 1), 15, 80 + (i * 18))
        if ((foyerArray[i].particulars_header).length > 16) {
          var sub_he = substringArray(foyerArray[i].particulars_header, 16)
          if (sub_he.length > 0) {
            for (var j = 0; j < sub_he.length; j++) {
              
              doc.setFont("Helvetica", "", "bold");
              doc.setTextColor(255, 0, 0)
              doc.text("" + sub_he[j], 28, 80 + (j * 3) + ((i) * 18))
              doc.setTextColor(0, 0, 0)
            }
          }
          
          doc.setFont("Helvetica", "", "normal");
          var he = substringArray(foyerArray[i].particulars_sub_header, 24)
          if (he.length > 0) {
            for (var j = 0; j < he.length; j++) {
              
              doc.setFont("Helvetica", "", "normal");
              doc.text("" + he[j], 28, 87 + (j * 3) + ((i) * 18))
            }
          }
        } else {
          
          doc.setFont("Helvetica", "", "bold");
          doc.setTextColor(255, 0, 0)
          doc.text("" + foyerArray[i].particulars_header, 28, 80 + (i * 18))
          doc.setTextColor(0, 0, 0)
          
          doc.setFont("Helvetica", "", "normal");
          var he = substringArray(foyerArray[i].particulars_sub_header, 24)
          if (he.length > 0) {
            for (var j = 0; j < he.length; j++) {
              
              doc.setFont("Helvetica", "", "normal");
              doc.text("" + he[j], 28, 84 + (j * 3) + ((i) * 18))
            }
          }
        }
        doc.text("" + foyerArray[i].code_material, 68, 80 + (i * 18))
        doc.text("" + foyerArray[i].finish_type, 97, 80 + (i * 18))
        doc.text("" + foyerArray[i].area_or_quantity, 124, 80 + (i * 18))
        doc.text("(" + foyerArray[i].aq + ")", 124, 83 + (i * 18))
        doc.text("" + foyerArray[i].cost_per_quantity, 147, 80 + (i * 18))
        doc.text("" + ((foyerArray[i].total_costing)) , 172, 80 + (i * 18))
        if (i <= 9) {
          doc.line(12.5, 93.5 + (i * 18), 198, 93.5 + (i * 18))
        }
      } else {
        let tempI = i - 10;
        doc.text("" + (i + 1), 15, 22 + (tempI * 18))
        if ((foyerArray[i].particulars_header).length > 16) {
          var sub_he = substringArray(foyerArray[i].particulars_header, 16)
          if (sub_he.length > 0) {
            for (var j = 0; j < sub_he.length; j++) {
              
              doc.setFont("Helvetica", "", "bold");
              doc.setTextColor(255, 0, 0)
              doc.text("" + sub_he[j], 28, 22 + (j * 3) + ((tempI) * 18))
              doc.setTextColor(0, 0, 0)
            }
          }
          
          doc.setFont("Helvetica", "", "normal");
          var he = substringArray(foyerArray[i].particulars_sub_header, 24)
          if (he.length > 0) {
            for (var j = 0; j < he.length; j++) {
              
              doc.setFont("Helvetica", "", "normal");
              if ((foyerArray[i].particulars_header).length >= 33) {
                doc.text("" + he[j], 28, 32 + (j * 3) + ((tempI) * 18))
              } else {
                doc.text("" + he[j], 28, 29 + (j * 3) + ((tempI) * 18))
              }
            }
          }
        } else {
          
          doc.setFont("Helvetica", "", "bold");
          doc.setTextColor(255, 0, 0)
          doc.text("" + foyerArray[i].particulars_header, 28, 22 + (tempI * 18))
          doc.setTextColor(0, 0, 0)
          
          doc.setFont("Helvetica", "", "normal");
          var he = substringArray(foyerArray[i].particulars_sub_header, 24)
          if (he.length > 0) {
            for (var j = 0; j < he.length; j++) {
              
              doc.setFont("Helvetica", "", "normal");
              doc.text("" + he[j], 28, 26 + (j * 3) + ((tempI) * 18))
            }
          }
        }
        doc.text("" + foyerArray[i].code_material, 68, 22 + (tempI * 18))
        doc.text("" + foyerArray[i].finish_type, 97, 22 + (tempI * 18))
        doc.text("" + foyerArray[i].area_or_quantity, 124, 22 + (tempI * 18))
        doc.text("(" + foyerArray[i].aq + ")", 124, 25 + (tempI * 18))
        doc.text("" + foyerArray[i].cost_per_quantity, 147, 22 + (tempI * 18))
        doc.text("" + foyerArray[i].total_costing, 172, 22 + (tempI * 18))
        doc.line(12.5, 35 + (tempI * 18), 198, 35 + (tempI * 18))
        if (i === (foyerArray.length) - 1) {
          
          doc.setFont("Helvetica", "", "bold");
          doc.setFontSize(10)
          doc.text("FOYER TOTAL:", 140, 45 + (tempI * 18))
          doc.text(""+this.totalFoyerAmount, 172, 45 + (tempI * 18))
        }
      }
      //adding auto pages and border
      if (i % 10 === 0 && i >= 10) {
        addPage();
        
        doc.setFont("Helvetica", "", "bold");
        doc.setFontSize(14)
        doc.setTextColor(255, 0, 0)
        doc.text("FOYER", 94, 20)
        doc.setTextColor(0, 0, 0)
        doc.setFontSize(8)
        doc.line(12.5, 25, 198, 25)
        doc.text("S.NO.", 15, 29)
        doc.text("PARTICULARS", 28, 29)
        doc.text("CORE MATERIAL", 68, 29)
        doc.text("FINISH TYPE", 97, 29)
        doc.text("AREA/QTY", 122, 29)
        doc.setFontSize(6)
        doc.text("(In Sq Feet)", 124, 33)
        doc.setFontSize(8)
        doc.text("COST", 155, 29)
        doc.setFontSize(6)
        doc.text("Per Sq Feet/Qty)", 147, 33)
        doc.setFontSize(8)
        doc.text("TOTAL COSTING", 172, 29)
        doc.line(12.5, 35, 198, 35)
      }

    }


    ////Living page
    addPage();

    doc.setFontSize(14)
    doc.setTextColor(255, 0, 0)
    
    doc.setFont("Helvetica", "", "bold");
    doc.text("LIVING", 93, 20)
    doc.setTextColor(0, 0, 0)
    
    doc.setFont("Helvetica", "", "normal");
    doc.setFontSize(8)
    doc.line(12.5, 25, 198, 25)
    doc.text("S.NO.", 15, 29)
    doc.text("PARTICULARS", 28, 29)
    doc.text("CORE MATERIAL", 63, 29)
    doc.text("FINISH TYPE", 95, 29)
    doc.text("AREA/QTY", 122, 29)
    doc.setFontSize(6)
    doc.text("(In Sq Feet)", 124, 33)
    doc.setFontSize(8)
    doc.text("COST", 155, 29)
    doc.setFontSize(6)
    doc.text("Per Sq Feet/Qty)", 147, 33)
    doc.setFontSize(8)
    doc.text("TOTAL COSTING", 172, 29)
    doc.line(12.5, 35, 198, 35)

    const livingArray = this.finalDataArray[1].living;
    for (var i = 0; i < livingArray.length; i++) {
      if (i <= 12) {
        doc.text("" + (i + 1), 15, 40 + (i * 18))
        if ((livingArray[i].particulars_header).length > 16) {
          var sub_he = substringArray(livingArray[i].particulars_header, 16)
          if (sub_he.length > 0) {
            for (var j = 0; j < sub_he.length; j++) {
              
              doc.setFont("Helvetica", "", "bold");
              doc.setTextColor(255, 0, 0)
              doc.text("" + sub_he[j], 28, 40 + (j * 3) + ((i) * 18))
              doc.setTextColor(0, 0, 0)
            }
          }
          
          doc.setFont("Helvetica", "", "normal");
          var he = substringArray(livingArray[i].particulars_sub_header, 24)
          if (he.length > 0) {
            for (var j = 0; j < he.length; j++) {
              
              doc.setFont("Helvetica", "", "normal");
              doc.text("" + he[j], 28, 47 + (j * 3) + ((i) * 18))
            }
          }
        } else {
          
          doc.setFont("Helvetica", "", "bold");
          doc.setTextColor(255, 0, 0)
          doc.text("" + livingArray[i].particulars_header, 28, 40 + (i * 18))
          doc.setTextColor(0, 0, 0)
          
          doc.setFont("Helvetica", "", "normal");
          var he = substringArray(livingArray[i].particulars_sub_header, 24)
          if (he.length > 0) {
            for (var j = 0; j < he.length; j++) {
              
              doc.setFont("Helvetica", "", "normal");
              doc.text("" + he[j], 28, 44 + (j * 3) + ((i) * 18))
            }
          }
        }
        doc.text("" + livingArray[i].code_material, 68, 40 + (i * 18))
        doc.text("" + livingArray[i].finish_type, 97, 40 + (i * 18))
        doc.text("" + livingArray[i].area_or_quantity, 124, 40 + (i * 18))
        doc.text("(" + livingArray[i].aq + ")", 124, 43 + (i * 18))
        doc.text("" + livingArray[i].cost_per_quantity, 147, 40 + (i * 18))
        doc.text("" + livingArray[i].total_costing, 172, 40 + (i * 18))
        if (i <= 11) {
          doc.line(12.5, 53.5 + (i * 18), 198, 53.5 + (i * 18))
        }
      } else {
        let tempI = i - 12;
        doc.text("" + (i + 1), 15, 22 + (tempI * 18))
        if ((livingArray[i].particulars_header).length > 16) {
          var sub_he = substringArray(livingArray[i].particulars_header, 16)
          if (sub_he.length > 0) {
            for (var j = 0; j < sub_he.length; j++) {
              
              doc.setFont("Helvetica", "", "bold");
              doc.setTextColor(255, 0, 0)
              doc.text("" + sub_he[j], 28, 22 + (j * 3) + ((tempI) * 18))
              doc.setTextColor(0, 0, 0)
            }
          }
          
          doc.setFont("Helvetica", "", "normal");
          var he = substringArray(livingArray[i].particulars_sub_header, 24)
          if (he.length > 0) {
            for (var j = 0; j < he.length; j++) {
              
              doc.setFont("Helvetica", "", "normal");
              if ((livingArray[i].particulars_header).length >= 33) {
                doc.text("" + he[j], 28, 32 + (j * 3) + ((tempI) * 18))
              } else {
                doc.text("" + he[j], 28, 29 + (j * 3) + ((tempI) * 18))
              }
            }
          }
        } else {
          
          doc.setFont("Helvetica", "", "bold");
          doc.setTextColor(255, 0, 0)
          doc.text("" + livingArray[i].particulars_header, 28, 22 + (tempI * 18))
          doc.setTextColor(0, 0, 0)
          
          doc.setFont("Helvetica", "", "normal");
          var he = substringArray(livingArray[i].particulars_sub_header, 24)
          if (he.length > 0) {
            for (var j = 0; j < he.length; j++) {
              
              doc.setFont("Helvetica", "", "normal");
              doc.text("" + he[j], 28, 26 + (j * 3) + ((tempI) * 18))
            }
          }
        }
        doc.text("" + livingArray[i].code_material, 68, 22 + (tempI * 18))
        doc.text("" + livingArray[i].finish_type, 97, 22 + (tempI * 18))
        doc.text("" + livingArray[i].area_or_quantity, 124, 22 + (tempI * 18))
        doc.text("(" + livingArray[i].aq + ")", 124, 25 + (tempI * 18))
        doc.text("" + livingArray[i].cost_per_quantity, 147, 22 + (tempI * 18))
        doc.text("" + livingArray[i].total_costing, 172, 22 + (tempI * 18))
        doc.line(12.5, 35 + (tempI * 18), 198, 35 + (tempI * 18))
        if (i === (livingArray.length) - 1) {
          
          doc.setFont("Helvetica", "", "bold");
          doc.setFontSize(10)
          doc.text("LIVING TOTAL:", 140, 45 + (tempI * 18))
          doc.text(""+this.totalLivingAmount, 172, 45 + (tempI * 18))
        }
      }
      //adding auto pages and border
      if (i % 12 === 0 && i >= 12) {
        addPage();
        
        doc.setFont("Helvetica", "", "bold");
        doc.setFontSize(14)
        doc.setTextColor(255, 0, 0)
        doc.text("LIVING", 93, 20)
        doc.setTextColor(0, 0, 0)
        doc.setFontSize(8)
        doc.line(12.5, 25, 198, 25)
        doc.text("S.NO.", 15, 29)
        doc.text("PARTICULARS", 28, 29)
        doc.text("CORE MATERIAL", 68, 29)
        doc.text("FINISH TYPE", 97, 29)
        doc.text("AREA/QTY", 122, 29)
        doc.setFontSize(6)
        doc.text("(In Sq Feet)", 124, 33)
        doc.setFontSize(8)
        doc.text("COST", 155, 29)
        doc.setFontSize(6)
        doc.text("Per Sq Feet/Qty)", 147, 33)
        doc.setFontSize(8)
        doc.text("TOTAL COSTING", 172, 29)
        doc.line(12.5, 35, 198, 35)
      }

    }



    ////DINING page
    addPage();

    doc.setFontSize(14)
    doc.setTextColor(255, 0, 0)
    
    doc.setFont("Helvetica", "", "bold");
    doc.text("DINING", 90, 20)
    doc.setTextColor(0, 0, 0)
    doc.setFontSize(8)
    doc.line(12.5, 25, 198, 25)
    doc.text("S.NO.", 15, 29)
    doc.text("PARTICULARS", 28, 29)
    doc.text("CORE MATERIAL", 63, 29)
    doc.text("FINISH TYPE", 95, 29)
    doc.text("AREA/QTY", 122, 29)
    doc.setFontSize(6)
    doc.text("(In Sq Feet)", 124, 33)
    doc.setFontSize(8)
    doc.text("COST", 155, 29)
    doc.setFontSize(6)
    doc.text("Per Sq Feet/Qty)", 147, 33)
    doc.setFontSize(8)
    doc.text("TOTAL COSTING", 172, 29)
    doc.line(12.5, 35, 198, 35)

    const diningArray = this.finalDataArray[2].dining;
    for (var i = 0; i < diningArray.length; i++) {
      if (i <= 12) {
        doc.text("" + (i + 1), 15, 40 + (i * 18))
        if ((diningArray[i].particulars_header).length > 16) {
          var sub_he = substringArray(diningArray[i].particulars_header, 16)
          if (sub_he.length > 0) {
            for (var j = 0; j < sub_he.length; j++) {
              
              doc.setFont("Helvetica", "", "bold");
              doc.setTextColor(255, 0, 0)
              doc.text("" + sub_he[j], 28, 40 + (j * 3) + ((i) * 18))
              doc.setTextColor(0, 0, 0)
            }
          }
          
          doc.setFont("Helvetica", "", "normal");
          var he = substringArray(diningArray[i].particulars_sub_header, 24)
          if (he.length > 0) {
            for (var j = 0; j < he.length; j++) {
              
              doc.setFont("Helvetica", "", "normal");
              if ((diningArray[i].particulars_header).length <= 33) {
                doc.text("" + he[j], 28, 47 + (j * 3) + ((i) * 18))
              } else if ((diningArray[i].particulars_header).length > 33) {
                doc.text("" + he[j], 28, 49 + (j * 3) + ((i) * 18))
              }
            }
          }
        } else {
          
          doc.setFont("Helvetica", "", "bold");
          doc.setTextColor(255, 0, 0)
          doc.text("" + diningArray[i].particulars_header, 28, 40 + (i * 18))
          doc.setTextColor(0, 0, 0)
          
          doc.setFont("Helvetica", "", "normal");
          var he = substringArray(diningArray[i].particulars_sub_header, 24)
          if (he.length > 0) {
            for (var j = 0; j < he.length; j++) {
              
              doc.setFont("Helvetica", "", "normal");
              doc.text("" + he[j], 28, 44 + (j * 3) + ((i) * 18))
            }
          }
        }
        doc.text("" + diningArray[i].code_material, 68, 40 + (i * 18))
        doc.text("" + diningArray[i].finish_type, 97, 40 + (i * 18))
        doc.text("" + diningArray[i].area_or_quantity, 124, 40 + (i * 18))
        doc.text("(" + diningArray[i].aq + ")", 124, 43 + (i * 18))
        doc.text("" + diningArray[i].cost_per_quantity, 147, 40 + (i * 18))
        doc.text("" + diningArray[i].total_costing, 172, 40 + (i * 18))
        if (i <= 11) {
          doc.line(12.5, 55 + (i * 18), 198, 55 + (i * 18))
        }
      } else {
        let tempI = i - 12;
        doc.text("" + (i + 1), 15, 22 + (tempI * 18))
        if ((diningArray[i].particulars_header).length > 16) {
          var sub_he = substringArray(diningArray[i].particulars_header, 16)
          if (sub_he.length > 0) {
            for (var j = 0; j < sub_he.length; j++) {
              
              doc.setFont("Helvetica", "", "bold");
              doc.setTextColor(255, 0, 0)
              doc.text("" + sub_he[j], 28, 22 + (j * 3) + ((tempI) * 18))
              doc.setTextColor(0, 0, 0)
            }
          }
          
          doc.setFont("Helvetica", "", "normal");
          var he = substringArray(diningArray[i].particulars_sub_header, 24)
          if (he.length > 0) {
            for (var j = 0; j < he.length; j++) {
              
              doc.setFont("Helvetica", "", "normal");
              if ((diningArray[i].particulars_header).length >= 16 && (diningArray[j].particulars_header).length <= 33) {
                doc.text("" + he[j], 28, 32 + (j * 3) + ((tempI) * 18))
              } else if ((diningArray[j].particulars_header).length < 16) {
                doc.text("" + he[j], 28, 29 + (j * 3) + ((tempI) * 18))
              } else {
                doc.text("" + he[j], 28, 38 + (j * 3) + ((tempI) * 18))
              }
            }
          }
        } else {
          
          doc.setFont("Helvetica", "", "bold");
          doc.setTextColor(255, 0, 0)
          doc.text("" + diningArray[i].particulars_header, 28, 22 + (tempI * 18))
          doc.setTextColor(0, 0, 0)
          
          doc.setFont("Helvetica", "", "normal");
          var he = substringArray(diningArray[i].particulars_sub_header, 24)
          if (he.length > 0) {
            for (var j = 0; j < he.length; j++) {
              
              doc.setFont("Helvetica", "", "normal");
              doc.text("" + he[j], 28, 26 + (j * 3) + ((tempI) * 18))
            }
          }
        }
        doc.text("" + diningArray[i].code_material, 68, 22 + (tempI * 18))
        doc.text("" + diningArray[i].finish_type, 97, 22 + (tempI * 18))
        doc.text("" + diningArray[i].area_or_quantity, 124, 22 + (tempI * 18))
        doc.text("(" + diningArray[i].aq + ")", 124, 25 + (tempI * 18))
        doc.text("" + diningArray[i].cost_per_quantity, 147, 22 + (tempI * 18))
        doc.text("" + diningArray[i].total_costing, 172, 22 + (tempI * 18))
        doc.line(12.5, 35 + (tempI * 18), 198, 35 + (tempI * 18))
        if (i === (diningArray.length) - 1) {
          
          doc.setFont("Helvetica", "", "bold");
          doc.setFontSize(10)
          doc.text("DINING TOTAL:", 140, 45 + (tempI * 18))
          doc.text(""+this.totalDiningAmount, 172, 45 + (tempI * 18))
        }
      }
      //adding auto pages and border
      if (i % 12 === 0 && i >= 12) {
        addPage();
        
        doc.setFont("Helvetica", "", "bold");
        doc.setFontSize(14)
        doc.setTextColor(255, 0, 0)
        doc.text("DINING", 90, 20)
        doc.setTextColor(0, 0, 0)
        doc.setFontSize(8)
        doc.line(12.5, 25, 198, 25)
        doc.text("S.NO.", 15, 29)
        doc.text("PARTICULARS", 28, 29)
        doc.text("CORE MATERIAL", 68, 29)
        doc.text("FINISH TYPE", 97, 29)
        doc.text("AREA/QTY", 122, 29)
        doc.setFontSize(6)
        doc.text("(In Sq Feet)", 124, 33)
        doc.setFontSize(8)
        doc.text("COST", 155, 29)
        doc.setFontSize(6)
        doc.text("Per Sq Feet/Qty)", 147, 33)
        doc.setFontSize(8)
        doc.text("TOTAL COSTING", 172, 29)
        doc.line(12.5, 35, 198, 35)
      }

    }




    ////KITCHEN page
    addPage();

    doc.setFontSize(14)
    doc.setTextColor(255, 0, 0)
    
    doc.setFont("Helvetica", "", "bold");
    doc.text("KITCHEN", 90, 20)
    doc.setTextColor(0, 0, 0)
    doc.setFontSize(8)
    doc.line(12.5, 25, 198, 25)
    doc.text("S.NO.", 15, 29)
    doc.text("PARTICULARS", 28, 29)
    doc.text("CORE MATERIAL", 63, 29)
    doc.text("FINISH TYPE", 95, 29)
    doc.text("AREA/QTY", 122, 29)
    doc.setFontSize(6)
    doc.text("(In Sq Feet)", 124, 33)
    doc.setFontSize(8)
    doc.text("COST", 155, 29)
    doc.setFontSize(6)
    doc.text("Per Sq Feet/Qty)", 147, 33)
    doc.setFontSize(8)
    doc.text("TOTAL COSTING", 172, 29)
    doc.line(12.5, 35, 198, 35)

    const kitchenArray = this.finalDataArray[3].kitchen;
    for (var i = 0; i < kitchenArray.length; i++) {
      if (i <= 12) {
        doc.text("" + (i + 1), 15, 40 + (i * 18))
        if ((kitchenArray[i].particulars_header).length > 16) {
          var sub_he = substringArray(kitchenArray[i].particulars_header, 16)
          if (sub_he.length > 0) {
            for (var j = 0; j < sub_he.length; j++) {
              
              doc.setFont("Helvetica", "", "bold");
              doc.setTextColor(255, 0, 0)
              doc.text("" + sub_he[j], 28, 40 + (j * 3) + ((i) * 18))
              doc.setTextColor(0, 0, 0)
            }
          }
          
          doc.setFont("Helvetica", "", "normal");
          var he = substringArray(kitchenArray[i].particulars_sub_header, 24)
          if (he.length > 0) {
            for (var j = 0; j < he.length; j++) {
              
              doc.setFont("Helvetica", "", "normal");
              if ((kitchenArray[i].particulars_header).length <= 33) {
                doc.text("" + he[j], 28, 47 + (j * 3) + ((i) * 18))
              } else if ((kitchenArray[i].particulars_header).length > 33) {
                doc.text("" + he[j], 28, 49 + (j * 3) + ((i) * 18))
              }
            }
          }
        } else {
          
          doc.setFont("Helvetica", "", "bold");
          doc.setTextColor(255, 0, 0)
          doc.text("" + kitchenArray[i].particulars_header, 28, 40 + (i * 18))
          doc.setTextColor(0, 0, 0)
          
          doc.setFont("Helvetica", "", "normal");
          var he = substringArray(kitchenArray[i].particulars_sub_header, 24)
          if (he.length > 0) {
            for (var j = 0; j < he.length; j++) {
              
              doc.setFont("Helvetica", "", "normal");
              doc.text("" + he[j], 28, 44 + (j * 3) + ((i) * 18))
            }
          }
        }
        doc.text("" + kitchenArray[i].code_material, 68, 40 + (i * 18))
        doc.text("" + kitchenArray[i].finish_type, 97, 40 + (i * 18))
        doc.text("" + kitchenArray[i].area_or_quantity, 124, 40 + (i * 18))
        doc.text("(" + kitchenArray[i].aq + ")", 124, 43 + (i * 18))
        doc.text("" + kitchenArray[i].cost_per_quantity, 147, 40 + (i * 18))
        doc.text("" + kitchenArray[i].total_costing, 172, 40 + (i * 18))
        if (i <= 11) {
          doc.line(12.5, 55 + (i * 18), 198, 55 + (i * 18))
        }
      } else {
        let tempI = i - 12;
        doc.text("" + (i + 1), 15, 22 + (tempI * 18))
        if ((kitchenArray[i].particulars_header).length > 16) {
          var sub_he = substringArray(kitchenArray[i].particulars_header, 16)
          if (sub_he.length > 0) {
            for (var j = 0; j < sub_he.length; j++) {
              
              doc.setFont("Helvetica", "", "bold");
              doc.setTextColor(255, 0, 0)
              doc.text("" + sub_he[j], 28, 22 + (j * 3) + ((tempI) * 18))
              doc.setTextColor(0, 0, 0)
            }
          }
          
          doc.setFont("Helvetica", "", "normal");
          var he = substringArray(kitchenArray[i].particulars_sub_header, 24)
          if (he.length > 0) {
            for (var j = 0; j < he.length; j++) {
              
              doc.setFont("Helvetica", "", "normal");
              if ((kitchenArray[i].particulars_header).length >= 16 && (kitchenArray[i].particulars_header).length <= 33) {
                doc.text("" + he[j], 28, 28 + (j * 3) + ((tempI) * 18))
              } else if ((kitchenArray[i].particulars_header).length < 16) {
                doc.text("" + he[j], 28, 29 + (j * 3) + ((tempI) * 18))
              } else {
                doc.text("" + he[j], 28, 31 + (j * 3) + ((tempI) * 18))
              }
            }
          }
        } else {
          
          doc.setFont("Helvetica", "", "bold");
          doc.setTextColor(255, 0, 0)
          doc.text("" + kitchenArray[i].particulars_header, 28, 22 + (tempI * 18))
          doc.setTextColor(0, 0, 0)
          
          doc.setFont("Helvetica", "", "normal");
          var he = substringArray(kitchenArray[i].particulars_sub_header, 24)
          if (he.length > 0) {
            for (var j = 0; j < he.length; j++) {
              
              doc.setFont("Helvetica", "", "normal");
              doc.text("" + he[j], 28, 26 + (j * 3) + ((tempI) * 18))
            }
          }
        }
        doc.text("" + kitchenArray[i].code_material, 68, 22 + (tempI * 18))
        doc.text("" + kitchenArray[i].finish_type, 97, 22 + (tempI * 18))
        doc.text("" + kitchenArray[i].area_or_quantity, 124, 22 + (tempI * 18))
        doc.text("(" + kitchenArray[i].aq + ")", 124, 25 + (tempI * 18))
        doc.text("" + kitchenArray[i].cost_per_quantity, 147, 22 + (tempI * 18))
        doc.text("" + kitchenArray[i].total_costing, 172, 22 + (tempI * 18))
        doc.line(12.5, 35 + (tempI * 18), 198, 35 + (tempI * 18))
        if (i === (kitchenArray.length) - 1) {
          
          doc.setFont("Helvetica", "", "bold");
          doc.setFontSize(10)
          doc.text("KITCHEN TOTAL:", 140, 45 + (tempI * 18))
          doc.text(""+this.totalKitchenAmount, 172, 45 + (tempI * 18))
        }
      }
      //adding auto pages and border
      if (i % 12 === 0 && i >= 12) {
        addPage();
        
        doc.setFont("Helvetica", "", "bold");
        doc.setFontSize(14)
        doc.setTextColor(255, 0, 0)
        doc.text("KITCHEN", 90, 20)
        doc.setTextColor(0, 0, 0)
        doc.setFontSize(8)
        doc.line(12.5, 25, 198, 25)
        doc.text("S.NO.", 15, 29)
        doc.text("PARTICULARS", 28, 29)
        doc.text("CORE MATERIAL", 68, 29)
        doc.text("FINISH TYPE", 97, 29)
        doc.text("AREA/QTY", 122, 29)
        doc.setFontSize(6)
        doc.text("(In Sq Feet)", 124, 33)
        doc.setFontSize(8)
        doc.text("COST", 155, 29)
        doc.setFontSize(6)
        doc.text("Per Sq Feet/Qty)", 147, 33)
        doc.setFontSize(8)
        doc.text("TOTAL COSTING", 172, 29)
        doc.line(12.5, 35, 198, 35)
      }

    }



    ////KBR: KID'S BEDROOM page
    addPage();

    doc.setFontSize(14)
    doc.setTextColor(255, 0, 0)
    
    doc.setFont("Helvetica", "", "bold");
    doc.text("KBR: KID'S BEDROOM", 80, 20)
    doc.setTextColor(0, 0, 0)
    doc.setFontSize(8)
    doc.line(12.5, 25, 198, 25)
    doc.text("S.NO.", 15, 29)
    doc.text("PARTICULARS", 28, 29)
    doc.text("CORE MATERIAL", 63, 29)
    doc.text("FINISH TYPE", 95, 29)
    doc.text("AREA/QTY", 122, 29)
    doc.setFontSize(6)
    doc.text("(In Sq Feet)", 124, 33)
    doc.setFontSize(8)
    doc.text("COST", 155, 29)
    doc.setFontSize(6)
    doc.text("Per Sq Feet/Qty)", 147, 33)
    doc.setFontSize(8)
    doc.text("TOTAL COSTING", 172, 29)
    doc.line(12.5, 35, 198, 35)

    const kids_bedroomArray = this.finalDataArray[4].kids_bedroom;
    for (var i = 0; i < kids_bedroomArray.length; i++) {
      if (i <= 12) {
        doc.text("" + (i + 1), 15, 40 + (i * 18))
        if ((kids_bedroomArray[i].particulars_header).length > 16) {
          var sub_he = substringArray(kids_bedroomArray[i].particulars_header, 16)
          if (sub_he.length > 0) {
            for (var j = 0; j < sub_he.length; j++) {
              
              doc.setFont("Helvetica", "", "bold");
              doc.setTextColor(255, 0, 0)
              doc.text("" + sub_he[j], 28, 40 + (j * 3) + ((i) * 18))
              doc.setTextColor(0, 0, 0)
            }
          }
          
          doc.setFont("Helvetica", "", "normal");
          var he = substringArray(kids_bedroomArray[i].particulars_sub_header, 24)
          if (he.length > 0) {
            for (var j = 0; j < he.length; j++) {
              
              doc.setFont("Helvetica", "", "normal");
              if ((kids_bedroomArray[i].particulars_header).length <= 33) {
                doc.text("" + he[j], 28, 47 + (j * 3) + ((i) * 18))
              } else if ((kids_bedroomArray[i].particulars_header).length > 33) {
                doc.text("" + he[j], 28, 49 + (j * 3) + ((i) * 18))
              }
            }
          }
        } else {
          
          doc.setFont("Helvetica", "", "bold");
          doc.setTextColor(255, 0, 0)
          doc.text("" + kids_bedroomArray[i].particulars_header, 28, 40 + (i * 18))
          doc.setTextColor(0, 0, 0)
          
          doc.setFont("Helvetica", "", "normal");
          var he = substringArray(kids_bedroomArray[i].particulars_sub_header, 24)
          if (he.length > 0) {
            for (var j = 0; j < he.length; j++) {
              
              doc.setFont("Helvetica", "", "normal");
              doc.text("" + he[j], 28, 44 + (j * 3) + ((i) * 18))
            }
          }
        }
        doc.text("" + kids_bedroomArray[i].code_material, 68, 40 + (i * 18))
        doc.text("" + kids_bedroomArray[i].finish_type, 97, 40 + (i * 18))
        doc.text("" + kids_bedroomArray[i].area_or_quantity, 124, 40 + (i * 18))
        doc.text("(" + kids_bedroomArray[i].aq + ")", 124, 43 + (i * 18))
        doc.text("" + kids_bedroomArray[i].cost_per_quantity, 147, 40 + (i * 18))
        doc.text("" + kids_bedroomArray[i].total_costing, 172, 40 + (i * 18))
        if (i <= 11) {
          doc.line(12.5, 55 + (i * 18), 198, 55 + (i * 18))
        }
      } else {
        let tempI = i - 12;
        doc.text("" + (i + 1), 15, 22 + (tempI * 18))
        if ((kids_bedroomArray[i].particulars_header).length > 16) {
          var sub_he = substringArray(kids_bedroomArray[i].particulars_header, 16)
          if (sub_he.length > 0) {
            for (var j = 0; j < sub_he.length; j++) {
              
              doc.setFont("Helvetica", "", "bold");
              doc.setTextColor(255, 0, 0)
              doc.text("" + sub_he[j], 28, 22 + (j * 3) + ((tempI) * 18))
              doc.setTextColor(0, 0, 0)
            }
          }
          
          doc.setFont("Helvetica", "", "normal");
          var he = substringArray(kids_bedroomArray[i].particulars_sub_header, 26)
          if (he.length > 0) {
            for (var j = 0; j < he.length; j++) {
              
              doc.setFont("Helvetica", "", "normal");
              if ((kids_bedroomArray[i].particulars_header).length >= 16 && (kids_bedroomArray[i].particulars_header).length <= 33) {
                doc.text("" + he[j], 28, 28 + (j * 3) + ((tempI) * 18))
              } else if ((kids_bedroomArray[i].particulars_header).length < 16) {
                doc.text("" + he[j], 28, 29 + (j * 3) + ((tempI) * 18))
              } else {
                doc.text("" + he[j], 28, 28 + (j * 3) + ((tempI) * 18))
              }
            }
          }
        } else {
          
          doc.setFont("Helvetica", "", "bold");
          doc.setTextColor(255, 0, 0)
          doc.text("" + kids_bedroomArray[i].particulars_header, 28, 22 + (tempI * 18))
          doc.setTextColor(0, 0, 0)
          
          doc.setFont("Helvetica", "", "normal");
          var he = substringArray(kids_bedroomArray[i].particulars_sub_header, 24)
          if (he.length > 0) {
            for (var j = 0; j < he.length; j++) {
              
              doc.setFont("Helvetica", "", "normal");
              doc.text("" + he[j], 28, 26 + (j * 3) + ((tempI) * 18))
            }
          }
        }
        doc.text("" + kids_bedroomArray[i].code_material, 68, 22 + (tempI * 18))
        doc.text("" + kids_bedroomArray[i].finish_type, 97, 22 + (tempI * 18))
        doc.text("" + kids_bedroomArray[i].area_or_quantity, 124, 22 + (tempI * 18))
        doc.text("(" + kids_bedroomArray[i].aq + ")", 124, 25 + (tempI * 18))
        doc.text("" + kids_bedroomArray[i].cost_per_quantity, 147, 22 + (tempI * 18))
        doc.text("" + kids_bedroomArray[i].total_costing, 172, 22 + (tempI * 18))
        doc.line(12.5, 35 + (tempI * 18), 198, 35 + (tempI * 18))
        if (i === (kids_bedroomArray.length) - 1) {
          
          doc.setFont("Helvetica", "", "bold");
          doc.setFontSize(10)
          doc.text("KBR: KID'S BEDROOM TOTAL:", 110, 45 + (tempI * 18))
          doc.text(""+this.totalKidsBedroomAmount, 172, 45 + (tempI * 18))
        }
      }
      //adding auto pages and border
      if (i % 12 === 0 && i >= 12) {
        addPage();
        
        doc.setFont("Helvetica", "", "bold");
        doc.setFontSize(14)
        doc.setTextColor(255, 0, 0)
        doc.text("KBR: KID'S BEDROOM", 80, 20)
        doc.setTextColor(0, 0, 0)
        doc.setFontSize(8)
        doc.line(12.5, 25, 198, 25)
        doc.text("S.NO.", 15, 29)
        doc.text("PARTICULARS", 28, 29)
        doc.text("CORE MATERIAL", 68, 29)
        doc.text("FINISH TYPE", 97, 29)
        doc.text("AREA/QTY", 122, 29)
        doc.setFontSize(6)
        doc.text("(In Sq Feet)", 124, 33)
        doc.setFontSize(8)
        doc.text("COST", 155, 29)
        doc.setFontSize(6)
        doc.text("Per Sq Feet/Qty)", 147, 33)
        doc.setFontSize(8)
        doc.text("TOTAL COSTING", 172, 29)
        doc.line(12.5, 35, 198, 35)
      }

    }




    ////GBR: GUEST BEDROOM page
    addPage();

    doc.setFontSize(14)
    doc.setTextColor(255, 0, 0)
    
    doc.setFont("Helvetica", "", "bold");
    doc.text("GBR: GUEST BEDROOM", 80, 20)
    doc.setTextColor(0, 0, 0)
    doc.setFontSize(8)
    doc.line(12.5, 25, 198, 25)
    doc.text("S.NO.", 15, 29)
    doc.text("PARTICULARS", 28, 29)
    doc.text("CORE MATERIAL", 63, 29)
    doc.text("FINISH TYPE", 95, 29)
    doc.text("AREA/QTY", 122, 29)
    doc.setFontSize(6)
    doc.text("(In Sq Feet)", 124, 33)
    doc.setFontSize(8)
    doc.text("COST", 155, 29)
    doc.setFontSize(6)
    doc.text("Per Sq Feet/Qty)", 147, 33)
    doc.setFontSize(8)
    doc.text("TOTAL COSTING", 172, 29)
    doc.line(12.5, 35, 198, 35)

    const guest_bedroomArray = this.finalDataArray[5].guest_bedroom;
    for (var i = 0; i < guest_bedroomArray.length; i++) {
      if (i <= 12) {
        doc.text("" + (i + 1), 15, 40 + (i * 18))
        if ((guest_bedroomArray[i].particulars_header).length > 16) {
          var sub_he = substringArray(guest_bedroomArray[i].particulars_header, 16)
          if (sub_he.length > 0) {
            for (var j = 0; j < sub_he.length; j++) {
              
              doc.setFont("Helvetica", "", "bold");
              doc.setTextColor(255, 0, 0)
              doc.text("" + sub_he[j], 28, 40 + (j * 3) + ((i) * 18))
              doc.setTextColor(0, 0, 0)
            }
          }
          
          doc.setFont("Helvetica", "", "normal");
          var he = substringArray(guest_bedroomArray[i].particulars_sub_header, 24)
          if (he.length > 0) {
            for (var j = 0; j < he.length; j++) {
              
              doc.setFont("Helvetica", "", "normal");
              if ((guest_bedroomArray[i].particulars_header).length <= 33) {
                doc.text("" + he[j], 28, 47 + (j * 3) + ((i) * 18))
              } else if ((guest_bedroomArray[i].particulars_header).length > 33) {
                doc.text("" + he[j], 28, 49 + (j * 3) + ((i) * 18))
              }
            }
          }
        } else {
          
          doc.setFont("Helvetica", "", "bold");
          doc.setTextColor(255, 0, 0)
          doc.text("" + guest_bedroomArray[i].particulars_header, 28, 40 + (i * 18))
          doc.setTextColor(0, 0, 0)
          
          doc.setFont("Helvetica", "", "normal");
          var he = substringArray(guest_bedroomArray[i].particulars_sub_header, 24)
          if (he.length > 0) {
            for (var j = 0; j < he.length; j++) {
              
              doc.setFont("Helvetica", "", "normal");
              doc.text("" + he[j], 28, 44 + (j * 3) + ((i) * 18))
            }
          }
        }
        doc.text("" + guest_bedroomArray[i].code_material, 68, 40 + (i * 18))
        doc.text("" + guest_bedroomArray[i].finish_type, 97, 40 + (i * 18))
        doc.text("" + guest_bedroomArray[i].area_or_quantity, 124, 40 + (i * 18))
        doc.text("(" + guest_bedroomArray[i].aq + ")", 124, 43 + (i * 18))
        doc.text("" + guest_bedroomArray[i].cost_per_quantity, 147, 40 + (i * 18))
        doc.text("" + guest_bedroomArray[i].total_costing, 172, 40 + (i * 18))
        if (i <= 11) {
          doc.line(12.5, 55 + (i * 18), 198, 55 + (i * 18))
        }
      } else {
        let tempI = i - 12;
        doc.text("" + (i + 1), 15, 22 + (tempI * 18))
        if ((guest_bedroomArray[i].particulars_header).length > 16) {
          var sub_he = substringArray(guest_bedroomArray[i].particulars_header, 16)
          if (sub_he.length > 0) {
            for (var j = 0; j < sub_he.length; j++) {
              
              doc.setFont("Helvetica", "", "bold");
              doc.setTextColor(255, 0, 0)
              doc.text("" + sub_he[j], 28, 22 + (j * 3) + ((tempI) * 18))
              doc.setTextColor(0, 0, 0)
            }
          }
          
          doc.setFont("Helvetica", "", "normal");
          var he = substringArray(guest_bedroomArray[i].particulars_sub_header, 26)
          if (he.length > 0) {
            for (var j = 0; j < he.length; j++) {
              
              doc.setFont("Helvetica", "", "normal");
              if ((guest_bedroomArray[i].particulars_header).length >= 16 && (guest_bedroomArray[i].particulars_header).length <= 33) {
                doc.text("" + he[j], 28, 28 + (j * 3) + ((tempI) * 18))
              } else if ((guest_bedroomArray[i].particulars_header).length < 16) {
                doc.text("" + he[j], 28, 29 + (j * 3) + ((tempI) * 18))
              } else {
                doc.text("" + he[j], 28, 28 + (j * 3) + ((tempI) * 18))
              }
            }
          }
        } else {
          
          doc.setFont("Helvetica", "", "bold");
          doc.setTextColor(255, 0, 0)
          doc.text("" + guest_bedroomArray[i].particulars_header, 28, 22 + (tempI * 18))
          doc.setTextColor(0, 0, 0)
          
          doc.setFont("Helvetica", "", "normal");
          var he = substringArray(guest_bedroomArray[i].particulars_sub_header, 24)
          if (he.length > 0) {
            for (var j = 0; j < he.length; j++) {
              
              doc.setFont("Helvetica", "", "normal");
              doc.text("" + he[j], 28, 26 + (j * 3) + ((tempI) * 18))
            }
          }
        }
        doc.text("" + guest_bedroomArray[i].code_material, 68, 22 + (tempI * 18))
        doc.text("" + guest_bedroomArray[i].finish_type, 97, 22 + (tempI * 18))
        doc.text("" + guest_bedroomArray[i].area_or_quantity, 124, 22 + (tempI * 18))
        doc.text("(" + guest_bedroomArray[i].aq + ")", 124, 25 + (tempI * 18))
        doc.text("" + guest_bedroomArray[i].cost_per_quantity, 147, 22 + (tempI * 18))
        doc.text("" + guest_bedroomArray[i].total_costing, 172, 22 + (tempI * 18))
        doc.line(12.5, 35 + (tempI * 18), 198, 35 + (tempI * 18))
        if (i === (guest_bedroomArray.length) - 1) {
          
          doc.setFont("Helvetica", "", "bold");
          doc.setFontSize(10)
          doc.text("GBR: GUEST BEDROOM TOTAL:", 110, 45 + (tempI * 18))
          doc.text(""+this.totalGuestBedroomAmount, 172, 45 + (tempI * 18))
        }
      }
      //adding auto pages and border
      if (i % 12 === 0 && i >= 12) {
        addPage();
        
        doc.setFont("Helvetica", "", "bold");
        doc.setFontSize(14)
        doc.setTextColor(255, 0, 0)
        doc.text("GBR: GUEST BEDROOM", 80, 20)
        doc.setTextColor(0, 0, 0)
        doc.setFontSize(8)
        doc.line(12.5, 25, 198, 25)
        doc.text("S.NO.", 15, 29)
        doc.text("PARTICULARS", 28, 29)
        doc.text("CORE MATERIAL", 68, 29)
        doc.text("FINISH TYPE", 97, 29)
        doc.text("AREA/QTY", 122, 29)
        doc.setFontSize(6)
        doc.text("(In Sq Feet)", 124, 33)
        doc.setFontSize(8)
        doc.text("COST", 155, 29)
        doc.setFontSize(6)
        doc.text("Per Sq Feet/Qty)", 147, 33)
        doc.setFontSize(8)
        doc.text("TOTAL COSTING", 172, 29)
        doc.line(12.5, 35, 198, 35)
      }

    }



    ////MBR :MASTER BEDROOM page
    addPage();

    doc.setFontSize(14)
    doc.setTextColor(255, 0, 0)
    
    doc.setFont("Helvetica", "", "bold");
    doc.text("MBR :MASTER BEDROOM", 80, 20)
    doc.setTextColor(0, 0, 0)
    doc.setFontSize(8)
    doc.line(12.5, 25, 198, 25)
    doc.text("S.NO.", 15, 29)
    doc.text("PARTICULARS", 28, 29)
    doc.text("CORE MATERIAL", 63, 29)
    doc.text("FINISH TYPE", 95, 29)
    doc.text("AREA/QTY", 122, 29)
    doc.setFontSize(6)
    doc.text("(In Sq Feet)", 124, 33)
    doc.setFontSize(8)
    doc.text("COST", 155, 29)
    doc.setFontSize(6)
    doc.text("Per Sq Feet/Qty)", 147, 33)
    doc.setFontSize(8)
    doc.text("TOTAL COSTING", 172, 29)
    doc.line(12.5, 35, 198, 35)

    const master_bedroomArray = this.finalDataArray[6].master_bedroom;
    for (var i = 0; i < master_bedroomArray.length; i++) {
      if (i <= 12) {
        doc.text("" + (i + 1), 15, 40 + (i * 18))
        if ((master_bedroomArray[i].particulars_header).length > 16) {
          var sub_he = substringArray(master_bedroomArray[i].particulars_header, 16)
          if (sub_he.length > 0) {
            for (var j = 0; j < sub_he.length; j++) {
              
              doc.setFont("Helvetica", "", "bold");
              doc.setTextColor(255, 0, 0)
              doc.text("" + sub_he[j], 28, 40 + (j * 3) + ((i) * 18))
              doc.setTextColor(0, 0, 0)
            }
          }
          
          doc.setFont("Helvetica", "", "normal");
          var he = substringArray(master_bedroomArray[i].particulars_sub_header, 24)
          if (he.length > 0) {
            for (var j = 0; j < he.length; j++) {
              
              doc.setFont("Helvetica", "", "normal");
              if ((master_bedroomArray[i].particulars_header).length <= 33) {
                doc.text("" + he[j], 28, 47 + (j * 3) + ((i) * 18))
              } else if ((master_bedroomArray[i].particulars_header).length > 33) {
                doc.text("" + he[j], 28, 49 + (j * 3) + ((i) * 18))
              }
            }
          }
        } else {
          
          doc.setFont("Helvetica", "", "bold");
          doc.setTextColor(255, 0, 0)
          doc.text("" + master_bedroomArray[i].particulars_header, 28, 40 + (i * 18))
          doc.setTextColor(0, 0, 0)
          
          doc.setFont("Helvetica", "", "normal");
          var he = substringArray(master_bedroomArray[i].particulars_sub_header, 24)
          if (he.length > 0) {
            for (var j = 0; j < he.length; j++) {
              
              doc.setFont("Helvetica", "", "normal");
              doc.text("" + he[j], 28, 44 + (j * 3) + ((i) * 18))
            }
          }
        }
        doc.text("" + master_bedroomArray[i].code_material, 68, 40 + (i * 18))
        doc.text("" + master_bedroomArray[i].finish_type, 97, 40 + (i * 18))
        doc.text("" + master_bedroomArray[i].area_or_quantity, 124, 40 + (i * 18))
        doc.text("(" + master_bedroomArray[i].aq + ")", 124, 43 + (i * 18))
        doc.text("" + master_bedroomArray[i].cost_per_quantity, 147, 40 + (i * 18))
        doc.text("" + master_bedroomArray[i].total_costing, 172, 40 + (i * 18))
        if (i <= 11) {
          doc.line(12.5, 55 + (i * 18), 198, 55 + (i * 18))
        }
      } else {
        let tempI = i - 12;
        doc.text("" + (i + 1), 15, 22 + (tempI * 18))
        if ((master_bedroomArray[i].particulars_header).length > 16) {
          var sub_he = substringArray(master_bedroomArray[i].particulars_header, 16)
          if (sub_he.length > 0) {
            for (var j = 0; j < sub_he.length; j++) {
              
              doc.setFont("Helvetica", "", "bold");
              doc.setTextColor(255, 0, 0)
              doc.text("" + sub_he[j], 28, 22 + (j * 3) + ((tempI) * 18))
              doc.setTextColor(0, 0, 0)
            }
          }
          
          doc.setFont("Helvetica", "", "normal");
          var he = substringArray(master_bedroomArray[i].particulars_sub_header, 26)
          if (he.length > 0) {
            for (var j = 0; j < he.length; j++) {
              
              doc.setFont("Helvetica", "", "normal");
              if ((master_bedroomArray[i].particulars_header).length >= 16 && (master_bedroomArray[i].particulars_header).length <= 33) {
                doc.text("" + he[j], 28, 28 + (j * 3) + ((tempI) * 18))
              } else if ((master_bedroomArray[i].particulars_header).length < 16) {
                doc.text("" + he[j], 28, 29 + (j * 3) + ((tempI) * 18))
              } else {
                doc.text("" + he[j], 28, 28 + (j * 3) + ((tempI) * 18))
              }
            }
          }
        } else {
          
          doc.setFont("Helvetica", "", "bold");
          doc.setTextColor(255, 0, 0)
          doc.text("" + master_bedroomArray[i].particulars_header, 28, 22 + (tempI * 18))
          doc.setTextColor(0, 0, 0)
          
          doc.setFont("Helvetica", "", "normal");
          var he = substringArray(master_bedroomArray[i].particulars_sub_header, 24)
          if (he.length > 0) {
            for (var j = 0; j < he.length; j++) {
              
              doc.setFont("Helvetica", "", "normal");
              doc.text("" + he[j], 28, 26 + (j * 3) + ((tempI) * 18))
            }
          }
        }
        doc.text("" + master_bedroomArray[i].code_material, 68, 22 + (tempI * 18))
        doc.text("" + master_bedroomArray[i].finish_type, 97, 22 + (tempI * 18))
        doc.text("" + master_bedroomArray[i].area_or_quantity, 124, 22 + (tempI * 18))
        doc.text("(" + master_bedroomArray[i].aq + ")", 124, 25 + (tempI * 18))
        doc.text("" + master_bedroomArray[i].cost_per_quantity, 147, 22 + (tempI * 18))
        doc.text("" + master_bedroomArray[i].total_costing, 172, 22 + (tempI * 18))
        doc.line(12.5, 35 + (tempI * 18), 198, 35 + (tempI * 18))
        if (i === (master_bedroomArray.length) - 1) {
          
          doc.setFont("Helvetica", "", "bold");
          doc.setFontSize(10)
          doc.text("MBR :MASTER BEDROOM TOTAL:", 110, 45 + (tempI * 18))
          doc.text(""+this.totalMasterBedroomAmount, 172, 45 + (tempI * 18))
        }
      }
      //adding auto pages and border
      if (i % 12 === 0 && i >= 12) {
        addPage();
        
        doc.setFont("Helvetica", "", "bold");
        doc.setFontSize(14)
        doc.setTextColor(255, 0, 0)
        doc.text("MBR :MASTER BEDROOM", 80, 20)
        doc.setTextColor(0, 0, 0)
        doc.setFontSize(8)
        doc.line(12.5, 25, 198, 25)
        doc.text("S.NO.", 15, 29)
        doc.text("PARTICULARS", 28, 29)
        doc.text("CORE MATERIAL", 68, 29)
        doc.text("FINISH TYPE", 97, 29)
        doc.text("AREA/QTY", 122, 29)
        doc.setFontSize(6)
        doc.text("(In Sq Feet)", 124, 33)
        doc.setFontSize(8)
        doc.text("COST", 155, 29)
        doc.setFontSize(6)
        doc.text("Per Sq Feet/Qty)", 147, 33)
        doc.setFontSize(8)
        doc.text("TOTAL COSTING", 172, 29)
        doc.line(12.5, 35, 198, 35)
      }

    }


    ///SERVICES page
    addPage();

    doc.setFontSize(14)
    doc.setTextColor(255, 0, 0)
    
    doc.setFont("Helvetica", "", "bold");
    doc.text("SERVICES", 90, 20)
    doc.setTextColor(0, 0, 0)
    doc.setFontSize(8)
    doc.line(12.5, 25, 198, 25)
    doc.text("S.NO.", 15, 29)
    doc.text("PARTICULARS", 28, 29)
    doc.text("CORE MATERIAL", 63, 29)
    doc.text("FINISH TYPE", 95, 29)
    doc.text("AREA/QTY", 122, 29)
    doc.setFontSize(6)
    doc.text("(In Sq Feet)", 124, 33)
    doc.setFontSize(8)
    doc.text("COST", 155, 29)
    doc.setFontSize(6)
    doc.text("Per Sq Feet/Qty)", 147, 33)
    doc.setFontSize(8)
    doc.text("TOTAL COSTING", 172, 29)
    doc.line(12.5, 35, 198, 35)

    const servicesArray = this.finalDataArray[7].services;
    for (var i = 0; i < servicesArray.length; i++) {
      if (i <= 12) {
        doc.text("" + (i + 1), 15, 40 + (i * 18))
        if ((servicesArray[i].particulars_header).length > 16) {
          var sub_he = substringArray(servicesArray[i].particulars_header, 16)
          if (sub_he.length > 0) {
            for (var j = 0; j < sub_he.length; j++) {
              
              doc.setFont("Helvetica", "", "bold");
              doc.setTextColor(255, 0, 0)
              doc.text("" + sub_he[j], 28, 40 + (j * 3) + ((i) * 18))
              doc.setTextColor(0, 0, 0)
            }
          }
          
          doc.setFont("Helvetica", "", "normal");
          var he = substringArray(servicesArray[i].particulars_sub_header, 24)
          if (he.length > 0) {
            for (var j = 0; j < he.length; j++) {
              
              doc.setFont("Helvetica", "", "normal");
              if ((servicesArray[i].particulars_header).length <= 33) {
                doc.text("" + he[j], 28, 47 + (j * 3) + ((i) * 18))
              } else if ((servicesArray[i].particulars_header).length > 33) {
                doc.text("" + he[j], 28, 52 + (j * 3) + ((i) * 18))
              }
            }
          }
        } else {
          
          doc.setFont("Helvetica", "", "bold");
          doc.setTextColor(255, 0, 0)
          doc.text("" + servicesArray[i].particulars_header, 28, 40 + (i * 18))
          doc.setTextColor(0, 0, 0)
          
          doc.setFont("Helvetica", "", "normal");
          var he = substringArray(servicesArray[i].particulars_sub_header, 24)
          if (he.length > 0) {
            for (var j = 0; j < he.length; j++) {
              
              doc.setFont("Helvetica", "", "normal");
              doc.text("" + he[j], 28, 44 + (j * 3) + ((i) * 18))
            }
          }
        }
        doc.text("" + servicesArray[i].code_material, 68, 40 + (i * 18))
        doc.text("" + servicesArray[i].finish_type, 97, 40 + (i * 18))
        doc.text("" + servicesArray[i].area_or_quantity, 124, 40 + (i * 18))
        doc.text("(" + servicesArray[i].aq + ")", 124, 43 + (i * 18))
        doc.text("" + servicesArray[i].cost_per_quantity, 147, 40 + (i * 18))
        doc.text("" + servicesArray[i].total_costing, 172, 40 + (i * 18))
        if (i <= 0) {
          doc.line(12.5, 54 + (i * 18), 198, 54 + (i * 18))
        } else {
          doc.line(12.5, 62 + (i * 18), 198, 62 + (i * 18))
          if (i === (servicesArray.length) - 1) {
            
            doc.setFont("Helvetica", "", "bold");
            doc.setFontSize(10)
            doc.text("SERVICES TOTAL:", 140, 70 + (i * 18))
            doc.text(""+this.totalServicesAmount, 172, 70 + (i * 18))
          }
        }

      }
      //adding auto pages and border
      if (i % 12 === 0 && i >= 12) {
        addPage();
        
        doc.setFont("Helvetica", "", "bold");
        doc.setFontSize(14)
        doc.setTextColor(255, 0, 0)
        doc.text("SERVICES", 90, 20)
        doc.setTextColor(0, 0, 0)
        doc.setFontSize(8)
        doc.line(12.5, 25, 198, 25)
        doc.text("S.NO.", 15, 29)
        doc.text("PARTICULARS", 28, 29)
        doc.text("CORE MATERIAL", 68, 29)
        doc.text("FINISH TYPE", 97, 29)
        doc.text("AREA/QTY", 122, 29)
        doc.setFontSize(6)
        doc.text("(In Sq Feet)", 124, 33)
        doc.setFontSize(8)
        doc.text("COST", 155, 29)
        doc.setFontSize(6)
        doc.text("Per Sq Feet/Qty)", 147, 33)
        doc.setFontSize(8)
        doc.text("TOTAL COSTING", 172, 29)
        doc.line(12.5, 35, 198, 35)
      }

    }

    //////////////////////////////////////////// TERMS and CONDTIONS ////////////////////////////////


    //add page to create Warrenty
    addPage();
    var matspec = [
      {
        "main": "Waterproof Ply -",
        "desc": this.waterproofSpec !=="" ? this.waterproofSpec : "N/A" 
      },
      {
        "main": "Commercial Ply -",
        "desc": this.commercialSpec !=="" ? this.commercialSpec : "N/A"
      },
      {
        "main": "Shutters will be made from HDHMR Acrylic 1 mm (Senosan brand from Europe)/Century laminate.",
        "desc": ""
      },
      {
        "main": "Edgebanding -",
        "desc": this.edgebandingSpec !=="" ? this.edgebandingSpec : "N/A"
      },
      {
        "main": "Hinges and Channels -",
        "desc": this.hingesSpec !=="" ? this.hingesSpec : "N/A"
      },
      {
        "main": "Laminates -",
        "desc": this.laminatesSpec !=="" ? this.laminatesSpec : "N/A"
      },
      {
        "main": "Kitchen Baskets -",
        "desc": this.kitchenSpec !=="" ? this.kitchenSpec : "N/A"
      },
      {
        "main": "Locks -",
        "desc": this.locksSpec !=="" ? this.locksSpec : "N/A"
      },
      {
        "main": "Mirror -",
        "desc": this.mirrorSpec !=="" ? this.mirrorSpec : "N/A"
      },
      {
        "main": "False Ceiling -",
        "desc": this.falseCeilingSpec !=="" ? this.falseCeilingSpec : "N/A",
        "line": ""
      },
      {
        "main": "Electricals/Lights -",
        "desc": this.electricalsSpec !=="" ? this.electricalsSpec : "N/A"
      },
      {
        "main": "Flooring -",
        "desc": this.flooringSpec !=="" ? this.flooringSpec : "N/A"
      }
    ];

    for (var ii = 0; ii < 11; ii++) {
      if (ii === 0) {
        doc.line(12.5, 25, 198, 25)
        doc.setFontSize(14)
        doc.setTextColor(255, 0, 0)
        doc.text("MATERIAL SPECIFICATIONS", 70, 20)
        doc.setTextColor(0, 0, 0)
        doc.setFontSize(8)
        
        doc.setFont("Helvetica", "", "normal");
      }
      doc.text("" + (ii + 1), 15, 29 + (10 * ii))
      doc.text("" + matspec[ii].main, 30, 29 + (10 * ii))
      doc.text("" + matspec[ii].desc, 63, 29 + (10 * ii))
      if (matspec[ii].line) {
        doc.text("" + matspec[ii].line, 63, 29 + (10.4 * ii))
      }
    }

    doc.line(12.5, 170, 198, 170)
    doc.setFontSize(14)
    doc.setTextColor(255, 0, 0)
    
    doc.setFont("Helvetica", "", "bold");
    doc.text("TERMS & CONDITIONS", 70, 165)
    doc.setTextColor(0, 0, 0)
    doc.setFontSize(9)
    doc.text("Validity of the Quotation", 15, 175)
    
    doc.setFont("Helvetica", "", "normal");
    doc.text("1. The rates and amounts mentioned herein are applicable for 30 days from the date hereof and are subject to change.", 15, 180)
    doc.text("2. The above quotation is an estimate based on current designs and measurements, they may undergo changes until", 15, 185)
    doc.text(" the design sign-off phase and are:", 18, 190)
    doc.text("i.   Dependent on the final designs.", 25, 195)
    doc.text("ii.  Selection of Additional vendor units.", 25, 200)
    doc.text("iii. Measurements", 25, 205)


    addPage();
    doc.line(12.5, 25, 198, 25)
    doc.setFontSize(14)
    doc.setTextColor(255, 0, 0)
    
    doc.setFont("Helvetica", "", "bold");
    doc.text("SCOPE OF WORK", 80, 20)
    doc.setTextColor(0, 0, 0)
    doc.setFontSize(9)
    
    doc.setFont("Helvetica", "", "normal");

    doc.text("1. Preparation of design concept (including carrying out necessary revisions till the design concepts are finally approved by", 15, 30)
    doc.text(" the Client in writing), and providing estimates to enable the client to take a decision on the design concept:", 18, 35)
    doc.text("2. Preparation of engineering drawings and specifications of all finishes and materials as per the approved design concept.", 15, 40)
    doc.text("3. Preparation of 3d views for visual reference to represent the approved design concept.", 15, 45)
    doc.text("4. Product manufacturing as per the approved designs, and as per the agreed material specifications.", 15, 50)
    doc.text("5. Execution of the following solutions (applicable for products and services purchased through Nano Interiors):", 15, 55)
    doc.text("i.     Installation of modular furniture at the site", 25, 60)
    doc.text("ii.    False ceiling", 25, 65)
    doc.text("iii.   Wall finishes", 25, 70)
    doc.text("iv.   Lighting solutions", 25, 75)
    doc.text("v.    Electrification", 25, 80)
    doc.text("vi.   Furnishings", 25, 85)

    doc.text("6. During the execution phase, Nano Interiors shall designate a designer to accompany the Client for shopping as set out herein. For ", 15, 95)
    doc.text("procurement of special vendor items, to be chosen from digital catalogues or from the vendors' business place, the designer ", 19, 100)
    doc.text("assigned for the Project will accompany the Client for selection of home furnishing materials only.", 19, 105)
    doc.text("7. The execution team takes the responsibility of removing the debris within 300m radius, dusting, and general cleaning of the", 15, 110)
    doc.text("furnitures once the modular work is completed and the same has been incorporated in the cost sheet above. Deep cleaning", 19, 115)
    doc.text(" if required will be charged extra.", 18, 120)
    doc.text("8. The service provider undertakes and warrants that", 15, 125)
    doc.text("i.   The said services will be provided in a timely and professional manner in accordance with the time schedules stipulated", 25, 130)
    doc.text("in Clause 3, and will confirm to the standards generally observed in the industry for similar services and will be", 30, 135)
    doc.text("provided with the level of skill and care expected of an experienced provider in the Service Provider's line of work.", 30, 140)
    doc.text("ii.  It shall promplty inform the client in writing of anything which the service provider believes would materially either", 25, 146)
    doc.text("iii. Vary the project or increase the cost of the project or change the quality of function of the project or increase the", 25, 152)
    doc.text(" time taken to complete the project.", 30, 157)

    doc.line(12.5, 185, 198, 185)
    doc.setFontSize(14)
    doc.setTextColor(255, 0, 0)
    
    doc.setFont("Helvetica", "", "bold");
    doc.text("EXCLUSIONS", 85, 180)
    doc.setTextColor(0, 0, 0)
    doc.setFontSize(9)
    
    doc.setFont("Helvetica", "", "normal");
    doc.text("The following shall not be covered in the Scope of Work unless otherwise agreed,", 15, 190)
    doc.text("1. The service provider can undertake the execution of any civil work at its own discretion as may be required and in accordance", 15, 195)
    doc.text("with the Design approved by the Client, and if undertaken, both the parties shall agree in writing on the scope of such work", 19, 200)
    doc.text("and the cost and expense thereof which may be additional over the quotation mentioned above.", 19, 205)
    doc.text("2. Waterproofing, pest control and termite treatment, if any, shall be availed by the Client at their own cost.", 15, 210)
    doc.text("3. The service provider does not take any responsibility for supervision/coordination for any works done directly by the builder ", 15, 215)
    doc.text("or any other external vendor directly engaged by the Client.", 19, 220)


    addPage();
    doc.line(12.5, 25, 198, 25)
    doc.setFontSize(14)
    doc.setTextColor(255, 0, 0)
    
    doc.setFont("Helvetica", "", "bold");
    doc.text("PROJECT", 88, 20)
    doc.setTextColor(0, 0, 0)
    doc.setFontSize(9)
    
    doc.setFont("Helvetica", "", "normal");

    doc.text("1. From the payment of Design Initiation Fee, the Designer assigned to the Project shall provide proefssional design services", 15, 30)
    doc.text("to the Client, for a period of (XX) days (as referred to in the table below), to prepare and finalise the design (\"Design\").", 19, 35)
    doc.text("If the design is not approved within the said period, the Project Cost will be revised as per the Additional Cost clause.", 19, 40)
    doc.text("2. The preparation of specifications for the Project, procurement of materials, production and packing of the products for delivery", 15, 45)
    doc.text("to the site, execution and installation of the furniture and fixtures shall be completed within (XX) days from finalisation of", 19, 50)
    doc.text("designs (as referred to in the table below). During this phase, false ceiling and electrical work will commence on the site.", 19, 55)
    doc.text("In case of change in the project scope, the timelines for projects of specific value are stated below:", 15, 65)
    
    doc.setFont("Helvetica", "", "bold");
    doc.setFontSize(9)
    doc.text("PROJECT", 15, 75)
    doc.text("3D DESIGN", 36, 75)
    doc.text("2D", 63, 75)
    doc.text("2D DESIGN", 80, 75)
    doc.text("MIN 3D", 103, 75)
    doc.text("DESIGN", 120, 75)
    doc.text("SHOPPING", 140, 75)
    doc.text("NO OF COMPLEMENTARY", 160, 75)
    
    doc.setFont("Helvetica", "", "normal");
    doc.setFontSize(9)

    doc.text("7-10 Lacs", 15, 80)
    doc.text("10-15 Lacs", 15, 85)
    doc.text("15+ Lacs", 15, 90)

    doc.text("15 Days", 38, 80)
    doc.text("20 Days", 38, 85)
    doc.text("25 Days", 38, 90)

    doc.text("05 Days", 60, 80)
    doc.text("06 Days", 60, 85)
    doc.text("10+ Days", 60, 90)

    doc.text("30 Days", 82, 80)
    doc.text("45 Days", 82, 85)
    doc.text("60+ Days", 82, 90)

    doc.text("2", 106, 80)
    doc.text("3", 106, 85)
    doc.text("4", 106, 90)

    doc.text("3", 123, 80)
    doc.text("3", 123, 85)
    doc.text("4", 123, 90)

    doc.text("1 Days", 142, 80)
    doc.text("2 Days", 142, 85)
    doc.text("3 Days", 142, 90)

    doc.text("2", 173, 80)
    doc.text("3", 173, 85)
    doc.text("4", 173, 90)

    doc.text("NOTE: For projects with value above 15Lacs, the exact timeline will be shared by the designer during the design phase and shall", 15, 100)
    doc.text("be considered as the period in reference to the rest of the clauses.", 15, 105)
    doc.text("All electrical and false ceiling work will be completed before starting the modular or carpentry work. The actual measurements,", 15, 112)
    doc.text("false ceiling measurements and number of electrical work will be taken practically at the site and the same will be re-quoted in", 15, 117)
    doc.text("the revised quotation. The Execution Initiation Fee will be at the site and the same will be re-quoted in the revised quotation.", 15, 122)
    doc.text("The Execution Initiation Fee will be based on the revised quotation.", 15, 127)


    doc.line(12.5, 155, 198, 155)
    doc.setFontSize(14)
    doc.setTextColor(255, 0, 0)
    
    doc.setFont("Helvetica", "", "bold");
    doc.text("PAYMENT", 85, 150)
    doc.setTextColor(0, 0, 0)
    doc.setFontSize(9)
    
    doc.setFont("Helvetica", "", "normal");
    doc.text("Payment to Nano Interiors is divided into 3 slots as follows:", 15, 160)

    doc.text("1. Design Initiation Fee (10% of estimated project value payable at the start of the project)", 15, 165)
    doc.text("2. Production Initiation Fee (50% of estimated project value payable at the agreement of final design and estimation).", 15, 170)
    doc.text("3. Execution Initiation Fee (40% of estimated project value payable before the dispatch of goods to site).", 15, 175)
    doc.text("4. False ceiling and electrical charges or any third party units if any, needs to be paid in full at the commencement of work.", 15, 180)
    doc.text("Note 1: In case of revision in the estimated project value, additional payment will have to be paid by the Client upon revision", 15, 185)
    doc.text("immediately .", 15, 190)
    doc.text("Note 2: All the engineering drawings and specifications of all finishes and materials as per the approved design concept will be", 15, 195)
    doc.text("shared post payment of Production Initiation Fee.", 15, 200)
    doc.text("Note 3 Deep cleaning of site charges to be paid at actuals if opted for. Not included in the above estimate.", 15, 205)
    doc.text("Payments towards all Additional Vendor Units (VRM) (refer quotation break-up) shall be paid in full in advance of ordering", 15, 215)
    doc.text("product or incurring the service as per the below criteria due to their respective delivery timelines.", 15, 220)
    doc.text("1. All vendor products which require site alteration & customisation will have to be paid along with the Production Initiation Fee.", 15, 225)
    doc.text("2. Rest of the vendor products which do not require site alteration or customisation will have to be paid along with the Execution", 15, 230)
    doc.text("Initiation Fee.", 19, 235)
    doc.text("Any delay in payment could lead to delays in delivery timelines for which the service provider shall not be responsible in any", 15, 245)
    doc.text("manner whatsoever. Late payment charges of 16% per annum will be applicable of such instances (if any).", 15, 250)
    doc.text("All payment made at any stage are non-refundable in any event whatsoever.", 15, 260)





    addPage();
    doc.line(12.5, 25, 198, 25)
    doc.setFontSize(14)
    doc.setTextColor(255, 0, 0)
    
    doc.setFont("Helvetica", "", "bold");
    doc.text("CHANGE REQUEST", 80, 20)
    doc.setTextColor(0, 0, 0)
    doc.setFontSize(9)
    
    doc.setFont("Helvetica", "", "normal");

    doc.text("No changes will be accepted post 3D design signoff and at the site during the execution of the Project as the Designs will be", 15, 30)
    doc.text("inalised at the office of Nano Interiors prior to execution. As the complete production happens at the factory, any changes at site", 15, 35)
    doc.text("should go to the factory for production. The Client must bear the difference of amount towards the material changes and also", 15, 40)
    doc.text("additional timeline before the change is initiated. The Client acknowledges that the changes shall result in change of timelines,", 15, 45)
    doc.text(" which may be extended, which shall not be attributable to the Service Provider in any manner whatsoever. Similarly, any VRM", 15, 50)
    doc.text("selections and procurement by the Client during the execution phase may result in the extension of timeline, which shall not be", 15, 55)
    doc.text("attributable to the Service Provider.", 15, 60)


    doc.line(12.5, 85, 198, 85)
    doc.setFontSize(14)
    doc.setTextColor(255, 0, 0)
    
    doc.setFont("Helvetica", "", "bold");
    doc.text("ADDITIONAL COSTS", 80, 80)
    doc.setTextColor(0, 0, 0)
    doc.setFontSize(9)
    
    doc.setFont("Helvetica", "", "normal");
    doc.text("Additional charges will be applicable in case of change requests and any increase in Scope of Work as described below, unless", 15, 90)
    doc.text("otherwise agreed and incorporated in the costing above.", 15, 95)
    doc.text("A large part of our commitment is attributable to the client honouring their design discussion meetings, material selection,", 15, 105)
    doc.text("shopping meetings, prompt feedback & approvals. However, in case of timeline extensions attributable to the client despite best", 15, 110)

    doc.text("efforts from the Nano Interiors team, INR 5,000 will be charged at the completion of every 10 days post the end of design timeline as", 15, 115)
    doc.text("mentioned above to provide for the additional design services.", 15, 120)
    doc.text("For wardrobes, 2 drawers will be provided by default and any additional internal drawers will cost Rs. 2,500/- per drawer and", 15, 130)
    doc.text("external drawers will cost Rs. 4,000/- per drawer.", 15, 135)
    doc.text("For dresser, crockery units, TV units and chest of cabinets, 3 drawers will be provided by default and any additional internal ", 15, 140)
    doc.text("drawers will cost Rs. 2,500/- per drawer and external drawers will cost Rs. 4,000/- per drawer.", 15, 145)
    doc.text("Any additional render beyond the complementary ones will be charged Rs. 3000/- per render.", 15, 150)
    doc.text("Electrification includes only alteration of the existing electrical wiring which includes only labour and material. Any alteration of", 15, 155)
    doc.text("electrical points needs. to be intimated before the installation of wooden fittings. The electrification cost is based on different", 15, 160)
    doc.text("electrical services availed by the customer and calculated accordingly.", 15, 165)


    doc.line(12.5, 195, 198, 195)
    doc.setFontSize(14)
    doc.setTextColor(255, 0, 0)
    
    doc.setFont("Helvetica", "", "bold");
    doc.text("TEXES & DUTIES", 80, 190)
    doc.setTextColor(0, 0, 0)
    doc.setFontSize(9)
    
    doc.setFont("Helvetica", "", "normal");
    doc.text("All unit pricing is exclusive of taxes which will be charged at the time of billing at each stage as per prevalent government tax rates.", 15, 200)
    doc.text("Any bank, payment gateway fees or processing fee shall be borne by the Client as applicable.", 15, 205)

    doc.line(12.5, 235, 198, 235)
    doc.setFontSize(14)
    doc.setTextColor(255, 0, 0)
    
    doc.setFont("Helvetica", "", "bold");
    doc.text("PROJECTS ON HOLD", 80, 230)
    doc.setTextColor(0, 0, 0)
    doc.setFontSize(9)
    
    doc.setFont("Helvetica", "", "normal");
    doc.text("The project will be put on hold during the respective stages in following cases:", 15, 240)
    doc.text("Case 1: Customer unavailability due to any unforeseen circumstances such as any medical emergency or an act of God.", 15, 245)
    doc.text("Case 2: Site not Handed-Over by builder or flooring not done or any lack of permission issues at the site.", 15, 250)
    doc.text("On-Hold Period can be upto a max of 60 days since the date of intimation by the client in writing.", 15, 260)
    doc.text("The Additional Costs clauses, as stated above, will be applicable to any extension beyond the hold period.", 15, 265)


    ////////////////////////////////

    addPage();
    doc.line(12.5, 25, 198, 25)
    doc.setFontSize(14)
    doc.setTextColor(255, 0, 0)
    
    doc.setFont("Helvetica", "", "bold");
    doc.text("VISIT TO SITE", 88, 20)
    doc.setTextColor(0, 0, 0)
    doc.setFontSize(9)
    
    doc.setFont("Helvetica", "", "normal");

    doc.text("Visit to the site during the site execution and installation process is strictly restricted due to safety reasons unless such", 15, 30)
    doc.text("visits are organised by Nano Interiors for specific purposes. In case of unavoidable reasons if the client has to visit the site,", 15, 35)
    doc.text("it needs to be done with prior intimation to the Nano Interiors team.", 15, 40)
    doc.text("Nano Interiors's team will ensure that the client is updated on the progress of the execution work from time to time. Project", 15, 50)
    doc.text("development pictures will be shared at weekly frequency with the commencement of the site work.", 15, 55)
    
    doc.setFont("Helvetica", "", "bold");
    doc.setFontSize(11)
    doc.text("Site Handover", 15, 65)
    
    doc.setFont("Helvetica", "", "normal");
    doc.setFontSize(9)
    doc.text("Handover of site and warranty certificates shall be completed, upon sign-off on the Delivery Checklist by Client, and delivery of", 15, 70)
    doc.text(" the house keys to the Client which is conditional upon receipt of full payment by Nano Interiors.", 15, 75)


    doc.line(12.5, 105, 198, 105)
    doc.setFontSize(14)
    doc.setTextColor(255, 0, 0)
    
    doc.setFont("Helvetica", "", "bold");
    doc.text("DELIVERY & COMPENSATION FOR DELAY", 50, 100)
    doc.setTextColor(0, 0, 0)
    doc.setFontSize(9)
    
    doc.setFont("Helvetica", "", "normal");
    doc.text("The project will be handed over within the timelines indicated to the Client except in case of changing of order(s), act of", 15, 110)
    doc.text("god or unforseen circumstances which may delay delivery. Nano Interiors shall not be responsible for any delays which are ", 15, 115)
    doc.text("attributable to third party vendors / contractors not employed by Nano Interiors, rules or policies of apartment management /", 15, 120)
    doc.text("housing society, the site not being ready for installation or for reasons beyond its control.", 15, 125)
    doc.text("Client will be compensated for INR 5,000 at the completion of every 10 days of delivery delay by Nano Interiors Designs upto a", 15, 135)
    doc.text("maximum of 5% of the project value only in case of such delays are directly attributable to Nano Interiors i.e. subject to the", 15, 140)
    doc.text("below conditions:",15,145)
    doc.text("1. Site has been handed over with required permission to commence work from both client and the builder.", 15, 155)
    doc.text("2. There are no design and scope of work changes post finalisation of design.", 15, 160)


    doc.line(12.5, 185, 198, 185)
    doc.setFontSize(14)
    doc.setTextColor(255, 0, 0)
    
    doc.setFont("Helvetica", "", "bold");
    doc.text("CANCELLATION & RETURNS", 67, 180)
    doc.setTextColor(0, 0, 0)
    doc.setFontSize(9)
    
    doc.setFont("Helvetica", "", "normal");
    doc.text("Customised and made-to-order furniture pieces cannot be returned or exchanged for a different design. Only in case of", 15, 190)
    doc.text("manufacturing defects and damages shall such products be eligible for returns and replacements. Replacement and returns", 15, 195)
    doc.text("will not be applicable in case of abnormal or unintended use of the product by any person not representing Nano Interiors.", 15, 200)
    
    doc.setFont("Helvetica", "", "bold");
    doc.setFontSize(11)
    doc.text("Copyrights:", 15, 210)
    
    doc.setFont("Helvetica", "", "normal");
    doc.setFontSize(9)
    doc.text("The designs shared with the Client at any time, whether approved or otherwise, are the copyright of Nano Interiors and are ", 15, 215)
    doc.text("shared for the limited intent of placing of order(s) by the Client with Nano Interiors. Any design shared by Nano Interiors", 15, 220)
    doc.text("can be used, installed or shared by the Client, in any manner, only with the prior and express written consent of Nano Interiors.", 15, 225)
    doc.text(" Nano Interiors will have the freedom to use the designs including 2D, 3D / renders, actual site images of videos of promotion and", 15, 230)
    doc.text("marketing purposes.",15,235)


    doc.line(12.5, 260, 198, 260)
    doc.setFontSize(14)
    doc.setTextColor(250, 0, 0)
    
    doc.setFont("Helvetica", "", "bold");
    doc.text("APPROVALS", 80, 255)
    doc.setTextColor(0, 0, 0)
    doc.setFontSize(9)
    
    doc.setFont("Helvetica", "", "normal");
    doc.text("All approvals of the apartment management/housing society and/or any other authority, as may be required, shall be", 15, 265)
    doc.text("obtained by the Client timely and at its cost and expense.", 15, 2670)

    /////////////////////////////////////////


    addPage();
    doc.line(12.5, 25, 198, 25)
    doc.setFontSize(14)
    doc.setTextColor(255, 0, 0)
    
    doc.setFont("Helvetica", "", "bold");
    doc.text("WARRANTY", 88, 20)
    doc.setTextColor(0, 0, 0)
    doc.setFontSize(9)
    doc.setFontSize(11)
    doc.text("Period", 15, 35)
    
    doc.setFont("Helvetica", "", "normal");
    doc.setFontSize(9)

    doc.text("Warranty letter will be issued upon delivery of the house keys to the client and clearance of all dues to Nano Interiors.", 15, 40)


    doc.line(12.5, 85, 198, 85)
    doc.setFontSize(14)
    doc.setTextColor(255, 0, 0)
    
    doc.setFont("Helvetica", "", "bold");
    doc.text("TERMS", 95, 80)
    doc.setTextColor(0, 0, 0)
    doc.setFontSize(9)
    
    doc.setFont("Helvetica", "", "normal");
    doc.text("Client will be presented with a service letter after Handover of Site and clearance of all dues (including additional charges, if any)", 15, 90)
    doc.text("to Nano Interiors. To avail warranty and one free annual service, service letter must be shared with Nano Interiors at each", 15, 95)
    doc.text("relevant time. The warranty is available only on modular products which are made and installed by Nano Interiors. Vendor products", 15, 100)
    doc.text(" will have their own warranty periods which vary from product to product and will be informed to the Client.", 15, 105)
    doc.text("All products which have a warranty will carry a warranty card from the manufacturer. The warranty will apply only to specific", 15, 110)
    doc.text("parts of the product as mentioned, and not to the whole assembled product.", 15, 115)
    doc.text("Each part of a final product will have a different warranty.", 15, 120)
    doc.text("If any repair or reassembly work has been performed on a product or any part thereof (whether a special vendor item or a product", 15, 125)
    doc.text("manufactured by Nano Interiors) by the Client without any authorisation from Nano Interiors, the warranty coverage on the product", 15, 130)
    doc.text("will automatically cease to exist.", 15, 135)
    doc.text("Upon approval of a warranty claim by Nano Interiors's quality control team, Nano Interiors will repair the product or repace the same", 15, 140)
    doc.text("with a comparable product with a similar value of the price of the original product.", 15, 145)
    doc.text("Due to batch differences in laminate, veneer and other used material, there may be variations in the material and the finish", 15, 150)
    doc.text("and the relplaed product may not be an exact replica of the original product.", 15, 155)
    doc.text("If the price of the replacement is higher than the original product, or a similar product is unavailable, Nano Interiors will reimburse", 15, 160)
    doc.text("the original product cost to the Client.", 15, 165)
    doc.text("The decision of the quality control team of Nano Interiors on the validity of a warranty and/or damage to the product is final and", 15, 170)
    doc.text("binding on the Client.", 15, 175)
    doc.text("The terms and conditions of the warranty are fixed, non-negotiable, non-transferable and are only available for the benefit", 15, 180)
    doc.text("of the oringal purchaser thereof.", 15, 185)



    doc.line(12.5, 215, 198, 215)
    doc.setFontSize(14)
    doc.setTextColor(255, 0, 0)
    
    doc.setFont("Helvetica", "", "bold");
    doc.text("NON APPLICABILITY", 78, 210)
    doc.setTextColor(0, 0, 0)
    doc.setFontSize(9)
    
    doc.setFont("Helvetica", "", "normal");
    doc.text("The warranty is not applicable in case of (i) unusual wear and tear, scratches, cuts or damage caused by impacts or accidents", 15, 220)
    doc.text("or by abnormal or unintended use of the product, and (ii) incorrect storing or assembly or reassembly by the Client, alterations", 15, 225)
    doc.text("to the product, misuse, cleaning with wrong methods or materials.", 15, 230)
    doc.text("The warranty is not applicable in case an indoor product has been placed outdoors, or used for nondomestic purpose, unless such", 15, 235)
    doc.text("use is stated to be permitted and consequential or incidental damages thereto.", 15, 240)
    doc.text("The Client will avail the services of other consultants or contractors or vendors for the Project with the prior written approval", 15, 245)
    doc.text("of Nano Interiors and at the sole risk and cost of the Client. Nano Interiors shall not be responsible or liable for or in relation", 15, 250)
    doc.text(" thereto for any reason or in any manner whatsoever.", 15, 255)
    doc.text("The warranty is not absolute and is applicable only on products and services delivered by Nano Interiors. Nano Interiors shall", 15, 260)
    doc.text("not be responsible for any theft or damage to any item/material/valuables placed on the site during the execution stage. ", 15, 265)
    doc.text("The Client shall make the relevant provisions to keep such items/materials/valuables in a safe place during the execution phase.", 15, 270)




    // add page with boder
    function addPage() {
      doc.addPage();
      addBorder();
      doc.addImage(imgData1, 'JPEG', 8.5, 9.5, 194, 5)
    }

    //add border to page
    function addBorder() {
      doc.setLineWidth(0.5);
      doc.setDrawColor(0, 0, 0);
      doc.line(7, 8, 204, 8);
      doc.line(8, 9, 203, 9);

      doc.line(7, 285, 7, 8);
      doc.line(8, 284, 8, 9);

      doc.line(204, 285, 204, 8);
      doc.line(203, 284, 203, 9);

      doc.line(7, 285, 204, 285);
      doc.line(8, 284, 203, 284);
      doc.addImage(imgData2, 'JPEG', 8.4, 279.5, 194.2, 4);
    }

    //functions sub string
    function substringArray(str: string, len: number) {
      var array = (str).split(' ');
      var count = 0;
      var tempString = "";
      var perticularSubString = [];
      var flag = false;
      for (var i = 0; i < array.length; i++) {
        count += (array[i].length) + 1;
        if (count <= len) {
          flag = true;
          tempString += (array[i]) + " ";
        } else if (count >= len) {
          perticularSubString.push(tempString);
          flag = false;
          tempString = "";
          tempString = array[i] + " "
          count = 0;
        }
        if (i === array.length - 1) {
          perticularSubString.push(tempString);
        }
      }
      return (perticularSubString)
    }

    doc.save('Test.pdf');
  }

  onSubmit(event: any) {
    this.submitted = true;
    let dollarIndianLocale = Intl.NumberFormat('en-IN');
    let InputDataArray: any = [];
    for (let i = 0; i < 140; i++) {
      if (i <= 19) {
        const temp = parseFloat(event.target[(i * 5) + 3].value) * parseFloat(event.target[(i * 5) + 4].value);
        const total = temp ? dollarIndianLocale.format(temp):"0.00";
        const foyer: any = {
          "index": i + 1,
          "particulars_header": (this.data.foyer[i].particulars_header) !== "" ? (this.data.foyer[i].particulars_header) : "N/A",
          "particulars_sub_header": (event.target[i * 5].value) !== "" ? (event.target[i * 5].value) : "N/A",
          "code_material": (event.target[(i * 5) + 1].value) !== "" ? (event.target[(i * 5) + 1].value) : "N/A",
          "finish_type": (event.target[(i * 5) + 2].value) !=="" ? (event.target[(i * 5) + 2].value) : "N/A",
          "area_or_quantity": (event.target[(i * 5) + 3].value) !== "" ? dollarIndianLocale.format(parseFloat(event.target[(i * 5) + 3].value)):"0",
          "aq": "Area",
          "cost_per_quantity": (event.target[(i * 5) + 4].value)!=="" ? dollarIndianLocale.format(parseFloat(event.target[(i * 5) + 4].value)):"0.00",
          "total_costing": total? total : "0.00"
        }
        InputDataArray.push(foyer)

      } else if (i > 19 && i <= 37) {
        const temp = parseFloat(event.target[(i * 5) + 3].value) * parseFloat(event.target[(i * 5) + 4].value);
        const total = temp ? dollarIndianLocale.format(temp):"0.00";
        const living: any = {
          "index": i + 1,
          "particulars_header": (this.data.living[i - 20].particulars_header) !== "" ? (this.data.living[i - 20].particulars_header) : "N/A",
          "particulars_sub_header": (event.target[i * 5].value) !== "" ? event.target[i * 5].value : "N/A",
          "code_material": (event.target[(i * 5) + 1].value) !== "" ? event.target[(i * 5) + 1].value : "N/A",
          "finish_type": (event.target[(i * 5) + 2].value) !== "" ? event.target[(i * 5) + 2].value : "N/A",
          "area_or_quantity": (event.target[(i * 5) + 3].value) !=="" ? dollarIndianLocale.format(parseFloat(event.target[(i * 5) + 3].value)): "0",
          "aq": "Area",
          "cost_per_quantity": (event.target[(i * 5) + 4].value) !=="" ? dollarIndianLocale.format(parseFloat(event.target[(i * 5) + 4].value)): "0.00",
          "total_costing":  total? total : ""
        }
        InputDataArray.push(living)
      } else if (i > 37 && i <= 51) {
        const temp = parseFloat(event.target[(i * 5) + 3].value) * parseFloat(event.target[(i * 5) + 4].value);
        const total = temp ? dollarIndianLocale.format(temp):"0.00";
        const dining: any = {
          "index": i + 1,
          "particulars_header": (this.data.dining[i - 38].particulars_header) !=="" ? this.data.dining[i - 38].particulars_header : "N/A",
          "particulars_sub_header": (event.target[i * 5].value) !== "" ? event.target[i * 5].value : "N/A",
          "code_material": (event.target[(i * 5) + 1].value) !== "" ? event.target[(i * 5) + 1].value : "N/A",
          "finish_type": (event.target[(i * 5) + 2].value) !== "" ? event.target[(i * 5) + 2].value : "N/A",
          "area_or_quantity": (event.target[(i * 5) + 3].value) !=="" ? dollarIndianLocale.format(parseFloat(event.target[(i * 5) + 3].value)):"0",
          "aq": "Area",
          "cost_per_quantity": (event.target[(i * 5) + 4].value) !=="" ? dollarIndianLocale.format(parseFloat(event.target[(i * 5) + 4].value)) : "0.00",
          "total_costing":  total? total : ""
        }
        InputDataArray.push(dining)
      } else if (i > 51 && i <= 74) {
        const temp = parseFloat(event.target[(i * 5) + 3].value) * parseFloat(event.target[(i * 5) + 4].value);
        const total = temp ? dollarIndianLocale.format(temp): "0.00";
        const kitchen: any = {
          "index": i + 1,
          "particulars_header": (this.data.kitchen[i - 52].particulars_header) !== "" ? this.data.kitchen[i - 52].particulars_header : "N/A",
          "particulars_sub_header": (event.target[i * 5].value) !== "" ? event.target[i * 5].value : "N/A",
          "code_material": (event.target[(i * 5) + 1].value) !== "" ? (event.target[(i * 5) + 1].value) : "N/A",
          "finish_type": (event.target[(i * 5) + 2].value) !== "" ? event.target[(i * 5) + 2].value : "N/A",
          "area_or_quantity": (event.target[(i * 5) + 3].value) !== "" ? dollarIndianLocale.format(parseFloat(event.target[(i * 5) + 3].value)): "0",
          "aq": "Area",
          "cost_per_quantity": (event.target[(i * 5) + 4].value) !=="" ? dollarIndianLocale.format(parseFloat(event.target[(i * 5) + 4].value)): "0.00",
          "total_costing":  total? total : ""
        }
        InputDataArray.push(kitchen)
      } else if (i > 74 && i <= 94) {
        const temp = parseFloat(event.target[(i * 5) + 3].value) * parseFloat(event.target[(i * 5) + 4].value);
        const total = temp ? dollarIndianLocale.format(temp): "0.00";
        const kids_bedroom: any = {
          "index": i + 1,
          "particulars_header": (this.data.kids_bedroom[i - 75].particulars_header) !== "" ? this.data.kids_bedroom[i - 75].particulars_header : "N/A",
          "particulars_sub_header": (event.target[i * 5].value) !== "" ? event.target[i * 5].value : "N/A",
          "code_material": (event.target[(i * 5) + 1].value) !== "" ? event.target[(i * 5) + 1].value : "N/A",
          "finish_type": (event.target[(i * 5) + 2].value) !== "" ? event.target[(i * 5) + 2].value : "N/A",
          "area_or_quantity": (event.target[(i * 5) + 3].value) !== "" ? dollarIndianLocale.format(parseFloat(event.target[(i * 5) + 3].value)): "0",
          "aq": "Area",
          "cost_per_quantity": (event.target[(i * 5) + 4].value) !== "" ? dollarIndianLocale.format(parseFloat(event.target[(i * 5) + 4].value)) : "0.00",
          "total_costing":  total? total : ""
        }
        InputDataArray.push(kids_bedroom)
      } else if (i > 94 && i <= 116) {
        const temp = parseFloat(event.target[(i * 5) + 3].value) * parseFloat(event.target[(i * 5) + 4].value);
        const total = temp ? dollarIndianLocale.format(temp): "0.00";
        const guest_bedroom: any = {
          "index": i + 1,
          "particulars_header": (this.data.guest_bedroom[i - 95].particulars_header) !== "" ? this.data.guest_bedroom[i - 95].particulars_header : "N/A",
          "particulars_sub_header": (event.target[i * 5].value) !== "" ? event.target[i * 5].value : "N/A",
          "code_material": (event.target[(i * 5) + 1].value) !== "" ? event.target[(i * 5) + 1].value : "N/A",
          "finish_type": (event.target[(i * 5) + 2].value) !== "" ? event.target[(i * 5) + 2].value : "N/A",
          "area_or_quantity": (event.target[(i * 5) + 3].value) !== "" ? dollarIndianLocale.format(parseFloat(event.target[(i * 5) + 3].value)): "0",
          "aq": "Area",
          "cost_per_quantity": (event.target[(i * 5) + 4].value) !== "" ? dollarIndianLocale.format(parseFloat(event.target[(i * 5) + 4].value)):"0.00",
          "total_costing":  total? total : ""
        }
        InputDataArray.push(guest_bedroom)
      } else if (i > 116 && i <= 137) {
        const temp = parseFloat(event.target[(i * 5) + 3].value) * parseFloat(event.target[(i * 5) + 4].value);
        const total = temp ? dollarIndianLocale.format(temp) : "0.00";
        const master_bedroom: any = {
          "index": i + 1,
          "particulars_header": (this.data.master_bedroom[i - 117].particulars_header) !== "" ? this.data.master_bedroom[i - 117].particulars_header : "N/A",
          "particulars_sub_header": (event.target[i * 5].value) !== "" ? event.target[i * 5].value : "N/A",
          "code_material": (event.target[(i * 5) + 1].value) !== "" ? event.target[(i * 5) + 1].value : "N/A",
          "finish_type": (event.target[(i * 5) + 2].value) !== "" ? (event.target[(i * 5) + 2].value) : "N/A", 
          "area_or_quantity": (event.target[(i * 5) + 3].value) !== "" ? dollarIndianLocale.format(parseFloat(event.target[(i * 5) + 3].value)): "0",
          "aq": "Area",
          "cost_per_quantity": (event.target[(i * 5) + 4].value) !== "" ? dollarIndianLocale.format(parseFloat(event.target[(i * 5) + 4].value)):"0.00",
          "total_costing":  total? total : ""
        }
        InputDataArray.push(master_bedroom)
      } else if (i > 137 && i <= 139) {
        const temp = parseFloat(event.target[(i * 5) + 3].value) * parseFloat(event.target[(i * 5) + 4].value);
        const total = temp ? dollarIndianLocale.format(temp) : "0.00";
        const services: any = {
          "index": i + 1,
          "particulars_header": (this.data.services[i - 138].particulars_header) !== "" ? this.data.services[i - 138].particulars_header : "N/A",
          "particulars_sub_header": (event.target[i * 5].value) !== "" ? event.target[i * 5].value : "N/A",
          "code_material": (event.target[(i * 5) + 1].value) !== "" ? event.target[(i * 5) + 1].value : "N/A",
          "finish_type": (event.target[(i * 5) + 2].value) !== "" ? event.target[(i * 5) + 2].value : "N/A",
          "area_or_quantity": (event.target[(i * 5) + 3].value) !=="" ? dollarIndianLocale.format(parseFloat(event.target[(i * 5) + 3].value)) : "0",
          "aq": "Area",
          "cost_per_quantity": (event.target[(i * 5) + 4].value) !== "" ? dollarIndianLocale.format(parseFloat(event.target[(i * 5) + 4].value)):"0.00",
          "total_costing":  total? total : ""
        }
        InputDataArray.push(services)
      }
    }

    const foyer = InputDataArray.slice(0, 20);
    const living = InputDataArray.slice(20, 38);
    const dining = InputDataArray.slice(38, 52);
    const kitchen = InputDataArray.slice(52, 75);
    const kids_bedroom = InputDataArray.slice(75, 95);
    const guest_bedroom = InputDataArray.slice(95, 117);
    const master_bedroom = InputDataArray.slice(117, 138);
    const services = InputDataArray.slice(138, 140);
    this.finalDataArray.push({ "foyer": foyer });
    this.finalDataArray.push({ "living": living });
    this.finalDataArray.push({ dining: dining });
    this.finalDataArray.push({ kitchen: kitchen });
    this.finalDataArray.push({ kids_bedroom: kids_bedroom });
    this.finalDataArray.push({ guest_bedroom: guest_bedroom });
    this.finalDataArray.push({ master_bedroom: master_bedroom });
    this.finalDataArray.push({ services: services });
    // this.data =finalDataArray;
    console.log(this.finalDataArray)
  }

}
