var template = `
<div class="graph-panel" ng-class="{'graph-panel--legend-right': ctrl.panel.legend.rightSide}">
  <div class="graph-panel__chart" grafana-graph-alternative ng-dblclick="ctrl.zoomOut()">
  </div>

  <div class="graph-legend" graph-legend-alternative></div>
</div>
`;

export default template;
