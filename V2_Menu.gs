/***************************************
 * 100 Prospect AI Platform
 * V2_Menu.gs
 ***************************************/

function onOpen() {
  const ui = SpreadsheetApp.getUi();

  ui.createMenu('100 Prospect AI')
    .addItem('Initialise System', 'v2_initialiseSystem')
    .addSeparator()

    .addSubMenu(
      ui.createMenu('Prospects')
        .addItem('Process Ready Prospects', 'v2_processReadyProspects')
        .addItem('View Selected AI Prospect', 'v2_viewSelectedAIProspect')
        .addItem('Generate Outreach Assets', 'v2_generateOutreachAssets')
    )

    .addSubMenu(
      ui.createMenu('Outreach')
        .addItem('View Outreach Record', 'v2_viewSelectedOutreachRecord')
        .addItem('Push Approved To FluentCRM', 'v2_pushApprovedToFluentCRM')
    )

    .addSubMenu(
      ui.createMenu('Reporting')
        .addItem('Refresh Dashboard', 'v2_refreshDashboard')
    )

    .addToUi();
}
