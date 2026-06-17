/***************************************
 * 100 Prospect AI System V2
 * V2_Config.gs
 ***************************************/

const V2_CONFIG = {
  FIRST_DATA_ROW: 3,

  SHEETS: {
    SETTINGS: 'Settings',
    PROMPT_LIBRARY: 'Prompt Library',
    PROSPECT_QUEUE: 'Prospect Queue',
    AI_INTELLIGENCE: 'AI Intelligence Repository',
    AI_OUTREACH: 'AI Outreach Asset Repository',
    OUTREACH_TRACKER: 'Outreach Tracker',
    MEETINGS_BOOKED: 'Meetings Booked',
    SYSTEM_COUNTERS: 'System Counters',
    AI_LOGS: 'AI Logs',
    DASHBOARD: 'Dashboard',
    PLATFORM_HEALTH: 'Platform Health',
  },

  ID_PREFIXES: {
    PROSPECT: 'R29',
    INTELLIGENCE: 'INT',
    OUTREACH_ASSET: 'OUT',
    CAMPAIGN: 'CAM',
    OUTREACH: 'OTR',
    MEETING: 'MTG',
    LOG: 'LOG'
  },

  STATUS: {
    PROCESS: {
      NEW: 'New',
      PROCESSING: 'Processing',
      AI_PROCESSED: 'AI Processed',
      REJECTED: 'Rejected',
      ERROR: 'Error'
    },

    HUMAN_REVIEW: {
      PENDING: 'Pending Review',
      APPROVED: 'Approved',
      REJECTED: 'Rejected',
      HOLD: 'Hold',
      NEEDS_REVISION: 'Needs Revision'
    },

    OUTREACH_APPROVAL: {
      PENDING: 'Pending Review',
      APPROVED: 'Approved',
      REJECTED: 'Rejected',
      NEEDS_REVISION: 'Needs Revision',
      PUSHED_TO_FLUENTCRM: 'Pushed To FluentCRM'
    },

    CRM: {
      NOT_PUSHED: 'Not Pushed',
      QUEUED: 'Queued',
      PUSHED: 'Pushed',
      SYNC_ERROR: 'Sync Error',
      ARCHIVED: 'Archived'
    },

    CAMPAIGN: {
      NOT_STARTED: 'Not Started',
      READY_FOR_CRM: 'Ready for CRM',
      PUSHED_TO_FLUENTCRM: 'Pushed to FluentCRM',
      CAMPAIGN_ACTIVE: 'Campaign Active',
      REPLIED: 'Replied',
      MEETING_BOOKED: 'Meeting Booked',
      UNSUBSCRIBED: 'Unsubscribed',
      BOUNCED: 'Bounced',
      COMPLAINT: 'Complaint',
      CLOSED: 'Closed'
    }
  }
};
