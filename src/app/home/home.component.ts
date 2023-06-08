import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

// amCharts imports
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  faCoffee = faCoffee;
//   root = am5.Root.new("chartdiv"); 
//   chart = this.root.container.children.push(
//   am5map.MapChart.new(this.root, {
//     panX: "rotateX",
//     projection: am5map.geoNaturalEarth1()
//   })
// );
}
