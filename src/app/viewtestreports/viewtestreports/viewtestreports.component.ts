
import { Component, ElementRef, Input , OnInit, ViewChild } from '@angular/core';
import { Patient } from 'src/app/readpatients/patient';
import { Testreport } from '../testreport';
import  { ViewtestreportsService} from '../viewtestreports.service'


@Component({
  selector: 'app-viewtestreports',
  templateUrl: './viewtestreports.component.html',
  styleUrls: ['./viewtestreports.component.css']
})
export class ViewtestreportsComponent implements OnInit {
  visibility: boolean = false;
  patient : Patient;
  testreports:Testreport[] ;
  
  @Input()
  set patientDetail(patientDetail: Patient){
    this.patient = patientDetail;
    this.getTestReports();
  }

  constructor( private viewtestreportsService:ViewtestreportsService) { }
  @ViewChild('content') popupview!:ElementRef;

  ngOnInit(): void {}

 
  getTestReports(){
    this.visibility = true;
    this.viewtestreportsService.getTestReports( this.patient.patientId ).subscribe ((res) => {
      this.testreports = res;
     this.visibility = false;

    }); 
  }

  viewPDF(fileId?: String ){
    this.viewtestreportsService.getViewPdf(fileId).subscribe(
      (data: Blob) => {
        var file = new Blob([data], { type: 'application/pdf' })
        const openPDFLink = document.createElement('a');
        openPDFLink.href = URL.createObjectURL(file);
        openPDFLink.target = '_blank';
        openPDFLink.click();
    });
    
  }

  asIsOrder(a: any, b: any) {
    return 1;
  }
}
