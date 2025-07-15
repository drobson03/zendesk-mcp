/**
 * @since 0.0.0
 */

// biome-ignore-all lint/suspicious/noExplicitAny: required
// biome-ignore-all lint/style/noNonNullAssertion: required
// biome-ignore-all lint/correctness/noUnusedFunctionParameters: required
// biome-ignore-all lint/complexity/useLiteralKeys: required
// biome-ignore-all lint/nursery/useSingleJsDocAsterisk: required
// biome-ignore-all lint/style/useFilenamingConvention: required
import type * as HttpClient from "@effect/platform/HttpClient";
import * as HttpClientError from "@effect/platform/HttpClientError";
import * as HttpClientRequest from "@effect/platform/HttpClientRequest";
import * as HttpClientResponse from "@effect/platform/HttpClientResponse";
import * as Data from "effect/Data";
import * as Effect from "effect/Effect";
import type { ParseError } from "effect/ParseResult";
import * as S from "effect/Schema";

export class ListAssigneeFieldAssignableGroupsAndAgentsSearchParams extends S.Struct(
  {
    name: S.String,
  },
) {}

export class AssigneeFieldAssignableSearchAgentObject extends S.Class<AssigneeFieldAssignableSearchAgentObject>(
  "AssigneeFieldAssignableSearchAgentObject",
)({
  /**
   * Name of the agent's group
   */
  group: S.optionalWith(S.String, { nullable: true }),
  /**
   * Agent's Group ID
   */
  group_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Agent ID
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Name of the agent
   */
  name: S.optionalWith(S.String, { nullable: true }),
  /**
   * URL of Avatar
   */
  photo_url: S.optionalWith(S.String, { nullable: true }),
}) {}

export class AssigneeFieldAssignableSearchGroupObject extends S.Class<AssigneeFieldAssignableSearchGroupObject>(
  "AssigneeFieldAssignableSearchGroupObject",
)({
  /**
   * Group ID
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Name of the group
   */
  name: S.optionalWith(S.String, { nullable: true }),
}) {}

export class AssigneeFieldAssignableGroupsAndAgentsSearchResponse extends S.Class<AssigneeFieldAssignableGroupsAndAgentsSearchResponse>(
  "AssigneeFieldAssignableGroupsAndAgentsSearchResponse",
)({
  agents: S.optionalWith(S.Array(AssigneeFieldAssignableSearchAgentObject), {
    nullable: true,
  }),
  /**
   * Number of agents + groups listed from search result.
   */
  count: S.optionalWith(S.Int, { nullable: true }),
  groups: S.optionalWith(S.Array(AssigneeFieldAssignableSearchGroupObject), {
    nullable: true,
  }),
}) {}

export class AssigneeFieldAssignableGroupObject extends S.Class<AssigneeFieldAssignableGroupObject>(
  "AssigneeFieldAssignableGroupObject",
)({
  /**
   * Description of the group
   */
  description: S.optionalWith(S.String, { nullable: true }),
  /**
   * Group ID
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Name of the group
   */
  name: S.optionalWith(S.String, { nullable: true }),
}) {}

export class AssigneeFieldAssignableGroupsResponse extends S.Class<AssigneeFieldAssignableGroupsResponse>(
  "AssigneeFieldAssignableGroupsResponse",
)({
  /**
   * Number of groups listed in `groups` property.
   */
  count: S.optionalWith(S.Int, { nullable: true }),
  groups: S.optionalWith(S.Array(AssigneeFieldAssignableGroupObject), {
    nullable: true,
  }),
  next_page: S.optionalWith(S.String, { nullable: true }),
  previous_page: S.optionalWith(S.String, { nullable: true }),
}) {}

export class ListAssigneeFieldAssignableGroupAgentsParams extends S.Struct(
  {},
) {}

export class AssigneeFieldAssignableAgentObject extends S.Class<AssigneeFieldAssignableAgentObject>(
  "AssigneeFieldAssignableAgentObject",
)({
  /**
   * URL of Agent's avatar
   */
  avatar_url: S.optionalWith(S.String, { nullable: true }),
  /**
   * Agent Support ID
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Name of the agent
   */
  name: S.optionalWith(S.String, { nullable: true }),
}) {}

export class AssigneeFieldAssignableGroupAgentsResponse extends S.Class<AssigneeFieldAssignableGroupAgentsResponse>(
  "AssigneeFieldAssignableGroupAgentsResponse",
)({
  agents: S.optionalWith(S.Array(AssigneeFieldAssignableAgentObject), {
    nullable: true,
  }),
  /**
   * Number of agents listed in `agents` property.
   */
  count: S.optionalWith(S.Int, { nullable: true }),
  next_page: S.optionalWith(S.String, { nullable: true }),
  previous_page: S.optionalWith(S.String, { nullable: true }),
}) {}

export class UserForAdmin extends S.Class<UserForAdmin>("UserForAdmin")({
  /**
   * false if the user has been deleted
   */
  active: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * An alias displayed to end users
   */
  alias: S.optionalWith(S.String, { nullable: true }),
  /**
   * Whether or not the user is a chat-only agent
   */
  chat_only: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * The time the user was created
   */
  created_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * A custom role if the user is an agent on the Enterprise plan or above
   */
  custom_role_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The id of the user's default group
   */
  default_group_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Any details you want to store about the user, such as an address
   */
  details: S.optionalWith(S.String, { nullable: true }),
  /**
   * The user's primary email address. *Writeable on create only. On update, a secondary email is added. See [Email Address](#email-address)
   */
  email: S.optionalWith(S.String, { nullable: true }),
  /**
   * A unique identifier from another system. The API treats the id as case insensitive. Example: "ian1" and "IAN1" are the same value.
   */
  external_id: S.optionalWith(S.String, { nullable: true }),
  /**
   * The time zone for the user
   */
  iana_time_zone: S.optionalWith(S.String, { nullable: true }),
  /**
   * Automatically assigned when the user is created
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Last time the user signed in to Zendesk Support or made an API request
   * using an API token or basic authentication
   */
  last_login_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * The user's locale. A BCP-47 compliant tag for the locale. If both "locale" and "locale_id" are present on create or update, "locale_id" is ignored and only "locale" is used.
   */
  locale: S.optionalWith(S.String, { nullable: true }),
  /**
   * The user's language identifier
   */
  locale_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Designates whether the user has forum moderation capabilities
   */
  moderator: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * The user's name
   */
  name: S.String,
  /**
   * Any notes you want to store about the user
   */
  notes: S.optionalWith(S.String, { nullable: true }),
  /**
   * true if the user can only create private comments
   */
  only_private_comments: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * The id of the user's organization. If the user has more than one [organization memberships](/api-reference/ticketing/organizations/organization_memberships/), the id of the user's default organization. If updating, see [Organization ID](#organization-id)
   */
  organization_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The user's primary phone number. See [Phone Number](#phone-number) below
   */
  phone: S.optionalWith(S.String, { nullable: true }),
  /**
   * The user's profile picture represented as an [Attachment](/api-reference/ticketing/tickets/ticket-attachments/) object
   */
  photo: S.optionalWith(S.Record({ key: S.String, value: S.Unknown }), {
    nullable: true,
  }),
  /**
   * A URL pointing to the user's profile picture.
   */
  remote_photo_url: S.optionalWith(S.String, { nullable: true }),
  /**
   * This parameter is inert and has no effect. It may be deprecated in the
   * future.
   *
   * Previously, this parameter determined whether a user could access a CSV
   * report in a legacy Guide dashboard. This dashboard has been removed. See
   * [Announcing Guide legacy reporting upgrade to
   * Explore](https://support.zendesk.com/hc/en-us/articles/4762263171610-Announcing-Guide-legacy-reporting-upgrade-to-Explore-)
   */
  report_csv: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * If the agent has any restrictions; false for admins and unrestricted agents, true for other agents
   */
  restricted_agent: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * The user's role. Possible values are "end-user", "agent", or "admin"
   */
  role: S.optionalWith(S.String, { nullable: true }),
  /**
   * The user's role id. 0 for a custom agent, 1 for a light agent, 2 for a chat agent, 3 for a chat agent added to the Support account as a contributor ([Chat Phase 4](https://support.zendesk.com/hc/en-us/articles/360022365373#topic_djh_1zk_4fb)), 4 for an admin, and 5 for a billing admin
   */
  role_type: S.optionalWith(S.Int, { nullable: true }),
  /**
   * If the user is shared from a different Zendesk Support instance. Ticket sharing accounts only
   */
  shared: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * If the user is a shared agent from a different Zendesk Support instance. Ticket sharing accounts only
   */
  shared_agent: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * Whether the `phone` number is shared or not. See [Phone Number](#phone-number) below
   */
  shared_phone_number: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * The user's signature. Only agents and admins can have signatures
   */
  signature: S.optionalWith(S.String, { nullable: true }),
  /**
   * If the agent is suspended. Tickets from suspended users are also suspended, and these users cannot sign in to the end user portal
   */
  suspended: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * The user's tags. Only present if your account has user tagging enabled
   */
  tags: S.optionalWith(S.Array(S.String), { nullable: true }),
  /**
   * Specifies which tickets the user has access to. Possible values are: "organization", "groups", "assigned", "requested", null. "groups" and "assigned" are valid only for agents. If you pass an invalid value to an end user (for example, "groups"), they will be assigned to "requested", regardless of their previous access
   */
  ticket_restriction: S.optionalWith(S.String, { nullable: true }),
  /**
   * The user's time zone. See [Time Zone](#time-zone)
   */
  time_zone: S.optionalWith(S.String, { nullable: true }),
  /**
   * If two factor authentication is enabled
   */
  two_factor_auth_enabled: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * The time the user was last updated
   */
  updated_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * The user's API url
   */
  url: S.optionalWith(S.String, { nullable: true }),
  /**
   * Values of custom fields in the user's profile. See [User Fields](#user-fields)
   */
  user_fields: S.optionalWith(S.Record({ key: S.String, value: S.Unknown }), {
    nullable: true,
  }),
  /**
   * Any of the user's identities is verified. See [User Identities](/api-reference/ticketing/users/user_identities)
   */
  verified: S.optionalWith(S.Boolean, { nullable: true }),
}) {}

export class UserForEndUser extends S.Class<UserForEndUser>("UserForEndUser")({
  /**
   * The time the user was created
   */
  created_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * The primary email address of this user. If the primary email address is not [verified](https://support.zendesk.com/hc/en-us/articles/4408886752410), the secondary email address is used
   */
  email: S.optionalWith(S.String, { nullable: true }),
  /**
   * The time zone for the user
   */
  iana_time_zone: S.optionalWith(S.String, { nullable: true }),
  /**
   * Automatically assigned when creating users
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The locale for this user
   */
  locale: S.optionalWith(S.String, { nullable: true }),
  /**
   * The language identifier for this user
   */
  locale_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The name of the user
   */
  name: S.String,
  /**
   * The id of the user's organization. If the user has more than one [organization memberships](/api-reference/ticketing/organizations/organization_memberships/), the id of the user's default organization. If updating, see [Organization ID](/api-reference/ticketing/users/users/#organization-id)
   */
  organization_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The primary phone number of this user. See [Phone Number](/api-reference/ticketing/users/users/#phone-number) in the Users API
   */
  phone: S.optionalWith(S.String, { nullable: true }),
  /**
   * The user's profile picture represented as an [Attachment](/api-reference/ticketing/tickets/ticket-attachments/) object
   */
  photo: S.optionalWith(S.Record({ key: S.String, value: S.Unknown }), {
    nullable: true,
  }),
  /**
   * The role of the user. Possible values: `"end-user"`, `"agent"`, `"admin"`
   */
  role: S.optionalWith(S.String, { nullable: true }),
  /**
   * Whether the `phone` number is shared or not. See [Phone Number](/api-reference/ticketing/users/users/#phone-number) in the Users API
   */
  shared_phone_number: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * The time-zone of this user
   */
  time_zone: S.optionalWith(S.String, { nullable: true }),
  /**
   * The time of the last update of the user
   */
  updated_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * The API url of this user
   */
  url: S.optionalWith(S.String, { nullable: true }),
  /**
   * Any of the user's identities is verified. See [User Identities](/api-reference/ticketing/users/user_identities)
   */
  verified: S.optionalWith(S.Boolean, { nullable: true }),
}) {}

export class UserObject extends S.Union(UserForAdmin, UserForEndUser) {}

export class UsersResponse extends S.Class<UsersResponse>("UsersResponse")({
  users: S.optionalWith(S.Array(UserObject), { nullable: true }),
}) {}

export class ReverseLookupResponse extends S.Record({
  key: S.String,
  value: S.Unknown,
}) {}

/**
 * The active features for an account. See [Active Features](#active-features)
 */
export class AccountSettingsActiveFeaturesObject extends S.Class<AccountSettingsActiveFeaturesObject>(
  "AccountSettingsActiveFeaturesObject",
)({
  agent_forwarding: S.optionalWith(S.Boolean, { nullable: true }),
  allow_ccs: S.optionalWith(S.Boolean, { nullable: true }),
  allow_email_template_customization: S.optionalWith(S.Boolean, {
    nullable: true,
  }),
  automatic_answers: S.optionalWith(S.Boolean, { nullable: true }),
  bcc_archiving: S.optionalWith(S.Boolean, { nullable: true }),
  benchmark_opt_out: S.optionalWith(S.Boolean, { nullable: true }),
  business_hours: S.optionalWith(S.Boolean, { nullable: true }),
  chat: S.optionalWith(S.Boolean, { nullable: true }),
  chat_about_my_ticket: S.optionalWith(S.Boolean, { nullable: true }),
  csat_reason_code: S.optionalWith(S.Boolean, { nullable: true }),
  custom_dkim_domain: S.optionalWith(S.Boolean, { nullable: true }),
  customer_context_as_default: S.optionalWith(S.Boolean, { nullable: true }),
  customer_satisfaction: S.optionalWith(S.Boolean, { nullable: true }),
  dynamic_contents: S.optionalWith(S.Boolean, { nullable: true }),
  explore: S.optionalWith(S.Boolean, { nullable: true }),
  explore_on_support_ent_plan: S.optionalWith(S.Boolean, { nullable: true }),
  explore_on_support_pro_plan: S.optionalWith(S.Boolean, { nullable: true }),
  facebook: S.optionalWith(S.Boolean, { nullable: true }),
  facebook_login: S.optionalWith(S.Boolean, { nullable: true }),
  fallback_composer: S.optionalWith(S.Boolean, { nullable: true }),
  forum_analytics: S.optionalWith(S.Boolean, { nullable: true }),
  good_data_and_explore: S.optionalWith(S.Boolean, { nullable: true }),
  google_login: S.optionalWith(S.Boolean, { nullable: true }),
  is_abusive: S.optionalWith(S.Boolean, { nullable: true }),
  light_agents: S.optionalWith(S.Boolean, { nullable: true }),
  markdown: S.optionalWith(S.Boolean, { nullable: true }),
  on_hold_status: S.optionalWith(S.Boolean, { nullable: true }),
  organization_access_enabled: S.optionalWith(S.Boolean, { nullable: true }),
  rich_content_in_emails: S.optionalWith(S.Boolean, { nullable: true }),
  sandbox: S.optionalWith(S.Boolean, { nullable: true }),
  satisfaction_prediction: S.optionalWith(S.Boolean, { nullable: true }),
  suspended_ticket_notification: S.optionalWith(S.Boolean, { nullable: true }),
  ticket_forms: S.optionalWith(S.Boolean, { nullable: true }),
  ticket_tagging: S.optionalWith(S.Boolean, { nullable: true }),
  topic_suggestion: S.optionalWith(S.Boolean, { nullable: true }),
  twitter: S.optionalWith(S.Boolean, { nullable: true }),
  twitter_login: S.optionalWith(S.Boolean, { nullable: true }),
  user_org_fields: S.optionalWith(S.Boolean, { nullable: true }),
  user_tagging: S.optionalWith(S.Boolean, { nullable: true }),
  voice: S.optionalWith(S.Boolean, { nullable: true }),
}) {}

/**
 * Configuration for the agent workspace. See [Agents](#agents)
 */
export class AccountSettingsAgentObject extends S.Class<AccountSettingsAgentObject>(
  "AccountSettingsAgentObject",
)({
  agent_home: S.optionalWith(S.Boolean, { nullable: true }),
  agent_workspace: S.optionalWith(S.Boolean, { nullable: true }),
  aw_self_serve_migration_enabled: S.optionalWith(S.Boolean, {
    nullable: true,
  }),
  focus_mode: S.optionalWith(S.Boolean, { nullable: true }),
  idle_timeout_enabled: S.optionalWith(S.Boolean, { nullable: true }),
  unified_agent_statuses: S.optionalWith(S.Boolean, { nullable: true }),
}) {}

/**
 * API configuration options. See [API](#api)
 */
export class AccountSettingsApiObject extends S.Class<AccountSettingsApiObject>(
  "AccountSettingsApiObject",
)({
  accepted_api_agreement: S.optionalWith(S.Boolean, { nullable: true }),
  api_password_access: S.optionalWith(S.String, { nullable: true }),
  api_token_access: S.optionalWith(S.String, { nullable: true }),
}) {}

/**
 * Apps configuration options. See [Apps](#apps)
 */
export class AccountSettingsAppsObject extends S.Class<AccountSettingsAppsObject>(
  "AccountSettingsAppsObject",
)({
  create_private: S.optionalWith(S.Boolean, { nullable: true }),
  create_public: S.optionalWith(S.Boolean, { nullable: true }),
  use: S.optionalWith(S.Boolean, { nullable: true }),
}) {}

/**
 * Billing configuration options. See [Billing](#billing)
 */
export class AccountSettingsBillingObject extends S.Class<AccountSettingsBillingObject>(
  "AccountSettingsBillingObject",
)({
  backend: S.optionalWith(S.String, { nullable: true }),
}) {}

/**
 * Branding settings. See [Branding](#branding)
 */
export class AccountSettingsBrandingObject extends S.Class<AccountSettingsBrandingObject>(
  "AccountSettingsBrandingObject",
)({
  favicon_url: S.optionalWith(S.String, { nullable: true }),
  header_color: S.optionalWith(S.String, { nullable: true }),
  header_logo_url: S.optionalWith(S.String, { nullable: true }),
  page_background_color: S.optionalWith(S.String, { nullable: true }),
  tab_background_color: S.optionalWith(S.String, { nullable: true }),
  text_color: S.optionalWith(S.String, { nullable: true }),
}) {}

/**
 * Brand settings. See [Brands](#brands)
 */
export class AccountSettingsBrandsObject extends S.Class<AccountSettingsBrandsObject>(
  "AccountSettingsBrandsObject",
)({
  default_brand_id: S.optionalWith(S.Int, { nullable: true }),
  require_brand_on_new_tickets: S.optionalWith(S.Boolean, { nullable: true }),
}) {}

/**
 * CDN settings
 */
export class AccountSettingsCdnObject extends S.Class<AccountSettingsCdnObject>(
  "AccountSettingsCdnObject",
)({
  cdn_provider: S.optionalWith(S.String, { nullable: true }),
  fallback_cdn_provider: S.optionalWith(S.String, { nullable: true }),
  hosts: S.optionalWith(
    S.Array(
      S.Struct({
        name: S.optionalWith(S.String, { nullable: true }),
        url: S.optionalWith(S.String, { nullable: true }),
      }),
    ),
    { nullable: true },
  ),
}) {}

/**
 * Zendesk Chat settings. See [Chat](#chat)
 */
export class AccountSettingsChatObject extends S.Class<AccountSettingsChatObject>(
  "AccountSettingsChatObject",
)({
  available: S.optionalWith(S.Boolean, { nullable: true }),
  enabled: S.optionalWith(S.Boolean, { nullable: true }),
  integrated: S.optionalWith(S.Boolean, { nullable: true }),
  maximum_request_count: S.optionalWith(S.Int, { nullable: true }),
  welcome_message: S.optionalWith(S.String, { nullable: true }),
}) {}

/**
 * Cross Sell settings
 */
export class AccountSettingsCrossSellObject extends S.Class<AccountSettingsCrossSellObject>(
  "AccountSettingsCrossSellObject",
)({
  show_chat_tooltip: S.optionalWith(S.Boolean, { nullable: true }),
  xsell_source: S.optionalWith(S.String, { nullable: true }),
}) {}

/**
 * The sender authentication profile in use.
 */
export class AccountSettingsEmailObjectEmailSenderAuthenticationProfile extends S.Literal(
  "default",
  "enhanced",
) {}

/**
 * Email settings
 */
export class AccountSettingsEmailObject extends S.Class<AccountSettingsEmailObject>(
  "AccountSettingsEmailObject",
)({
  accept_wildcard_emails: S.optionalWith(S.Boolean, { nullable: true }),
  custom_dkim_domain: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * Whether incoming email is subjected to sender authentication checks (SPF, DKIM)
   */
  email_sender_authentication: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * The sender authentication profile in use.
   */
  email_sender_authentication_profile: S.optionalWith(
    AccountSettingsEmailObjectEmailSenderAuthenticationProfile,
    { nullable: true },
  ),
  /**
   * Whether email status and delivery information is shown in the Agent Workspace
   */
  email_status: S.optionalWith(S.Boolean, { nullable: true }),
  email_template_photos: S.optionalWith(S.Boolean, { nullable: true }),
  email_template_section: S.optionalWith(S.Boolean, { nullable: true }),
  gmail_actions: S.optionalWith(S.Boolean, { nullable: true }),
  modern_email_template: S.optionalWith(S.Boolean, { nullable: true }),
  no_mail_delimiter: S.optionalWith(S.Boolean, { nullable: true }),
  personalized_replies: S.optionalWith(S.Boolean, { nullable: true }),
  send_gmail_messages_via_gmail: S.optionalWith(S.Boolean, { nullable: true }),
}) {}

/**
 * Google Apps configuration. See [G Suite](#g-suite)
 */
export class AccountSettingsGoogleAppsObject extends S.Class<AccountSettingsGoogleAppsObject>(
  "AccountSettingsGoogleAppsObject",
)({
  has_google_apps: S.optionalWith(S.Boolean, { nullable: true }),
  has_google_apps_admin: S.optionalWith(S.Boolean, { nullable: true }),
}) {}

/**
 * Group configuration
 */
export class AccountSettingsGroupObject extends S.Class<AccountSettingsGroupObject>(
  "AccountSettingsGroupObject",
)({
  check_group_name_uniqueness: S.optionalWith(S.Boolean, { nullable: true }),
}) {}

/**
 * Account limits configuration. See [Limits](#limits)
 */
export class AccountSettingsLimitsObject extends S.Class<AccountSettingsLimitsObject>(
  "AccountSettingsLimitsObject",
)({
  attachment_size: S.optionalWith(S.Int, { nullable: true }),
}) {}

/**
 * Internationalization configuration settings. See [Localization](#localization)
 */
export class AccountSettingsLocalizationObject extends S.Class<AccountSettingsLocalizationObject>(
  "AccountSettingsLocalizationObject",
)({
  locale_ids: S.optionalWith(S.Array(S.Int), { nullable: true }),
}) {}

/**
 * Support UI settings. See [Lotus](#lotus)
 */
export class AccountSettingsLotusObject extends S.Class<AccountSettingsLotusObject>(
  "AccountSettingsLotusObject",
)({
  pod_id: S.optionalWith(S.Int, { nullable: true }),
  prefer_lotus: S.optionalWith(S.Boolean, { nullable: true }),
  reporting: S.optionalWith(S.Boolean, { nullable: true }),
}) {}

/**
 * Auto-release capacity settings. See [Messaging inactivity](#messaging-inactivity)
 */
export class AccountSettingsMessageInactivityObject extends S.Class<AccountSettingsMessageInactivityObject>(
  "AccountSettingsMessageInactivityObject",
)({
  default_localized_messages: S.optionalWith(
    S.Struct({
      /**
       * The first pre-solved message
       */
      pre_solved_message_1: S.optionalWith(S.String, { nullable: true }),
      /**
       * The second pre-solved message
       */
      pre_solved_message_2: S.optionalWith(S.String, { nullable: true }),
      /**
       * The solved message
       */
      solved_message: S.optionalWith(S.String, { nullable: true }),
    }),
    { nullable: true },
  ),
  /**
   * Whether the messaging inactivity feature is enabled
   */
  enabled: S.optionalWith(S.Boolean, { nullable: true }),
  reminders: S.optionalWith(
    S.Array(
      S.Struct({
        /**
         * Reminder message content
         */
        message: S.String,
        /**
         * Ticket status id to apply on the ticket
         */
        ticket_status_id: S.optionalWith(S.Int, { nullable: true }),
        /**
         * Timeout in seconds after which the reminder will be sent
         */
        timeout: S.optionalWith(S.Int, { nullable: true }),
      }),
    ),
    { nullable: true },
  ),
  /**
   * Ticket status id to apply on the ticket when it is marked as inactive
   */
  ticket_status_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Timeout in minutes after which the ticket will be marked as inactive
   */
  timeout: S.optionalWith(S.Int, { nullable: true }),
}) {}

/**
 * Account metrics settings. See [Metrics](#metrics)
 */
export class AccountSettingsMetricsObject extends S.Class<AccountSettingsMetricsObject>(
  "AccountSettingsMetricsObject",
)({
  account_size: S.optionalWith(S.String, { nullable: true }),
}) {}

/**
 * Onboarding settings
 */
export class AccountSettingsOnboardingObject extends S.Class<AccountSettingsOnboardingObject>(
  "AccountSettingsOnboardingObject",
)({
  checklist_onboarding_version: S.optionalWith(S.Int, { nullable: true }),
  onboarding_segments: S.optionalWith(S.String, { nullable: true }),
  product_sign_up: S.optionalWith(S.String, { nullable: true }),
}) {}

/**
 * Configuration for routing. See [Routing](#routing)
 */
export class AccountSettingsRoutingObject extends S.Class<AccountSettingsRoutingObject>(
  "AccountSettingsRoutingObject",
)({
  autorouting_tag: S.optionalWith(S.String, { nullable: true }),
  enabled: S.optionalWith(S.Boolean, { nullable: true }),
  max_email_capacity: S.optionalWith(S.Int, { nullable: true }),
  max_messaging_capacity: S.optionalWith(S.Int, { nullable: true }),
  reassignment_messaging_enabled: S.optionalWith(S.Boolean, { nullable: true }),
  reassignment_messaging_timeout: S.optionalWith(S.Int, { nullable: true }),
  reassignment_talk_timeout: S.optionalWith(S.Int, { nullable: true }),
}) {}

/**
 * Rules settings for triggers, macros, views, and automations. See [Rules](#rules)
 */
export class AccountSettingsRuleObject extends S.Class<AccountSettingsRuleObject>(
  "AccountSettingsRuleObject",
)({
  macro_most_used: S.optionalWith(S.Boolean, { nullable: true }),
  macro_order: S.optionalWith(S.String, { nullable: true }),
  skill_based_filtered_views: S.optionalWith(
    S.Array(S.Record({ key: S.String, value: S.Unknown })),
    { nullable: true },
  ),
  using_skill_based_routing: S.optionalWith(S.Boolean, { nullable: true }),
}) {}

/**
 * Side conversations settings
 */
export class AccountSettingsSideConversationsObject extends S.Class<AccountSettingsSideConversationsObject>(
  "AccountSettingsSideConversationsObject",
)({
  email_channel: S.optionalWith(S.Boolean, { nullable: true }),
  msteams_channel: S.optionalWith(S.Boolean, { nullable: true }),
  show_in_context_panel: S.optionalWith(S.Boolean, { nullable: true }),
  slack_channel: S.optionalWith(S.Boolean, { nullable: true }),
  tickets_channel: S.optionalWith(S.Boolean, { nullable: true }),
}) {}

/**
 * Account statistics settings. See [Statistics](#statistics)
 */
export class AccountSettingsStatisticsObject extends S.Class<AccountSettingsStatisticsObject>(
  "AccountSettingsStatisticsObject",
)({
  forum: S.optionalWith(S.Boolean, { nullable: true }),
  rule_usage: S.optionalWith(S.Boolean, { nullable: true }),
  search: S.optionalWith(S.Boolean, { nullable: true }),
}) {}

/**
 * Ticket form settings. See [Ticket Form](#ticket-form)
 */
export class AccountSettingsTicketFormObject extends S.Class<AccountSettingsTicketFormObject>(
  "AccountSettingsTicketFormObject",
)({
  raw_ticket_forms_instructions: S.optionalWith(S.String, { nullable: true }),
  ticket_forms_instructions: S.optionalWith(S.String, { nullable: true }),
}) {}

/**
 * Ticket settings. See [Tickets](#tickets)
 */
export class AccountSettingsTicketObject extends S.Class<AccountSettingsTicketObject>(
  "AccountSettingsTicketObject",
)({
  accepted_new_collaboration_tos: S.optionalWith(S.Boolean, { nullable: true }),
  agent_collision: S.optionalWith(S.Boolean, { nullable: true }),
  agent_invitation_enabled: S.optionalWith(S.Boolean, { nullable: true }),
  agent_ticket_deletion: S.optionalWith(S.Boolean, { nullable: true }),
  allow_group_reset: S.optionalWith(S.Boolean, { nullable: true }),
  assign_default_organization: S.optionalWith(S.Boolean, { nullable: true }),
  assign_tickets_upon_solve: S.optionalWith(S.Boolean, { nullable: true }),
  auto_translation_enabled: S.optionalWith(S.Boolean, { nullable: true }),
  auto_updated_ccs_followers_rules: S.optionalWith(S.Boolean, {
    nullable: true,
  }),
  chat_sla_enablement: S.optionalWith(S.Boolean, { nullable: true }),
  collaboration: S.optionalWith(S.Boolean, { nullable: true }),
  comments_public_by_default: S.optionalWith(S.Boolean, { nullable: true }),
  default_solved_ticket_reassignment_strategy: S.optionalWith(S.String, {
    nullable: true,
  }),
  default_to_draft_mode: S.optionalWith(S.Boolean, { nullable: true }),
  email_attachments: S.optionalWith(S.Boolean, { nullable: true }),
  emoji_autocompletion: S.optionalWith(S.Boolean, { nullable: true }),
  follower_and_email_cc_collaborations: S.optionalWith(S.Boolean, {
    nullable: true,
  }),
  has_color_text: S.optionalWith(S.Boolean, { nullable: true }),
  is_first_comment_private_enabled: S.optionalWith(S.Boolean, {
    nullable: true,
  }),
  light_agent_email_ccs_allowed: S.optionalWith(S.Boolean, { nullable: true }),
  list_empty_views: S.optionalWith(S.Boolean, { nullable: true }),
  list_newest_comments_first: S.optionalWith(S.Boolean, { nullable: true }),
  markdown_ticket_comments: S.optionalWith(S.Boolean, { nullable: true }),
  maximum_personal_views_to_list: S.optionalWith(S.Int, { nullable: true }),
  modern_ticket_reassignment: S.optionalWith(S.Boolean, { nullable: true }),
  private_attachments: S.optionalWith(S.Boolean, { nullable: true }),
  rich_text_comments: S.optionalWith(S.Boolean, { nullable: true }),
  show_modern_ticket_reassignment: S.optionalWith(S.Boolean, {
    nullable: true,
  }),
  status_hold: S.optionalWith(S.Boolean, { nullable: true }),
  tagging: S.optionalWith(S.Boolean, { nullable: true }),
  using_skill_based_routing: S.optionalWith(S.Boolean, { nullable: true }),
}) {}

/**
 * X (formerly Twitter) settings. See [X](#x-formerly-twitter)
 */
export class AccountSettingsTwitterObject extends S.Class<AccountSettingsTwitterObject>(
  "AccountSettingsTwitterObject",
)({
  shorten_url: S.optionalWith(S.String, { nullable: true }),
}) {}

/**
 * User settings. See [Users](#users)
 */
export class AccountSettingsUserObject extends S.Class<AccountSettingsUserObject>(
  "AccountSettingsUserObject",
)({
  agent_created_welcome_emails: S.optionalWith(S.Boolean, { nullable: true }),
  end_user_phone_number_validation: S.optionalWith(S.Boolean, {
    nullable: true,
  }),
  have_gravatars_enabled: S.optionalWith(S.Boolean, { nullable: true }),
  language_selection: S.optionalWith(S.Boolean, { nullable: true }),
  multiple_organizations: S.optionalWith(S.Boolean, { nullable: true }),
  tagging: S.optionalWith(S.Boolean, { nullable: true }),
  time_zone_selection: S.optionalWith(S.Boolean, { nullable: true }),
}) {}

/**
 * Zendesk Talk settings. See [Voice](#voice)
 */
export class AccountSettingsVoiceObject extends S.Class<AccountSettingsVoiceObject>(
  "AccountSettingsVoiceObject",
)({
  agent_confirmation_when_forwarding: S.optionalWith(S.Boolean, {
    nullable: true,
  }),
  agent_wrap_up_after_calls: S.optionalWith(S.Boolean, { nullable: true }),
  enabled: S.optionalWith(S.Boolean, { nullable: true }),
  logging: S.optionalWith(S.Boolean, { nullable: true }),
  maximum_queue_size: S.optionalWith(S.Int, { nullable: true }),
  maximum_queue_wait_time: S.optionalWith(S.Int, { nullable: true }),
  only_during_business_hours: S.optionalWith(S.Boolean, { nullable: true }),
  outbound_enabled: S.optionalWith(S.Boolean, { nullable: true }),
  recordings_public: S.optionalWith(S.Boolean, { nullable: true }),
  uk_mobile_forwarding: S.optionalWith(S.Boolean, { nullable: true }),
}) {}

export class AccountSettingsObject extends S.Class<AccountSettingsObject>(
  "AccountSettingsObject",
)({
  active_features: S.optionalWith(AccountSettingsActiveFeaturesObject, {
    nullable: true,
  }),
  agents: S.optionalWith(AccountSettingsAgentObject, { nullable: true }),
  api: S.optionalWith(AccountSettingsApiObject, { nullable: true }),
  apps: S.optionalWith(AccountSettingsAppsObject, { nullable: true }),
  billing: S.optionalWith(AccountSettingsBillingObject, { nullable: true }),
  branding: S.optionalWith(AccountSettingsBrandingObject, { nullable: true }),
  brands: S.optionalWith(AccountSettingsBrandsObject, { nullable: true }),
  cdn: S.optionalWith(AccountSettingsCdnObject, { nullable: true }),
  chat: S.optionalWith(AccountSettingsChatObject, { nullable: true }),
  cross_sell: S.optionalWith(AccountSettingsCrossSellObject, {
    nullable: true,
  }),
  email: S.optionalWith(AccountSettingsEmailObject, { nullable: true }),
  google_apps: S.optionalWith(AccountSettingsGoogleAppsObject, {
    nullable: true,
  }),
  groups: S.optionalWith(AccountSettingsGroupObject, { nullable: true }),
  limits: S.optionalWith(AccountSettingsLimitsObject, { nullable: true }),
  localization: S.optionalWith(AccountSettingsLocalizationObject, {
    nullable: true,
  }),
  lotus: S.optionalWith(AccountSettingsLotusObject, { nullable: true }),
  messaging_inactivity: S.optionalWith(AccountSettingsMessageInactivityObject, {
    nullable: true,
  }),
  metrics: S.optionalWith(AccountSettingsMetricsObject, { nullable: true }),
  onboarding: S.optionalWith(AccountSettingsOnboardingObject, {
    nullable: true,
  }),
  routing: S.optionalWith(AccountSettingsRoutingObject, { nullable: true }),
  rule: S.optionalWith(AccountSettingsRuleObject, { nullable: true }),
  side_conversations: S.optionalWith(AccountSettingsSideConversationsObject, {
    nullable: true,
  }),
  statistics: S.optionalWith(AccountSettingsStatisticsObject, {
    nullable: true,
  }),
  ticket_form: S.optionalWith(AccountSettingsTicketFormObject, {
    nullable: true,
  }),
  tickets: S.optionalWith(AccountSettingsTicketObject, { nullable: true }),
  twitter: S.optionalWith(AccountSettingsTwitterObject, { nullable: true }),
  user: S.optionalWith(AccountSettingsUserObject, { nullable: true }),
  voice: S.optionalWith(AccountSettingsVoiceObject, { nullable: true }),
}) {}

export class AccountSettingsResponse extends S.Class<AccountSettingsResponse>(
  "AccountSettingsResponse",
)({
  settings: S.optionalWith(AccountSettingsObject, { nullable: true }),
}) {}

export class TrialAccountObject extends S.Class<TrialAccountObject>(
  "TrialAccountObject",
)({
  /**
   * The name of the account
   */
  name: S.optionalWith(S.String, { nullable: true }),
  /**
   * The subdomain of the account
   */
  subdomain: S.optionalWith(S.String, { nullable: true }),
  /**
   * The URL of the account
   */
  url: S.optionalWith(S.String, { nullable: true }),
}) {}

export class TrialAccountResponse extends S.Class<TrialAccountResponse>(
  "TrialAccountResponse",
)({
  account: S.optionalWith(TrialAccountObject, { nullable: true }),
}) {}

export class VerifySubdomainAvailabilityParams extends S.Struct({
  subdomain: S.String,
}) {}

export class VerifySubdomainAvailability200 extends S.Struct({
  success: S.optionalWith(S.Boolean, { nullable: true }),
}) {}

export class ActivityObject extends S.Class<ActivityObject>("ActivityObject")({
  /**
   * The full user record of the user responsible for the ticket activity. See [Users](/api-reference/ticketing/users/users/)
   */
  actor: S.optionalWith(S.Record({ key: S.String, value: S.Unknown }), {
    nullable: true,
  }),
  /**
   * The id of the user responsible for the ticket activity. An `actor_id` of "-1" is a Zendesk system user, such as an automations action.
   */
  actor_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * When the record was created
   */
  created_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * Automatically assigned on creation
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The content of the activity. Can be a ticket, comment, or change.
   */
  object: S.optionalWith(S.Record({ key: S.String, value: S.Unknown }), {
    nullable: true,
  }),
  /**
   * The target of the activity, a ticket.
   */
  target: S.optionalWith(S.Record({ key: S.String, value: S.Unknown }), {
    nullable: true,
  }),
  /**
   * Description of the activity
   */
  title: S.optionalWith(S.String, { nullable: true }),
  /**
   * When the record was last updated
   */
  updated_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * The API url of the activity
   */
  url: S.optionalWith(S.String, { nullable: true }),
  /**
   * The full user record of the agent making the request. See [Users](/api-reference/ticketing/users/users/)
   */
  user: S.optionalWith(S.Record({ key: S.String, value: S.Unknown }), {
    nullable: true,
  }),
  /**
   * The id of the agent making the request
   */
  user_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The type of activity. Can be "tickets.assignment", "tickets.comment", or "tickets.priority_increase"
   */
  verb: S.optionalWith(S.String, { nullable: true }),
}) {}

export class ActivitiesResponse extends S.Class<ActivitiesResponse>(
  "ActivitiesResponse",
)({
  activities: S.optionalWith(S.Array(ActivityObject), { nullable: true }),
  actors: S.optionalWith(
    S.Array(S.Record({ key: S.String, value: S.Unknown })),
    { nullable: true },
  ),
  count: S.optionalWith(S.Int, { nullable: true }),
  next_page: S.optionalWith(S.String, { nullable: true }),
  previous_page: S.optionalWith(S.String, { nullable: true }),
  users: S.optionalWith(
    S.Array(S.Record({ key: S.String, value: S.Unknown })),
    { nullable: true },
  ),
}) {}

export class ActivityResponse extends S.Class<ActivityResponse>(
  "ActivityResponse",
)({
  activity: S.optionalWith(ActivityObject, { nullable: true }),
}) {}

export class ActivitiesCountResponse extends S.Class<ActivitiesCountResponse>(
  "ActivitiesCountResponse",
)({
  count: S.optionalWith(
    S.Struct({
      refreshed_at: S.optionalWith(S.String, { nullable: true }),
      value: S.optionalWith(S.Int, { nullable: true }),
    }),
    { nullable: true },
  ),
}) {}

/**
 * Empty response
 */
export class ReportChannelbackError200 extends S.String {}

/**
 * The status of the import for the indicated resource
 */
export class ChannelFrameworkResultStatusObject extends S.Class<ChannelFrameworkResultStatusObject>(
  "ChannelFrameworkResultStatusObject",
)({
  /**
   * A code indicating the status of the import of the resource, as described in [status codes](#status-codes)
   */
  code: S.optionalWith(S.String, { nullable: true }),
  /**
   * In the case of an exception, a description of the exception. Otherwise, not present.
   */
  description: S.optionalWith(S.String, { nullable: true }),
}) {}

export class ChannelFrameworkResultObject extends S.Class<ChannelFrameworkResultObject>(
  "ChannelFrameworkResultObject",
)({
  /**
   * The external ID of the resource, as passed in
   */
  external_resource_id: S.optionalWith(S.String, { nullable: true }),
  status: S.optionalWith(ChannelFrameworkResultStatusObject, {
    nullable: true,
  }),
}) {}

export class ChannelFrameworkPushResultsResponse extends S.Class<ChannelFrameworkPushResultsResponse>(
  "ChannelFrameworkPushResultsResponse",
)({
  /**
   * An array of [result objects](#result-object)
   */
  results: S.optionalWith(S.Array(ChannelFrameworkResultObject), {
    nullable: true,
  }),
}) {}

/**
 * Empty response
 */
export class ValidateToken200 extends S.String {}

export class CustomObjectRecord extends S.Class<CustomObjectRecord>(
  "CustomObjectRecord",
)({
  /**
   * The time the object was created
   */
  created_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * Id of a user who created the object
   */
  created_by_user_id: S.optionalWith(S.String, { nullable: true }),
  custom_object_fields: S.optionalWith(
    S.Record({ key: S.String, value: S.Unknown }),
    { nullable: true },
  ),
  /**
   * A user-defined unique identifier
   */
  custom_object_key: S.optionalWith(S.String, { nullable: true }),
  /**
   * An id you can use to link custom object records to external data
   */
  external_id: S.optionalWith(S.String, { nullable: true }),
  /**
   * Automatically assigned upon creation
   */
  id: S.optionalWith(S.String, { nullable: true }),
  /**
   * User-defined display name for the object. If autonumbering is selected for the custom object's name field, the name isn't allowed because it's automatically generated. If uniqueness is enabled, the name must be unique.
   */
  name: S.String,
  /**
   * The record photo represented as an [Attachment](/api-reference/ticketing/tickets/ticket-attachments/). The `allows_photos` property must be set to `true` for the object
   */
  photo: S.optionalWith(S.Record({ key: S.String, value: S.Unknown }), {
    nullable: true,
  }),
  /**
   * The time of the last update of the object
   */
  updated_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * Id of the last user who updated the object
   */
  updated_by_user_id: S.optionalWith(S.String, { nullable: true }),
  /**
   * Direct link to the specific custom object
   */
  url: S.optionalWith(S.String, { nullable: true }),
}) {}

export class ApprovalWorkflowInstanceObject extends S.Class<ApprovalWorkflowInstanceObject>(
  "ApprovalWorkflowInstanceObject",
)({
  custom_object_record: S.optionalWith(CustomObjectRecord, { nullable: true }),
}) {}

export class ApprovalRequestCreateRequest extends S.Class<ApprovalRequestCreateRequest>(
  "ApprovalRequestCreateRequest",
)({
  /**
   * User id of the request approver
   */
  assignee_user: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Details for the approval request
   */
  message: S.optionalWith(S.String, { nullable: true }),
  /**
   * Subject for the approval request
   */
  subject: S.optionalWith(S.String, { nullable: true }),
  /**
   * Ticket id to attach the approval request to
   */
  ticket_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Workflow instance id for the approval request
   */
  workflow_instance_id: S.optionalWith(S.String, { nullable: true }),
}) {}

export class ApprovalRequestUser extends S.Class<ApprovalRequestUser>(
  "ApprovalRequestUser",
)({
  /**
   * Unique identifier for the user
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Name of the user
   */
  name: S.optionalWith(S.String, { nullable: true }),
  /**
   * Details for the approval request
   */
  photo: S.optionalWith(
    S.Struct({
      /**
       * URL for the user's photo
       */
      content_url: S.optionalWith(S.String, { nullable: true }),
    }),
    { nullable: true },
  ),
}) {}

export class ApprovalRequestDecision extends S.Class<ApprovalRequestDecision>(
  "ApprovalRequestDecision",
)({
  /**
   * The time the decision was made
   */
  decided_at: S.optionalWith(S.String, { nullable: true }),
  decided_by_user: S.optionalWith(ApprovalRequestUser, { nullable: true }),
  /**
   * Notes for the decision
   */
  decision_notes: S.optionalWith(S.String, { nullable: true }),
  /**
   * Unique identifier for the decision
   */
  id: S.optionalWith(S.String, { nullable: true }),
  /**
   * Status of the decision
   */
  status: S.optionalWith(S.String, { nullable: true }),
}) {}

export class ApprovalTicketDetails extends S.Class<ApprovalTicketDetails>(
  "ApprovalTicketDetails",
)({
  /**
   * Custom fields for the ticket. See [Setting custom field values](/documentation/ticketing/managing-tickets/creating-and-updating-tickets#setting-custom-field-values)
   */
  custom_fields: S.optionalWith(
    S.Array(
      S.Struct({
        /**
         * The id of the custom field
         */
        id: S.optionalWith(S.Int, { nullable: true }),
        /**
         * The value of the custom field
         */
        value: S.optionalWith(S.String, { nullable: true }),
      }),
    ),
    { nullable: true },
  ),
  /**
   * Unique identifier for the user
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Priority of the ticket
   */
  priority: S.optionalWith(S.String, { nullable: true }),
  requester: S.optionalWith(ApprovalRequestUser, { nullable: true }),
  /**
   * Status of the ticket
   */
  status: S.optionalWith(S.String, { nullable: true }),
}) {}

export class ApprovalRequestObject extends S.Class<ApprovalRequestObject>(
  "ApprovalRequestObject",
)({
  approval_request: S.optionalWith(
    S.Struct({
      assignee_user: S.optionalWith(ApprovalRequestUser, { nullable: true }),
      /**
       * The time the approval request was created
       */
      created_at: S.optionalWith(S.String, { nullable: true }),
      created_by_user: S.optionalWith(ApprovalRequestUser, { nullable: true }),
      /**
       * The time at which the approver submitted a decision about the request.
       */
      decided_at: S.optionalWith(S.String, { nullable: true }),
      /**
       * List of decisions for the approval request
       */
      decisions: S.optionalWith(S.Array(ApprovalRequestDecision), {
        nullable: true,
      }),
      /**
       * Unique identifier for the approval request
       */
      id: S.optionalWith(S.String, { nullable: true }),
      /**
       * Details for the approval request
       */
      message: S.optionalWith(S.String, { nullable: true }),
      /**
       * Current status of the approval request
       */
      status: S.optionalWith(S.String, { nullable: true }),
      /**
       * Subject for the approval request
       */
      subject: S.optionalWith(S.String, { nullable: true }),
      ticket_details: S.optionalWith(ApprovalTicketDetails, { nullable: true }),
      /**
       * Reason for withdrawing the approval request
       */
      withdrawn_reason: S.optionalWith(S.String, { nullable: true }),
    }),
    { nullable: true },
  ),
}) {}

/**
 * The status of the approval request
 */
export class UpdateDecisionApprovalRequestRequestStatus extends S.Literal(
  "approved",
  "rejected",
  "pending",
  "withdrawn",
) {}

export class UpdateDecisionApprovalRequestRequest extends S.Class<UpdateDecisionApprovalRequestRequest>(
  "UpdateDecisionApprovalRequestRequest",
)({
  /**
   * Notes for the decision
   */
  notes: S.optionalWith(S.String, { nullable: true }),
  /**
   * The status of the approval request
   */
  status: S.optionalWith(UpdateDecisionApprovalRequestRequestStatus, {
    nullable: true,
  }),
}) {}

export class ApprovalRequestsSearchResponse extends S.Class<ApprovalRequestsSearchResponse>(
  "ApprovalRequestsSearchResponse",
)({
  /**
   * Cursor for the next page of results
   */
  after_cursor: S.optionalWith(S.String, { nullable: true }),
  /**
   * URL for the next page of results
   */
  after_url: S.optionalWith(S.String, { nullable: true }),
  approval_requests: S.optionalWith(
    S.Array(
      S.Struct({
        /**
         * Unique identifier for the approval workflow instance. See [Approval Workflow Instances](/api-reference/ticketing/approvals/approval_workflow_instances/#approval-workflow-instances)
         */
        approval_workflow_instance_id: S.optionalWith(S.String, {
          nullable: true,
        }),
        /**
         * The time the approval request was created was created
         */
        created_at: S.optionalWith(S.String, { nullable: true }),
        /**
         * Name of the user that created the approval request
         */
        created_by_name: S.optionalWith(S.String, { nullable: true }),
        /**
         * Unique identifier for the approval request
         */
        id: S.optionalWith(S.String, { nullable: true }),
        /**
         * Details for the approval request
         */
        message: S.optionalWith(S.String, { nullable: true }),
        /**
         * Name of the user that can make a decision on the approval request
         */
        requester_name: S.optionalWith(S.String, { nullable: true }),
        /**
         * Current status of the approval request
         */
        status: S.optionalWith(S.String, { nullable: true }),
        /**
         * Subject for the approval request
         */
        subject: S.optionalWith(S.String, { nullable: true }),
      }),
    ),
    { nullable: true },
  ),
  /**
   * Cursor for the previous page of results
   */
  before_cursor: S.optionalWith(S.String, { nullable: true }),
  /**
   * URL for the previous page of results
   */
  before_url: S.optionalWith(S.String, { nullable: true }),
}) {}

export class ShowAttachmentParams extends S.Struct({}) {}

export class AttachmentBaseObject extends S.Class<AttachmentBaseObject>(
  "AttachmentBaseObject",
)({
  /**
   * The content type of the image. Example value: "image/png"
   */
  content_type: S.optionalWith(S.String, { nullable: true }),
  /**
   * A full URL where the attachment image file can be downloaded. The file may be hosted externally so take care not to inadvertently send Zendesk authentication credentials. See [Working with url properties](/documentation/ticketing/managing-tickets/working-with-url-properties)
   */
  content_url: S.optionalWith(S.String, { nullable: true }),
  /**
   * If true, the attachment has been deleted
   */
  deleted: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * The name of the image file
   */
  file_name: S.optionalWith(S.String, { nullable: true }),
  /**
   * The height of the image file in pixels. If height is unknown, returns null
   */
  height: S.optionalWith(S.String, { nullable: true }),
  /**
   * Automatically assigned when created
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * If true, the attachment is excluded from the attachment list and the attachment's URL
   * can be referenced within the comment of a ticket. Default is false
   */
  inline: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * If true, you can download an attachment flagged as malware. If false, you can't download such an attachment.
   */
  malware_access_override: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * The result of the malware scan. There is a delay between the time the attachment is uploaded and when the malware scan is completed. Usually the scan is done within a few seconds, but high load conditions can delay the scan results. Possible values: "malware_found", "malware_not_found", "failed_to_scan", "not_scanned"
   */
  malware_scan_result: S.optionalWith(S.String, { nullable: true }),
  /**
   * The URL the attachment image file has been mapped to
   */
  mapped_content_url: S.optionalWith(S.String, { nullable: true }),
  /**
   * The size of the image file in bytes
   */
  size: S.optionalWith(S.Int, { nullable: true }),
  /**
   * A URL to access the attachment details
   */
  url: S.optionalWith(S.String, { nullable: true }),
  /**
   * The width of the image file in pixels. If width is unknown, returns null
   */
  width: S.optionalWith(S.String, { nullable: true }),
}) {}

export class AttachmentObject extends S.Class<AttachmentObject>(
  "AttachmentObject",
)({
  /**
   * An array of attachment objects. Note that photo thumbnails do not have thumbnails
   */
  thumbnails: S.optionalWith(S.Array(AttachmentBaseObject), { nullable: true }),
  /**
   * The content type of the image. Example value: "image/png"
   */
  content_type: S.optionalWith(S.String, { nullable: true }),
  /**
   * A full URL where the attachment image file can be downloaded. The file may be hosted externally so take care not to inadvertently send Zendesk authentication credentials. See [Working with url properties](/documentation/ticketing/managing-tickets/working-with-url-properties)
   */
  content_url: S.optionalWith(S.String, { nullable: true }),
  /**
   * If true, the attachment has been deleted
   */
  deleted: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * The name of the image file
   */
  file_name: S.optionalWith(S.String, { nullable: true }),
  /**
   * The height of the image file in pixels. If height is unknown, returns null
   */
  height: S.optionalWith(S.String, { nullable: true }),
  /**
   * Automatically assigned when created
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * If true, the attachment is excluded from the attachment list and the attachment's URL
   * can be referenced within the comment of a ticket. Default is false
   */
  inline: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * If true, you can download an attachment flagged as malware. If false, you can't download such an attachment.
   */
  malware_access_override: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * The result of the malware scan. There is a delay between the time the attachment is uploaded and when the malware scan is completed. Usually the scan is done within a few seconds, but high load conditions can delay the scan results. Possible values: "malware_found", "malware_not_found", "failed_to_scan", "not_scanned"
   */
  malware_scan_result: S.optionalWith(S.String, { nullable: true }),
  /**
   * The URL the attachment image file has been mapped to
   */
  mapped_content_url: S.optionalWith(S.String, { nullable: true }),
  /**
   * The size of the image file in bytes
   */
  size: S.optionalWith(S.Int, { nullable: true }),
  /**
   * A URL to access the attachment details
   */
  url: S.optionalWith(S.String, { nullable: true }),
  /**
   * The width of the image file in pixels. If width is unknown, returns null
   */
  width: S.optionalWith(S.String, { nullable: true }),
}) {}

export class AttachmentResponse extends S.Class<AttachmentResponse>(
  "AttachmentResponse",
)({
  attachment: S.optionalWith(AttachmentObject, { nullable: true }),
}) {}

export class UpdateAttachmentParams extends S.Struct({}) {}

export class AttachmentUpdateInput extends S.Class<AttachmentUpdateInput>(
  "AttachmentUpdateInput",
)({
  /**
   * If true, allows access to attachments with detected malware.
   */
  malware_access_override: S.optionalWith(S.Boolean, { nullable: true }),
}) {}

export class AttachmentUpdateRequest extends S.Class<AttachmentUpdateRequest>(
  "AttachmentUpdateRequest",
)({
  attachment: S.optionalWith(AttachmentUpdateInput, { nullable: true }),
}) {}

export class ListAuditLogsParams extends S.Struct({
  "filter[source_type]": S.optionalWith(S.String, { nullable: true }),
  "filter[source_id]": S.optionalWith(S.Int, { nullable: true }),
  "filter[actor_id]": S.optionalWith(S.Int, { nullable: true }),
  "filter[ip_address]": S.optionalWith(S.String, { nullable: true }),
  "filter[created_at]": S.optionalWith(S.String, { nullable: true }),
  "filter[action]": S.optionalWith(S.String, { nullable: true }),
  sort_by: S.optionalWith(S.String, { nullable: true }),
  sort_order: S.optionalWith(S.String, { nullable: true }),
  sort: S.optionalWith(S.String, { nullable: true }),
}) {}

export class AuditLogObject extends S.Class<AuditLogObject>("AuditLogObject")({
  /**
   * Type of change made. Possible values are "create", "destroy", "exported", "login", and "update"
   */
  action: S.optionalWith(S.String, { nullable: true }),
  /**
   * Localized string of action field
   */
  action_label: S.optionalWith(S.String, { nullable: true }),
  /**
   * id of the user or system that initiated the change
   */
  actor_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Name of the user or system that initiated the change
   */
  actor_name: S.optionalWith(S.String, { nullable: true }),
  /**
   * The description of the change that occurred
   */
  change_description: S.optionalWith(S.String, { nullable: true }),
  /**
   * The time the audit got created
   */
  created_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * The id automatically assigned upon creation
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The IP address of the user doing the audit
   */
  ip_address: S.optionalWith(S.String, { nullable: true }),
  /**
   * The id of the item being audited
   */
  source_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The name of the item being audited
   */
  source_label: S.optionalWith(S.String, { nullable: true }),
  /**
   * Item type being audited. Typically describes the system where the change
   * was initiated. Possible values vary based on your account's Zendesk
   * products and activity. Common values include "apitoken", "rule", "ticket",
   * "user", and "zendesk/app_market/app". The "rule" value is used for
   * [automations](https://support.zendesk.com/hc/en-us/articles/4408832701850),
   * [macros](https://support.zendesk.com/hc/en-us/articles/4408844187034),
   * [triggers](https://support.zendesk.com/hc/en-us/articles/4408822236058),
   * [views](https://support.zendesk.com/hc/en-us/articles/4408888828570),
   * and other automated business rules
   */
  source_type: S.optionalWith(S.String, { nullable: true }),
  /**
   * The URL to access the audit log
   */
  url: S.optionalWith(S.String, { nullable: true }),
}) {}

export class AuditLogsResponse extends S.Class<AuditLogsResponse>(
  "AuditLogsResponse",
)({
  audit_logs: S.optionalWith(S.Array(AuditLogObject), { nullable: true }),
}) {}

export class AuditLogResponse extends S.Class<AuditLogResponse>(
  "AuditLogResponse",
)({
  audit_log: S.optionalWith(AuditLogObject, { nullable: true }),
}) {}

export class ExportAuditLogsParams extends S.Struct({
  "filter[source_type]": S.optionalWith(S.String, { nullable: true }),
  "filter[source_id]": S.optionalWith(S.Int, { nullable: true }),
  "filter[actor_id]": S.optionalWith(S.Int, { nullable: true }),
  "filter[ip_address]": S.optionalWith(S.String, { nullable: true }),
  "filter[created_at]": S.optionalWith(S.String, { nullable: true }),
  "filter[action]": S.optionalWith(S.String, { nullable: true }),
}) {}

/**
 * Empty response
 */
export class ExportAuditLogs202 extends S.String {}

export class TagsByObjectIdResponse extends S.Class<TagsByObjectIdResponse>(
  "TagsByObjectIdResponse",
)({
  /**
   * An array of strings
   */
  tags: S.Array(S.String),
}) {}

export class ActionObject extends S.Class<ActionObject>("ActionObject")({
  /**
   * The name of a ticket field to modify
   */
  field: S.optionalWith(S.String, { nullable: true }),
  /**
   * The new value of the field
   */
  value: S.optionalWith(S.String, { nullable: true }),
}) {}

export class ConditionObject extends S.Class<ConditionObject>(
  "ConditionObject",
)({
  /**
   * The name of a ticket field
   */
  field: S.optionalWith(S.String, { nullable: true }),
  /**
   * A comparison operator
   */
  operator: S.optionalWith(S.String, { nullable: true }),
  /**
   * The value of a ticket field
   */
  value: S.optionalWith(S.String, { nullable: true }),
}) {}

/**
 * An object that describes the conditions under which the automation will execute. See [Conditions reference](/documentation/ticketing/reference-guides/conditions-reference)
 */
export class ConditionsObject extends S.Class<ConditionsObject>(
  "ConditionsObject",
)({
  /**
   * Logical AND. Tickets must fulfill all of the conditions to be considered matching
   */
  all: S.optionalWith(S.Array(ConditionObject), { nullable: true }),
  /**
   * Logical OR. Tickets may satisfy any of the conditions to be considered matching
   */
  any: S.optionalWith(S.Array(ConditionObject), { nullable: true }),
}) {}

export class AutomationObject extends S.Class<AutomationObject>(
  "AutomationObject",
)({
  /**
   * An object describing what the automation will do. See [Actions reference](/documentation/ticketing/reference-guides/actions-reference)
   */
  actions: S.optionalWith(S.Array(ActionObject), { nullable: true }),
  /**
   * Whether the automation is active
   */
  active: S.optionalWith(S.Boolean, { nullable: true }),
  conditions: S.optionalWith(ConditionsObject, { nullable: true }),
  /**
   * The time the automation was created
   */
  created_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * If true, the automation is a default automation
   */
  default: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * Automatically assigned when created
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The position of the automation which specifies the order it will be executed
   */
  position: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The raw title of the automation
   */
  raw_title: S.optionalWith(S.String, { nullable: true }),
  /**
   * The title of the automation
   */
  title: S.optionalWith(S.String, { nullable: true }),
  /**
   * The time of the last update of the automation
   */
  updated_at: S.optionalWith(S.String, { nullable: true }),
}) {}

export class AutomationsResponse extends S.Class<AutomationsResponse>(
  "AutomationsResponse",
)({
  automations: S.optionalWith(S.Array(AutomationObject), { nullable: true }),
  count: S.optionalWith(S.Int, { nullable: true }),
  next_page: S.optionalWith(S.String, { nullable: true }),
  previous_page: S.optionalWith(S.String, { nullable: true }),
}) {}

export class AutomationResponse extends S.Class<AutomationResponse>(
  "AutomationResponse",
)({
  automation: S.optionalWith(AutomationObject, { nullable: true }),
}) {}

export class BulkDeleteAutomationsParams extends S.Struct({
  ids: S.optionalWith(S.Array(S.Int), { nullable: true }),
}) {}

export class CollaboratorObject extends S.Class<CollaboratorObject>(
  "CollaboratorObject",
)({
  email: S.optionalWith(S.String, { nullable: true }),
  name: S.optionalWith(S.String, { nullable: true }),
}) {}

/**
 * The urgency with which the ticket should be addressed
 */
export class TicketObjectPriority extends S.Literal(
  "urgent",
  "high",
  "normal",
  "low",
) {}

/**
 * The state of the ticket.
 *
 * If your account has activated custom ticket statuses, this is the ticket's
 * status category. See [custom ticket statuses](#custom-ticket-statuses)
 */
export class TicketObjectStatus extends S.Literal(
  "new",
  "open",
  "pending",
  "hold",
  "solved",
  "closed",
) {}

/**
 * The type of this ticket
 */
export class TicketObjectType extends S.Literal(
  "problem",
  "incident",
  "question",
  "task",
) {}

export class TicketObject extends S.Class<TicketObject>("TicketObject")({
  /**
   * Permission for agents to add add attachments to a comment. Defaults to true
   */
  allow_attachments: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * Is false if channelback is disabled, true otherwise. Only applicable for channels framework ticket
   */
  allow_channelback: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * Write only. The email address of the agent to assign the ticket to
   */
  assignee_email: S.optionalWith(S.String, { nullable: true }),
  /**
   * The agent currently assigned to the ticket
   */
  assignee_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Write only. An array of the IDs of attribute values to be associated with the ticket
   */
  attribute_value_ids: S.optionalWith(S.Array(S.Int), { nullable: true }),
  /**
   * The id of the brand this ticket is associated with. See [Setting up multiple brands](https://support.zendesk.com/hc/en-us/articles/4408829476378)
   */
  brand_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The ids of users currently CC'ed on the ticket
   */
  collaborator_ids: S.optionalWith(S.Array(S.Int), { nullable: true }),
  /**
   * POST requests only. Users to add as cc's when creating a ticket. See [Setting Collaborators](/documentation/ticketing/managing-tickets/creating-and-updating-tickets#setting-collaborators)
   */
  collaborators: S.optionalWith(S.Array(CollaboratorObject), {
    nullable: true,
  }),
  /**
   * Write only. An object that adds a comment to the ticket. See [Ticket comments](/api-reference/ticketing/tickets/ticket_comments/). To include an attachment with the comment, see [Attaching files](/documentation/ticketing/managing-tickets/creating-and-updating-tickets/#attaching-files). A ticket can contain up to 5000 comments in total, including both public and private comments. Once this limit is reached, any additional attempts to add comments results in a 422 error. The ticket can still be updated in other ways, provided that no new comments are added.
   */
  comment: S.optionalWith(S.Record({ key: S.String, value: S.Unknown }), {
    nullable: true,
  }),
  /**
   * When this record was created
   */
  created_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * Custom fields for the ticket. See [Setting custom field values](/documentation/ticketing/managing-tickets/creating-and-updating-tickets#setting-custom-field-values)
   */
  custom_fields: S.optionalWith(
    S.Array(
      S.Struct({
        /**
         * The id of the custom field
         */
        id: S.optionalWith(S.Int, { nullable: true }),
        /**
         * The value of the custom field
         */
        value: S.optionalWith(S.String, { nullable: true }),
      }),
    ),
    { nullable: true },
  ),
  /**
   * The custom ticket status id of the ticket. See [custom ticket statuses](#custom-ticket-statuses)
   */
  custom_status_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Read-only first comment on the ticket. When [creating a ticket](#create-ticket), use `comment` to set the description. See [Description and first comment](#description-and-first-comment)
   */
  description: S.optionalWith(S.String, { nullable: true }),
  /**
   * If this is a ticket of type "task" it has a due date.  Due date format uses [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format
   */
  due_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * The ids of agents or end users currently CC'ed on the ticket. Ignored when [CCs and followers](https://support.zendesk.com/hc/en-us/articles/360020585233) is not enabled
   */
  email_cc_ids: S.optionalWith(S.Array(S.Int), { nullable: true }),
  /**
   * Write only. An array of objects that represents agent or end users email CCs to add or delete from the ticket. See [Setting email CCs](/documentation/ticketing/managing-tickets/creating-and-updating-tickets/#setting-email-ccs). Ignored when [CCs and followers](https://support.zendesk.com/hc/en-us/articles/360020585233) is not enabled
   */
  email_ccs: S.optionalWith(S.Record({ key: S.String, value: S.Unknown }), {
    nullable: true,
  }),
  /**
   * An encoded string representing the ticket's unique identifier
   */
  encoded_id: S.optionalWith(S.String, { nullable: true }),
  /**
   * An id you can use to link Zendesk Support tickets to local records
   */
  external_id: S.optionalWith(S.String, { nullable: true }),
  /**
   * The ids of agents currently following the ticket. Ignored when [CCs and followers](https://support.zendesk.com/hc/en-us/articles/360020585233) is not enabled
   */
  follower_ids: S.optionalWith(S.Array(S.Int), { nullable: true }),
  /**
   * Write only. An array of objects that represents agent followers to add or delete from the ticket. See [Setting followers](/documentation/ticketing/managing-tickets/creating-and-updating-tickets/#setting-followers). Ignored when [CCs and followers](https://support.zendesk.com/hc/en-us/articles/360020585233) is not enabled
   */
  followers: S.optionalWith(S.Record({ key: S.String, value: S.Unknown }), {
    nullable: true,
  }),
  /**
   * The ids of the followups created from this ticket. Ids are only visible once the ticket is closed
   */
  followup_ids: S.optionalWith(S.Array(S.Int), { nullable: true }),
  /**
   * The topic in the Zendesk Web portal this ticket originated from, if any. The Web portal is deprecated
   */
  forum_topic_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * If true, the ticket's [via type](/documentation/ticketing/reference-guides/via-object-reference/) is a messaging channel.
   */
  from_messaging_channel: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * A Unix timestamp that represents the most accurate reading of when this record was last updated. It is updated for all ticket updates, including system updates
   */
  generated_timestamp: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The group this ticket is assigned to
   */
  group_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Is true if a ticket is a problem type and has one or more incidents linked to it. Otherwise, the value is false.
   */
  has_incidents: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * Automatically assigned when the ticket is created
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Is true if any comments are public, false otherwise
   */
  is_public: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * Write only. A macro ID to be recorded in the ticket audit
   */
  macro_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * POST requests only. List of macro IDs to be recorded in the ticket audit
   */
  macro_ids: S.optionalWith(S.Array(S.Int), { nullable: true }),
  /**
   * Write only. Metadata for the audit. In the `audit` object, the data is specified in the `custom` property of the `metadata` object. See [Setting Metadata](/documentation/ticketing/managing-tickets/creating-and-updating-tickets/#setting-metadata)
   */
  metadata: S.optionalWith(S.Record({ key: S.String, value: S.Unknown }), {
    nullable: true,
  }),
  /**
   * The organization of the requester. You can only specify the ID of an organization associated with the requester. See [Organization Memberships](/api-reference/ticketing/organizations/organization_memberships/)
   */
  organization_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The urgency with which the ticket should be addressed
   */
  priority: S.optionalWith(TicketObjectPriority, { nullable: true }),
  /**
   * For tickets of type "incident", the ID of the problem the incident is linked to
   */
  problem_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The dynamic content placeholder, if present, or the "subject" value, if not. See [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)
   */
  raw_subject: S.optionalWith(S.String, { nullable: true }),
  /**
   * The original recipient e-mail address of the ticket. Notification emails for the ticket are sent from this address
   */
  recipient: S.optionalWith(S.String, { nullable: true }),
  /**
   * Write only. See [Creating a ticket with a new requester](/documentation/ticketing/managing-tickets/creating-and-updating-tickets/#creating-a-ticket-with-a-new-requester)
   */
  requester: S.optionalWith(S.Record({ key: S.String, value: S.Unknown }), {
    nullable: true,
  }),
  /**
   * The user who requested this ticket
   */
  requester_id: S.Int,
  /**
   * Write only. Optional boolean. When true and an `update_stamp` date is included, protects against ticket update collisions and returns a message to let you know if one occurs. See [Protecting against ticket update collisions](/documentation/ticketing/managing-tickets/creating-and-updating-tickets/#protecting-against-ticket-update-collisions). A value of false has the same effect as true. Omit the property to force the updates to not be safe
   */
  safe_update: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * The satisfaction rating of the ticket, if it exists, or the state of satisfaction, "offered" or "unoffered". The value is null for plan types that don't support CSAT
   */
  satisfaction_rating: S.optionalWith(
    S.Record({ key: S.String, value: S.Unknown }),
    { nullable: true },
  ),
  /**
   * The ids of the sharing agreements used for this ticket
   */
  sharing_agreement_ids: S.optionalWith(S.Array(S.Int), { nullable: true }),
  /**
   * The state of the ticket.
   *
   * If your account has activated custom ticket statuses, this is the ticket's
   * status category. See [custom ticket statuses](#custom-ticket-statuses)
   */
  status: S.optionalWith(TicketObjectStatus, { nullable: true }),
  /**
   * The value of the subject field for this ticket. See [Subject](/api-reference/ticketing/tickets/tickets/#subject)
   */
  subject: S.optionalWith(S.String, { nullable: true }),
  /**
   * The user who submitted the ticket. The submitter always becomes the author of the first comment on the ticket
   */
  submitter_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The array of tags applied to this ticket. Unless otherwise specified, the [set tag](/api-reference/ticketing/ticket-management/tags/#set-tags) behavior is used, which overwrites and replaces existing tags
   */
  tags: S.optionalWith(S.Array(S.String), { nullable: true }),
  /**
   * Enterprise only. The id of the ticket form to render for the ticket
   */
  ticket_form_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The type of this ticket
   */
  type: S.optionalWith(TicketObjectType, { nullable: true }),
  /**
   * When this record last got updated. It is updated only if the update generates a [ticket event](#incremental-ticket-event-export)
   */
  updated_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * Write only. Datetime of last update received from API. See the `safe_update` property
   */
  updated_stamp: S.optionalWith(S.String, { nullable: true }),
  /**
   * The API url of this ticket
   */
  url: S.optionalWith(S.String, { nullable: true }),
  /**
   * For more information, see the [Via object reference](/documentation/ticketing/reference-guides/via-object-reference)
   */
  via: S.optionalWith(
    S.Struct({
      /**
       * This tells you how the ticket or event was created. Examples: "web", "mobile", "rule", "system"
       */
      channel: S.optionalWith(S.String, { nullable: true }),
      /**
       * For some channels a source object gives more information about how or why the ticket or event was created
       */
      source: S.optionalWith(S.Record({ key: S.String, value: S.Unknown }), {
        nullable: true,
      }),
    }),
    { nullable: true },
  ),
  /**
   * POST requests only. The id of a closed ticket when creating a follow-up ticket. See [Creating a follow-up ticket](/documentation/ticketing/managing-tickets/creating-and-updating-tickets#creating-a-follow-up-ticket)
   */
  via_followup_source_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Write only. For more information, see the [Via object reference](/documentation/ticketing/reference-guides/via-object-reference/)
   */
  via_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Write only. See [Creating voicemail ticket](/api-reference/voice/talk-partner-edition-api/reference/#creating-voicemail-tickets)
   */
  voice_comment: S.optionalWith(S.Record({ key: S.String, value: S.Unknown }), {
    nullable: true,
  }),
}) {}

export class BookmarkObject extends S.Class<BookmarkObject>("BookmarkObject")({
  /**
   * The time the bookmark was created
   */
  created_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * Automatically assigned when the bookmark is created
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  ticket: S.optionalWith(S.Record({ key: S.String, value: S.Unknown }), {
    nullable: true,
  }),
  /**
   * The API url of this bookmark
   */
  url: S.optionalWith(S.String, { nullable: true }),
}) {}

export class BookmarksResponse extends S.Class<BookmarksResponse>(
  "BookmarksResponse",
)({
  bookmarks: S.optionalWith(S.Array(BookmarkObject), { nullable: true }),
  /**
   * the total record count
   */
  count: S.optionalWith(S.Int, { nullable: true }),
  /**
   * the URL of the next page
   */
  next_page: S.optionalWith(S.String, { nullable: true }),
  /**
   * the URL of the previous page
   */
  previous_page: S.optionalWith(S.String, { nullable: true }),
}) {}

export class BookmarkInput extends S.Class<BookmarkInput>("BookmarkInput")({
  /**
   * The id of the ticket the bookmark is for.
   */
  ticket_id: S.optionalWith(S.Int, { nullable: true }),
}) {}

export class BookmarkCreateRequest extends S.Class<BookmarkCreateRequest>(
  "BookmarkCreateRequest",
)({
  bookmark: S.optionalWith(BookmarkInput, { nullable: true }),
}) {}

export class BookmarkResponse extends S.Class<BookmarkResponse>(
  "BookmarkResponse",
)({
  bookmark: S.optionalWith(BookmarkObject, { nullable: true }),
}) {}

export class ListBrandAgentsParams extends S.Struct({}) {}

export class BrandAgentObject extends S.Class<BrandAgentObject>(
  "BrandAgentObject",
)({
  /**
   * The id of a brand
   */
  brand_id: S.Int,
  /**
   * The time the brand membership was created
   */
  created_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * Automatically assigned upon creation
   */
  id: S.optionalWith(S.String, { nullable: true }),
  /**
   * The time of the last update of the brand membership
   */
  updated_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * The API url of this record
   */
  url: S.optionalWith(S.String, { nullable: true }),
  /**
   * The id of an agent
   */
  user_id: S.Int,
}) {}

export class BrandAgentsResponse extends S.Class<BrandAgentsResponse>(
  "BrandAgentsResponse",
)({
  brand_agents: S.optionalWith(S.Array(BrandAgentObject), { nullable: true }),
}) {}

export class ShowBrandAgentByIdParams extends S.Struct({}) {}

export class BrandAgentResponse extends S.Class<BrandAgentResponse>(
  "BrandAgentResponse",
)({
  brand_agent: S.optionalWith(BrandAgentObject, { nullable: true }),
}) {}

/**
 * The state of the Help Center
 */
export class BrandObjectHelpCenterState extends S.Literal(
  "enabled",
  "disabled",
  "restricted",
) {}

export class BrandObject extends S.Class<BrandObject>("BrandObject")({
  /**
   * If the brand is set as active
   */
  active: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * The url of the brand
   */
  brand_url: S.optionalWith(S.String, { nullable: true }),
  /**
   * The time the brand was created
   */
  created_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * Is the brand the default brand for this account
   */
  default: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * If the brand has a Help Center
   */
  has_help_center: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * The state of the Help Center
   */
  help_center_state: S.optionalWith(BrandObjectHelpCenterState, {
    nullable: true,
  }),
  /**
   * The hostmapping to this brand, if any. Only admins view this property.
   */
  host_mapping: S.optionalWith(S.String, { nullable: true }),
  /**
   * The ID automatically assigned when the brand is created
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * If the brand object is deleted or not
   */
  is_deleted: S.optionalWith(S.Boolean, { nullable: true }),
  logo: S.optionalWith(AttachmentObject, { nullable: true }),
  /**
   * The name of the brand
   */
  name: S.String,
  /**
   * The signature template for a brand
   */
  signature_template: S.optionalWith(S.String, { nullable: true }),
  /**
   * The subdomain of the brand
   */
  subdomain: S.String,
  /**
   * The ids of ticket forms that are available for use by a brand
   */
  ticket_form_ids: S.optionalWith(S.Array(S.Int), { nullable: true }),
  /**
   * The time of the last update of the brand
   */
  updated_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * The API url of this brand
   */
  url: S.optionalWith(S.String, { nullable: true }),
}) {}

export class BrandsResponse extends S.Class<BrandsResponse>("BrandsResponse")({
  /**
   * Array of brands
   */
  brands: S.optionalWith(S.Array(BrandObject), { nullable: true }),
  /**
   * the total record count
   */
  count: S.optionalWith(S.Int, { nullable: true }),
  /**
   * the URL of the next page
   */
  next_page: S.optionalWith(S.String, { nullable: true }),
  /**
   * the URL of the previous page
   */
  previous_page: S.optionalWith(S.String, { nullable: true }),
}) {}

export class BrandCreateRequest extends S.Class<BrandCreateRequest>(
  "BrandCreateRequest",
)({
  brand: S.optionalWith(BrandObject, { nullable: true }),
}) {}

export class BrandResponse extends S.Class<BrandResponse>("BrandResponse")({
  brand: S.optionalWith(BrandObject, { nullable: true }),
}) {}

export class ShowBrandParams extends S.Struct({}) {}

export class UpdateBrandParams extends S.Struct({}) {}

export class BrandUpdateRequest extends S.Class<BrandUpdateRequest>(
  "BrandUpdateRequest",
)({
  brand: S.optionalWith(BrandObject, { nullable: true }),
}) {}

export class DeleteBrandParams extends S.Struct({}) {}

export class CheckHostMappingValidityForExistingBrandParams extends S.Struct(
  {},
) {}

export class HostMappingObject extends S.Class<HostMappingObject>(
  "HostMappingObject",
)({
  /**
   * The canonical name record for a host mapping
   */
  cname: S.optionalWith(S.String, { nullable: true }),
  /**
   * Array of expected CNAME records for host mapping(s) of a given brand
   */
  expected_cnames: S.optionalWith(S.Array(S.String), { nullable: true }),
  /**
   * Whether a host mapping is valid or not for a given brand
   */
  is_valid: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * Reason why a host mapping is valid or not
   */
  reason: S.optionalWith(S.String, { nullable: true }),
}) {}

export class CheckHostMappingValidityParams extends S.Struct({
  host_mapping: S.String,
  subdomain: S.String,
}) {}

export class TwitterChannelObject extends S.Class<TwitterChannelObject>(
  "TwitterChannelObject",
)({
  /**
   * If replies are allowed for this handle
   */
  allow_reply: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * The profile image url of the handle
   */
  avatar_url: S.optionalWith(S.String, { nullable: true }),
  /**
   * What brand the handle is associated with
   */
  brand_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * If replies are allowed for this handle
   */
  can_reply: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * The time the handle was created
   */
  created_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * Automatically assigned upon creation
   */
  id: S.Int,
  /**
   * The profile name of the handle
   */
  name: S.optionalWith(S.String, { nullable: true }),
  /**
   * The X handle
   */
  screen_name: S.String,
  /**
   * The country's code
   */
  twitter_user_id: S.Int,
  /**
   * The time of the last update of the handle
   */
  updated_at: S.optionalWith(S.String, { nullable: true }),
}) {}

export class TwitterChannelsResponse extends S.Class<TwitterChannelsResponse>(
  "TwitterChannelsResponse",
)({
  monitored_twitter_handles: S.optionalWith(S.Array(TwitterChannelObject), {
    nullable: true,
  }),
}) {}

export class TwitterChannelResponse extends S.Class<TwitterChannelResponse>(
  "TwitterChannelResponse",
)({
  monitored_twitter_handle: S.optionalWith(TwitterChannelObject, {
    nullable: true,
  }),
}) {}

/**
 * Empty response
 */
export class CreateTicketFromTweet201 extends S.String {}

export class GettingTwicketStatusParams extends S.Struct({
  ids: S.optionalWith(S.String, { nullable: true }),
}) {}

export class TwitterChannelTwicketStatusResponse extends S.Class<TwitterChannelTwicketStatusResponse>(
  "TwitterChannelTwicketStatusResponse",
)({
  statuses: S.optionalWith(
    S.Array(
      S.Struct({
        favorited: S.optionalWith(S.Boolean, { nullable: true }),
        id: S.optionalWith(S.Int, { nullable: true }),
        retweeted: S.optionalWith(S.Boolean, { nullable: true }),
        user_followed: S.optionalWith(S.Boolean, { nullable: true }),
      }),
    ),
    { nullable: true },
  ),
}) {}

export class OpenTicketInAgentBrowserParams extends S.Struct({}) {}

/**
 * empty
 */
export class OpenTicketInAgentBrowser200 extends S.String {}

/**
 * Invalid attribute
 */
export class OpenTicketInAgentBrowser404 extends S.String {}

export class OpenUsersProfileInAgentBrowserParams extends S.Struct({}) {}

/**
 * empty
 */
export class OpenUsersProfileInAgentBrowser200 extends S.String {}

/**
 * Invalid attribute
 */
export class OpenUsersProfileInAgentBrowser404 extends S.String {}

export class CreateTicketOrVoicemailTicketParams extends S.Struct({}) {}

/**
 * Describes how the object was created. See the [Via object reference](/documentation/ticketing/reference-guides/via-object-reference)
 */
export class TicketAuditViaObject extends S.Class<TicketAuditViaObject>(
  "TicketAuditViaObject",
)({
  /**
   * This tells you how the ticket or event was created. Examples: "web", "mobile", "rule", "system"
   */
  channel: S.optionalWith(S.String, { nullable: true }),
  /**
   * For some channels a source object gives more information about how or why the ticket or event was created
   */
  source: S.optionalWith(S.Record({ key: S.String, value: S.Unknown }), {
    nullable: true,
  }),
}) {}

export class TicketCommentObject extends S.Class<TicketCommentObject>(
  "TicketCommentObject",
)({
  /**
   * Attachments, if any. See [Attachment](/api-reference/ticketing/tickets/ticket-attachments/)
   */
  attachments: S.optionalWith(S.Array(AttachmentObject), { nullable: true }),
  /**
   * The id of the ticket audit record. See [Show Audit](/api-reference/ticketing/tickets/ticket_audits/#show-audit)
   */
  audit_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The id of the comment author. See [Author id](#author-id)
   */
  author_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The comment string. See [Bodies](#bodies)
   */
  body: S.optionalWith(S.String, { nullable: true }),
  /**
   * The time the comment was created
   */
  created_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * The comment formatted as HTML. See [Bodies](#bodies)
   */
  html_body: S.optionalWith(S.String, { nullable: true }),
  /**
   * Automatically assigned when the comment is created
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * System information (web client, IP address, etc.) and comment flags, if any. See [Comment flags](#comment-flags)
   */
  metadata: S.optionalWith(S.Record({ key: S.String, value: S.Unknown }), {
    nullable: true,
  }),
  /**
   * The comment presented as plain text. See [Bodies](#bodies)
   */
  plain_body: S.optionalWith(S.String, { nullable: true }),
  /**
   * true if a public comment; false if an internal note. The initial value set on ticket creation persists for any additional comment unless you change it
   */
  public: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * `Comment` or `VoiceComment`. The JSON object for adding voice comments to tickets is different. See [Adding voice comments to tickets](/documentation/ticketing/managing-tickets/adding-voice-comments-to-tickets)
   */
  type: S.optionalWith(S.String, { nullable: true }),
  /**
   * List of tokens received from [uploading files](/api-reference/ticketing/tickets/ticket-attachments/#upload-files) for comment attachments. The files are attached by creating or updating tickets with the tokens. See [Attaching files](/api-reference/ticketing/tickets/tickets/#attaching-files) in Tickets
   */
  uploads: S.optionalWith(S.Array(S.String), { nullable: true }),
  via: S.optionalWith(TicketAuditViaObject, { nullable: true }),
}) {}

/**
 * The urgency with which the ticket should be addressed.
 */
export class TicketCreateVoicemailTicketInputPriority extends S.Literal(
  "urgent",
  "high",
  "normal",
  "low",
) {}

/**
 * Required for Create Ticket operation
 */
export class TicketCreateVoicemailTicketInputViaId extends S.Literal(
  44,
  45,
  46,
) {}

export class TicketCreateVoicemailTicketVoiceCommentInput extends S.Class<TicketCreateVoicemailTicketVoiceCommentInput>(
  "TicketCreateVoicemailTicketVoiceCommentInput",
)({
  /**
   * The agent who answered the call
   */
  answered_by_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Duration in seconds of the call
   */
  call_duration: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Incoming phone number
   */
  from: S.optionalWith(S.String, { nullable: true }),
  /**
   * Location of the caller (optional)
   */
  location: S.optionalWith(S.String, { nullable: true }),
  /**
   * Incoming phone number
   */
  recording_url: S.optionalWith(S.String, { nullable: true }),
  /**
   * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) timestamp of the call starting time
   */
  started_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * Dialed phone number
   */
  to: S.optionalWith(S.String, { nullable: true }),
  /**
   * Transcription of the call (optional)
   */
  transcription_text: S.optionalWith(S.String, { nullable: true }),
}) {}

export class TicketCreateVoicemailTicketInput extends S.Class<TicketCreateVoicemailTicketInput>(
  "TicketCreateVoicemailTicketInput",
)({
  comment: S.optionalWith(TicketCommentObject, { nullable: true }),
  /**
   * The urgency with which the ticket should be addressed.
   */
  priority: S.optionalWith(TicketCreateVoicemailTicketInputPriority, {
    nullable: true,
  }),
  /**
   * Required for Create Ticket operation
   */
  via_id: S.optionalWith(TicketCreateVoicemailTicketInputViaId, {
    nullable: true,
  }),
  /**
   * Required if creating voicemail ticket
   */
  voice_comment: S.optionalWith(S.Record({ key: S.String, value: S.Unknown }), {
    nullable: true,
  }),
}) {}

export class TicketCreateVoicemailTicketRequest extends S.Class<TicketCreateVoicemailTicketRequest>(
  "TicketCreateVoicemailTicketRequest",
)({
  /**
   * Optional value such as the ID of the agent that will see the newly created ticket.
   */
  display_to_agent: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Ticket object that lists the values to set when the ticket is created
   */
  ticket: S.optionalWith(S.Record({ key: S.String, value: S.Unknown }), {
    nullable: true,
  }),
}) {}

export class TicketResponse extends S.Class<TicketResponse>("TicketResponse")({
  ticket: S.optionalWith(TicketObject, { nullable: true }),
}) {}

/**
 * Invalid attribute
 */
export class CreateTicketOrVoicemailTicket404 extends S.String {}

/**
 * Invalid attribute
 */
export class CreateTicketOrVoicemailTicket422 extends S.String {}

export class TicketChatCommentRedactionResponse extends S.Class<TicketChatCommentRedactionResponse>(
  "TicketChatCommentRedactionResponse",
)({
  /**
   * Chat event object
   */
  chat_event: S.optionalWith(
    S.Struct({
      /**
       * Id assigned to the chat event object
       */
      id: S.optionalWith(S.Int, { nullable: true }),
      /**
       * Type of chat event
       */
      type: S.optionalWith(S.String, { nullable: true }),
      /**
       * The value of the chat event object
       */
      value: S.optionalWith(
        S.Struct({
          /**
           * Id of the chat session
           */
          chat_id: S.optionalWith(S.String, { nullable: true }),
          /**
           * Chat events within the chat session
           */
          history: S.optionalWith(
            S.Array(S.Record({ key: S.String, value: S.Unknown })),
            { nullable: true },
          ),
          /**
           * Id assigned to the visitor
           */
          visitor_id: S.optionalWith(S.String, { nullable: true }),
        }),
        { nullable: true },
      ),
    }),
    { nullable: true },
  ),
}) {}

export class TicketCommentResponse extends S.Class<TicketCommentResponse>(
  "TicketCommentResponse",
)({
  comment: S.optionalWith(TicketCommentObject, { nullable: true }),
}) {}

export class CustomObject extends S.Class<CustomObject>("CustomObject")({
  /**
   * If true, photos can be uploaded to the records of the object. If false, new photos cannot be uploaded but existing photos can still be viewed and removed
   */
  allows_photos: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * The time the object type was created
   */
  created_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * Id of a user who created the object
   */
  created_by_user_id: S.optionalWith(S.String, { nullable: true }),
  /**
   * User-defined description of the object
   */
  description: S.optionalWith(S.String, { nullable: true }),
  /**
   * A flag setting the visibility of the object in the agent's list view. If true, all agents and admins have viewing access to the object in the Custom objects record page in the Agent Workspace. If false, only admins have viewing access
   */
  include_in_list_view: S.Boolean,
  /**
   * A user-defined unique identifier. Writable on create only
   */
  key: S.String,
  /**
   * The dynamic content placeholder, if present, or the "raw_description" value, if not. See [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)
   */
  raw_description: S.optionalWith(S.String, { nullable: true }),
  /**
   * The dynamic content placeholder, if present, or the "title" value, if not. See [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)
   */
  raw_title: S.optionalWith(S.String, { nullable: true }),
  /**
   * The dynamic content placeholder, if present, or the "raw_title_pluralized" value, if not. See [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)
   */
  raw_title_pluralized: S.optionalWith(S.String, { nullable: true }),
  /**
   * User-defined display name for the object
   */
  title: S.String,
  /**
   * User-defined pluralized version of the object's title
   */
  title_pluralized: S.String,
  /**
   * The time of the last update of the object
   */
  updated_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * Id of the last user who updated the object
   */
  updated_by_user_id: S.optionalWith(S.String, { nullable: true }),
  /**
   * Direct link to the specific custom object
   */
  url: S.optionalWith(S.String, { nullable: true }),
}) {}

export class CustomObjectsResponse extends S.Class<CustomObjectsResponse>(
  "CustomObjectsResponse",
)({
  custom_objects: S.optionalWith(S.Array(CustomObject), { nullable: true }),
}) {}

export class CustomObjectCreateInput extends S.Class<CustomObjectCreateInput>(
  "CustomObjectCreateInput",
)({
  /**
   * Unique identifier. Writable on create only
   */
  key: S.optionalWith(S.String, { nullable: true }),
  /**
   * Display name for the object
   */
  title: S.optionalWith(S.String, { nullable: true }),
  /**
   * Pluralized version of the object's title
   */
  title_pluralized: S.optionalWith(S.String, { nullable: true }),
}) {}

export class CustomObjectsCreateRequest extends S.Class<CustomObjectsCreateRequest>(
  "CustomObjectsCreateRequest",
)({
  custom_object: S.optionalWith(CustomObjectCreateInput, { nullable: true }),
}) {}

export class CustomObjectResponse extends S.Class<CustomObjectResponse>(
  "CustomObjectResponse",
)({
  custom_object: S.optionalWith(CustomObject, { nullable: true }),
}) {}

export class ShowCustomObjectParams extends S.Struct({}) {}

export class DeleteCustomObjectParams extends S.Struct({}) {}

export class UpdateCustomObjectParams extends S.Struct({}) {}

export class ListCustomObjectFieldsParams extends S.Struct({
  include_standard_fields: S.optionalWith(S.Boolean, { nullable: true }),
}) {}

export class CustomFieldOptionObject extends S.Class<CustomFieldOptionObject>(
  "CustomFieldOptionObject",
)({
  /**
   * Automatically assigned upon creation
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Name of the dropdown option
   */
  name: S.String,
  /**
   * Position of the dropdown option
   */
  position: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Raw name of the dropdown option
   */
  raw_name: S.optionalWith(S.String, { nullable: true }),
  /**
   * URL of the dropdown option
   */
  url: S.optionalWith(S.String, { nullable: true }),
  /**
   * Value of the dropdown option
   */
  value: S.String,
}) {}

export class CustomObjectField extends S.Class<CustomObjectField>(
  "CustomObjectField",
)({
  /**
   * If true, this field is available for use
   */
  active: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * The time of the last update of the ticket field
   */
  created_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * Required and presented for a custom field of type "dropdown". Each option is represented by an object with a `name` and `value` property
   */
  custom_field_options: S.optionalWith(S.Array(CustomFieldOptionObject), {
    nullable: true,
  }),
  /**
   * User-defined description of this field's purpose
   */
  description: S.optionalWith(S.String, { nullable: true }),
  /**
   * Automatically assigned upon creation
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * A unique key that identifies this custom field. This is used for updating the field and referencing in placeholders. The key must consist of only letters, numbers, and underscores. It can't be only numbers
   */
  key: S.String,
  /**
   * Ordering of the field relative to other fields
   */
  position: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The dynamic content placeholder, if present, or the `description` value, if not. See [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)
   */
  raw_description: S.optionalWith(S.String, { nullable: true }),
  /**
   * The dynamic content placeholder, if present, or the `title` value, if not. See [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)
   */
  raw_title: S.optionalWith(S.String, { nullable: true }),
  /**
   * Regular expression field only. The validation pattern for a field value to be deemed valid
   */
  regexp_for_validation: S.optionalWith(S.String, { nullable: true }),
  /**
   * A filter definition that allows your autocomplete to filter down results
   */
  relationship_filter: S.optionalWith(
    S.Record({ key: S.String, value: S.Unknown }),
    { nullable: true },
  ),
  /**
   * A representation of what type of object the field references. Options are "zen:user", "zen:organization", "zen:ticket", and "zen:custom_object:{key}" where key is a custom object key. For example "zen:custom_object:apartment".
   */
  relationship_target_type: S.optionalWith(S.String, { nullable: true }),
  /**
   * If true, only active and position values of this field can be changed
   */
  system: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * Optional for custom field of type "checkbox"; not presented otherwise.
   */
  tag: S.optionalWith(S.String, { nullable: true }),
  /**
   * The title of the custom field
   */
  title: S.String,
  /**
   * The custom field type: "checkbox", "date", "decimal", "dropdown", "integer", ["lookup"](/api-reference/ticketing/lookup_relationships/lookup_relationships/), "multiselect", "regexp", "text", or "textarea"
   */
  type: S.String,
  /**
   * The time of the last update of the ticket field
   */
  updated_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * The URL for this resource
   */
  url: S.optionalWith(S.String, { nullable: true }),
}) {}

export class CustomObjectFieldsResponse extends S.Class<CustomObjectFieldsResponse>(
  "CustomObjectFieldsResponse",
)({
  custom_object_fields: S.optionalWith(S.Array(CustomObjectField), {
    nullable: true,
  }),
}) {}

export class CreateCustomObjectFieldParams extends S.Struct({}) {}

export class CustomObjectFieldsCreateRequest extends S.Class<CustomObjectFieldsCreateRequest>(
  "CustomObjectFieldsCreateRequest",
)({
  custom_object_field: S.optionalWith(CustomObjectField, { nullable: true }),
}) {}

export class CustomObjectFieldResponse extends S.Class<CustomObjectFieldResponse>(
  "CustomObjectFieldResponse",
)({
  custom_object_field: S.optionalWith(CustomObjectField, { nullable: true }),
}) {}

export class ShowCustomObjectFieldParams extends S.Struct({}) {}

export class DeleteCustomObjectFieldParams extends S.Struct({}) {}

export class UpdateCustomObjectFieldParams extends S.Struct({}) {}

export class ReorderCustomObjectFieldsParams extends S.Struct({}) {}

/**
 * Empty response
 */
export class ReorderCustomObjectFields200 extends S.String {}

export class CustomObjectRecordBulkJobsParams extends S.Struct({}) {}

export class CustomObjectRecordsBulkCreateRequest extends S.Class<CustomObjectRecordsBulkCreateRequest>(
  "CustomObjectRecordsBulkCreateRequest",
)({
  job: S.optionalWith(
    S.Struct({
      action: S.optionalWith(S.String, { nullable: true }),
      /**
       * An array of record objects for job actions that create, update, or set. An array of strings for job actions that delete.
       */
      items: S.optionalWith(S.Array(CustomObjectRecord), { nullable: true }),
    }),
    { nullable: true },
  ),
}) {}

export class CustomObjectRecordsJobsResponse extends S.Class<CustomObjectRecordsJobsResponse>(
  "CustomObjectRecordsJobsResponse",
)({
  job_status: S.optionalWith(
    S.Struct({
      id: S.optionalWith(S.String, { nullable: true }),
      message: S.optionalWith(S.String, { nullable: true }),
      progress: S.optionalWith(S.Int, { nullable: true }),
      results: S.optionalWith(S.Array(CustomObjectRecord), { nullable: true }),
      status: S.optionalWith(S.String, { nullable: true }),
      total: S.optionalWith(S.Int, { nullable: true }),
      url: S.optionalWith(S.String, { nullable: true }),
    }),
    { nullable: true },
  ),
}) {}

export class CustomObjectFieldsLimitParams extends S.Struct({}) {}

export class CustomObjectLimitsResponse extends S.Class<CustomObjectLimitsResponse>(
  "CustomObjectLimitsResponse",
)({
  /**
   * The current numnber of the requested resource
   */
  count: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The maximum allowed number for the requested resource
   */
  limit: S.optionalWith(S.Int, { nullable: true }),
}) {}

export class ListCustomObjectRecordsParams extends S.Struct({
  "filter[ids]": S.optionalWith(S.String, { nullable: true }),
  "filter[external_ids]": S.optionalWith(S.String, { nullable: true }),
  sort: S.optionalWith(S.String, { nullable: true }),
  "page[before]": S.optionalWith(S.String, { nullable: true }),
  "page[after]": S.optionalWith(S.String, { nullable: true }),
  "page[size]": S.optionalWith(S.Int, { nullable: true }),
}) {}

export class CustomObjectRecordsResponse extends S.Class<CustomObjectRecordsResponse>(
  "CustomObjectRecordsResponse",
)({
  /**
   * The number of results returned for the current request
   */
  count: S.optionalWith(S.Int, { nullable: true }),
  custom_object_records: S.optionalWith(S.Array(CustomObjectRecord), {
    nullable: true,
  }),
  links: S.optionalWith(
    S.Struct({
      next: S.NullOr(S.String),
      prev: S.NullOr(S.String),
    }),
    { nullable: true },
  ),
  meta: S.optionalWith(
    S.Struct({
      after_cursor: S.NullOr(S.String),
      before_cursor: S.NullOr(S.String),
      has_more: S.Boolean,
    }),
    { nullable: true },
  ),
}) {}

export class CreateCustomObjectRecordParams extends S.Struct({}) {}

export class CustomObjectRecordsCreateRequest extends S.Class<CustomObjectRecordsCreateRequest>(
  "CustomObjectRecordsCreateRequest",
)({
  custom_object_record: S.optionalWith(CustomObjectRecord, { nullable: true }),
}) {}

export class CustomObjectRecordResponse extends S.Class<CustomObjectRecordResponse>(
  "CustomObjectRecordResponse",
)({
  custom_object_record: S.optionalWith(CustomObjectRecord, { nullable: true }),
}) {}

export class DeleteCustomObjectRecordByExternalIdOrNameParams extends S.Struct({
  external_id: S.String,
  name: S.String,
}) {}

export class UpsertCustomObjectRecordByExternalIdOrNameParams extends S.Struct({
  external_id: S.String,
  name: S.String,
}) {}

export class CustomObjectRecordsUpsertRequest extends S.Class<CustomObjectRecordsUpsertRequest>(
  "CustomObjectRecordsUpsertRequest",
)({
  custom_object_record: S.optionalWith(CustomObjectRecord, { nullable: true }),
}) {}

export class ShowCustomObjectRecordParams extends S.Struct({}) {}

export class DeleteCustomObjectRecordParams extends S.Struct({}) {}

export class UpdateCustomObjectRecordParams extends S.Struct({}) {}

export class AutocompleteCustomObjectRecordSearchParams extends S.Struct({
  name: S.optionalWith(S.String, { nullable: true }),
  "page[before]": S.optionalWith(S.String, { nullable: true }),
  "page[after]": S.optionalWith(S.String, { nullable: true }),
  "page[size]": S.optionalWith(S.Int, { nullable: true }),
  field_id: S.optionalWith(S.String, { nullable: true }),
  source: S.optionalWith(S.String, { nullable: true }),
  requester_id: S.optionalWith(S.Int, { nullable: true }),
  assignee_id: S.optionalWith(S.Int, { nullable: true }),
  organization_id: S.optionalWith(S.Int, { nullable: true }),
}) {}

export class CountCustomObjectRecordsParams extends S.Struct({}) {}

export class CountCustomObjectRecords200 extends S.Struct({
  count: S.optionalWith(S.Record({ key: S.String, value: S.Unknown }), {
    nullable: true,
  }),
}) {}

export class SearchCustomObjectRecordsParams extends S.Struct({
  query: S.optionalWith(S.String, { nullable: true }),
  sort: S.optionalWith(S.String, { nullable: true }),
  "page[before]": S.optionalWith(S.String, { nullable: true }),
  "page[after]": S.optionalWith(S.String, { nullable: true }),
  "page[size]": S.optionalWith(S.Int, { nullable: true }),
}) {}

export class FilteredSearchCustomObjectRecordsParams extends S.Struct({
  query: S.optionalWith(S.String, { nullable: true }),
  sort: S.optionalWith(S.String, { nullable: true }),
  "page[before]": S.optionalWith(S.String, { nullable: true }),
  "page[after]": S.optionalWith(S.String, { nullable: true }),
  "page[size]": S.optionalWith(S.Int, { nullable: true }),
}) {}

export class CustomObjectRecordFilteredSearchCondition extends S.Class<CustomObjectRecordFilteredSearchCondition>(
  "CustomObjectRecordFilteredSearchCondition",
)({
  field_key: S.optionalWith(
    S.Struct({
      operator: S.optionalWith(S.String, { nullable: true }),
      value: S.optionalWith(
        S.Union(S.String, S.Int, S.Array(S.Union(S.String, S.Int))),
        { nullable: true },
      ),
    }),
    { nullable: true },
  ),
}) {}

export class CustomObjectRecordsFilteredSearchRequestBasic extends S.Class<CustomObjectRecordsFilteredSearchRequestBasic>(
  "CustomObjectRecordsFilteredSearchRequestBasic",
)({
  filter: S.optionalWith(CustomObjectRecordFilteredSearchCondition, {
    nullable: true,
  }),
}) {}

export class CustomObjectRecordsFilteredSearchRequestComplex extends S.Class<CustomObjectRecordsFilteredSearchRequestComplex>(
  "CustomObjectRecordsFilteredSearchRequestComplex",
)({
  filter: S.optionalWith(
    S.Struct({
      $and: S.optionalWith(S.Array(CustomObjectRecordFilteredSearchCondition), {
        nullable: true,
      }),
      $or: S.optionalWith(S.Array(CustomObjectRecordFilteredSearchCondition), {
        nullable: true,
      }),
    }),
    { nullable: true },
  ),
}) {}

export class FilteredSearchCustomObjectRecordsRequest extends S.Union(
  CustomObjectRecordsFilteredSearchRequestBasic,
  CustomObjectRecordsFilteredSearchRequestComplex,
) {}

export class ListObjectTriggersParams extends S.Struct({
  active: S.optionalWith(S.Boolean, { nullable: true }),
  sort_by: S.optionalWith(S.String, { nullable: true }),
  sort_order: S.optionalWith(S.String, { nullable: true }),
}) {}

export class TriggerActionObject extends S.Class<TriggerActionObject>(
  "TriggerActionObject",
)({
  field: S.optionalWith(S.String, { nullable: true }),
  value: S.optionalWith(
    S.Union(S.String, S.Int, S.Array(S.Union(S.String, S.Int))),
    { nullable: true },
  ),
}) {}

export class TriggerConditionObject extends S.Class<TriggerConditionObject>(
  "TriggerConditionObject",
)({
  field: S.optionalWith(S.String, { nullable: true }),
  operator: S.optionalWith(S.String, { nullable: true }),
  value: S.optionalWith(
    S.Union(S.String, S.Int, S.Array(S.Union(S.String, S.Int))),
    { nullable: true },
  ),
}) {}

/**
 * An object that describes the circumstances under which the trigger performs its actions. See [Conditions reference](/documentation/ticketing/reference-guides/conditions-reference)
 */
export class TriggerConditionsObject extends S.Class<TriggerConditionsObject>(
  "TriggerConditionsObject",
)({
  all: S.optionalWith(S.Array(TriggerConditionObject), { nullable: true }),
  any: S.optionalWith(S.Array(TriggerConditionObject), { nullable: true }),
}) {}

export class ObjectTriggerObject extends S.Class<ObjectTriggerObject>(
  "ObjectTriggerObject",
)({
  /**
   * An array of actions the trigger does when its conditions are met. See [Actions reference](/documentation/ticketing/reference-guides/actions-reference)
   */
  actions: S.Array(TriggerActionObject),
  /**
   * Whether the trigger is active
   */
  active: S.optionalWith(S.Boolean, { nullable: true }),
  conditions: TriggerConditionsObject,
  /**
   * The time the trigger was created
   */
  created_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * Always false for object triggers
   */
  default: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * The description of the trigger
   */
  description: S.optionalWith(S.String, { nullable: true }),
  /**
   * Automatically assigned when created
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Position of the trigger, determines the order they will execute in
   */
  position: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The raw format of the title of the trigger
   */
  raw_title: S.optionalWith(S.String, { nullable: true }),
  /**
   * The title of the trigger
   */
  title: S.String,
  /**
   * The time of the last update of the trigger
   */
  updated_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * The url of the trigger
   */
  url: S.optionalWith(S.String, { nullable: true }),
}) {}

export class ObjectTriggersResponse extends S.Class<ObjectTriggersResponse>(
  "ObjectTriggersResponse",
)({
  count: S.optionalWith(S.Int, { nullable: true }),
  next_page: S.optionalWith(S.String, { nullable: true }),
  previous_page: S.optionalWith(S.String, { nullable: true }),
  triggers: S.optionalWith(S.Array(ObjectTriggerObject), { nullable: true }),
}) {}

export class ObjectTriggerRequest extends S.Class<ObjectTriggerRequest>(
  "ObjectTriggerRequest",
)({
  trigger: S.optionalWith(ObjectTriggerObject, { nullable: true }),
}) {}

export class ObjectTriggerResponse extends S.Class<ObjectTriggerResponse>(
  "ObjectTriggerResponse",
)({
  trigger: S.optionalWith(ObjectTriggerObject, { nullable: true }),
}) {}

export class ObjectTriggerActionDefinitionObject extends S.Class<ObjectTriggerActionDefinitionObject>(
  "ObjectTriggerActionDefinitionObject",
)({
  group: S.optionalWith(S.String, { nullable: true }),
  nullable: S.optionalWith(S.Boolean, { nullable: true }),
  repeatable: S.optionalWith(S.Boolean, { nullable: true }),
  subject: S.optionalWith(S.String, { nullable: true }),
  title: S.optionalWith(S.String, { nullable: true }),
  type: S.optionalWith(S.String, { nullable: true }),
  values: S.optionalWith(
    S.Array(
      S.Struct({
        enabled: S.optionalWith(S.Boolean, { nullable: true }),
        format: S.optionalWith(S.String, { nullable: true }),
        title: S.optionalWith(S.String, { nullable: true }),
        value: S.optionalWith(S.String, { nullable: true }),
      }),
    ),
    { nullable: true },
  ),
}) {}

export class ObjectTriggerConditionDefinitionObjectAll extends S.Class<ObjectTriggerConditionDefinitionObjectAll>(
  "ObjectTriggerConditionDefinitionObjectAll",
)({
  group: S.optionalWith(S.String, { nullable: true }),
  nullable: S.optionalWith(S.Boolean, { nullable: true }),
  operators: S.optionalWith(
    S.Array(
      S.Struct({
        format: S.optionalWith(S.String, { nullable: true }),
        terminal: S.optionalWith(S.Boolean, { nullable: true }),
        title: S.optionalWith(S.String, { nullable: true }),
        value: S.optionalWith(S.String, { nullable: true }),
      }),
    ),
    { nullable: true },
  ),
  repeatable: S.optionalWith(S.Boolean, { nullable: true }),
  subject: S.optionalWith(S.String, { nullable: true }),
  title: S.optionalWith(S.String, { nullable: true }),
  type: S.optionalWith(S.String, { nullable: true }),
  values: S.optionalWith(
    S.Array(
      S.Struct({
        enabled: S.optionalWith(S.Boolean, { nullable: true }),
        title: S.optionalWith(S.String, { nullable: true }),
        value: S.optionalWith(S.String, { nullable: true }),
      }),
    ),
    { nullable: true },
  ),
}) {}

export class ObjectTriggerConditionDefinitionObjectAny extends S.Class<ObjectTriggerConditionDefinitionObjectAny>(
  "ObjectTriggerConditionDefinitionObjectAny",
)({
  group: S.optionalWith(S.String, { nullable: true }),
  nullable: S.optionalWith(S.Boolean, { nullable: true }),
  operators: S.optionalWith(
    S.Array(
      S.Struct({
        format: S.optionalWith(S.String, { nullable: true }),
        terminal: S.optionalWith(S.Boolean, { nullable: true }),
        title: S.optionalWith(S.String, { nullable: true }),
        value: S.optionalWith(S.String, { nullable: true }),
      }),
    ),
    { nullable: true },
  ),
  repeatable: S.optionalWith(S.Boolean, { nullable: true }),
  subject: S.optionalWith(S.String, { nullable: true }),
  title: S.optionalWith(S.String, { nullable: true }),
  type: S.optionalWith(S.String, { nullable: true }),
  values: S.optionalWith(
    S.Array(
      S.Struct({
        enabled: S.optionalWith(S.Boolean, { nullable: true }),
        title: S.optionalWith(S.String, { nullable: true }),
        value: S.optionalWith(S.String, { nullable: true }),
      }),
    ),
    { nullable: true },
  ),
}) {}

export class ObjectTriggerDefinitionObject extends S.Class<ObjectTriggerDefinitionObject>(
  "ObjectTriggerDefinitionObject",
)({
  actions: S.optionalWith(S.Array(ObjectTriggerActionDefinitionObject), {
    nullable: true,
  }),
  conditions_all: S.optionalWith(
    S.Array(ObjectTriggerConditionDefinitionObjectAll),
    { nullable: true },
  ),
  conditions_any: S.optionalWith(
    S.Array(ObjectTriggerConditionDefinitionObjectAny),
    { nullable: true },
  ),
}) {}

export class ObjectTriggerDefinitionResponse extends S.Class<ObjectTriggerDefinitionResponse>(
  "ObjectTriggerDefinitionResponse",
)({
  definitions: S.optionalWith(ObjectTriggerDefinitionObject, {
    nullable: true,
  }),
}) {}

export class ObjectTriggerBulkUpdateItem extends S.Class<ObjectTriggerBulkUpdateItem>(
  "ObjectTriggerBulkUpdateItem",
)({
  /**
   * Whether an object trigger is active
   */
  active: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * The id of the object trigger to update
   */
  id: S.Int,
  /**
   * The new position of the object trigger
   */
  position: S.optionalWith(S.Int, { nullable: true }),
}) {}

export class ObjectTriggerBulkUpdateRequest extends S.Class<ObjectTriggerBulkUpdateRequest>(
  "ObjectTriggerBulkUpdateRequest",
)({
  triggers: S.optionalWith(S.Array(ObjectTriggerBulkUpdateItem), {
    nullable: true,
  }),
}) {}

/**
 * Configuration settings for the role. See [Configuration](#configuration)
 */
export class CustomRoleConfigurationObject extends S.Class<CustomRoleConfigurationObject>(
  "CustomRoleConfigurationObject",
)({
  /**
   * Whether or not the agent can assign tickets to any group
   */
  assign_tickets_to_any_group: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * Whether or not the agent has access to Chat
   */
  chat_access: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * Whether or not the agent can view lists of user profiles. Allowed values: "full", "none"
   */
  end_user_list_access: S.optionalWith(S.String, { nullable: true }),
  /**
   * What the agent can do with end-user profiles. Allowed values: "edit", "edit-within-org", "full", "readonly"
   */
  end_user_profile_access: S.optionalWith(S.String, { nullable: true }),
  /**
   * Allowed values: "edit", "full", "none", "readonly"
   */
  explore_access: S.optionalWith(S.String, { nullable: true }),
  /**
   * The kind of access the agent has to Guide. Allowed values: "edit-topics", "full", "readonly"
   */
  forum_access: S.optionalWith(S.String, { nullable: true }),
  forum_access_restricted_content: S.optionalWith(S.Boolean, {
    nullable: true,
  }),
  /**
   * Whether or not the agent can add or modify groups
   */
  group_access: S.optionalWith(S.Boolean, { nullable: true }),
  light_agent: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * What the agent can do with macros. Allowed values: "full", "manage-group", "manage-personal", "readonly"
   */
  macro_access: S.optionalWith(S.String, { nullable: true }),
  /**
   * Whether or not the agent can manage business rules
   */
  manage_business_rules: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * Whether or not the agent can view, add, and edit contextual workspaces
   */
  manage_contextual_workspaces: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * Whether or not the agent can access dynamic content
   */
  manage_dynamic_content: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * Whether or not the agent can manage channels and extensions
   */
  manage_extensions_and_channels: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * Whether or not the agent can manage Facebook pages
   */
  manage_facebook: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * Whether or not the agent can create and manage organization fields
   */
  manage_organization_fields: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * Whether or not the agent can create and manage ticket fields
   */
  manage_ticket_fields: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * Whether or not the agent can create and manage ticket forms
   */
  manage_ticket_forms: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * Whether or not the agent can create and manage user fields
   */
  manage_user_fields: S.optionalWith(S.Boolean, { nullable: true }),
  moderate_forums: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * Whether or not the agent can add or modify organizations
   */
  organization_editing: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * Whether or not the agent can add or modify organization notes
   */
  organization_notes_editing: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * What the agent can do with reports. Allowed values: "full", "none", "readonly"
   */
  report_access: S.optionalWith(S.String, { nullable: true }),
  /**
   * Whether or not the agent can contribute to side conversations
   */
  side_conversation_create: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * What kind of tickets the agent can access. Allowed values: "all", "assigned-only", "within-groups", "within-groups-and-public-groups", "within-organization"
   */
  ticket_access: S.optionalWith(S.String, { nullable: true }),
  /**
   * What type of comments the agent can make. Allowed values: "public", "none"
   */
  ticket_comment_access: S.optionalWith(S.String, { nullable: true }),
  /**
   * Whether or not the agent can delete tickets
   */
  ticket_deletion: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * Whether or not the agent can edit ticket properties
   */
  ticket_editing: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * Whether or not the agent can merge tickets
   */
  ticket_merge: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * Whether or not the agent can edit ticket tags
   */
  ticket_tag_editing: S.optionalWith(S.Boolean, { nullable: true }),
  twitter_search_access: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * What the agent can do with customer lists. Allowed values: "full", "manage-group", "manage-personal", "none", "readonly"
   */
  user_view_access: S.optionalWith(S.String, { nullable: true }),
  /**
   * What the agent can do with views. Allowed values: "full", "manage-group", "manage-personal", "playonly", "readonly"
   */
  view_access: S.optionalWith(S.String, { nullable: true }),
  /**
   * Whether or not the agent can view deleted tickets
   */
  view_deleted_tickets: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * Whether or not the agent can answer and place calls to end users
   */
  voice_access: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * Whether or not the agent can view details about calls on the Talk dashboard
   */
  voice_dashboard_access: S.optionalWith(S.Boolean, { nullable: true }),
}) {}

export class CustomRoleObject extends S.Class<CustomRoleObject>(
  "CustomRoleObject",
)({
  configuration: S.optionalWith(CustomRoleConfigurationObject, {
    nullable: true,
  }),
  /**
   * The time the record was created
   */
  created_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * A description of the role
   */
  description: S.optionalWith(S.String, { nullable: true }),
  /**
   * Automatically assigned on creation
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Name of the custom role
   */
  name: S.String,
  /**
   * The user's role. 0 stands for a custom agent, 1 for a light agent, 2 for a chat agent, 3 for a contributor, 4 for an admin and 5 for a billing admin. See [Understanding standard agent roles in Zendesk Support](https://support.zendesk.com/hc/en-us/articles/4409155971354-Understanding-standard-agent-roles-in-Zendesk-Support) in Zendesk help
   */
  role_type: S.Int,
  /**
   * The number of team members assigned to this role
   */
  team_member_count: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The time the record was last updated
   */
  updated_at: S.optionalWith(S.String, { nullable: true }),
}) {}

export class CustomRolesResponse extends S.Class<CustomRolesResponse>(
  "CustomRolesResponse",
)({
  custom_roles: S.optionalWith(S.Array(CustomRoleObject), { nullable: true }),
}) {}

export class CustomRoleResponse extends S.Class<CustomRoleResponse>(
  "CustomRoleResponse",
)({
  custom_role: S.optionalWith(CustomRoleObject, { nullable: true }),
}) {}

export class BulkUpdateDefaultCustomStatusRequest extends S.Class<BulkUpdateDefaultCustomStatusRequest>(
  "BulkUpdateDefaultCustomStatusRequest",
)({
  /**
   * The comma-separated list of custom ticket status ids to be set as default for their status categories
   */
  ids: S.optionalWith(S.String, { nullable: true }),
}) {}

export class BulkUpdateDefaultCustomStatusResponse extends S.Record({
  key: S.String,
  value: S.Unknown,
}) {}

export class ListCustomStatusesParams extends S.Struct({
  status_categories: S.optionalWith(S.String, { nullable: true }),
  active: S.optionalWith(S.Boolean, { nullable: true }),
  default: S.optionalWith(S.Boolean, { nullable: true }),
}) {}

/**
 * The status category the custom ticket status belongs to
 */
export class CustomStatusObjectStatusCategory extends S.Literal(
  "new",
  "open",
  "pending",
  "hold",
  "solved",
) {}

export class CustomStatusObject extends S.Class<CustomStatusObject>(
  "CustomStatusObject",
)({
  /**
   * If true, the custom status is set to active, If false, the custom status is set to inactive
   */
  active: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * The label displayed to agents. Maximum length is 48 characters
   */
  agent_label: S.String,
  /**
   * The date and time the custom ticket status was created
   */
  created_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * If true, the custom status is set to default. If false, the custom status is set to non-default
   */
  default: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * The description of when the user should select this custom ticket status
   */
  description: S.optionalWith(S.String, { nullable: true }),
  /**
   * The description displayed to end users
   */
  end_user_description: S.optionalWith(S.String, { nullable: true }),
  /**
   * The label displayed to end users. Maximum length is 48 characters
   */
  end_user_label: S.optionalWith(S.String, { nullable: true }),
  /**
   * Automatically assigned when the custom ticket status is created
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The dynamic content placeholder. If the dynamic content placeholder is not available, this is the "agent_label" value. See [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)
   */
  raw_agent_label: S.optionalWith(S.String, { nullable: true }),
  /**
   * The dynamic content placeholder. If the dynamic content placeholder is not available, this is the "description" value. [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)
   */
  raw_description: S.optionalWith(S.String, { nullable: true }),
  /**
   * The dynamic content placeholder. If the dynamic content placeholder is not available, this is the "end_user_description" value. See [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)
   */
  raw_end_user_description: S.optionalWith(S.String, { nullable: true }),
  /**
   * The dynamic content placeholder. If the dynamic content placeholder is not available, this is the "end_user_label" value. See [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)
   */
  raw_end_user_label: S.optionalWith(S.String, { nullable: true }),
  /**
   * The status category the custom ticket status belongs to
   */
  status_category: CustomStatusObjectStatusCategory,
  /**
   * The date and time the custom ticket status was last updated
   */
  updated_at: S.optionalWith(S.String, { nullable: true }),
}) {}

export class CustomStatusesResponse extends S.Class<CustomStatusesResponse>(
  "CustomStatusesResponse",
)({
  custom_statuses: S.optionalWith(S.Array(CustomStatusObject), {
    nullable: true,
  }),
}) {}

/**
 * The status category the custom ticket status belongs to
 */
export class CustomStatusCreateInputStatusCategory extends S.Literal(
  "new",
  "open",
  "pending",
  "hold",
  "solved",
) {}

export class CustomStatusCreateInput extends S.Class<CustomStatusCreateInput>(
  "CustomStatusCreateInput",
)({
  /**
   * The status category the custom ticket status belongs to
   */
  status_category: S.optionalWith(CustomStatusCreateInputStatusCategory, {
    nullable: true,
  }),
  /**
   * True if the custom status is set as active; inactive if false
   */
  active: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * The dynamic content placeholder, if present, or the "agent_label" value, if not. See [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)
   */
  agent_label: S.optionalWith(S.String, { nullable: true }),
  /**
   * The dynamic content placeholder, if present, or the "description" value, if not. See [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)
   */
  description: S.optionalWith(S.String, { nullable: true }),
  /**
   * The dynamic content placeholder, if present, or the "end_user_description" value, if not. See [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)
   */
  end_user_description: S.optionalWith(S.String, { nullable: true }),
  /**
   * The dynamic content placeholder, if present, or the "end_user_label" value, if not. See [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)
   */
  end_user_label: S.optionalWith(S.String, { nullable: true }),
}) {}

export class CustomStatusCreateRequest extends S.Class<CustomStatusCreateRequest>(
  "CustomStatusCreateRequest",
)({
  custom_status: S.optionalWith(CustomStatusCreateInput, { nullable: true }),
}) {}

export class CustomStatusResponse extends S.Class<CustomStatusResponse>(
  "CustomStatusResponse",
)({
  custom_status: S.optionalWith(CustomStatusObject, { nullable: true }),
}) {}

export class ShowCustomStatusParams extends S.Struct({}) {}

export class UpdateCustomStatusParams extends S.Struct({}) {}

export class CustomStatusUpdateInput extends S.Class<CustomStatusUpdateInput>(
  "CustomStatusUpdateInput",
)({
  /**
   * True if the custom status is set as active; inactive if false
   */
  active: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * The dynamic content placeholder, if present, or the "agent_label" value, if not. See [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)
   */
  agent_label: S.optionalWith(S.String, { nullable: true }),
  /**
   * The dynamic content placeholder, if present, or the "description" value, if not. See [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)
   */
  description: S.optionalWith(S.String, { nullable: true }),
  /**
   * The dynamic content placeholder, if present, or the "end_user_description" value, if not. See [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)
   */
  end_user_description: S.optionalWith(S.String, { nullable: true }),
  /**
   * The dynamic content placeholder, if present, or the "end_user_label" value, if not. See [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)
   */
  end_user_label: S.optionalWith(S.String, { nullable: true }),
}) {}

export class CustomStatusUpdateRequest extends S.Class<CustomStatusUpdateRequest>(
  "CustomStatusUpdateRequest",
)({
  custom_status: S.optionalWith(CustomStatusUpdateInput, { nullable: true }),
}) {}

export class CreateTicketFormStatusesForCustomStatusRequest extends S.Class<CreateTicketFormStatusesForCustomStatusRequest>(
  "CreateTicketFormStatusesForCustomStatusRequest",
)({
  ticket_form_status: S.optionalWith(
    S.Array(
      S.Struct({
        /**
         * The id of the ticket form
         */
        ticket_form_id: S.optionalWith(S.Int, { nullable: true }),
      }),
    ),
    { nullable: true },
  ),
}) {}

export class TicketFormStatusObject extends S.Class<TicketFormStatusObject>(
  "TicketFormStatusObject",
)({
  /**
   * The id of the associated custom status
   */
  custom_status_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Automatically assigned when creating a ticket form
   */
  id: S.optionalWith(S.String, { nullable: true }),
  /**
   * The id of the associated ticket form
   */
  ticket_form_id: S.optionalWith(S.Int, { nullable: true }),
}) {}

export class TicketFormStatusesResponse extends S.Class<TicketFormStatusesResponse>(
  "TicketFormStatusesResponse",
)({
  ticket_form_statuses: S.optionalWith(
    S.Array(TicketFormStatusObject).pipe(S.maxItems(1)),
    { nullable: true },
  ),
}) {}

export class ListDeletedTicketsParamsSortBy extends S.Literal(
  "id",
  "subject",
  "deleted_at",
) {}

export class ListDeletedTicketsParamsSortOrder extends S.Literal(
  "asc",
  "desc",
) {}

export class ListDeletedTicketsParams extends S.Struct({
  sort_by: S.optionalWith(ListDeletedTicketsParamsSortBy, { nullable: true }),
  sort_order: S.optionalWith(ListDeletedTicketsParamsSortOrder, {
    nullable: true,
  }),
}) {}

export class ListDeletedTicketsResponse extends S.Class<ListDeletedTicketsResponse>(
  "ListDeletedTicketsResponse",
)({
  /**
   * the total record count
   */
  count: S.optionalWith(S.Int, { nullable: true }),
  /**
   * the URL of the next page
   */
  next_page: S.optionalWith(S.String, { nullable: true }),
  /**
   * the URL of the previous page
   */
  previous_page: S.optionalWith(S.String, { nullable: true }),
  deleted_tickets: S.optionalWith(
    S.Array(
      S.Struct({
        actor: S.optionalWith(
          S.Struct({
            id: S.optionalWith(S.Int, { nullable: true }),
            name: S.optionalWith(S.String, { nullable: true }),
          }),
          { nullable: true },
        ),
        deleted_at: S.optionalWith(S.String, { nullable: true }),
        id: S.optionalWith(S.Int, { nullable: true }),
        previous_state: S.optionalWith(S.String, { nullable: true }),
        subject: S.optionalWith(S.String, { nullable: true }),
      }),
    ),
    { nullable: true },
  ),
}) {}

export class DeleteTicketPermanentlyParams extends S.Struct({}) {}

export class CreateResourceResult extends S.Class<CreateResourceResult>(
  "CreateResourceResult",
)({
  /**
   * the id of the new resource
   */
  id: S.Int,
  /**
   * the index number of the resul
   */
  index: S.Int,
}) {}

export class UpdateResourceResult extends S.Class<UpdateResourceResult>(
  "UpdateResourceResult",
)({
  /**
   * the action the job attempted (`"action": "update"`)
   */
  action: S.String,
  /**
   * the id of the resource the job attempted to update
   */
  id: S.Int,
  /**
   * the status (`"status": "Updated"`)
   */
  status: S.String,
  /**
   * whether the action was successful or not (`"success": true`)
   */
  success: S.Boolean,
}) {}

export class FailedResult extends S.Class<FailedResult>("FailedResult")({
  /**
   * The action the job attempted (`"action": "update"`)
   */
  action: S.String,
  /**
   * The details of the error
   */
  details: S.String,
  /**
   * The error message
   */
  error: S.String,
  /**
   * The id of the resource the job attempted to update
   */
  id: S.Int,
  /**
   * Whether the action was successful or not (`"success": true`)
   */
  success: S.Boolean,
}) {}

export class JobStatusResultObject extends S.Union(
  CreateResourceResult,
  UpdateResourceResult,
  FailedResult,
) {}

export class JobStatusObject extends S.Class<JobStatusObject>(
  "JobStatusObject",
)({
  /**
   * Automatically assigned when the job is queued
   */
  id: S.optionalWith(S.String, { nullable: true }),
  /**
   * The type of the job
   */
  job_type: S.optionalWith(S.String, { nullable: true }),
  /**
   * Message from the job worker, if any
   */
  message: S.optionalWith(S.String, { nullable: true }),
  /**
   * Number of tasks that have already been completed
   */
  progress: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Result data from processed tasks. See [Results](#results) below
   */
  results: S.optionalWith(
    S.Union(
      S.Array(JobStatusResultObject),
      S.Struct({
        /**
         * Whether the action was successful or not
         */
        success: S.Boolean,
      }),
    ),
    { nullable: true },
  ),
  /**
   * The current status. One of the following: "queued", "working", "failed", "completed"
   */
  status: S.optionalWith(S.String, { nullable: true }),
  /**
   * The total number of tasks this job is batching through
   */
  total: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The URL to poll for status updates
   */
  url: S.optionalWith(S.String, { nullable: true }),
}) {}

export class JobStatusResponse extends S.Class<JobStatusResponse>(
  "JobStatusResponse",
)({
  job_status: S.optionalWith(JobStatusObject, { nullable: true }),
}) {}

export class RestoreDeletedTicketParams extends S.Struct({}) {}

/**
 * Empty response
 */
export class RestoreDeletedTicket200 extends S.String {}

export class BulkPermanentlyDeleteTicketsParams extends S.Struct({
  ids: S.String,
}) {}

export class BulkRestoreDeletedTicketsParams extends S.Struct({
  ids: S.String,
}) {}

/**
 * Empty response
 */
export class BulkRestoreDeletedTickets200 extends S.String {}

export class DeletedUserObject extends S.Class<DeletedUserObject>(
  "DeletedUserObject",
)({
  active: S.Boolean,
  created_at: S.String,
  email: S.String,
  id: S.Int,
  locale: S.String,
  locale_id: S.Int,
  name: S.String,
  organization_id: S.Int,
  phone: S.NullOr(S.String),
  photo: S.NullOr(S.Record({ key: S.String, value: S.Unknown })),
  role: S.String,
  shared_phone_number: S.NullOr(S.String),
  time_zone: S.String,
  updated_at: S.String,
  url: S.String,
}) {}

export class DeletedUsersResponse extends S.Class<DeletedUsersResponse>(
  "DeletedUsersResponse",
)({
  deleted_users: S.optionalWith(S.Array(DeletedUserObject), { nullable: true }),
}) {}

export class DeletedUserResponse extends S.Class<DeletedUserResponse>(
  "DeletedUserResponse",
)({
  deleted_user: S.optionalWith(DeletedUserObject, { nullable: true }),
}) {}

export class CountResponse extends S.Class<CountResponse>("CountResponse")({
  count: S.optionalWith(
    S.Struct({
      refreshed_at: S.optionalWith(S.String, { nullable: true }),
      value: S.optionalWith(S.Int, { nullable: true }),
    }),
    { nullable: true },
  ),
}) {}

export class DeletionSchedule extends S.Class<DeletionSchedule>(
  "DeletionSchedule",
)({
  /**
   * Whether the deletion schedule is active
   */
  active: S.optionalWith(S.Boolean, { nullable: true }),
  conditions: S.optionalWith(ConditionsObject, { nullable: true }),
  /**
   * The time the deletion schedule was created
   */
  created_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * Whether the deletion schedule is the default
   */
  default: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * The description of the deletion schedule
   */
  description: S.optionalWith(S.String, { nullable: true }),
  /**
   * The id of the deletion schedule
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The title of the deletion schedule
   */
  title: S.optionalWith(S.String, { nullable: true }),
  /**
   * The time the deletion schedule was last updated
   */
  updated_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * Url for obtaining the deletion schedule JSON
   */
  url: S.optionalWith(S.String, { nullable: true }),
}) {}

export class ListDeletionSchedules200 extends S.Struct({
  deletion_schedules: S.optionalWith(S.Array(DeletionSchedule), {
    nullable: true,
  }),
}) {}

export class CreateDeletionScheduleRequest extends S.Class<CreateDeletionScheduleRequest>(
  "CreateDeletionScheduleRequest",
)({
  deletion_schedule: S.optionalWith(DeletionSchedule, { nullable: true }),
}) {}

export class CreateDeletionSchedule201 extends S.Struct({
  deletion_schedule: S.optionalWith(DeletionSchedule, { nullable: true }),
}) {}

export class GetDeletionScheduleParams extends S.Struct({}) {}

export class GetDeletionSchedule200 extends S.Struct({
  deletion_schedule: S.optionalWith(DeletionSchedule, { nullable: true }),
}) {}

export class UpdateDeletionScheduleParams extends S.Struct({}) {}

export class UpdateDeletionScheduleRequest extends S.Class<UpdateDeletionScheduleRequest>(
  "UpdateDeletionScheduleRequest",
)({
  deletion_schedule: S.optionalWith(DeletionSchedule, { nullable: true }),
}) {}

export class UpdateDeletionSchedule200 extends S.Struct({
  deletion_schedule: S.optionalWith(DeletionSchedule, { nullable: true }),
}) {}

export class DeleteDeletionScheduleParams extends S.Struct({}) {}

export class DynamicContentVariantObject extends S.Class<DynamicContentVariantObject>(
  "DynamicContentVariantObject",
)({
  /**
   * If the variant is active and useable
   */
  active: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * The content of the variant
   */
  content: S.String,
  /**
   * When the variant was created
   */
  created_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * If the variant is the default for the item it belongs to
   */
  default: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * Automatically assigned when the variant is created
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * An active locale
   */
  locale_id: S.Int,
  /**
   * If the variant is outdated
   */
  outdated: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * When the variant was last updated
   */
  updated_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * The API url of the variant
   */
  url: S.optionalWith(S.String, { nullable: true }),
}) {}

export class DynamicContentObject extends S.Class<DynamicContentObject>(
  "DynamicContentObject",
)({
  /**
   * When this record was created
   */
  created_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * The default locale for the item. Must be one of the [locales the account has active](/api-reference/ticketing/account-configuration/locales/#list-locales).
   */
  default_locale_id: S.Int,
  /**
   * Automatically assigned when creating items
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The unique name of the item
   */
  name: S.String,
  /**
   * Indicates the item has outdated variants within it
   */
  outdated: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * Automatically generated placeholder for the item, derived from name
   */
  placeholder: S.optionalWith(S.String, { nullable: true }),
  /**
   * When this record was last updated
   */
  updated_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * The API url of this item
   */
  url: S.optionalWith(S.String, { nullable: true }),
  /**
   * All variants within this item. See [Dynamic Content Item Variants](/api-reference/ticketing/ticket-management/dynamic_content_item_variants/)
   */
  variants: S.Array(DynamicContentVariantObject),
}) {}

export class DynamicContentsResponse extends S.Class<DynamicContentsResponse>(
  "DynamicContentsResponse",
)({
  items: S.optionalWith(S.Array(DynamicContentObject), { nullable: true }),
}) {}

export class DynamicContentResponse extends S.Class<DynamicContentResponse>(
  "DynamicContentResponse",
)({
  item: S.optionalWith(DynamicContentObject, { nullable: true }),
}) {}

export class DynamicContentVariantsResponse extends S.Class<DynamicContentVariantsResponse>(
  "DynamicContentVariantsResponse",
)({
  variants: S.optionalWith(S.Array(DynamicContentVariantObject), {
    nullable: true,
  }),
}) {}

export class DynamicContentVariantResponse extends S.Class<DynamicContentVariantResponse>(
  "DynamicContentVariantResponse",
)({
  variant: S.optionalWith(DynamicContentVariantObject, { nullable: true }),
}) {}

export class ShowManyDynamicContentsParams extends S.Struct({
  identifiers: S.optionalWith(S.String, { nullable: true }),
}) {}

export class RecipientObject extends S.Class<RecipientObject>(
  "RecipientObject",
)({
  /**
   * Details about the delivery status
   */
  delivery_status: S.optionalWith(
    S.Struct({
      /**
       * The delivery status code (SMTP code and DSN code)
       */
      code: S.optionalWith(S.String, { nullable: true }),
      /**
       * The delivery status id
       */
      id: S.optionalWith(S.Int, { nullable: true }),
      /**
       * The delivery status description
       */
      message: S.optionalWith(S.String, { nullable: true }),
      /**
       * The delivery status type (key)
       */
      name: S.optionalWith(S.String, { nullable: true }),
    }),
    { nullable: true },
  ),
  /**
   * The recipient's email address
   */
  email_address: S.optionalWith(S.String, { nullable: true }),
  /**
   * The recipient's user id
   */
  user_id: S.optionalWith(S.Int, { nullable: true }),
}) {}

export class EmailNotificationObject extends S.Class<EmailNotificationObject>(
  "EmailNotificationObject",
)({
  /**
   * The comment ID associated to this email notification
   */
  comment_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * When this email notification was created
   */
  created_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * The email ID of this email notification
   */
  email_id: S.optionalWith(S.String, { nullable: true }),
  /**
   * The value of the Message-Id header of the email
   */
  message_id: S.optionalWith(S.String, { nullable: true }),
  /**
   * The notification id of this email notification
   */
  notification_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The list of recipients associated to this email notification
   */
  recipients: S.optionalWith(S.Array(RecipientObject), { nullable: true }),
  /**
   * The ticket ID associated to this email notification
   */
  ticket_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * When this email notification was last updated
   */
  updated_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * The API url of this email notification
   */
  url: S.optionalWith(S.String, { nullable: true }),
}) {}

export class EmailNotificationsResponse extends S.Class<EmailNotificationsResponse>(
  "EmailNotificationsResponse",
)({
  email_notifications: S.optionalWith(S.Array(EmailNotificationObject), {
    nullable: true,
  }),
}) {}

export class EmailNotificationResponse extends S.Class<EmailNotificationResponse>(
  "EmailNotificationResponse",
)({
  email_notification: S.optionalWith(EmailNotificationObject, {
    nullable: true,
  }),
}) {}

export class ListGroupMembershipsParams extends S.Struct({}) {}

export class GroupMembershipObject extends S.Class<GroupMembershipObject>(
  "GroupMembershipObject",
)({
  /**
   * The time the group was created
   */
  created_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * If true, tickets assigned directly to the agent will assume this membership's group
   */
  default: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * The id of a group
   */
  group_id: S.Int,
  /**
   * Automatically assigned upon creation
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The time of the last update of the group
   */
  updated_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * The API url of this record
   */
  url: S.optionalWith(S.String, { nullable: true }),
  /**
   * The id of an agent
   */
  user_id: S.Int,
}) {}

export class GroupMembershipsResponse extends S.Class<GroupMembershipsResponse>(
  "GroupMembershipsResponse",
)({
  group_memberships: S.optionalWith(S.Array(GroupMembershipObject), {
    nullable: true,
  }),
}) {}

export class GroupMembershipResponse extends S.Class<GroupMembershipResponse>(
  "GroupMembershipResponse",
)({
  group_membership: S.optionalWith(GroupMembershipObject, { nullable: true }),
}) {}

export class GroupMembershipBulkDeleteParams extends S.Struct({
  ids: S.optionalWith(S.String, { nullable: true }),
}) {}

export class GroupSLAPolicyFilterConditionObject extends S.Class<GroupSLAPolicyFilterConditionObject>(
  "GroupSLAPolicyFilterConditionObject",
)({
  /**
   * The name of a ticket field
   */
  field: S.optionalWith(S.String, { nullable: true }),
  /**
   * A comparison operator
   */
  operator: S.optionalWith(S.String, { nullable: true }),
  /**
   * The value of a ticket field
   */
  value: S.optionalWith(S.Array(S.Union(S.String, S.Int)), { nullable: true }),
}) {}

/**
 * An object that describes the conditions a ticket must match for a Group SLA policy to be applied to the ticket. See [Filter](#filter).
 */
export class GroupSLAPolicyFilterObject extends S.Class<GroupSLAPolicyFilterObject>(
  "GroupSLAPolicyFilterObject",
)({
  all: S.optionalWith(S.Array(GroupSLAPolicyFilterConditionObject), {
    nullable: true,
  }),
}) {}

export class GroupSLAPolicyMetricObject extends S.Class<GroupSLAPolicyMetricObject>(
  "GroupSLAPolicyMetricObject",
)({
  /**
   * Whether the metric targets are being measured in business hours or calendar hours
   */
  business_hours: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * The definition of the time that is being measured
   */
  metric: S.optionalWith(S.String, { nullable: true }),
  /**
   * Priority that a ticket must match
   */
  priority: S.optionalWith(S.String, { nullable: true }),
  /**
   * The time within which the end-state for a metric should be met
   */
  target: S.optionalWith(S.Int, { nullable: true }),
}) {}

export class GroupSLAPolicyObject extends S.Class<GroupSLAPolicyObject>(
  "GroupSLAPolicyObject",
)({
  /**
   * The time the Group SLA policy was created
   */
  created_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * The description of the Group SLA policy
   */
  description: S.optionalWith(S.String, { nullable: true }),
  filter: GroupSLAPolicyFilterObject,
  /**
   * Automatically assigned when created
   */
  id: S.optionalWith(S.String, { nullable: true }),
  /**
   * Array of [policy metric](#policy-metric) objects
   */
  policy_metrics: S.optionalWith(S.Array(GroupSLAPolicyMetricObject), {
    nullable: true,
  }),
  /**
   * Position of the Group SLA policy. This position determines the order in which policies are matched to tickets. If not specified, the Group SLA policy is added at the last position
   */
  position: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The title of the Group SLA policy
   */
  title: S.String,
  /**
   * The time of the last update of the Group SLA policy
   */
  updated_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * URL of the Group SLA policy record
   */
  url: S.optionalWith(S.String, { nullable: true }),
}) {}

export class GroupSLAPoliciesResponse extends S.Class<GroupSLAPoliciesResponse>(
  "GroupSLAPoliciesResponse",
)({
  count: S.optionalWith(S.Int, { nullable: true }),
  group_sla_policies: S.optionalWith(S.Array(GroupSLAPolicyObject), {
    nullable: true,
  }),
  next_page: S.optionalWith(S.String, { nullable: true }),
  previous_page: S.optionalWith(S.String, { nullable: true }),
}) {}

export class GroupSLAPolicyResponse extends S.Class<GroupSLAPolicyResponse>(
  "GroupSLAPolicyResponse",
)({
  group_sla_policy: S.optionalWith(GroupSLAPolicyObject, { nullable: true }),
}) {}

export class GroupSLAPolicyFilterDefinitionResponse extends S.Class<GroupSLAPolicyFilterDefinitionResponse>(
  "GroupSLAPolicyFilterDefinitionResponse",
)({
  definitions: S.optionalWith(
    S.Struct({
      all: S.optionalWith(
        S.Array(
          S.Struct({
            group: S.optionalWith(S.String, { nullable: true }),
            operators: S.optionalWith(
              S.Array(
                S.Struct({
                  title: S.optionalWith(S.String, { nullable: true }),
                  value: S.optionalWith(S.String, { nullable: true }),
                }),
              ),
              { nullable: true },
            ),
            title: S.optionalWith(S.String, { nullable: true }),
            value: S.optionalWith(S.String, { nullable: true }),
            values: S.optionalWith(
              S.Struct({
                list: S.optionalWith(
                  S.Array(
                    S.Struct({
                      title: S.optionalWith(S.String, { nullable: true }),
                      value: S.optionalWith(S.Int, { nullable: true }),
                    }),
                  ),
                  { nullable: true },
                ),
                type: S.optionalWith(S.String, { nullable: true }),
              }),
              { nullable: true },
            ),
          }),
        ),
        { nullable: true },
      ),
    }),
    { nullable: true },
  ),
}) {}

export class ReorderGroupSLAPoliciesParams extends S.Struct({
  group_sla_policy_ids: S.optionalWith(S.Array(S.String), { nullable: true }),
}) {}

/**
 * Empty response
 */
export class ReorderGroupSLAPolicies200 extends S.String {}

export class ListGroupsParams extends S.Struct({
  exclude_deleted: S.optionalWith(S.Boolean, { nullable: true }),
}) {}

export class GroupObject extends S.Class<GroupObject>("GroupObject")({
  /**
   * The time the group was created
   */
  created_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * If the group is the default one for the account
   */
  default: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * Deleted groups get marked as such
   */
  deleted: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * The description of the group
   */
  description: S.optionalWith(S.String, { nullable: true }),
  /**
   * Automatically assigned when creating groups
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * If true, the group is public.
   * If false, the group is private.
   * You can't change a private group to a public group
   */
  is_public: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * The name of the group
   */
  name: S.String,
  /**
   * The time of the last update of the group
   */
  updated_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * The API url of the group
   */
  url: S.optionalWith(S.String, { nullable: true }),
}) {}

export class GroupsResponse extends S.Class<GroupsResponse>("GroupsResponse")({
  groups: S.optionalWith(S.Array(GroupObject), { nullable: true }),
}) {}

export class GroupResponse extends S.Class<GroupResponse>("GroupResponse")({
  group: S.optionalWith(GroupObject, { nullable: true }),
}) {}

export class GroupsCountObject extends S.Class<GroupsCountObject>(
  "GroupsCountObject",
)({
  count: S.optionalWith(
    S.Struct({
      /**
       * Timestamp that indicates when the count was last updated
       */
      refreshed_at: S.optionalWith(S.String, { nullable: true }),
      /**
       * Approximate count of groups
       */
      value: S.optionalWith(S.Int, { nullable: true }),
    }),
    { nullable: true },
  ),
}) {}

export class TicketImportParams extends S.Struct({
  archive_immediately: S.optionalWith(S.Boolean, { nullable: true }),
}) {}

export class TicketImportInput extends S.Class<TicketImportInput>(
  "TicketImportInput",
)({
  /**
   * The agent currently assigned to the ticket
   */
  assignee_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The conversation between requesters, collaborators, and agents
   */
  comments: S.optionalWith(
    S.Array(
      S.Struct({
        /**
         * Attachments, if any. See [Attachment](/api-reference/ticketing/tickets/ticket-attachments/)
         */
        attachments: S.optionalWith(S.Array(AttachmentObject), {
          nullable: true,
        }),
        /**
         * The id of the ticket audit record. See [Show Audit](/api-reference/ticketing/tickets/ticket_audits/#show-audit)
         */
        audit_id: S.optionalWith(S.Int, { nullable: true }),
        /**
         * The id of the comment author. See [Author id](#author-id)
         */
        author_id: S.optionalWith(S.Int, { nullable: true }),
        /**
         * The comment string. See [Bodies](#bodies)
         */
        body: S.optionalWith(S.String, { nullable: true }),
        /**
         * The time the comment was created
         */
        created_at: S.optionalWith(S.String, { nullable: true }),
        /**
         * The comment formatted as HTML. See [Bodies](#bodies)
         */
        html_body: S.optionalWith(S.String, { nullable: true }),
        /**
         * Automatically assigned when the comment is created
         */
        id: S.optionalWith(S.Int, { nullable: true }),
        /**
         * System information (web client, IP address, etc.) and comment flags, if any. See [Comment flags](#comment-flags)
         */
        metadata: S.optionalWith(
          S.Record({ key: S.String, value: S.Unknown }),
          { nullable: true },
        ),
        /**
         * The comment presented as plain text. See [Bodies](#bodies)
         */
        plain_body: S.optionalWith(S.String, { nullable: true }),
        /**
         * true if a public comment; false if an internal note. The initial value set on ticket creation persists for any additional comment unless you change it
         */
        public: S.optionalWith(S.Boolean, { nullable: true }),
        /**
         * `Comment` or `VoiceComment`. The JSON object for adding voice comments to tickets is different. See [Adding voice comments to tickets](/documentation/ticketing/managing-tickets/adding-voice-comments-to-tickets)
         */
        type: S.optionalWith(S.String, { nullable: true }),
        /**
         * List of tokens received from [uploading files](/api-reference/ticketing/tickets/ticket-attachments/#upload-files) for comment attachments. The files are attached by creating or updating tickets with the tokens. See [Attaching files](/api-reference/ticketing/tickets/tickets/#attaching-files) in Tickets
         */
        uploads: S.optionalWith(S.Array(S.String), { nullable: true }),
        via: S.optionalWith(TicketAuditViaObject, { nullable: true }),
        /**
         * The comment string value
         */
        value: S.optionalWith(S.String, { nullable: true }),
      }),
    ),
    { nullable: true },
  ),
  /**
   * Read-only first comment on the ticket. When [creating a ticket](#create-ticket), use `comment` to set the description. See [Description and first comment](#description-and-first-comment)
   */
  description: S.optionalWith(S.String, { nullable: true }),
  /**
   * The user who requested this ticket
   */
  requester_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The value of the subject field for this ticket
   */
  subject: S.optionalWith(S.String, { nullable: true }),
  /**
   * The array of tags applied to this ticket
   */
  tags: S.optionalWith(S.Array(S.String), { nullable: true }),
}) {}

export class TicketImportRequest extends S.Class<TicketImportRequest>(
  "TicketImportRequest",
)({
  ticket: S.optionalWith(TicketImportInput, { nullable: true }),
}) {}

export class TicketBulkImportParams extends S.Struct({
  archive_immediately: S.optionalWith(S.Boolean, { nullable: true }),
}) {}

export class TicketBulkImportRequest extends S.Class<TicketBulkImportRequest>(
  "TicketBulkImportRequest",
)({
  tickets: S.optionalWith(S.Array(TicketImportInput), { nullable: true }),
}) {}

/**
 * See [Tickets](/api-reference/ticketing/tickets/tickets/) for a detailed example.
 */
export class TimeBasedExportIncrementalTicketsResponse extends S.Class<TimeBasedExportIncrementalTicketsResponse>(
  "TimeBasedExportIncrementalTicketsResponse",
)({
  count: S.optionalWith(S.Int, { nullable: true }),
  end_of_stream: S.optionalWith(S.Boolean, { nullable: true }),
  end_time: S.optionalWith(S.Int, { nullable: true }),
  next_page: S.optionalWith(S.String, { nullable: true }),
  tickets: S.optionalWith(S.Array(TicketObject), { nullable: true }),
}) {}

export class OrganizationObject extends S.Class<OrganizationObject>(
  "OrganizationObject",
)({
  /**
   * The time the organization was created
   */
  created_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * Any details obout the organization, such as the address
   */
  details: S.optionalWith(S.String, { nullable: true }),
  /**
   * An array of domain names associated with this organization
   */
  domain_names: S.optionalWith(S.Array(S.String), { nullable: true }),
  /**
   * A unique external id to associate organizations to an external record. The id is case-insensitive. For example, "company1" and "Company1" are considered the same
   */
  external_id: S.optionalWith(S.String, { nullable: true }),
  /**
   * New tickets from users in this organization are automatically put in this group
   */
  group_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Automatically assigned when the organization is created
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * A unique name for the organization
   */
  name: S.String,
  /**
   * Any notes you have about the organization
   */
  notes: S.optionalWith(S.String, { nullable: true }),
  /**
   * Custom fields for this organization. See [Custom organization fields](/api-reference/ticketing/organizations/organizations/#custom-organization-fields)
   */
  organization_fields: S.optionalWith(
    S.Record({ key: S.String, value: S.Unknown }),
    { nullable: true },
  ),
  /**
   * End users in this organization are able to comment on each other's tickets
   */
  shared_comments: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * End users in this organization are able to see each other's tickets
   */
  shared_tickets: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * The tags of the organization
   */
  tags: S.optionalWith(S.Array(S.String), { nullable: true }),
  /**
   * The time of the last update of the organization
   */
  updated_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * The API url of this organization
   */
  url: S.optionalWith(S.String, { nullable: true }),
}) {}

export class ExportIncrementalOrganizationsResponse extends S.Class<ExportIncrementalOrganizationsResponse>(
  "ExportIncrementalOrganizationsResponse",
)({
  count: S.optionalWith(S.Int, { nullable: true }),
  end_of_stream: S.optionalWith(S.Boolean, { nullable: true }),
  end_time: S.optionalWith(S.Int, { nullable: true }),
  next_page: S.optionalWith(S.String, { nullable: true }),
  organizations: S.optionalWith(S.Array(OrganizationObject), {
    nullable: true,
  }),
}) {}

export class IncrementalSkillBasedRoutingAttributeValue extends S.Class<IncrementalSkillBasedRoutingAttributeValue>(
  "IncrementalSkillBasedRoutingAttributeValue",
)({
  /**
   * Id of the associated attribute
   */
  attribute_id: S.optionalWith(S.String, { nullable: true }),
  /**
   * Automatically assigned when an attribute value is created
   */
  id: S.optionalWith(S.String, { nullable: true }),
  /**
   * The name of the attribute value
   */
  name: S.optionalWith(S.String, { nullable: true }),
  /**
   * The time the attribute value was created, updated, or deleted
   */
  time: S.optionalWith(S.String, { nullable: true }),
  /**
   * One of "create", "update", or "delete"
   */
  type: S.optionalWith(S.String, { nullable: true }),
}) {}

export class IncrementalSkillBasedRoutingAttribute extends S.Class<IncrementalSkillBasedRoutingAttribute>(
  "IncrementalSkillBasedRoutingAttribute",
)({
  /**
   * Automatically assigned when an attribute is created
   */
  id: S.optionalWith(S.String, { nullable: true }),
  /**
   * The name of the attribute
   */
  name: S.optionalWith(S.String, { nullable: true }),
  /**
   * The time the attribute was created, updated, or deleted
   */
  time: S.optionalWith(S.String, { nullable: true }),
  /**
   * One of "create", "update", or "delete"
   */
  type: S.optionalWith(S.String, { nullable: true }),
}) {}

export class IncrementalSkillBasedRoutingInstanceValue extends S.Class<IncrementalSkillBasedRoutingInstanceValue>(
  "IncrementalSkillBasedRoutingInstanceValue",
)({
  /**
   * Id of the associated attribute value
   */
  attribute_value_id: S.optionalWith(S.String, { nullable: true }),
  /**
   * Automatically assigned when an instance value is created
   */
  id: S.optionalWith(S.String, { nullable: true }),
  /**
   * Id of the associated agent or ticket
   */
  instance_id: S.optionalWith(S.String, { nullable: true }),
  /**
   * The time the instance value was created or deleted
   */
  time: S.optionalWith(S.String, { nullable: true }),
  /**
   * One of "associate_agent", "unassociate_agent", "associate_ticket", or "unassociate_ticket"
   */
  type: S.optionalWith(S.String, { nullable: true }),
}) {}

export class IncrementalSkillBasedRouting extends S.Class<IncrementalSkillBasedRouting>(
  "IncrementalSkillBasedRouting",
)({
  /**
   * Routing attribute values
   */
  attribute_values: S.optionalWith(
    S.Array(IncrementalSkillBasedRoutingAttributeValue),
    { nullable: true },
  ),
  /**
   * Routing attributes
   */
  attributes: S.optionalWith(S.Array(IncrementalSkillBasedRoutingAttribute), {
    nullable: true,
  }),
  /**
   * The number of results returned for the current request
   */
  count: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The most recent resource creation time present in this result set in Unix epoch time
   */
  end_time: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Routing instance values
   */
  instance_values: S.optionalWith(
    S.Array(IncrementalSkillBasedRoutingInstanceValue),
    { nullable: true },
  ),
  /**
   * The URL that should be called to get the next set of results
   */
  next_page: S.optionalWith(S.String, { nullable: true }),
}) {}

/**
 * The metric being tracked
 */
export class TicketMetricEventBaseObjectMetric extends S.Literal(
  "agent_work_time",
  "pausable_update_time",
  "periodic_update_time",
  "reply_time",
  "requester_wait_time",
  "resolution_time",
  "group_ownership_time",
) {}

/**
 * The type of the metric event. See [Ticket metric event types reference](/documentation/ticketing/reference-guides/ticket-metric-event-types-reference)
 */
export class TicketMetricEventBaseObjectType extends S.Literal(
  "activate",
  "pause",
  "fulfill",
  "apply_sla",
  "apply_group_sla",
  "breach",
  "update_status",
  "measure",
) {}

export class TicketMetricEventBaseObject extends S.Class<TicketMetricEventBaseObject>(
  "TicketMetricEventBaseObject",
)({
  /**
   * If true, the event has been deleted
   */
  deleted: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * Automatically assigned when the record is created
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The instance of the metric associated with the event. See [instance_id](#instance_id)
   */
  instance_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The metric being tracked
   */
  metric: S.optionalWith(TicketMetricEventBaseObjectMetric, { nullable: true }),
  /**
   * Id of the associated ticket
   */
  ticket_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The time the event occurred
   */
  time: S.optionalWith(S.String, { nullable: true }),
  /**
   * The type of the metric event. See [Ticket metric event types reference](/documentation/ticketing/reference-guides/ticket-metric-event-types-reference)
   */
  type: S.optionalWith(TicketMetricEventBaseObjectType, { nullable: true }),
}) {}

export class ExportIncrementalTicketEventsResponse extends S.Class<ExportIncrementalTicketEventsResponse>(
  "ExportIncrementalTicketEventsResponse",
)({
  count: S.optionalWith(S.Int, { nullable: true }),
  end_of_stream: S.optionalWith(S.Boolean, { nullable: true }),
  end_time: S.optionalWith(S.Int, { nullable: true }),
  next_page: S.optionalWith(S.String, { nullable: true }),
  ticket_events: S.optionalWith(S.Array(TicketMetricEventBaseObject), {
    nullable: true,
  }),
}) {}

export class ListTicketMetricEventsParams extends S.Struct({
  start_time: S.Int,
  include_changes: S.optionalWith(S.Boolean, { nullable: true }),
}) {}

export class TicketMetricEventsResponse extends S.Class<TicketMetricEventsResponse>(
  "TicketMetricEventsResponse",
)({
  count: S.optionalWith(S.Int, { nullable: true }),
  end_time: S.optionalWith(S.Int, { nullable: true }),
  next_page: S.optionalWith(S.String, { nullable: true }),
  ticket_metric_events: S.optionalWith(S.Array(TicketMetricEventBaseObject), {
    nullable: true,
  }),
}) {}

/**
 * See [Tickets](/api-reference/ticketing/tickets/tickets/) for a detailed example.
 */
export class CursorBasedExportIncrementalTicketsResponse extends S.Class<CursorBasedExportIncrementalTicketsResponse>(
  "CursorBasedExportIncrementalTicketsResponse",
)({
  after_cursor: S.optionalWith(S.String, { nullable: true }),
  after_url: S.optionalWith(S.String, { nullable: true }),
  before_cursor: S.optionalWith(S.String, { nullable: true }),
  before_url: S.optionalWith(S.String, { nullable: true }),
  end_of_stream: S.optionalWith(S.Boolean, { nullable: true }),
  tickets: S.optionalWith(S.Array(TicketObject), { nullable: true }),
}) {}

export class TimeBasedExportIncrementalUsersResponse extends S.Class<TimeBasedExportIncrementalUsersResponse>(
  "TimeBasedExportIncrementalUsersResponse",
)({
  count: S.optionalWith(S.Int, { nullable: true }),
  end_of_stream: S.optionalWith(S.Boolean, { nullable: true }),
  end_time: S.optionalWith(S.Int, { nullable: true }),
  next_page: S.optionalWith(S.String, { nullable: true }),
  users: S.optionalWith(S.Array(UserObject), { nullable: true }),
}) {}

export class CursorBasedExportIncrementalUsersResponse extends S.Class<CursorBasedExportIncrementalUsersResponse>(
  "CursorBasedExportIncrementalUsersResponse",
)({
  after_cursor: S.optionalWith(S.String, { nullable: true }),
  after_url: S.optionalWith(S.String, { nullable: true }),
  before_cursor: S.optionalWith(S.String, { nullable: true }),
  before_url: S.optionalWith(S.String, { nullable: true }),
  end_of_stream: S.optionalWith(S.Boolean, { nullable: true }),
  users: S.optionalWith(S.Array(UserObject), { nullable: true }),
}) {}

export class JobStatusesResponse extends S.Class<JobStatusesResponse>(
  "JobStatusesResponse",
)({
  job_statuses: S.Array(JobStatusObject),
}) {}

export class ShowManyJobStatusesParams extends S.Struct({
  ids: S.String,
}) {}

export class LocaleObject extends S.Class<LocaleObject>("LocaleObject")({
  /**
   * The ISO 8601 formatted date-time the locale was created
   */
  created_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * The unique ID of the locale
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The name of the locale
   */
  locale: S.optionalWith(S.String, { nullable: true }),
  /**
   * The name of the language
   */
  name: S.optionalWith(S.String, { nullable: true }),
  /**
   * The ISO 8601 formatted date-time when the locale was last updated
   */
  updated_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * The URL of the locale record
   */
  url: S.optionalWith(S.String, { nullable: true }),
}) {}

export class LocalesResponse extends S.Class<LocalesResponse>(
  "LocalesResponse",
)({
  locales: S.optionalWith(S.Array(LocaleObject), { nullable: true }),
}) {}

export class LocaleResponse extends S.Class<LocaleResponse>("LocaleResponse")({
  locale: S.optionalWith(LocaleObject, { nullable: true }),
}) {}

export class ListMacrosParams extends S.Struct({
  include: S.optionalWith(S.String, { nullable: true }),
  access: S.optionalWith(S.String, { nullable: true }),
  active: S.optionalWith(S.Boolean, { nullable: true }),
  category: S.optionalWith(S.Int, { nullable: true }),
  group_id: S.optionalWith(S.Int, { nullable: true }),
  only_viewable: S.optionalWith(S.Boolean, { nullable: true }),
  sort_by: S.optionalWith(S.String, { nullable: true }),
  sort_order: S.optionalWith(S.String, { nullable: true }),
}) {}

export class MacroObject extends S.Class<MacroObject>("MacroObject")({
  /**
   * The app installation that requires each macro, if present
   */
  app_installation: S.optionalWith(S.String, { nullable: true }),
  /**
   * The macro categories
   */
  categories: S.optionalWith(S.String, { nullable: true }),
  /**
   * Permissions for each macro
   */
  permissions: S.optionalWith(S.String, { nullable: true }),
  /**
   * The number of times each macro has been used in the past hour
   */
  usage_1h: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The number of times each macro has been used in the past week
   */
  usage_7d: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The number of times each macro has been used in the past day
   */
  usage_24h: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The number of times each macro has been used in the past thirty days
   */
  usage_30d: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Each action describes what the macro will do. See [Actions reference](/documentation/ticketing/reference-guides/actions-reference)
   */
  actions: S.Array(ActionObject),
  /**
   * Useful for determining if the macro should be displayed
   */
  active: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * The time the macro was created
   */
  created_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * If true, the macro is a default macro
   */
  default: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * The description of the macro
   */
  description: S.optionalWith(S.String, { nullable: true }),
  /**
   * The id automatically assigned when a macro is created
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The position of the macro
   */
  position: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Access to this macro. A null value allows unrestricted access for all users in the account
   */
  restriction: S.optionalWith(S.Record({ key: S.String, value: S.Unknown }), {
    nullable: true,
  }),
  /**
   * The title of the macro
   */
  title: S.String,
  /**
   * The time of the last update of the macro
   */
  updated_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * A URL to access the macro's details
   */
  url: S.optionalWith(S.String, { nullable: true }),
}) {}

export class MacrosResponse extends S.Class<MacrosResponse>("MacrosResponse")({
  /**
   * the total record count
   */
  count: S.optionalWith(S.Int, { nullable: true }),
  /**
   * the URL of the next page
   */
  next_page: S.optionalWith(S.String, { nullable: true }),
  /**
   * the URL of the previous page
   */
  previous_page: S.optionalWith(S.String, { nullable: true }),
  macros: S.optionalWith(S.Array(MacroObject), { nullable: true }),
}) {}

export class MacroInput extends S.Class<MacroInput>("MacroInput")({
  /**
   * Each action describes what the macro will do
   */
  actions: S.Array(ActionObject),
  /**
   * Useful for determining if the macro should be displayed
   */
  active: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * The description of the macro
   */
  description: S.optionalWith(S.String, { nullable: true }),
  /**
   * Who may access this macro. Will be null when everyone in the account can access it
   */
  restriction: S.optionalWith(
    S.Struct({
      /**
       * The numeric ID of the group or user
       */
      id: S.optionalWith(S.Int, { nullable: true }),
      /**
       * The numeric IDs of the groups
       */
      ids: S.optionalWith(S.Array(S.Int), { nullable: true }),
      /**
       * Allowed values are Group or User
       */
      type: S.optionalWith(S.String, { nullable: true }),
    }),
    { nullable: true },
  ),
  /**
   * The title of the macro
   */
  title: S.String,
}) {}

export class CreateMacroRequest extends S.Class<CreateMacroRequest>(
  "CreateMacroRequest",
)({
  macro: S.optionalWith(MacroInput, { nullable: true }),
}) {}

export class CreateMacro200 extends S.Struct({
  macro: S.optionalWith(MacroObject, { nullable: true }),
}) {}

export class MacroResponse extends S.Class<MacroResponse>("MacroResponse")({
  macro: S.optionalWith(MacroObject, { nullable: true }),
}) {}

export class UpdateMacroRequest extends S.Class<UpdateMacroRequest>(
  "UpdateMacroRequest",
)({
  macro: S.optionalWith(MacroInput, { nullable: true }),
}) {}

export class UpdateMacro200 extends S.Struct({
  macro: S.optionalWith(MacroObject, { nullable: true }),
}) {}

export class MacroApplyTicketResponse extends S.Class<MacroApplyTicketResponse>(
  "MacroApplyTicketResponse",
)({
  result: S.optionalWith(
    S.Struct({
      ticket: S.optionalWith(
        S.Struct({
          assignee_id: S.optionalWith(S.Int, { nullable: true }),
          comment: S.optionalWith(
            S.Struct({
              body: S.optionalWith(S.String, { nullable: true }),
              public: S.optionalWith(S.Boolean, { nullable: true }),
              scoped_body: S.optionalWith(S.Array(S.Array(S.String)), {
                nullable: true,
              }),
            }),
            { nullable: true },
          ),
          fields: S.optionalWith(
            S.Struct({
              id: S.optionalWith(S.Int, { nullable: true }),
              value: S.optionalWith(S.String, { nullable: true }),
            }),
            { nullable: true },
          ),
          group_id: S.optionalWith(S.Int, { nullable: true }),
          id: S.optionalWith(S.Int, { nullable: true }),
          url: S.optionalWith(S.String, { nullable: true }),
        }),
        { nullable: true },
      ),
    }),
    { nullable: true },
  ),
}) {}

export class MacroAttachmentObject extends S.Class<MacroAttachmentObject>(
  "MacroAttachmentObject",
)({
  /**
   * The content type of the image. Example value: "image/png"
   */
  content_type: S.optionalWith(S.String, { nullable: true }),
  /**
   * A full URL where the attachment image file can be downloaded
   */
  content_url: S.optionalWith(S.String, { nullable: true }),
  /**
   * The time when this attachment was created
   */
  created_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * The name of the image file
   */
  filename: S.optionalWith(S.String, { nullable: true }),
  /**
   * Automatically assigned when created
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The size of the image file in bytes
   */
  size: S.optionalWith(S.Int, { nullable: true }),
}) {}

export class MacroAttachmentsResponse extends S.Class<MacroAttachmentsResponse>(
  "MacroAttachmentsResponse",
)({
  macro_attachments: S.optionalWith(S.Array(MacroAttachmentObject), {
    nullable: true,
  }),
}) {}

export class MacroAttachmentResponse extends S.Class<MacroAttachmentResponse>(
  "MacroAttachmentResponse",
)({
  macro_attachment: S.optionalWith(MacroAttachmentObject, { nullable: true }),
}) {}

export class ListMacrosActions200 extends S.Struct({
  actions: S.optionalWith(
    S.Array(S.Record({ key: S.String, value: S.Unknown })),
    { nullable: true },
  ),
}) {}

export class ListActiveMacrosParams extends S.Struct({
  include: S.optionalWith(S.String, { nullable: true }),
  access: S.optionalWith(S.String, { nullable: true }),
  category: S.optionalWith(S.Int, { nullable: true }),
  group_id: S.optionalWith(S.Int, { nullable: true }),
  sort_by: S.optionalWith(S.String, { nullable: true }),
  sort_order: S.optionalWith(S.String, { nullable: true }),
}) {}

export class MacroCategoriesResponse extends S.Class<MacroCategoriesResponse>(
  "MacroCategoriesResponse",
)({
  categories: S.optionalWith(S.Array(S.String), { nullable: true }),
}) {}

export class ListMacroActionDefinitions200 extends S.Struct({
  definitions: S.optionalWith(
    S.Struct({
      actions: S.optionalWith(
        S.Array(S.Record({ key: S.String, value: S.Unknown })),
        { nullable: true },
      ),
    }),
    { nullable: true },
  ),
}) {}

export class DeleteManyMacrosParams extends S.Struct({
  ids: S.Array(S.Int),
}) {}

export class MacroUpdateManyInput extends S.Class<MacroUpdateManyInput>(
  "MacroUpdateManyInput",
)({
  macros: S.optionalWith(
    S.Array(
      S.Struct({
        /**
         * The active status of the macro (true or false)
         */
        active: S.optionalWith(S.Boolean, { nullable: true }),
        /**
         * The ID of the macro to update
         */
        id: S.Int,
        /**
         * The new position of the macro
         */
        position: S.optionalWith(S.Int, { nullable: true }),
      }),
    ),
    { nullable: true },
  ),
}) {}

export class OAuthClientObject extends S.Class<OAuthClientObject>(
  "OAuthClientObject",
)({
  /**
   * The company name displayed when users are asked to grant access to your application.
   */
  company: S.optionalWith(S.String, { nullable: true }),
  /**
   * The time the client was created
   */
  created_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * A short description of your client that is displayed to users when they are considering approving access to your application
   */
  description: S.optionalWith(S.String, { nullable: true }),
  /**
   * Whether this client is globally accessible. See [Set up a global OAuth client](/documentation/apps/publish-your-app-or-theme/global_oauth_intro/)
   */
  global: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * Automatically assigned upon creation
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The unique identifier for this client
   */
  identifier: S.String,
  /**
   * Either "public" or "confidential". Specifies whether the OAuth client operates in a public environment where credentials cannot be securely stored, or on secure servers that can safely store credentials. See [Client types](/documentation/ticketing/working-with-oauth/oauth-pkce/#client-types)
   */
  kind: S.optionalWith(S.String, { nullable: true }),
  /**
   * The API logo url of this record
   */
  logo_url: S.optionalWith(S.String, { nullable: true }),
  /**
   * The name of this client
   */
  name: S.String,
  /**
   * An array of the valid redirect URIs for this client
   */
  redirect_uri: S.optionalWith(S.Array(S.String), { nullable: true }),
  /**
   * The client secret. Generated automatically on creation and returned in full only at that time
   */
  secret: S.optionalWith(S.String, { nullable: true }),
  /**
   * The time of the last update of the client
   */
  updated_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * The API url of this record
   */
  url: S.optionalWith(S.String, { nullable: true }),
  /**
   * The id of the admin who created the client
   */
  user_id: S.Int,
}) {}

export class OAuthClientsResponse extends S.Class<OAuthClientsResponse>(
  "OAuthClientsResponse",
)({
  clients: S.optionalWith(S.Array(OAuthClientObject), { nullable: true }),
}) {}

export class OauthClientResponse extends S.Class<OauthClientResponse>(
  "OauthClientResponse",
)({
  client: S.optionalWith(OAuthClientObject, { nullable: true }),
}) {}

export class GlobalClientObject extends S.Class<GlobalClientObject>(
  "GlobalClientObject",
)({
  /**
   * The company that users are asked to approve access to
   */
  company: S.optionalWith(S.String, { nullable: true }),
  /**
   * A short description of the client
   */
  description: S.optionalWith(S.String, { nullable: true }),
  /**
   * Automatically assigned when the client is created
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The unique identifier for the client
   */
  identifier: S.optionalWith(S.String, { nullable: true }),
  /**
   * The kind of client, public or confidential
   */
  kind: S.optionalWith(S.String, { nullable: true }),
  /**
   * The API logo url of this record
   */
  logo_url: S.optionalWith(S.String, { nullable: true }),
  /**
   * The name of the client
   */
  name: S.optionalWith(S.String, { nullable: true }),
}) {}

export class GlobalClientsResponse extends S.Class<GlobalClientsResponse>(
  "GlobalClientsResponse",
)({
  global_clients: S.optionalWith(S.Array(GlobalClientObject), {
    nullable: true,
  }),
}) {}

export class GlobalClientResponse extends S.Class<GlobalClientResponse>(
  "GlobalClientResponse",
)({
  global_client: S.optionalWith(GlobalClientObject, { nullable: true }),
}) {}

export class GlobalClientTokenSummaryObject extends S.Class<GlobalClientTokenSummaryObject>(
  "GlobalClientTokenSummaryObject",
)({
  /**
   * Automatically assigned when the client is created
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Date and time in ISO 8601 format of last token usage for a client
   */
  last_used_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * Account tokens count for client
   */
  tokens_count: S.optionalWith(S.Int, { nullable: true }),
}) {}

export class GlobalClientsTokenSummaryResponse extends S.Class<GlobalClientsTokenSummaryResponse>(
  "GlobalClientsTokenSummaryResponse",
)({
  global_clients: S.optionalWith(S.Array(GlobalClientTokenSummaryObject), {
    nullable: true,
  }),
}) {}

export class OauthTokenObject extends S.Class<OauthTokenObject>(
  "OauthTokenObject",
)({
  /**
   * The id of the client this token belongs to
   */
  client_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The time the token was created
   */
  created_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * The time the token will expire
   */
  expires_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * Automatically assigned upon creation
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The refresh token, if generated
   */
  refresh_token: S.optionalWith(S.String, { nullable: true }),
  /**
   * The time the refresh token will expire
   */
  refresh_token_expires_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * An array of the valid scopes for this token. See [Scopes](#scopes) below
   */
  scopes: S.optionalWith(S.Array(S.String), { nullable: true }),
  /**
   * The access token
   */
  token: S.optionalWith(S.String, { nullable: true }),
  /**
   * The API url of this record
   */
  url: S.optionalWith(S.String, { nullable: true }),
  /**
   * The latest time this token was used for authentication
   */
  used_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * The id of the user this token authenticates as
   */
  user_id: S.optionalWith(S.Int, { nullable: true }),
}) {}

export class OAuthTokensResponse extends S.Class<OAuthTokensResponse>(
  "OAuthTokensResponse",
)({
  tokens: S.optionalWith(S.Array(OauthTokenObject), { nullable: true }),
}) {}

export class OAuthTokenResponse extends S.Class<OAuthTokenResponse>(
  "OAuthTokenResponse",
)({
  token: S.optionalWith(OauthTokenObject, { nullable: true }),
}) {}

export class EssentialsCardObject extends S.Class<EssentialsCardObject>(
  "EssentialsCardObject",
)({
  /**
   * Date and time the essentials card were created
   */
  created_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * If true, the system has used the first twenty fields for the custom object type as the essentials card.
   */
  default: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * Fields that are displayed in the essentials card details. The order is defined by the order of the fields in the array
   */
  fields: S.Array(S.Record({ key: S.String, value: S.Unknown })),
  /**
   * id of the essentials card
   */
  id: S.optionalWith(S.String, { nullable: true }),
  /**
   * Object type. Example: `zen:user` refers to `User` type
   */
  key: S.optionalWith(S.String, { nullable: true }),
  /**
   * layout type
   */
  layout: S.optionalWith(S.String, { nullable: true }),
  /**
   * Maximum number of fields allowed in the essentials card
   */
  max_count: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Date and time the essentials card were last updated
   */
  updated_at: S.optionalWith(S.String, { nullable: true }),
}) {}

export class EssentialsCardResponse extends S.Class<EssentialsCardResponse>(
  "EssentialsCardResponse",
)({
  object_layout: S.optionalWith(EssentialsCardObject, { nullable: true }),
}) {}

export class EssentialsCardsResponse extends S.Class<EssentialsCardsResponse>(
  "EssentialsCardsResponse",
)({
  object_layouts: S.optionalWith(S.Array(EssentialsCardObject), {
    nullable: true,
  }),
}) {}

export class OrganizationFieldObject extends S.Class<OrganizationFieldObject>(
  "OrganizationFieldObject",
)({
  /**
   * If true, this field is available for use
   */
  active: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * The time of the last update of the ticket field
   */
  created_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * Required and presented for a custom field of type "dropdown". Each option is represented by an object with a `name` and `value` property
   */
  custom_field_options: S.optionalWith(S.Array(CustomFieldOptionObject), {
    nullable: true,
  }),
  /**
   * User-defined description of this field's purpose
   */
  description: S.optionalWith(S.String, { nullable: true }),
  /**
   * Automatically assigned upon creation
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * A unique key that identifies this custom field. This is used for updating the field and referencing in placeholders. The key must consist of only letters, numbers, and underscores. It can't be only numbers
   */
  key: S.String,
  /**
   * Ordering of the field relative to other fields
   */
  position: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The dynamic content placeholder, if present, or the `description` value, if not. See [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)
   */
  raw_description: S.optionalWith(S.String, { nullable: true }),
  /**
   * The dynamic content placeholder, if present, or the `title` value, if not. See [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)
   */
  raw_title: S.optionalWith(S.String, { nullable: true }),
  /**
   * Regular expression field only. The validation pattern for a field value to be deemed valid
   */
  regexp_for_validation: S.optionalWith(S.String, { nullable: true }),
  /**
   * A filter definition that allows your autocomplete to filter down results
   */
  relationship_filter: S.optionalWith(
    S.Record({ key: S.String, value: S.Unknown }),
    { nullable: true },
  ),
  /**
   * A representation of what type of object the field references. Options are "zen:user", "zen:organization", "zen:ticket", and "zen:custom_object:{key}" where key is a custom object key. For example "zen:custom_object:apartment".
   */
  relationship_target_type: S.optionalWith(S.String, { nullable: true }),
  /**
   * If true, only active and position values of this field can be changed
   */
  system: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * Optional for custom field of type "checkbox"; not presented otherwise.
   */
  tag: S.optionalWith(S.String, { nullable: true }),
  /**
   * The title of the custom field
   */
  title: S.String,
  /**
   * The custom field type: "checkbox", "date", "decimal", "dropdown", "integer", ["lookup"](/api-reference/ticketing/lookup_relationships/lookup_relationships/), "multiselect", "regexp", "text", or "textarea"
   */
  type: S.String,
  /**
   * The time of the last update of the ticket field
   */
  updated_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * The URL for this resource
   */
  url: S.optionalWith(S.String, { nullable: true }),
}) {}

export class OrganizationFieldsResponse extends S.Class<OrganizationFieldsResponse>(
  "OrganizationFieldsResponse",
)({
  /**
   * Total count of records retrieved
   */
  count: S.optionalWith(S.Int, { nullable: true }),
  /**
   * URL of the next page
   */
  next_page: S.optionalWith(S.String, { nullable: true }),
  organization_fields: S.optionalWith(S.Array(OrganizationFieldObject), {
    nullable: true,
  }),
  /**
   * URL of the previous page
   */
  previous_page: S.optionalWith(S.String, { nullable: true }),
}) {}

export class OrganizationFieldResponse extends S.Class<OrganizationFieldResponse>(
  "OrganizationFieldResponse",
)({
  organization_field: S.optionalWith(OrganizationFieldObject, {
    nullable: true,
  }),
}) {}

/**
 * Empty response
 */
export class ReorderOrganizationField200 extends S.String {}

export class OrganizationMembershipObject extends S.Class<OrganizationMembershipObject>(
  "OrganizationMembershipObject",
)({
  /**
   * When this record was created
   */
  created_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * Denotes whether this is the default organization membership for the user. If false, returns `null`
   */
  default: S.NullOr(S.Boolean),
  /**
   * Automatically assigned when the membership is created
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The ID of the organization associated with this user, in this membership
   */
  organization_id: S.Int,
  /**
   * The name of the organization associated with this user, in this membership
   */
  organization_name: S.optionalWith(S.String, { nullable: true }),
  /**
   * When this record last got updated
   */
  updated_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * The API url of this membership
   */
  url: S.optionalWith(S.String, { nullable: true }),
  /**
   * The ID of the user for whom this memberships belongs
   */
  user_id: S.Int,
  /**
   * Denotes whether the user can or cannot have access to all organization's tickets.
   */
  view_tickets: S.optionalWith(S.Boolean, { nullable: true }),
}) {}

export class OrganizationMembershipsResponse extends S.Class<OrganizationMembershipsResponse>(
  "OrganizationMembershipsResponse",
)({
  organization_memberships: S.optionalWith(
    S.Array(OrganizationMembershipObject),
    { nullable: true },
  ),
}) {}

export class OrganizationMembershipResponse extends S.Class<OrganizationMembershipResponse>(
  "OrganizationMembershipResponse",
)({
  organization_membership: S.optionalWith(OrganizationMembershipObject, {
    nullable: true,
  }),
}) {}

export class DeleteManyOrganizationMembershipsParams extends S.Struct({
  ids: S.optionalWith(S.Array(S.Int), { nullable: true }),
}) {}

export class OrganizationMergeResponseOrganizationMergeStatus extends S.Literal(
  "new",
  "in_progress",
  "error",
  "complete",
) {}

export class OrganizationMergeResponse extends S.Class<OrganizationMergeResponse>(
  "OrganizationMergeResponse",
)({
  organization_merge: S.optionalWith(
    S.Struct({
      id: S.String,
      loser_id: S.Int,
      status: OrganizationMergeResponseOrganizationMergeStatus,
      url: S.String,
      winner_id: S.Int,
    }),
    { nullable: true },
  ),
}) {}

export class OrganizationSubscriptionObject extends S.Class<OrganizationSubscriptionObject>(
  "OrganizationSubscriptionObject",
)({
  /**
   * The date the organization subscription was created
   */
  created_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * The ID of the organization subscription
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The ID of the organization
   */
  organization_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The ID of the user
   */
  user_id: S.optionalWith(S.Int, { nullable: true }),
}) {}

export class OrganizationSubscriptionsResponse extends S.Class<OrganizationSubscriptionsResponse>(
  "OrganizationSubscriptionsResponse",
)({
  /**
   * An array of organization subscriptions
   */
  organization_subscriptions: S.optionalWith(
    S.Array(OrganizationSubscriptionObject),
    { nullable: true },
  ),
  /**
   * the total record count
   */
  count: S.optionalWith(S.Int, { nullable: true }),
  /**
   * the URL of the next page
   */
  next_page: S.optionalWith(S.String, { nullable: true }),
  /**
   * the URL of the previous page
   */
  previous_page: S.optionalWith(S.String, { nullable: true }),
}) {}

export class OrganizationSubscriptionInput extends S.Class<OrganizationSubscriptionInput>(
  "OrganizationSubscriptionInput",
)({
  /**
   * The ID of the organization
   */
  organization_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The ID of the user
   */
  user_id: S.optionalWith(S.Int, { nullable: true }),
}) {}

export class OrganizationSubscriptionCreateRequest extends S.Class<OrganizationSubscriptionCreateRequest>(
  "OrganizationSubscriptionCreateRequest",
)({
  organization_subscription: S.optionalWith(OrganizationSubscriptionInput, {
    nullable: true,
  }),
}) {}

export class OrganizationSubscriptionResponse extends S.Class<OrganizationSubscriptionResponse>(
  "OrganizationSubscriptionResponse",
)({
  organization_subscription: S.optionalWith(OrganizationSubscriptionObject, {
    nullable: true,
  }),
}) {}

export class ShowOrganizationSubscriptionParams extends S.Struct({}) {}

export class DeleteOrganizationSubscriptionParams extends S.Struct({}) {}

export class OrganizationsResponse extends S.Class<OrganizationsResponse>(
  "OrganizationsResponse",
)({
  count: S.optionalWith(S.Int, { nullable: true }),
  next_page: S.optionalWith(S.String, { nullable: true }),
  organizations: S.optionalWith(S.Array(OrganizationObject), {
    nullable: true,
  }),
  previous_page: S.optionalWith(S.String, { nullable: true }),
}) {}

export class CreateOrganizationRequest extends S.Class<CreateOrganizationRequest>(
  "CreateOrganizationRequest",
)({
  organization: OrganizationObject,
}) {}

export class OrganizationResponse extends S.Class<OrganizationResponse>(
  "OrganizationResponse",
)({
  organization: S.optionalWith(OrganizationObject, { nullable: true }),
}) {}

export class Error extends S.Class<Error>("Error")({
  code: S.String,
  detail: S.optionalWith(S.String, { nullable: true }),
  id: S.optionalWith(S.String, { nullable: true }),
  links: S.optionalWith(S.Record({ key: S.String, value: S.Unknown }), {
    nullable: true,
  }),
  source: S.optionalWith(S.Record({ key: S.String, value: S.Unknown }), {
    nullable: true,
  }),
  status: S.optionalWith(S.String, { nullable: true }),
  title: S.String,
}) {}

export class Errors extends S.Class<Errors>("Errors")({
  errors: S.optionalWith(S.Array(Error), { nullable: true }),
}) {}

export class OrganizationMergeRequest extends S.Class<OrganizationMergeRequest>(
  "OrganizationMergeRequest",
)({
  organization_merge: S.optionalWith(
    S.Struct({
      /**
       * The id of the winning organization.
       */
      winner_id: S.optionalWith(S.Int, { nullable: true }),
    }),
    { nullable: true },
  ),
}) {}

export class OrganizationMergeListResponse extends S.Class<OrganizationMergeListResponse>(
  "OrganizationMergeListResponse",
)({
  organization_merges: S.optionalWith(
    S.Array(
      S.Struct({
        id: S.optionalWith(S.String, { nullable: true }),
        loser_id: S.optionalWith(S.Int, { nullable: true }),
        status: S.optionalWith(
          S.Literal("new", "in_progress", "error", "complete"),
          { nullable: true },
        ),
        url: S.optionalWith(S.String, { nullable: true }),
        winner_id: S.optionalWith(S.Int, { nullable: true }),
      }),
    ),
    { nullable: true },
  ),
}) {}

export class OrganizationMetadataObject extends S.Class<OrganizationMetadataObject>(
  "OrganizationMetadataObject",
)({
  /**
   * The number of tickets for the organization
   */
  tickets_count: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The number of users for the organization
   */
  users_count: S.optionalWith(S.Int, { nullable: true }),
}) {}

export class OrganizationsRelatedResponse extends S.Class<OrganizationsRelatedResponse>(
  "OrganizationsRelatedResponse",
)({
  organization_related: S.optionalWith(OrganizationMetadataObject, {
    nullable: true,
  }),
}) {}

export class CountOrganizationObject extends S.Class<CountOrganizationObject>(
  "CountOrganizationObject",
)({
  refreshed_at: S.optionalWith(S.String, { nullable: true }),
  value: S.optionalWith(S.Int, { nullable: true }),
}) {}

export class CountOrganizationResponse extends S.Class<CountOrganizationResponse>(
  "CountOrganizationResponse",
)({
  count: S.optionalWith(CountOrganizationObject, { nullable: true }),
}) {}

export class ListTicketProblemsResponse extends S.Record({
  key: S.String,
  value: S.Unknown,
}) {}

export class AutocompleteProblemsParams extends S.Struct({
  text: S.optionalWith(S.String, { nullable: true }),
}) {}

export class AutocompleteProblemsRequest extends S.Class<AutocompleteProblemsRequest>(
  "AutocompleteProblemsRequest",
)({
  /**
   * The text to search for
   */
  text: S.optionalWith(S.String, { nullable: true }),
}) {}

export class PushNotificationDevicesInput extends S.Array(S.String) {}

export class PushNotificationDevicesRequest extends S.Class<PushNotificationDevicesRequest>(
  "PushNotificationDevicesRequest",
)({
  push_notification_devices: S.optionalWith(PushNotificationDevicesInput, {
    nullable: true,
  }),
}) {}

/**
 * empty
 */
export class PushNotificationDevices200 extends S.String {}

export class QueueObject extends S.Class<QueueObject>("QueueObject")({
  /**
   * The time the queue was created
   */
  created_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * Conditions when queue could be applied
   */
  definition: S.optionalWith(
    S.Struct({
      all: S.optionalWith(
        S.Array(
          S.Struct({
            field: S.optionalWith(S.String, { nullable: true }),
            operator: S.optionalWith(S.String, { nullable: true }),
            value: S.optionalWith(S.String, { nullable: true }),
          }),
        ),
        { nullable: true },
      ),
      any: S.optionalWith(
        S.Array(
          S.Struct({
            field: S.optionalWith(S.String, { nullable: true }),
            operator: S.optionalWith(S.String, { nullable: true }),
            value: S.optionalWith(S.String, { nullable: true }),
          }),
        ),
        { nullable: true },
      ),
    }),
    { nullable: true },
  ),
  /**
   * The description of the queue
   */
  description: S.optionalWith(S.String, { nullable: true }),
  /**
   * Automatically assigned when creating queue
   */
  id: S.optionalWith(S.String, { nullable: true }),
  /**
   * The name of the queue
   */
  name: S.optionalWith(S.String, { nullable: true }),
  /**
   * The queue-applied order
   */
  order: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Primary group ids linked to the queue
   */
  primary_groups: S.optionalWith(
    S.Struct({
      count: S.optionalWith(S.Int, { nullable: true }),
      groups: S.optionalWith(
        S.Array(
          S.Struct({
            id: S.optionalWith(S.Int, { nullable: true }),
            name: S.optionalWith(S.String, { nullable: true }),
          }),
        ),
        { nullable: true },
      ),
    }),
    { nullable: true },
  ),
  /**
   * The queue-applied priority
   */
  priority: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Secondary group ids linked to the queue
   */
  secondary_groups: S.optionalWith(
    S.Struct({
      count: S.optionalWith(S.Int, { nullable: true }),
      groups: S.optionalWith(
        S.Array(
          S.Struct({
            id: S.optionalWith(S.Int, { nullable: true }),
            name: S.optionalWith(S.String, { nullable: true }),
          }),
        ),
        { nullable: true },
      ),
    }),
    { nullable: true },
  ),
  /**
   * The time of the queue's last update
   */
  updated_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * The API URL of the queue
   */
  url: S.optionalWith(S.String, { nullable: true }),
}) {}

export class QueuesResponse extends S.Class<QueuesResponse>("QueuesResponse")({
  queues: S.optionalWith(S.Array(QueueObject), { nullable: true }),
}) {}

export class QueueResponse extends S.Class<QueueResponse>("QueueResponse")({
  queue: S.optionalWith(QueueObject, { nullable: true }),
}) {}

export class DefinitionsResponse extends S.Class<DefinitionsResponse>(
  "DefinitionsResponse",
)({
  definitions: S.optionalWith(
    S.Struct({
      conditions_all: S.optionalWith(
        S.Array(
          S.Struct({
            group: S.optionalWith(S.String, { nullable: true }),
            nullable: S.optionalWith(S.Boolean, { nullable: true }),
            operators: S.optionalWith(
              S.Array(
                S.Struct({
                  terminal: S.optionalWith(S.Boolean, { nullable: true }),
                  title: S.optionalWith(S.String, { nullable: true }),
                  value: S.optionalWith(S.String, { nullable: true }),
                }),
              ),
              { nullable: true },
            ),
            repeatable: S.optionalWith(S.Boolean, { nullable: true }),
            subject: S.optionalWith(S.String, { nullable: true }),
            title: S.optionalWith(S.String, { nullable: true }),
            type: S.optionalWith(S.String, { nullable: true }),
            values: S.optionalWith(
              S.Array(
                S.Struct({
                  enabled: S.optionalWith(S.Boolean, { nullable: true }),
                  title: S.optionalWith(S.String, { nullable: true }),
                  value: S.optionalWith(S.String, { nullable: true }),
                }),
              ),
              { nullable: true },
            ),
          }),
        ),
        { nullable: true },
      ),
      conditions_any: S.optionalWith(
        S.Array(
          S.Struct({
            group: S.optionalWith(S.String, { nullable: true }),
            nullable: S.optionalWith(S.Boolean, { nullable: true }),
            operators: S.optionalWith(
              S.Array(
                S.Struct({
                  terminal: S.optionalWith(S.Boolean, { nullable: true }),
                  title: S.optionalWith(S.String, { nullable: true }),
                  value: S.optionalWith(S.String, { nullable: true }),
                }),
              ),
              { nullable: true },
            ),
            repeatable: S.optionalWith(S.Boolean, { nullable: true }),
            subject: S.optionalWith(S.String, { nullable: true }),
            title: S.optionalWith(S.String, { nullable: true }),
            type: S.optionalWith(S.String, { nullable: true }),
            values: S.optionalWith(
              S.Array(
                S.Struct({
                  enabled: S.optionalWith(S.Boolean, { nullable: true }),
                  title: S.optionalWith(S.String, { nullable: true }),
                  value: S.optionalWith(S.String, { nullable: true }),
                }),
              ),
              { nullable: true },
            ),
          }),
        ),
        { nullable: true },
      ),
    }),
    { nullable: true },
  ),
}) {}

/**
 * Whether all of the required CNAME records are set. Possible values: "unknown", "verified", "failed"
 */
export class SupportAddressObjectCnameStatus extends S.Literal(
  "unknown",
  "verified",
  "failed",
) {}

/**
 * Verification statuses for the domain and CNAME records. Possible types: "verified", "failed"
 */
export class SupportAddressObjectDnsResults extends S.Literal(
  "verified",
  "failed",
) {}

/**
 * Whether the domain verification record is valid. Possible values: "unknown", "verified", "failed"
 */
export class SupportAddressObjectDomainVerificationStatus extends S.Literal(
  "unknown",
  "verified",
  "failed",
) {}

/**
 * Status of email forwarding. Possible values: "unknown", "waiting", "verified", or "failed"
 */
export class SupportAddressObjectForwardingStatus extends S.Literal(
  "unknown",
  "waiting",
  "verified",
  "failed",
) {}

/**
 * Whether the SPF record is set up correctly. Possible values: "unknown", "verified", "failed"
 */
export class SupportAddressObjectSpfStatus extends S.Literal(
  "unknown",
  "verified",
  "failed",
) {}

export class SupportAddressObject extends S.Class<SupportAddressObject>(
  "SupportAddressObject",
)({
  /**
   * The ID of the [brand](/api-reference/ticketing/account-configuration/brands/)
   */
  brand_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Whether all of the required CNAME records are set. Possible values: "unknown", "verified", "failed"
   */
  cname_status: S.optionalWith(SupportAddressObjectCnameStatus, {
    nullable: true,
  }),
  /**
   * When the address was created
   */
  created_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * Whether the address is the account's default support address
   */
  default: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * Verification statuses for the domain and CNAME records. Possible types: "verified", "failed"
   */
  dns_results: S.optionalWith(SupportAddressObjectDnsResults, {
    nullable: true,
  }),
  /**
   * Verification string to be added as a TXT record to the domain. Possible types: string or null.
   */
  domain_verification_code: S.optionalWith(S.String, { nullable: true }),
  /**
   * Whether the domain verification record is valid. Possible values: "unknown", "verified", "failed"
   */
  domain_verification_status: S.optionalWith(
    SupportAddressObjectDomainVerificationStatus,
    { nullable: true },
  ),
  /**
   * The email address. You can't change the email address of an existing support address.
   */
  email: S.String,
  /**
   * Status of email forwarding. Possible values: "unknown", "waiting", "verified", or "failed"
   */
  forwarding_status: S.optionalWith(SupportAddressObjectForwardingStatus, {
    nullable: true,
  }),
  /**
   * Automatically assigned when created
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The name for the address
   */
  name: S.optionalWith(S.String, { nullable: true }),
  /**
   * Whether the SPF record is set up correctly. Possible values: "unknown", "verified", "failed"
   */
  spf_status: S.optionalWith(SupportAddressObjectSpfStatus, { nullable: true }),
  /**
   * When the address was updated
   */
  updated_at: S.optionalWith(S.String, { nullable: true }),
}) {}

export class SupportAddressesResponse extends S.Class<SupportAddressesResponse>(
  "SupportAddressesResponse",
)({
  recipient_addresses: S.optionalWith(S.Array(SupportAddressObject), {
    nullable: true,
  }),
}) {}

export class SupportAddressResponse extends S.Class<SupportAddressResponse>(
  "SupportAddressResponse",
)({
  recipient_address: S.optionalWith(SupportAddressObject, { nullable: true }),
}) {}

/**
 * Empty response
 */
export class VerifySupportAddressForwarding200 extends S.String {}

export class GetRelationshipFilterDefinitionsParams extends S.Struct({
  source_type: S.optionalWith(S.String, { nullable: true }),
}) {}

export class TriggerConditionDefinitionObjectAll extends S.Class<TriggerConditionDefinitionObjectAll>(
  "TriggerConditionDefinitionObjectAll",
)({
  group: S.optionalWith(S.String, { nullable: true }),
  nullable: S.optionalWith(S.Boolean, { nullable: true }),
  operators: S.optionalWith(
    S.Array(
      S.Struct({
        terminal: S.optionalWith(S.Boolean, { nullable: true }),
        title: S.optionalWith(S.String, { nullable: true }),
        value: S.optionalWith(S.String, { nullable: true }),
      }),
    ),
    { nullable: true },
  ),
  repeatable: S.optionalWith(S.Boolean, { nullable: true }),
  subject: S.optionalWith(S.String, { nullable: true }),
  title: S.optionalWith(S.String, { nullable: true }),
  type: S.optionalWith(S.String, { nullable: true }),
  values: S.optionalWith(
    S.Array(
      S.Struct({
        enabled: S.optionalWith(S.Boolean, { nullable: true }),
        title: S.optionalWith(S.String, { nullable: true }),
        value: S.optionalWith(S.String, { nullable: true }),
      }),
    ),
    { nullable: true },
  ),
}) {}

export class TriggerConditionDefinitionObjectAny extends S.Class<TriggerConditionDefinitionObjectAny>(
  "TriggerConditionDefinitionObjectAny",
)({
  group: S.optionalWith(S.String, { nullable: true }),
  nullable: S.optionalWith(S.Boolean, { nullable: true }),
  operators: S.optionalWith(
    S.Array(
      S.Struct({
        terminal: S.optionalWith(S.Boolean, { nullable: true }),
        title: S.optionalWith(S.String, { nullable: true }),
        value: S.optionalWith(S.String, { nullable: true }),
      }),
    ),
    { nullable: true },
  ),
  repeatable: S.optionalWith(S.Boolean, { nullable: true }),
  subject: S.optionalWith(S.String, { nullable: true }),
  title: S.optionalWith(S.String, { nullable: true }),
  type: S.optionalWith(S.String, { nullable: true }),
}) {}

export class RelationshipFilterDefinition extends S.Class<RelationshipFilterDefinition>(
  "RelationshipFilterDefinition",
)({
  conditions_all: S.optionalWith(S.Array(TriggerConditionDefinitionObjectAll), {
    nullable: true,
  }),
  conditions_any: S.optionalWith(S.Array(TriggerConditionDefinitionObjectAny), {
    nullable: true,
  }),
}) {}

export class RelationshipFilterDefinitionResponse extends S.Class<RelationshipFilterDefinitionResponse>(
  "RelationshipFilterDefinitionResponse",
)({
  definitions: S.optionalWith(RelationshipFilterDefinition, { nullable: true }),
}) {}

export class ListRequestsParams extends S.Struct({
  sort_by: S.optionalWith(S.String, { nullable: true }),
  sort_order: S.optionalWith(S.String, { nullable: true }),
}) {}

export class RequestObject extends S.Class<RequestObject>("RequestObject")({
  /**
   * The id of the assignee if the field is visible to end users
   */
  assignee_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * If true, an end user can mark the request as solved. See [Update Request](/api-reference/ticketing/tickets/ticket-requests/#update-request)
   */
  can_be_solved_by_me: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * The ids of users currently CC'ed on the ticket
   */
  collaborator_ids: S.optionalWith(S.Array(S.Int), { nullable: true }),
  /**
   * When this record was created
   */
  created_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * Custom fields for the request. See [Setting custom field values](/api-reference/ticketing/tickets/tickets/#setting-custom-field-values) in the Tickets doc
   */
  custom_fields: S.optionalWith(
    S.Array(
      S.Struct({
        id: S.optionalWith(S.Int, { nullable: true }),
        value: S.optionalWith(S.String, { nullable: true }),
      }),
    ),
    { nullable: true },
  ),
  /**
   * The custom ticket status id of the ticket
   */
  custom_status_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Read-only first comment on the request. When [creating a request](#create-request), use `comment` to set the description
   */
  description: S.optionalWith(S.String, { nullable: true }),
  /**
   * When the task is due (only applies if the request is of type "task")
   */
  due_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * The ids of users who are currently email CCs on the ticket. See [CCs and followers resources](https://support.zendesk.com/hc/en-us/articles/360020585233) in the Support Help Center
   */
  email_cc_ids: S.optionalWith(S.Array(S.Int), { nullable: true }),
  /**
   * The id of the original ticket if this request is a follow-up ticket. See [Create Request](#create-request)
   */
  followup_source_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The id of the assigned group if the field is visible to end users
   */
  group_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Automatically assigned when creating requests
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Is true if any comments are public, false otherwise
   */
  is_public: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * The organization of the requester
   */
  organization_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The priority of the request, "low", "normal", "high", "urgent"
   */
  priority: S.optionalWith(S.String, { nullable: true }),
  /**
   * The original recipient e-mail address of the request
   */
  recipient: S.optionalWith(S.String, { nullable: true }),
  /**
   * The id of the requester
   */
  requester_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Whether or not request is solved (an end user can set this if "can_be_solved_by_me", above, is true for that user)
   */
  solved: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * The state of the request, "new", "open", "pending", "hold", "solved", "closed"
   */
  status: S.optionalWith(S.String, { nullable: true }),
  /**
   * The value of the subject field for this request if the subject field is visible to end users; a truncated version of the description otherwise
   */
  subject: S.String,
  /**
   * The numeric id of the ticket form associated with this request if the form is visible to end users - only applicable for enterprise accounts
   */
  ticket_form_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The type of the request, "question", "incident", "problem", "task"
   */
  type: S.optionalWith(S.String, { nullable: true }),
  /**
   * When this record last got updated
   */
  updated_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * The API url of this request
   */
  url: S.optionalWith(S.String, { nullable: true }),
  via: S.optionalWith(TicketAuditViaObject, { nullable: true }),
}) {}

export class RequestsResponse extends S.Class<RequestsResponse>(
  "RequestsResponse",
)({
  requests: S.optionalWith(S.Array(RequestObject), { nullable: true }),
}) {}

export class RequestResponse extends S.Class<RequestResponse>(
  "RequestResponse",
)({
  request: S.optionalWith(RequestObject, { nullable: true }),
}) {}

export class ListCommentsParams extends S.Struct({
  since: S.optionalWith(S.String, { nullable: true }),
  role: S.optionalWith(S.String, { nullable: true }),
}) {}

export class TicketCommentsResponse extends S.Class<TicketCommentsResponse>(
  "TicketCommentsResponse",
)({
  comments: S.optionalWith(S.Array(TicketCommentObject), { nullable: true }),
}) {}

export class SearchRequestsParams extends S.Struct({
  query: S.optionalWith(S.String, { nullable: true }),
}) {}

export class ResourceCollectionObject extends S.Class<ResourceCollectionObject>(
  "ResourceCollectionObject",
)({
  /**
   * When the resource collection was created
   */
  created_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * id for the resource collection. Automatically assigned upon creation
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Array of resource metadata objects. See [Resource objects](#resource-objects)
   */
  resources: S.optionalWith(
    S.Array(
      S.Struct({
        deleted: S.optionalWith(S.Boolean, { nullable: true }),
        identifier: S.optionalWith(S.String, { nullable: true }),
        resource_id: S.optionalWith(S.Int, { nullable: true }),
        type: S.optionalWith(S.String, { nullable: true }),
      }),
    ),
    { nullable: true },
  ),
  /**
   * Last time the resource collection was updated
   */
  updated_at: S.optionalWith(S.String, { nullable: true }),
}) {}

export class ResourceCollectionsResponse extends S.Class<ResourceCollectionsResponse>(
  "ResourceCollectionsResponse",
)({
  count: S.optionalWith(S.Int, { nullable: true }),
  next_page: S.optionalWith(S.String, { nullable: true }),
  previous_page: S.optionalWith(S.String, { nullable: true }),
  resource_collections: S.optionalWith(S.Array(ResourceCollectionObject), {
    nullable: true,
  }),
}) {}

export class ResourceCollectionResponse extends S.Class<ResourceCollectionResponse>(
  "ResourceCollectionResponse",
)({
  resource_collection: S.optionalWith(ResourceCollectionObject, {
    nullable: true,
  }),
}) {}

export class SkillBasedRoutingAttributeValueObject extends S.Class<SkillBasedRoutingAttributeValueObject>(
  "SkillBasedRoutingAttributeValueObject",
)({
  /**
   * Id of the associated attribute
   */
  attribute_id: S.optionalWith(S.String, { nullable: true }),
  /**
   * When this record was created
   */
  created_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * Automatically assigned when an attribute value is created
   */
  id: S.optionalWith(S.String, { nullable: true }),
  /**
   * The name of the attribute value
   */
  name: S.optionalWith(S.String, { nullable: true }),
  /**
   * When this record was last updated
   */
  updated_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * URL of the attribute value
   */
  url: S.optionalWith(S.String, { nullable: true }),
}) {}

export class SkillBasedRoutingAttributeValuesResponse extends S.Class<SkillBasedRoutingAttributeValuesResponse>(
  "SkillBasedRoutingAttributeValuesResponse",
)({
  attribute_values: S.optionalWith(
    S.Array(SkillBasedRoutingAttributeValueObject),
    { nullable: true },
  ),
}) {}

export class ListManyAgentsAttributeValuesParams extends S.Struct({
  "filter[agent_ids]": S.String,
  "page[before]": S.optionalWith(S.String, { nullable: true }),
  "page[after]": S.optionalWith(S.String, { nullable: true }),
  "page[size]": S.optionalWith(
    S.Int.pipe(S.greaterThanOrEqualTo(1), S.lessThanOrEqualTo(100)),
    { nullable: true },
  ),
}) {}

export class ManySkillBasedRoutingAttributeValues extends S.Class<ManySkillBasedRoutingAttributeValues>(
  "ManySkillBasedRoutingAttributeValues",
)({
  /**
   * Id of the associated agent
   */
  agent_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Id of the associated attribute
   */
  attribute_id: S.optionalWith(S.String, { nullable: true }),
  /**
   * Id of the associated attribute value
   */
  attribute_value_id: S.optionalWith(S.String, { nullable: true }),
  /**
   * The time of creation of the instance value
   */
  created_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * Automatically assigned when an instance value is created
   */
  id: S.optionalWith(S.String, { nullable: true }),
  /**
   * Name of the associated attribute value
   */
  name: S.optionalWith(S.String, { nullable: true }),
  /**
   * The time of the last update of the instance value
   */
  updated_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * The URL of the associated attribute value
   */
  url: S.optionalWith(S.String, { nullable: true }),
}) {}

export class ManySkillBasedRoutingAttributeValuesResponse extends S.Class<ManySkillBasedRoutingAttributeValuesResponse>(
  "ManySkillBasedRoutingAttributeValuesResponse",
)({
  /**
   * The number of instance values returned
   */
  count: S.optionalWith(S.Int, { nullable: true }),
  instance_values: S.optionalWith(
    S.Array(ManySkillBasedRoutingAttributeValues),
    { nullable: true },
  ),
  /**
   * The URL for the next page of results
   */
  next_page: S.optionalWith(S.String, { nullable: true }),
  /**
   * The URL for the previous page of results
   */
  previous_page: S.optionalWith(S.String, { nullable: true }),
}) {}

export class SkillBasedRoutingAttributeValuesError extends S.Class<SkillBasedRoutingAttributeValuesError>(
  "SkillBasedRoutingAttributeValuesError",
)({
  error: S.optionalWith(
    S.Struct({
      message: S.optionalWith(S.String, { nullable: true }),
      title: S.optionalWith(S.String, { nullable: true }),
    }),
    { nullable: true },
  ),
}) {}

export class BulkSkillBasedRoutingAttributeValueJob extends S.Class<BulkSkillBasedRoutingAttributeValueJob>(
  "BulkSkillBasedRoutingAttributeValueJob",
)({
  /**
   * The action to perform on the attribute values. One of the following: "upsert", "update", "delete"
   */
  action: S.String,
  /**
   * The attribute values to update. See [Attribute Values](#attribute-values)
   */
  attributes: S.Struct({
    attribute_values: S.optionalWith(
      S.Array(SkillBasedRoutingAttributeValueObject),
      { nullable: true },
    ),
  }),
  /**
   * The list of agent ids
   */
  items: S.Array(S.Int),
}) {}

export class BulkSkillBasedRoutingAttributeValuesRequest extends S.Class<BulkSkillBasedRoutingAttributeValuesRequest>(
  "BulkSkillBasedRoutingAttributeValuesRequest",
)({
  job: S.optionalWith(BulkSkillBasedRoutingAttributeValueJob, {
    nullable: true,
  }),
}) {}

export class SkillBasedRoutingAttributeObject extends S.Class<SkillBasedRoutingAttributeObject>(
  "SkillBasedRoutingAttributeObject",
)({
  /**
   * When this record was created
   */
  created_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * Automatically assigned when an attribute is created
   */
  id: S.optionalWith(S.String, { nullable: true }),
  /**
   * The name of the attribute
   */
  name: S.String,
  /**
   * When this record was last updated
   */
  updated_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * URL of the attribute
   */
  url: S.optionalWith(S.String, { nullable: true }),
}) {}

export class SkillBasedRoutingAttributesResponse extends S.Class<SkillBasedRoutingAttributesResponse>(
  "SkillBasedRoutingAttributesResponse",
)({
  attributes: S.optionalWith(S.Array(SkillBasedRoutingAttributeObject), {
    nullable: true,
  }),
  count: S.optionalWith(S.Int, { nullable: true }),
  next_page: S.optionalWith(S.String, { nullable: true }),
  previous_page: S.optionalWith(S.String, { nullable: true }),
}) {}

export class SkillBasedRoutingAttributeResponse extends S.Class<SkillBasedRoutingAttributeResponse>(
  "SkillBasedRoutingAttributeResponse",
)({
  attribute: S.optionalWith(SkillBasedRoutingAttributeObject, {
    nullable: true,
  }),
}) {}

export class SkillBasedRoutingAttributeValueResponse extends S.Class<SkillBasedRoutingAttributeValueResponse>(
  "SkillBasedRoutingAttributeValueResponse",
)({
  attribute_value: S.optionalWith(SkillBasedRoutingAttributeValueObject, {
    nullable: true,
  }),
}) {}

export class SkillBasedRoutingAttributeDefinitions extends S.Class<SkillBasedRoutingAttributeDefinitions>(
  "SkillBasedRoutingAttributeDefinitions",
)({
  definitions: S.optionalWith(
    S.Struct({
      conditions_all: S.optionalWith(
        S.Array(
          S.Struct({
            subject: S.optionalWith(S.String, { nullable: true }),
            title: S.optionalWith(S.String, { nullable: true }),
          }),
        ),
        { nullable: true },
      ),
      conditions_any: S.optionalWith(
        S.Array(
          S.Struct({
            subject: S.optionalWith(S.String, { nullable: true }),
            title: S.optionalWith(S.String, { nullable: true }),
          }),
        ),
        { nullable: true },
      ),
    }),
    { nullable: true },
  ),
}) {}

export class ListTicketsFullfilledByUserParams extends S.Struct({
  ticket_ids: S.Int,
}) {}

export class SkillBasedRoutingTicketFulfilledResponse extends S.Class<SkillBasedRoutingTicketFulfilledResponse>(
  "SkillBasedRoutingTicketFulfilledResponse",
)({
  fulfilled_ticket_ids: S.optionalWith(S.Array(S.Int), { nullable: true }),
}) {}

export class SatisfactionRatingObject extends S.Class<SatisfactionRatingObject>(
  "SatisfactionRatingObject",
)({
  /**
   * The id of agent assigned to at the time of rating
   */
  assignee_id: S.Int,
  /**
   * The comment received with this rating, if available
   */
  comment: S.optionalWith(S.String, { nullable: true }),
  /**
   * The time the satisfaction rating got created
   */
  created_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * The id of group assigned to at the time of rating
   */
  group_id: S.Int,
  /**
   * Automatically assigned upon creation
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The reason for a bad rating given by the requester in a follow-up question. Satisfaction reasons must be [enabled](https://support.zendesk.com/hc/en-us/articles/223152967)
   */
  reason: S.optionalWith(S.String, { nullable: true }),
  /**
   * The default reasons the user can select from a list menu for giving a negative rating. See [Reason codes](/api-reference/ticketing/ticket-management/satisfaction_reasons/#reason-codes) in the Satisfaction Reasons API. Can only be set on ratings with a `score` of "bad". Responses don't include this property
   */
  reason_code: S.optionalWith(S.Int, { nullable: true }),
  /**
   * id for the reason the user gave a negative rating. Can only be set on ratings with a `score` of "bad". To get a descriptive value for the id, use the [Show Reason for Satisfaction Rating](/api-reference/ticketing/ticket-management/satisfaction_reasons/#show-reason-for-satisfaction-rating) endpoint
   */
  reason_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The id of ticket requester submitting the rating
   */
  requester_id: S.Int,
  /**
   * The rating "offered", "unoffered", "good" or "bad"
   */
  score: S.String,
  /**
   * The id of ticket being rated
   */
  ticket_id: S.Int,
  /**
   * The time the satisfaction rating got updated
   */
  updated_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * The API url of this rating
   */
  url: S.optionalWith(S.String, { nullable: true }),
}) {}

export class SatisfactionRatingsResponse extends S.Class<SatisfactionRatingsResponse>(
  "SatisfactionRatingsResponse",
)({
  satisfaction_ratings: S.optionalWith(S.Array(SatisfactionRatingObject), {
    nullable: true,
  }),
}) {}

export class SatisfactionRatingResponse extends S.Class<SatisfactionRatingResponse>(
  "SatisfactionRatingResponse",
)({
  satisfaction_rating: S.optionalWith(S.Array(SatisfactionRatingObject), {
    nullable: true,
  }),
}) {}

export class SatisfactionRatingsCountResponse extends S.Class<SatisfactionRatingsCountResponse>(
  "SatisfactionRatingsCountResponse",
)({
  count: S.optionalWith(
    S.Struct({
      refreshed_at: S.optionalWith(S.String, { nullable: true }),
      value: S.optionalWith(S.Int, { nullable: true }),
    }),
    { nullable: true },
  ),
}) {}

export class SatisfactionReasonObject extends S.Class<SatisfactionReasonObject>(
  "SatisfactionReasonObject",
)({
  /**
   * The time the reason was created
   */
  created_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * The time the reason was deleted
   */
  deleted_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * Automatically assigned upon creation
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The dynamic content placeholder, if present, or the current "value", if not. See [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)
   */
  raw_value: S.optionalWith(S.String, { nullable: true }),
  /**
   * An account-level code for referencing the reason. Custom reasons are assigned an auto-incrementing integer (non-system reason codes begin at 1000). See [Reason codes](#reason-codes)
   */
  reason_code: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The time the reason was updated
   */
  updated_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * API URL for the resource
   */
  url: S.optionalWith(S.String, { nullable: true }),
  /**
   * Translated value of the reason in the account locale
   */
  value: S.String,
}) {}

export class SatisfactionReasonsResponse extends S.Class<SatisfactionReasonsResponse>(
  "SatisfactionReasonsResponse",
)({
  reasons: S.optionalWith(S.Array(SatisfactionReasonObject), {
    nullable: true,
  }),
}) {}

export class SatisfactionReasonResponse extends S.Class<SatisfactionReasonResponse>(
  "SatisfactionReasonResponse",
)({
  reason: S.optionalWith(S.Array(SatisfactionReasonObject), { nullable: true }),
}) {}

export class ListSearchResultsParams extends S.Struct({
  query: S.String,
  sort_by: S.optionalWith(S.String, { nullable: true }),
  sort_order: S.optionalWith(S.String, { nullable: true }),
}) {}

export class SearchResultObject extends S.Class<SearchResultObject>(
  "SearchResultObject",
)({
  /**
   * When the resource was created
   */
  created_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * Flag to indicate whether this is the default resource
   */
  default: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * Flag to indicate whether or not resource has been deleted
   */
  deleted: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * The description of the resource
   */
  description: S.optionalWith(S.String, { nullable: true }),
  /**
   * The ID of the resource
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The name of the resource
   */
  name: S.optionalWith(S.String, { nullable: true }),
  /**
   * The type of the resource
   */
  result_type: S.optionalWith(S.String, { nullable: true }),
  /**
   * When the resource was last updated
   */
  updated_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * The url of the resource
   */
  url: S.optionalWith(S.String, { nullable: true }),
}) {}

export class SearchResponse extends S.Class<SearchResponse>("SearchResponse")({
  /**
   * The number of resources returned by the query corresponding to this page of results in the paginated response
   */
  count: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The facets corresponding to the search query
   */
  facets: S.optionalWith(S.String, { nullable: true }),
  /**
   * URL to the next page of results
   */
  next_page: S.optionalWith(S.String, { nullable: true }),
  /**
   * URL to the previous page of results
   */
  previous_page: S.optionalWith(S.String, { nullable: true }),
  /**
   * May consist of tickets, users, groups, or organizations, as specified by the `result_type` property in each result object
   */
  results: S.optionalWith(S.Array(SearchResultObject), { nullable: true }),
}) {}

export class CountSearchResultsParams extends S.Struct({
  query: S.String,
}) {}

export class SearchCountResponse extends S.Class<SearchCountResponse>(
  "SearchCountResponse",
)({
  count: S.optionalWith(S.Int, { nullable: true }),
}) {}

export class ExportSearchResultsParams extends S.Struct({
  query: S.String,
  "page[size]": S.optionalWith(S.Int, { nullable: true }),
  "filter[type]": S.optionalWith(S.String, { nullable: true }),
}) {}

export class SearchExportResponse extends S.Class<SearchExportResponse>(
  "SearchExportResponse",
)({
  /**
   * The facets corresponding to the search query
   */
  facets: S.optionalWith(S.String, { nullable: true }),
  /**
   * The links to the previous and next entries via the cursor ids in the metadata.
   */
  links: S.optionalWith(
    S.Struct({
      /**
       * The url to the next entry via the cursor.
       */
      next: S.optionalWith(S.String, { nullable: true }),
      /**
       * The url to the previous entry via the cursor.
       */
      prev: S.optionalWith(S.String, { nullable: true }),
    }),
    { nullable: true },
  ),
  /**
   * Metadata for the export query response.
   */
  meta: S.optionalWith(
    S.Struct({
      /**
       * The cursor id for the next object.
       */
      after_cursor: S.optionalWith(S.String, { nullable: true }),
      /**
       * The cursor id for the previous object.
       */
      before_cursor: S.optionalWith(S.String, { nullable: true }),
      /**
       * Whether there are more items yet to be returned by the cursor.
       */
      has_more: S.optionalWith(S.Boolean, { nullable: true }),
    }),
    { nullable: true },
  ),
  /**
   * May consist of tickets, users, groups, or organizations, as specified by the `result_type` property in each result object
   */
  results: S.optionalWith(S.Array(SearchResultObject), { nullable: true }),
}) {}

export class SessionObject extends S.Class<SessionObject>("SessionObject")({
  /**
   * When the session was created
   */
  authenticated_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * Automatically assigned when the session is created
   */
  id: S.Int,
  /**
   * The last approximate time this session was seen. This does not update on every request.
   */
  last_seen_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * The API URL of this session
   */
  url: S.optionalWith(S.String, { nullable: true }),
  /**
   * The id of the user
   */
  user_id: S.optionalWith(S.Int, { nullable: true }),
}) {}

export class SessionsResponse extends S.Class<SessionsResponse>(
  "SessionsResponse",
)({
  sessions: S.optionalWith(S.Array(SessionObject), { nullable: true }),
}) {}

export class SharingAgreementObject extends S.Class<SharingAgreementObject>(
  "SharingAgreementObject",
)({
  /**
   * The time the record was created
   */
  created_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * Automatically assigned upon creation
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Name of this sharing agreement
   */
  name: S.optionalWith(S.String, { nullable: true }),
  /**
   * Can be one of the following: "jira", null
   */
  partner_name: S.optionalWith(S.String, { nullable: true }),
  /**
   * Subdomain of the remote account or null if not associated with an account
   */
  remote_subdomain: S.optionalWith(S.String, { nullable: true }),
  /**
   * Can be one of the following: "accepted", "declined", "pending", "inactive", "failed", "ssl_error", "configuration_error"
   */
  status: S.optionalWith(S.String, { nullable: true }),
  /**
   * Can be one of the following: "inbound", "outbound"
   */
  type: S.optionalWith(S.String, { nullable: true }),
  /**
   * The time the record was updated
   */
  updated_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * URL of the sharing agreement record
   */
  url: S.optionalWith(S.String, { nullable: true }),
}) {}

export class SharingAgreementsResponse extends S.Class<SharingAgreementsResponse>(
  "SharingAgreementsResponse",
)({
  sharing_agreements: S.optionalWith(S.Array(SharingAgreementObject), {
    nullable: true,
  }),
}) {}

export class SharingAgreementResponse extends S.Class<SharingAgreementResponse>(
  "SharingAgreementResponse",
)({
  sharing_agreement: S.optionalWith(SharingAgreementObject, { nullable: true }),
}) {}

export class TicketSkipObject extends S.Class<TicketSkipObject>(
  "TicketSkipObject",
)({
  /**
   * Time the skip was created
   */
  created_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * Automatically assigned upon creation
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Reason for skipping the ticket
   */
  reason: S.optionalWith(S.String, { nullable: true }),
  /**
   * The skipped ticket. See the [Ticket object reference](/api-reference/ticketing/tickets/tickets/#json-format)
   */
  ticket: S.optionalWith(S.Record({ key: S.String, value: S.Unknown }), {
    nullable: true,
  }),
  /**
   * ID of the skipped ticket
   */
  ticket_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Time the skip was last updated
   */
  updated_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * ID of the skipping agent
   */
  user_id: S.optionalWith(S.Int, { nullable: true }),
}) {}

export class TicketSkipCreation extends S.Class<TicketSkipCreation>(
  "TicketSkipCreation",
)({
  skip: S.optionalWith(TicketSkipObject, { nullable: true }),
}) {}

export class SLAPolicyFilterConditionObject extends S.Class<SLAPolicyFilterConditionObject>(
  "SLAPolicyFilterConditionObject",
)({
  /**
   * The name of a ticket field
   */
  field: S.optionalWith(S.String, { nullable: true }),
  /**
   * A comparison operator
   */
  operator: S.optionalWith(S.String, { nullable: true }),
  /**
   * The value of a ticket field
   */
  value: S.optionalWith(S.Union(S.String, S.Array(S.Union(S.String, S.Int))), {
    nullable: true,
  }),
}) {}

/**
 * An object that describes the conditions that a ticket must match in order for an SLA policy to be applied to that ticket. See [Filter](#filter).
 */
export class SLAPolicyFilterObject extends S.Class<SLAPolicyFilterObject>(
  "SLAPolicyFilterObject",
)({
  all: S.optionalWith(S.Array(SLAPolicyFilterConditionObject), {
    nullable: true,
  }),
  any: S.optionalWith(S.Array(SLAPolicyFilterConditionObject), {
    nullable: true,
  }),
}) {}

export class SLAPolicyMetricObject extends S.Class<SLAPolicyMetricObject>(
  "SLAPolicyMetricObject",
)({
  /**
   * Whether the metric targets are being measured in business hours or calendar hours
   */
  business_hours: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * The definition of the time that is being measured
   */
  metric: S.optionalWith(S.String, { nullable: true }),
  /**
   * Priority that a ticket must match
   */
  priority: S.optionalWith(S.String, { nullable: true }),
  /**
   * The time within which the end-state for a metric should be met
   */
  target: S.optionalWith(S.Int, { nullable: true }),
}) {}

export class SLAPolicyObject extends S.Class<SLAPolicyObject>(
  "SLAPolicyObject",
)({
  /**
   * The time the SLA policy was created
   */
  created_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * The description of the SLA policy
   */
  description: S.optionalWith(S.String, { nullable: true }),
  filter: SLAPolicyFilterObject,
  /**
   * Automatically assigned when created
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Array of [Policy Metric](#policy-metric) objects
   */
  policy_metrics: S.optionalWith(S.Array(SLAPolicyMetricObject), {
    nullable: true,
  }),
  /**
   * Position of the SLA policy that determines the order they will be matched. If not specified, the SLA policy is added as the last position
   */
  position: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The title of the SLA policy
   */
  title: S.String,
  /**
   * The time of the last update of the SLA policy
   */
  updated_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * URL of the SLA Policy reacord
   */
  url: S.optionalWith(S.String, { nullable: true }),
}) {}

export class SLAPoliciesResponse extends S.Class<SLAPoliciesResponse>(
  "SLAPoliciesResponse",
)({
  count: S.optionalWith(S.Int, { nullable: true }),
  next_page: S.optionalWith(S.String, { nullable: true }),
  previous_page: S.optionalWith(S.String, { nullable: true }),
  sla_policies: S.optionalWith(S.Array(SLAPolicyObject), { nullable: true }),
}) {}

export class SLAPolicyResponse extends S.Class<SLAPolicyResponse>(
  "SLAPolicyResponse",
)({
  sla_policy: S.optionalWith(SLAPolicyObject, { nullable: true }),
}) {}

export class SLAPolicyFilterDefinitionResponse extends S.Class<SLAPolicyFilterDefinitionResponse>(
  "SLAPolicyFilterDefinitionResponse",
)({
  definitions: S.optionalWith(
    S.Struct({
      all: S.optionalWith(
        S.Array(
          S.Struct({
            group: S.optionalWith(S.String, { nullable: true }),
            operators: S.optionalWith(
              S.Array(
                S.Struct({
                  title: S.optionalWith(S.String, { nullable: true }),
                  value: S.optionalWith(S.String, { nullable: true }),
                }),
              ),
              { nullable: true },
            ),
            target: S.optionalWith(S.String, { nullable: true }),
            title: S.optionalWith(S.String, { nullable: true }),
            value: S.optionalWith(S.String, { nullable: true }),
            values: S.optionalWith(
              S.Struct({
                list: S.optionalWith(
                  S.Array(
                    S.Struct({
                      title: S.optionalWith(S.String, { nullable: true }),
                      value: S.optionalWith(S.String, { nullable: true }),
                    }),
                  ),
                  { nullable: true },
                ),
                type: S.optionalWith(S.String, { nullable: true }),
              }),
              { nullable: true },
            ),
          }),
        ),
        { nullable: true },
      ),
      any: S.optionalWith(
        S.Array(
          S.Struct({
            group: S.optionalWith(S.String, { nullable: true }),
            operators: S.optionalWith(
              S.Array(
                S.Struct({
                  title: S.optionalWith(S.String, { nullable: true }),
                  value: S.optionalWith(S.String, { nullable: true }),
                }),
              ),
              { nullable: true },
            ),
            target: S.optionalWith(S.String, { nullable: true }),
            title: S.optionalWith(S.String, { nullable: true }),
            value: S.optionalWith(S.String, { nullable: true }),
            values: S.optionalWith(
              S.Struct({
                list: S.optionalWith(
                  S.Array(
                    S.Struct({
                      title: S.optionalWith(S.String, { nullable: true }),
                      value: S.optionalWith(S.String, { nullable: true }),
                    }),
                  ),
                  { nullable: true },
                ),
                type: S.optionalWith(S.String, { nullable: true }),
              }),
              { nullable: true },
            ),
          }),
        ),
        { nullable: true },
      ),
    }),
    { nullable: true },
  ),
}) {}

export class ReorderSLAPoliciesParams extends S.Struct({
  sla_policy_ids: S.optionalWith(S.Array(S.Int), { nullable: true }),
}) {}

/**
 * Empty response
 */
export class ReorderSLAPolicies200 extends S.String {}

export class AuthorObject extends S.Class<AuthorObject>("AuthorObject")({
  /**
   * The author email
   */
  email: S.optionalWith(S.String, { nullable: true }),
  /**
   * The author id
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The author name
   */
  name: S.optionalWith(S.String, { nullable: true }),
}) {}

/**
 * An object explaining how the ticket was created. See the [Via object reference](/documentation/ticketing/reference-guides/via-object-reference)
 */
export class ViaObject extends S.Class<ViaObject>("ViaObject")({
  /**
   * This tells you how the ticket or event was created. Examples: "web", "mobile", "rule", "system"
   */
  channel: S.optionalWith(S.String, { nullable: true }),
  /**
   * For some channels a source object gives more information about how or why the ticket or event was created
   */
  source: S.optionalWith(
    S.Struct({
      from: S.optionalWith(
        S.Struct({
          address: S.optionalWith(S.String, { nullable: true }),
          id: S.optionalWith(S.Int, { nullable: true }),
          name: S.optionalWith(S.String, { nullable: true }),
          title: S.optionalWith(S.String, { nullable: true }),
        }),
        { nullable: true },
      ),
      rel: S.optionalWith(S.String, { nullable: true }),
      to: S.optionalWith(
        S.Struct({
          address: S.optionalWith(S.String, { nullable: true }),
          name: S.optionalWith(S.String, { nullable: true }),
        }),
        { nullable: true },
      ),
    }),
    { nullable: true },
  ),
}) {}

export class SuspendedTicketObject extends S.Class<SuspendedTicketObject>(
  "SuspendedTicketObject",
)({
  /**
   * The attachments, if any associated to this suspended ticket. See [Attachments](/api-reference/ticketing/tickets/ticket-attachments/)
   */
  attachments: S.optionalWith(S.Array(AttachmentObject), { nullable: true }),
  /**
   * The author id (if available), name and email
   */
  author: S.optionalWith(S.Record({ key: S.String, value: S.Unknown }), {
    nullable: true,
  }),
  /**
   * The id of the brand this ticket is associated with. Only applicable for Enterprise accounts
   */
  brand_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Why the ticket was suspended
   */
  cause: S.optionalWith(S.String, { nullable: true }),
  /**
   * The ID of the cause
   */
  cause_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The content that was flagged
   */
  content: S.optionalWith(S.String, { nullable: true }),
  /**
   * The ticket ID this suspended email is associated with, if available
   */
  created_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * The error messages if any associated to this suspended ticket
   */
  error_messages: S.optionalWith(
    S.Array(S.Record({ key: S.String, value: S.Unknown })),
    { nullable: true },
  ),
  /**
   * Automatically assigned
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The ID of the email, if available
   */
  message_id: S.optionalWith(S.String, { nullable: true }),
  /**
   * The original recipient e-mail address of the ticket
   */
  recipient: S.optionalWith(S.String, { nullable: true }),
  /**
   * The value of the subject field for this ticket
   */
  subject: S.optionalWith(S.String, { nullable: true }),
  /**
   * The ticket ID this suspended email is associated with, if available
   */
  ticket_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * When the ticket was assigned
   */
  updated_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * The API url of this ticket
   */
  url: S.optionalWith(S.String, { nullable: true }),
  via: S.optionalWith(ViaObject, { nullable: true }),
}) {}

export class SuspendedTicketsResponse extends S.Class<SuspendedTicketsResponse>(
  "SuspendedTicketsResponse",
)({
  suspended_tickets: S.optionalWith(S.Array(SuspendedTicketObject), {
    nullable: true,
  }),
}) {}

export class ShowSuspendedTicketsParams extends S.Struct({}) {}

export class DeleteSuspendedTicketParams extends S.Struct({}) {}

export class RecoverSuspendedTicketParams extends S.Struct({}) {}

export class RecoverSuspendedTicketResponse extends S.Class<RecoverSuspendedTicketResponse>(
  "RecoverSuspendedTicketResponse",
)({
  ticket: S.optionalWith(S.Array(TicketObject), { nullable: true }),
}) {}

export class RecoverSuspendedTicketUnprocessableContentResponse extends S.Class<RecoverSuspendedTicketUnprocessableContentResponse>(
  "RecoverSuspendedTicketUnprocessableContentResponse",
)({
  ticket: S.optionalWith(S.Array(SuspendedTicketObject), { nullable: true }),
}) {}

export class SuspendedTicketsAttachmentsResponse extends S.Class<SuspendedTicketsAttachmentsResponse>(
  "SuspendedTicketsAttachmentsResponse",
)({
  upload: S.optionalWith(
    S.Struct({
      attachments: S.optionalWith(S.Array(AttachmentObject), {
        nullable: true,
      }),
      /**
       * Token for subsequent request
       */
      token: S.optionalWith(S.String, { nullable: true }),
    }),
    { nullable: true },
  ),
}) {}

export class SuspendedTicketsExportResponse extends S.Class<SuspendedTicketsExportResponse>(
  "SuspendedTicketsExportResponse",
)({
  export: S.optionalWith(
    S.Struct({
      status: S.optionalWith(S.String, { nullable: true }),
      view_id: S.optionalWith(S.String, { nullable: true }),
    }),
    { nullable: true },
  ),
}) {}

export class RecoverSuspendedTicketsResponse extends S.Class<RecoverSuspendedTicketsResponse>(
  "RecoverSuspendedTicketsResponse",
)({
  tickets: S.optionalWith(S.Array(TicketObject), { nullable: true }),
}) {}

export class TagListTagObject extends S.Class<TagListTagObject>(
  "TagListTagObject",
)({
  /**
   * The number of tags
   */
  count: S.optionalWith(S.Int, { nullable: true }),
  /**
   * A name for the tag
   */
  name: S.optionalWith(S.String, { nullable: true }),
}) {}

export class TagsResponse extends S.Class<TagsResponse>("TagsResponse")({
  /**
   * The number of pages
   */
  count: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The url of the previous page
   */
  next_page: S.optionalWith(S.String, { nullable: true }),
  /**
   * The url of the next page
   */
  previous_page: S.optionalWith(S.String, { nullable: true }),
  tags: S.optionalWith(S.Array(TagListTagObject), { nullable: true }),
}) {}

export class TagCountObject extends S.Class<TagCountObject>("TagCountObject")({
  /**
   * The time that the count value was last refreshed
   */
  refreshed_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * The count of tags created in the last 24 hours
   */
  value: S.optionalWith(S.Int, { nullable: true }),
}) {}

export class TagCountResponse extends S.Class<TagCountResponse>(
  "TagCountResponse",
)({
  count: S.optionalWith(TagCountObject, { nullable: true }),
}) {}

export class TargetFailureObject extends S.Class<TargetFailureObject>(
  "TargetFailureObject",
)({
  /**
   * Number of times the target failed consecutively
   */
  consecutive_failure_count: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Time of the failure
   */
  created_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * The ID of the target failure
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The raw message of the target request
   */
  raw_request: S.optionalWith(S.String, { nullable: true }),
  /**
   * The raw response of the failure
   */
  raw_response: S.optionalWith(S.String, { nullable: true }),
  /**
   * HTTP status code of the target failure
   */
  status_code: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Name of the target failure
   */
  target_name: S.optionalWith(S.String, { nullable: true }),
  /**
   * The API url of the failure record
   */
  url: S.optionalWith(S.String, { nullable: true }),
}) {}

export class TargetFailuresResponse extends S.Class<TargetFailuresResponse>(
  "TargetFailuresResponse",
)({
  target_failures: S.optionalWith(S.Array(TargetFailureObject), {
    nullable: true,
  }),
}) {}

export class TargetFailureResponse extends S.Class<TargetFailureResponse>(
  "TargetFailureResponse",
)({
  target_failure: S.optionalWith(TargetFailureObject, { nullable: true }),
}) {}

export class TargetObject extends S.Class<TargetObject>("TargetObject")({
  /**
   * Whether or not the target is activated
   */
  active: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * The time the target was created
   */
  created_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * Automatically assigned when created
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * A name for the target
   */
  title: S.String,
  /**
   * A pre-defined target, such as "basecamp_target". See the additional attributes for the type that follow
   */
  type: S.String,
}) {}

export class TargetsResponse extends S.Class<TargetsResponse>(
  "TargetsResponse",
)({
  targets: S.optionalWith(S.Array(TargetObject), { nullable: true }),
}) {}

export class TargetResponse extends S.Class<TargetResponse>("TargetResponse")({
  target: S.optionalWith(TargetObject, { nullable: true }),
}) {}

export class ListTicketAuditsParams extends S.Struct({
  "page[before]": S.optionalWith(S.String, { nullable: true }),
  "page[after]": S.optionalWith(S.String, { nullable: true }),
  "page[size]": S.optionalWith(S.Int, { nullable: true }),
}) {}

export class TicketAuditObject extends S.Class<TicketAuditObject>(
  "TicketAuditObject",
)({
  /**
   * The user who created the audit
   */
  author_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The time the audit was created
   */
  created_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * An array of the events that happened in this audit. See the [Ticket Audit events reference](/documentation/ticketing/reference-guides/ticket-audit-events-reference)
   */
  events: S.optionalWith(
    S.Array(S.Record({ key: S.String, value: S.Unknown })),
    { nullable: true },
  ),
  /**
   * Automatically assigned when creating audits
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Metadata for the audit, custom and system data
   */
  metadata: S.optionalWith(S.Record({ key: S.String, value: S.Unknown }), {
    nullable: true,
  }),
  /**
   * The ID of the associated ticket
   */
  ticket_id: S.optionalWith(S.Int, { nullable: true }),
  via: S.optionalWith(TicketAuditViaObject, { nullable: true }),
}) {}

export class TicketAuditsResponse extends S.Class<TicketAuditsResponse>(
  "TicketAuditsResponse",
)({
  after_cursor: S.optionalWith(S.String, { nullable: true }),
  after_url: S.optionalWith(S.String, { nullable: true }),
  audits: S.optionalWith(S.Array(TicketAuditObject), { nullable: true }),
  before_cursor: S.optionalWith(S.String, { nullable: true }),
  before_url: S.optionalWith(S.String, { nullable: true }),
}) {}

export class ListTicketFieldsParams extends S.Struct({
  locale: S.optionalWith(S.String, { nullable: true }),
  creator: S.optionalWith(S.Boolean, { nullable: true }),
}) {}

/**
 * The status category the custom ticket status belongs to
 */
export class TicketFieldCustomStatusObjectStatusCategory extends S.Literal(
  "new",
  "open",
  "pending",
  "hold",
  "solved",
) {}

export class TicketFieldCustomStatusObject extends S.Class<TicketFieldCustomStatusObject>(
  "TicketFieldCustomStatusObject",
)({
  /**
   * If true, if the custom status is set to active. If false, the custom status is set to inactive
   */
  active: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * The label displayed to agents
   */
  agent_label: S.optionalWith(S.String, { nullable: true }),
  /**
   * The date and time at which the custom ticket status was created
   */
  created_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * If true, the custom status is set to default. If false, the custom status is set to non-default
   */
  default: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * The description of when the user should select this custom ticket status
   */
  description: S.optionalWith(S.String, { nullable: true }),
  /**
   * The description displayed to end users
   */
  end_user_description: S.optionalWith(S.String, { nullable: true }),
  /**
   * The label displayed to end users
   */
  end_user_label: S.optionalWith(S.String, { nullable: true }),
  /**
   * Automatically assigned when the custom ticket status is created
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The status category the custom ticket status belongs to
   */
  status_category: S.optionalWith(TicketFieldCustomStatusObjectStatusCategory, {
    nullable: true,
  }),
  /**
   * The date and time at which the custom ticket status was last updated
   */
  updated_at: S.optionalWith(S.String, { nullable: true }),
}) {}

export class SystemFieldOptionObject extends S.Class<SystemFieldOptionObject>(
  "SystemFieldOptionObject",
)({
  /**
   * Name of the system field option
   */
  name: S.optionalWith(S.String, { nullable: true }),
  /**
   * Value of the system field option
   */
  value: S.optionalWith(S.String, { nullable: true }),
}) {}

export class TicketFieldObject extends S.Class<TicketFieldObject>(
  "TicketFieldObject",
)({
  /**
   * Whether this field is available
   */
  active: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * Whether this field is editable by agents
   */
  agent_can_edit: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * A description of the ticket field that only agents can see
   */
  agent_description: S.optionalWith(S.String, { nullable: true }),
  /**
   * If true, the field is shown to agents by default. If false, the field is hidden alongside infrequently used fields. Classic interface only
   */
  collapsed_for_agents: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * The time the custom ticket field was created
   */
  created_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * Name of the app that created the ticket field, or a null value if no app created the ticket field
   */
  creator_app_name: S.optionalWith(S.String, { nullable: true }),
  /**
   * The id of the user that created the ticket field, or a value of "-1" if an app created the ticket field
   */
  creator_user_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Required and presented for a custom ticket field of type "multiselect" or "tagger"
   */
  custom_field_options: S.optionalWith(S.Array(CustomFieldOptionObject), {
    nullable: true,
  }),
  /**
   * List of customized ticket statuses. Only presented for a system ticket field of type "custom_status"
   */
  custom_statuses: S.optionalWith(S.Array(TicketFieldCustomStatusObject), {
    nullable: true,
  }),
  /**
   * Describes the purpose of the ticket field to users
   */
  description: S.optionalWith(S.String, { nullable: true }),
  /**
   * Whether this field is editable by end users in Help Center
   */
  editable_in_portal: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * Automatically assigned when created
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The relative position of the ticket field on a ticket. Note that for accounts with ticket forms, positions are controlled by the different forms
   */
  position: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The dynamic content placeholder if present, or the `description` value if not. See [Dynamic Content](/api-reference/ticketing/ticket-management/dynamic_content/)
   */
  raw_description: S.optionalWith(S.String, { nullable: true }),
  /**
   * The dynamic content placeholder if present, or the `title` value if not. See [Dynamic Content](/api-reference/ticketing/ticket-management/dynamic_content/)
   */
  raw_title: S.optionalWith(S.String, { nullable: true }),
  /**
   * The dynamic content placeholder if present, or the "title_in_portal" value if not. See [Dynamic Content](/api-reference/ticketing/ticket-management/dynamic_content/)
   */
  raw_title_in_portal: S.optionalWith(S.String, { nullable: true }),
  /**
   * For "regexp" fields only. The validation pattern for a field value to be deemed valid
   */
  regexp_for_validation: S.optionalWith(S.String, { nullable: true }),
  /**
   * A filter definition that allows your autocomplete to filter down results
   */
  relationship_filter: S.optionalWith(
    S.Record({ key: S.String, value: S.Unknown }),
    { nullable: true },
  ),
  /**
   * A representation of what type of object the field references. Options are "zen:user", "zen:organization", "zen:ticket", or "zen:custom_object:{key}" where key is a custom object key. For example "zen:custom_object:apartment".
   */
  relationship_target_type: S.optionalWith(S.String, { nullable: true }),
  /**
   * If false, this field is a system field that must be present on all tickets
   */
  removable: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * If true, agents must enter a value in the field to change the ticket status to solved
   */
  required: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * If true, end users must enter a value in the field to create the request
   */
  required_in_portal: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * For system ticket fields of type "priority" and "status". Defaults to 0. A "priority" sub type of 1 removes the "Low" and "Urgent" options. A "status" sub type of 1 adds the "On-Hold" option
   */
  sub_type_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Presented for a system ticket field of type "tickettype", "priority" or "status"
   */
  system_field_options: S.optionalWith(S.Array(SystemFieldOptionObject), {
    nullable: true,
  }),
  /**
   * For "checkbox" fields only. A tag added to tickets when the checkbox field is selected
   */
  tag: S.optionalWith(S.String, { nullable: true }),
  /**
   * The title of the ticket field
   */
  title: S.String,
  /**
   * The title of the ticket field for end users in Help Center
   */
  title_in_portal: S.optionalWith(S.String, { nullable: true }),
  /**
   * System or custom field type. Editable for custom field types and only on creation. See [Create Ticket Field](#create-ticket-field)
   */
  type: S.String,
  /**
   * The time the custom ticket field was last updated
   */
  updated_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * The URL for this resource
   */
  url: S.optionalWith(S.String, { nullable: true }),
  /**
   * Whether this field is visible to end users in Help Center
   */
  visible_in_portal: S.optionalWith(S.Boolean, { nullable: true }),
}) {}

export class TicketFieldsResponse extends S.Class<TicketFieldsResponse>(
  "TicketFieldsResponse",
)({
  ticket_fields: S.optionalWith(S.Array(TicketFieldObject), { nullable: true }),
}) {}

export class TicketFieldResponse extends S.Class<TicketFieldResponse>(
  "TicketFieldResponse",
)({
  ticket_field: S.optionalWith(TicketFieldObject, { nullable: true }),
}) {}

export class CustomFieldOptionsResponse extends S.Class<CustomFieldOptionsResponse>(
  "CustomFieldOptionsResponse",
)({
  /**
   * Total count of records retrieved
   */
  count: S.optionalWith(S.Int, { nullable: true }),
  custom_field_options: S.optionalWith(S.Array(CustomFieldOptionObject), {
    nullable: true,
  }),
  /**
   * URL of the next page
   */
  next_page: S.optionalWith(S.String, { nullable: true }),
  /**
   * URL of the previous page
   */
  previous_page: S.optionalWith(S.String, { nullable: true }),
}) {}

export class CustomFieldOptionResponse extends S.Class<CustomFieldOptionResponse>(
  "CustomFieldOptionResponse",
)({
  custom_field_option: S.optionalWith(CustomFieldOptionObject, {
    nullable: true,
  }),
}) {}

export class TicketFieldCountResponse extends S.Class<TicketFieldCountResponse>(
  "TicketFieldCountResponse",
)({
  count: S.optionalWith(
    S.Struct({
      refreshed_at: S.optionalWith(S.String, { nullable: true }),
      value: S.optionalWith(S.Int, { nullable: true }),
    }),
    { nullable: true },
  ),
}) {}

/**
 * Empty response
 */
export class ReorderTicketFields200 extends S.String {}

export class ShowManyTicketFormStatusesParams extends S.Struct({
  ids: S.String,
}) {}

export class ListTicketFormsParams extends S.Struct({
  active: S.optionalWith(S.Boolean, { nullable: true }),
  end_user_visible: S.optionalWith(S.Boolean, { nullable: true }),
  fallback_to_default: S.optionalWith(S.Boolean, { nullable: true }),
  associated_to_brand: S.optionalWith(S.Boolean, { nullable: true }),
}) {}

export class TicketFormObject extends S.Class<TicketFormObject>(
  "TicketFormObject",
)({
  /**
   * If the form is set as active
   */
  active: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * Array of condition sets for agent workspaces
   */
  agent_conditions: S.optionalWith(
    S.Array(S.Record({ key: S.String, value: S.Unknown })),
    { nullable: true },
  ),
  /**
   * The time the ticket form was created
   */
  created_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * Is the form the default form for this account
   */
  default: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * The time the ticket form was deleted
   */
  deleted_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * The name of the form that is displayed to an end user
   */
  display_name: S.optionalWith(S.String, { nullable: true }),
  /**
   * Array of condition sets for end user products
   */
  end_user_conditions: S.optionalWith(
    S.Array(S.Record({ key: S.String, value: S.Unknown })),
    { nullable: true },
  ),
  /**
   * Is the form visible to the end user
   */
  end_user_visible: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * Automatically assigned when creating ticket form
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Is the form available for use in all brands on this account
   */
  in_all_brands: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * The name of the form
   */
  name: S.String,
  /**
   * The position of this form among other forms in the account, i.e. dropdown
   */
  position: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The dynamic content placeholder, if present, or the "display_name" value, if not. See [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)
   */
  raw_display_name: S.optionalWith(S.String, { nullable: true }),
  /**
   * The dynamic content placeholder, if present, or the "name" value, if not. See [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)
   */
  raw_name: S.optionalWith(S.String, { nullable: true }),
  /**
   * ids of all brands that this ticket form is restricted to
   */
  restricted_brand_ids: S.optionalWith(S.Array(S.Int), { nullable: true }),
  /**
   * ids of all ticket fields which are in this ticket form. The products use the order of the ids to show the field values in the tickets
   */
  ticket_field_ids: S.optionalWith(S.Array(S.Int), { nullable: true }),
  /**
   * The time of the last update of the ticket form
   */
  updated_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * URL of the ticket form
   */
  url: S.optionalWith(S.String, { nullable: true }),
}) {}

export class TicketFormsResponse extends S.Class<TicketFormsResponse>(
  "TicketFormsResponse",
)({
  ticket_forms: S.optionalWith(S.Array(TicketFormObject), { nullable: true }),
}) {}

export class TicketFormResponse extends S.Class<TicketFormResponse>(
  "TicketFormResponse",
)({
  ticket_form: S.optionalWith(TicketFormObject, { nullable: true }),
}) {}

export class TicketFormStatusesUpdateParams extends S.Class<TicketFormStatusesUpdateParams>(
  "TicketFormStatusesUpdateParams",
)({
  /**
   * If set to a value of \"1\" and an id value is passed, the server will delete the record
   */
  _destroy: S.optionalWith(S.String, { nullable: true }),
  custom_status_id: S.optionalWith(S.Int, { nullable: true }),
  id: S.optionalWith(S.String, { nullable: true }),
}) {}

export class UpdateTicketFormStatusesParams extends S.Class<UpdateTicketFormStatusesParams>(
  "UpdateTicketFormStatusesParams",
)({
  ticket_form_status: S.Array(TicketFormStatusesUpdateParams),
}) {}

export class TicketFormStatusesCreateParams extends S.Class<TicketFormStatusesCreateParams>(
  "TicketFormStatusesCreateParams",
)({
  custom_status_id: S.Int,
}) {}

export class TicketFormStatusesParams extends S.Class<TicketFormStatusesParams>(
  "TicketFormStatusesParams",
)({
  ticket_form_status: S.Array(TicketFormStatusesCreateParams),
}) {}

export class DeleteTicketFormStatusesRequest extends S.Class<DeleteTicketFormStatusesRequest>(
  "DeleteTicketFormStatusesRequest",
)({
  /**
   * List of ids to delete
   */
  id: S.optionalWith(S.Array(S.String), { nullable: true }),
}) {}

export class ShowManyTicketFormsParams extends S.Struct({
  ids: S.String,
  active: S.optionalWith(S.Boolean, { nullable: true }),
  end_user_visible: S.optionalWith(S.Boolean, { nullable: true }),
  fallback_to_default: S.optionalWith(S.Boolean, { nullable: true }),
  associated_to_brand: S.optionalWith(S.Boolean, { nullable: true }),
}) {}

export class TicketMetricTimeObject extends S.Class<TicketMetricTimeObject>(
  "TicketMetricTimeObject",
)({
  /**
   * Time in business hours
   */
  business: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Time in calendar hours
   */
  calendar: S.optionalWith(S.Int, { nullable: true }),
}) {}

export class TicketMetricObject extends S.Class<TicketMetricObject>(
  "TicketMetricObject",
)({
  /**
   * Number of minutes the agent spent waiting during calendar and business hours
   */
  agent_wait_time_in_minutes: S.optionalWith(
    S.Record({ key: S.String, value: S.Unknown }),
    { nullable: true },
  ),
  /**
   * When the ticket was assigned
   */
  assigned_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * Number of assignees the ticket had
   */
  assignee_stations: S.optionalWith(S.Int, { nullable: true }),
  /**
   * When the assignee last updated the ticket
   */
  assignee_updated_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * When the record was created
   */
  created_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * The date and time the ticket's custom status was last updated
   */
  custom_status_updated_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * Number of minutes to the first resolution time during calendar and business hours
   */
  first_resolution_time_in_minutes: S.optionalWith(
    S.Record({ key: S.String, value: S.Unknown }),
    { nullable: true },
  ),
  /**
   * Number of minutes to the full resolution during calendar and business hours
   */
  full_resolution_time_in_minutes: S.optionalWith(
    S.Record({ key: S.String, value: S.Unknown }),
    { nullable: true },
  ),
  /**
   * Number of groups the ticket passed through
   */
  group_stations: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Automatically assigned when the client is created
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * When the ticket was initially assigned
   */
  initially_assigned_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * When the latest comment was added
   */
  latest_comment_added_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * Number of minutes on hold
   */
  on_hold_time_in_minutes: S.optionalWith(
    S.Record({ key: S.String, value: S.Unknown }),
    { nullable: true },
  ),
  /**
   * Total number of times the ticket was reopened
   */
  reopens: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The number of public replies added to a ticket by an agent
   */
  replies: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Number of minutes to the first reply during calendar and business hours
   */
  reply_time_in_minutes: S.optionalWith(
    S.Record({ key: S.String, value: S.Unknown }),
    { nullable: true },
  ),
  /**
   * Number of seconds to the first reply during calendar hours, only available for Messaging tickets
   */
  reply_time_in_seconds: S.optionalWith(
    S.Record({ key: S.String, value: S.Unknown }),
    { nullable: true },
  ),
  /**
   * When the requester last updated the ticket
   */
  requester_updated_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * Number of minutes the requester spent waiting during calendar and business hours
   */
  requester_wait_time_in_minutes: S.optionalWith(
    S.Record({ key: S.String, value: S.Unknown }),
    { nullable: true },
  ),
  /**
   * When the ticket was solved
   */
  solved_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * When the status of the ticket was last updated
   */
  status_updated_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * Id of the associated ticket
   */
  ticket_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * When the record was last updated
   */
  updated_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * The API url of the ticket metric
   */
  url: S.optionalWith(S.String, { nullable: true }),
}) {}

export class TicketMetricsResponse extends S.Class<TicketMetricsResponse>(
  "TicketMetricsResponse",
)({
  ticket_metrics: S.optionalWith(S.Array(TicketMetricObject), {
    nullable: true,
  }),
}) {}

export class TicketMetricsByTicketMetricIdResponse extends S.Class<TicketMetricsByTicketMetricIdResponse>(
  "TicketMetricsByTicketMetricIdResponse",
)({
  ticket_metric: S.optionalWith(S.Array(TicketMetricObject), {
    nullable: true,
  }),
}) {}

export class ListTicketsParams extends S.Struct({
  external_id: S.optionalWith(S.String, { nullable: true }),
}) {}

export class TicketsResponse extends S.Class<TicketsResponse>(
  "TicketsResponse",
)({
  tickets: S.optionalWith(S.Array(TicketObject), { nullable: true }),
}) {}

export class CustomFieldObject extends S.Class<CustomFieldObject>(
  "CustomFieldObject",
)({
  /**
   * If true, this field is available for use
   */
  active: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * The time of the last update of the ticket field
   */
  created_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * Required and presented for a custom field of type "dropdown". Each option is represented by an object with a `name` and `value` property
   */
  custom_field_options: S.optionalWith(S.Array(CustomFieldOptionObject), {
    nullable: true,
  }),
  /**
   * User-defined description of this field's purpose
   */
  description: S.optionalWith(S.String, { nullable: true }),
  /**
   * Automatically assigned upon creation
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * A unique key that identifies this custom field. This is used for updating the field and referencing in placeholders. The key must consist of only letters, numbers, and underscores. It can't be only numbers
   */
  key: S.String,
  /**
   * Ordering of the field relative to other fields
   */
  position: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The dynamic content placeholder, if present, or the `description` value, if not. See [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)
   */
  raw_description: S.optionalWith(S.String, { nullable: true }),
  /**
   * The dynamic content placeholder, if present, or the `title` value, if not. See [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)
   */
  raw_title: S.optionalWith(S.String, { nullable: true }),
  /**
   * Regular expression field only. The validation pattern for a field value to be deemed valid
   */
  regexp_for_validation: S.optionalWith(S.String, { nullable: true }),
  /**
   * A filter definition that allows your autocomplete to filter down results
   */
  relationship_filter: S.optionalWith(
    S.Record({ key: S.String, value: S.Unknown }),
    { nullable: true },
  ),
  /**
   * A representation of what type of object the field references. Options are "zen:user", "zen:organization", "zen:ticket", and "zen:custom_object:{key}" where key is a custom object key. For example "zen:custom_object:apartment".
   */
  relationship_target_type: S.optionalWith(S.String, { nullable: true }),
  /**
   * If true, only active and position values of this field can be changed
   */
  system: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * Optional for custom field of type "checkbox"; not presented otherwise.
   */
  tag: S.optionalWith(S.String, { nullable: true }),
  /**
   * The title of the custom field
   */
  title: S.String,
  /**
   * The custom field type: "checkbox", "date", "decimal", "dropdown", "integer", ["lookup"](/api-reference/ticketing/lookup_relationships/lookup_relationships/), "multiselect", "regexp", "text", or "textarea"
   */
  type: S.String,
  /**
   * The time of the last update of the ticket field
   */
  updated_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * The URL for this resource
   */
  url: S.optionalWith(S.String, { nullable: true }),
}) {}

export class EmailCCObjectAction extends S.Literal("put", "delete") {}

export class EmailCCObject extends S.Class<EmailCCObject>("EmailCCObject")({
  action: S.optionalWith(EmailCCObjectAction, { nullable: true }),
  user_email: S.optionalWith(S.String, { nullable: true }),
  user_id: S.optionalWith(S.String, { nullable: true }),
  user_name: S.optionalWith(S.String, { nullable: true }),
}) {}

export class FollowerObjectAction extends S.Literal("put", "delete") {}

export class FollowerObject extends S.Class<FollowerObject>("FollowerObject")({
  action: S.optionalWith(FollowerObjectAction, { nullable: true }),
  user_email: S.optionalWith(S.String, { nullable: true }),
  user_id: S.optionalWith(S.String, { nullable: true }),
}) {}

/**
 * The urgency with which the ticket should be addressed.
 */
export class TicketCreateInputPriority extends S.Literal(
  "urgent",
  "high",
  "normal",
  "low",
) {}

/**
 * The state of the ticket.
 *
 * If your account has activated custom ticket statuses, this is the ticket's
 * status category. See [custom ticket statuses](#custom-ticket-statuses).
 */
export class TicketCreateInputStatus extends S.Literal(
  "new",
  "open",
  "pending",
  "hold",
  "solved",
  "closed",
) {}

/**
 * The type of this ticket.
 */
export class TicketCreateInputType extends S.Literal(
  "problem",
  "incident",
  "question",
  "task",
) {}

export class TicketCreateInput extends S.Class<TicketCreateInput>(
  "TicketCreateInput",
)({
  /**
   * Enterprise only. The id of the brand this ticket is associated with
   */
  brand_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * POST requests only. Users to add as cc's when creating a ticket. See [Setting Collaborators](/documentation/ticketing/managing-tickets/creating-and-updating-tickets#setting-collaborators)
   */
  collaborators: S.optionalWith(S.Array(CollaboratorObject), {
    nullable: true,
  }),
  /**
   * The ids of agents or end users currently CC'ed on the ticket. See [CCs and followers resources](https://support.zendesk.com/hc/en-us/articles/360020585233) in the Support Help Center
   */
  email_cc_ids: S.optionalWith(S.Array(S.Int), { nullable: true }),
  /**
   * The ids of agents currently following the ticket. See [CCs and followers resources](https://support.zendesk.com/hc/en-us/articles/360020585233)
   */
  follower_ids: S.optionalWith(S.Array(S.Int), { nullable: true }),
  /**
   * POST requests only. List of macro IDs to be recorded in the ticket audit
   */
  macro_ids: S.optionalWith(S.Array(S.Int), { nullable: true }),
  /**
   * The dynamic content placeholder, if present, or the "subject" value, if not. See [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)
   */
  raw_subject: S.optionalWith(S.String, { nullable: true }),
  /**
   * The original recipient e-mail address of the ticket
   */
  recipient: S.optionalWith(S.String, { nullable: true }),
  /**
   * The user who submitted the ticket. The submitter always becomes the author of the first comment on the ticket
   */
  submitter_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Enterprise only. The id of the ticket form to render for the ticket
   */
  ticket_form_id: S.optionalWith(S.Int, { nullable: true }),
  via: S.optionalWith(ViaObject, { nullable: true }),
  /**
   * POST requests only. The id of a closed ticket when creating a follow-up ticket. See [Creating a follow-up ticket](/documentation/ticketing/managing-tickets/creating-and-updating-tickets#creating-a-follow-up-ticket)
   */
  via_followup_source_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * An array of numeric IDs, emails, or objects containing name and email properties. See [Setting Collaborators](/api-reference/ticketing/tickets/tickets/#setting-collaborators). An email notification is sent to them when the ticket is updated
   */
  additional_collaborators: S.optionalWith(S.Array(CollaboratorObject), {
    nullable: true,
  }),
  /**
   * The email address of the agent to assign the ticket to
   */
  assignee_email: S.optionalWith(S.String, { nullable: true }),
  /**
   * The agent currently assigned to the ticket
   */
  assignee_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * An array of the IDs of attribute values to be associated with the ticket
   */
  attribute_value_ids: S.optionalWith(S.Array(S.Int), { nullable: true }),
  /**
   * The ids of users currently CC'ed on the ticket
   */
  collaborator_ids: S.optionalWith(S.Array(S.Int), { nullable: true }),
  comment: TicketCommentObject,
  /**
   * Custom fields for the ticket. See [Setting custom field values](/documentation/ticketing/managing-tickets/creating-and-updating-tickets#setting-custom-field-values)
   */
  custom_fields: S.optionalWith(S.Array(CustomFieldObject), { nullable: true }),
  /**
   * The custom ticket status id of the ticket. See [custom ticket statuses](#custom-ticket-statuses)
   */
  custom_status_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * If this is a ticket of type "task" it has a due date.  Due date format uses [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format.
   */
  due_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * An array of objects that represent agent or end users email CCs to add or delete from the ticket. See [Setting email CCs](/documentation/ticketing/managing-tickets/creating-and-updating-tickets#setting-email-ccs)
   */
  email_ccs: S.optionalWith(S.Array(EmailCCObject), { nullable: true }),
  /**
   * An id you can use to link Zendesk Support tickets to local records
   */
  external_id: S.optionalWith(S.String, { nullable: true }),
  /**
   * An array of objects that represent agent followers to add or delete from the ticket. See [Setting followers](/documentation/ticketing/managing-tickets/creating-and-updating-tickets#setting-followers)
   */
  followers: S.optionalWith(S.Array(FollowerObject), { nullable: true }),
  /**
   * The group this ticket is assigned to
   */
  group_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The organization of the requester. You can only specify the ID of an organization associated with the requester. See [Organization Memberships](/api-reference/ticketing/organizations/organization_memberships/)
   */
  organization_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The urgency with which the ticket should be addressed.
   */
  priority: S.optionalWith(TicketCreateInputPriority, { nullable: true }),
  /**
   * For tickets of type "incident", the ID of the problem the incident is linked to
   */
  problem_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The user who requested this ticket
   */
  requester_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Optional boolean. Prevents updates with outdated ticket data (`updated_stamp` property required when true)
   */
  safe_update: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * An array of the numeric IDs of sharing agreements. Note that this replaces any existing agreements
   */
  sharing_agreement_ids: S.optionalWith(S.Array(S.Int), { nullable: true }),
  /**
   * The state of the ticket.
   *
   * If your account has activated custom ticket statuses, this is the ticket's
   * status category. See [custom ticket statuses](#custom-ticket-statuses).
   */
  status: S.optionalWith(TicketCreateInputStatus, { nullable: true }),
  /**
   * The value of the subject field for this ticket
   */
  subject: S.optionalWith(S.String, { nullable: true }),
  /**
   * The array of tags applied to this ticket
   */
  tags: S.optionalWith(S.Array(S.String), { nullable: true }),
  /**
   * The type of this ticket.
   */
  type: S.optionalWith(TicketCreateInputType, { nullable: true }),
  /**
   * Datetime of last update received from API. See the safe_update property
   */
  updated_stamp: S.optionalWith(S.String, { nullable: true }),
}) {}

export class TicketCreateRequest extends S.Class<TicketCreateRequest>(
  "TicketCreateRequest",
)({
  ticket: S.optionalWith(TicketCreateInput, { nullable: true }),
}) {}

export class ShowTicketParams extends S.Struct({}) {}

export class UpdateTicketParams extends S.Struct({}) {}

/**
 * The urgency with which the ticket should be addressed.
 */
export class TicketUpdateInputPriority extends S.Literal(
  "urgent",
  "high",
  "normal",
  "low",
) {}

/**
 * The state of the ticket.
 *
 * If your account has activated custom ticket statuses, this is the ticket's
 * status category. See [custom ticket statuses](#custom-ticket-statuses).
 */
export class TicketUpdateInputStatus extends S.Literal(
  "new",
  "open",
  "pending",
  "hold",
  "solved",
  "closed",
) {}

/**
 * The type of this ticket.
 */
export class TicketUpdateInputType extends S.Literal(
  "problem",
  "incident",
  "question",
  "task",
) {}

export class TicketUpdateInput extends S.Class<TicketUpdateInput>(
  "TicketUpdateInput",
)({
  /**
   * An array of numeric IDs, emails, or objects containing name and email properties. See [Setting Collaborators](/api-reference/ticketing/tickets/tickets/#setting-collaborators). An email notification is sent to them when the ticket is updated
   */
  additional_collaborators: S.optionalWith(S.Array(CollaboratorObject), {
    nullable: true,
  }),
  /**
   * The email address of the agent to assign the ticket to
   */
  assignee_email: S.optionalWith(S.String, { nullable: true }),
  /**
   * The agent currently assigned to the ticket
   */
  assignee_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * An array of the IDs of attribute values to be associated with the ticket
   */
  attribute_value_ids: S.optionalWith(S.Array(S.Int), { nullable: true }),
  /**
   * The ids of users currently CC'ed on the ticket
   */
  collaborator_ids: S.optionalWith(S.Array(S.Int), { nullable: true }),
  comment: S.optionalWith(TicketCommentObject, { nullable: true }),
  /**
   * Custom fields for the ticket. See [Setting custom field values](/documentation/ticketing/managing-tickets/creating-and-updating-tickets#setting-custom-field-values)
   */
  custom_fields: S.optionalWith(S.Array(CustomFieldObject), { nullable: true }),
  /**
   * The custom ticket status id of the ticket. See [custom ticket statuses](#custom-ticket-statuses)
   */
  custom_status_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * If this is a ticket of type "task" it has a due date.  Due date format uses [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format.
   */
  due_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * An array of objects that represent agent or end users email CCs to add or delete from the ticket. See [Setting email CCs](/documentation/ticketing/managing-tickets/creating-and-updating-tickets#setting-email-ccs)
   */
  email_ccs: S.optionalWith(S.Array(EmailCCObject), { nullable: true }),
  /**
   * An id you can use to link Zendesk Support tickets to local records
   */
  external_id: S.optionalWith(S.String, { nullable: true }),
  /**
   * An array of objects that represent agent followers to add or delete from the ticket. See [Setting followers](/documentation/ticketing/managing-tickets/creating-and-updating-tickets#setting-followers)
   */
  followers: S.optionalWith(S.Array(FollowerObject), { nullable: true }),
  /**
   * The group this ticket is assigned to
   */
  group_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The organization of the requester. You can only specify the ID of an organization associated with the requester. See [Organization Memberships](/api-reference/ticketing/organizations/organization_memberships/)
   */
  organization_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The urgency with which the ticket should be addressed.
   */
  priority: S.optionalWith(TicketUpdateInputPriority, { nullable: true }),
  /**
   * For tickets of type "incident", the ID of the problem the incident is linked to
   */
  problem_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The user who requested this ticket
   */
  requester_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Optional boolean. Prevents updates with outdated ticket data (`updated_stamp` property required when true)
   */
  safe_update: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * An array of the numeric IDs of sharing agreements. Note that this replaces any existing agreements
   */
  sharing_agreement_ids: S.optionalWith(S.Array(S.Int), { nullable: true }),
  /**
   * The state of the ticket.
   *
   * If your account has activated custom ticket statuses, this is the ticket's
   * status category. See [custom ticket statuses](#custom-ticket-statuses).
   */
  status: S.optionalWith(TicketUpdateInputStatus, { nullable: true }),
  /**
   * The value of the subject field for this ticket
   */
  subject: S.optionalWith(S.String, { nullable: true }),
  /**
   * The array of tags applied to this ticket
   */
  tags: S.optionalWith(S.Array(S.String), { nullable: true }),
  /**
   * The type of this ticket.
   */
  type: S.optionalWith(TicketUpdateInputType, { nullable: true }),
  /**
   * Datetime of last update received from API. See the safe_update property
   */
  updated_stamp: S.optionalWith(S.String, { nullable: true }),
}) {}

export class TicketUpdateRequest extends S.Class<TicketUpdateRequest>(
  "TicketUpdateRequest",
)({
  ticket: S.optionalWith(TicketUpdateInput, { nullable: true }),
}) {}

export class AuditObject extends S.Class<AuditObject>("AuditObject")({
  author_id: S.optionalWith(S.Int, { nullable: true }),
  created_at: S.optionalWith(S.String, { nullable: true }),
  events: S.optionalWith(
    S.Array(
      S.Struct({
        body: S.optionalWith(S.String, { nullable: true }),
        field_name: S.optionalWith(S.String, { nullable: true }),
        id: S.optionalWith(S.Int, { nullable: true }),
        type: S.optionalWith(S.String, { nullable: true }),
        value: S.optionalWith(S.Union(S.String, S.Int), { nullable: true }),
      }),
    ),
    { nullable: true },
  ),
  id: S.optionalWith(S.Int, { nullable: true }),
  metadata: S.optionalWith(S.Record({ key: S.String, value: S.Unknown }), {
    nullable: true,
  }),
  ticket_id: S.optionalWith(S.Int, { nullable: true }),
  via: S.optionalWith(ViaObject, { nullable: true }),
}) {}

export class TicketUpdateResponse extends S.Class<TicketUpdateResponse>(
  "TicketUpdateResponse",
)({
  audit: S.optionalWith(AuditObject, { nullable: true }),
  ticket: S.optionalWith(TicketObject, { nullable: true }),
}) {}

export class DeleteTicketParams extends S.Struct({}) {}

export class TicketAuditsResponseNoneCursor extends S.Class<TicketAuditsResponseNoneCursor>(
  "TicketAuditsResponseNoneCursor",
)({
  audits: S.optionalWith(S.Array(TicketAuditObject), { nullable: true }),
  count: S.optionalWith(S.Int, { nullable: true }),
  next_page: S.optionalWith(S.String, { nullable: true }),
  previous_page: S.optionalWith(S.String, { nullable: true }),
}) {}

export class TicketAuditResponse extends S.Class<TicketAuditResponse>(
  "TicketAuditResponse",
)({
  audit: S.optionalWith(TicketAuditObject, { nullable: true }),
}) {}

/**
 * Empty response
 */
export class MakeTicketCommentPrivateFromAudits200 extends S.String {}

export class TicketAuditsCountResponse extends S.Class<TicketAuditsCountResponse>(
  "TicketAuditsCountResponse",
)({
  count: S.optionalWith(
    S.Struct({
      refreshed_at: S.optionalWith(S.String, { nullable: true }),
      value: S.optionalWith(S.Int, { nullable: true }),
    }),
    { nullable: true },
  ),
}) {}

export class ListTicketCollaboratorsParams extends S.Struct({}) {}

export class ListTicketCollaboratorsResponse extends S.Record({
  key: S.String,
  value: S.Unknown,
}) {}

export class ListTicketCommentsParams extends S.Struct({
  include_inline_images: S.optionalWith(S.Boolean, { nullable: true }),
  include: S.optionalWith(S.String, { nullable: true }),
}) {}

/**
 * Empty response
 */
export class MakeTicketCommentPrivate200 extends S.String {}

export class CountTicketCommentsParams extends S.Struct({}) {}

export class TicketCommentsCountResponse extends S.Class<TicketCommentsCountResponse>(
  "TicketCommentsCountResponse",
)({
  count: S.optionalWith(
    S.Struct({
      refreshed_at: S.optionalWith(S.String, { nullable: true }),
      value: S.optionalWith(S.Int, { nullable: true }),
    }),
    { nullable: true },
  ),
}) {}

export class ListConversationLogForTicketParams extends S.Struct({}) {}

/**
 * Either user, agent, or bot
 */
export class ConversationLogObjectAuthorType extends S.Literal(
  "user",
  "agent",
  "bot",
) {}

export class ConversationLogObject extends S.Class<ConversationLogObject>(
  "ConversationLogObject",
)({
  /**
   * Object that describes the user who created the event
   */
  author: S.Struct({
    /**
     * Either user, agent, or bot
     */
    type: S.optionalWith(ConversationLogObjectAuthorType, { nullable: true }),
    /**
     * A Zendesk resource name prefix describing a messaging user
     */
    "zen:sunco:user_id": S.optionalWith(S.String, { nullable: true }),
    /**
     * A Zendesk resource name prefix describing a Support user
     */
    "zen:support:user_id": S.optionalWith(S.Int, { nullable: true }),
  }),
  /**
   * Object that describes the content of the message. The inner fields depends on the record type
   */
  content: S.Record({ key: S.String, value: S.Unknown }),
  /**
   * The timestamp of when this record was created
   */
  created_at: S.String,
  /**
   * Unique record identifier
   */
  id: S.String,
  /**
   * Various additional data that further describes this record
   */
  metadata: S.Record({ key: S.String, value: S.Unknown }),
  /**
   * A Zendesk resource name value that uniquely identifies this record. Example: `zen:ticket_event:<id>`
   */
  reference: S.String,
  /**
   * The type of record, representing one of the conversational ticket events. Examples: `Comment` or `Messaging::ConversationMessage`
   */
  type: S.String,
}) {}

export class ConversationLogResponse extends S.Class<ConversationLogResponse>(
  "ConversationLogResponse",
)({
  events: S.optionalWith(S.Array(ConversationLogObject), { nullable: true }),
  links: S.optionalWith(
    S.Struct({
      next: S.optionalWith(S.String, { nullable: true }),
      prev: S.optionalWith(S.String, { nullable: true }),
    }),
    { nullable: true },
  ),
  meta: S.optionalWith(
    S.Struct({
      after_cursor: S.optionalWith(S.String, { nullable: true }),
      before_cursor: S.optionalWith(S.String, { nullable: true }),
      has_more: S.optionalWith(S.Boolean, { nullable: true }),
    }),
    { nullable: true },
  ),
}) {}

export class ListTicketEmailCCsParams extends S.Struct({}) {}

export class ListTicketEmailCCsResponse extends S.Record({
  key: S.String,
  value: S.Unknown,
}) {}

export class ListTicketFollowersParams extends S.Struct({}) {}

export class ListTicketFollowersResponse extends S.Record({
  key: S.String,
  value: S.Unknown,
}) {}

export class ListTicketIncidentsParams extends S.Struct({}) {}

export class ListTicketIncidentsResponse extends S.Record({
  key: S.String,
  value: S.Unknown,
}) {}

export class MarkTicketAsSpamAndSuspendRequesterParams extends S.Struct({}) {}

export class MarkTicketAsSpamAndSuspendRequester200 extends S.String {}

export class MergeTicketsIntoTargetTicketParams extends S.Struct({}) {}

export class TicketMergeInput extends S.Class<TicketMergeInput>(
  "TicketMergeInput",
)({
  /**
   * Ids of tickets to merge into the target ticket
   */
  ids: S.Array(S.Int),
  /**
   * Private comment to add to the source ticket
   */
  source_comment: S.optionalWith(S.String, { nullable: true }),
  /**
   * Whether comment in source tickets are public or private
   */
  source_comment_is_public: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * Private comment to add to the target ticket
   */
  target_comment: S.optionalWith(S.String, { nullable: true }),
  /**
   * Whether comment in target ticket is public or private
   */
  target_comment_is_public: S.optionalWith(S.Boolean, { nullable: true }),
}) {}

export class TicketRelatedInformationParams extends S.Struct({}) {}

export class TicketRelatedInformation extends S.Class<TicketRelatedInformation>(
  "TicketRelatedInformation",
)({
  followup_source_ids: S.optionalWith(S.Array(S.String), { nullable: true }),
  /**
   * Is true if the current ticket is archived
   */
  from_archive: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * A count of related incident occurrences
   */
  incidents: S.optionalWith(S.Int, { nullable: true }),
  jira_issue_ids: S.optionalWith(S.Array(S.String), { nullable: true }),
  /**
   * Related topic in the Web portal (deprecated feature)
   */
  topic_id: S.optionalWith(S.String, { nullable: true }),
}) {}

export class CountTickets200 extends S.Struct({
  count: S.optionalWith(
    S.Struct({
      refreshed_at: S.optionalWith(S.String, { nullable: true }),
      value: S.optionalWith(S.Int, { nullable: true }),
    }),
    { nullable: true },
  ),
}) {}

export class TicketsCreateRequest extends S.Class<TicketsCreateRequest>(
  "TicketsCreateRequest",
)({
  tickets: S.optionalWith(S.Array(TicketCreateInput), { nullable: true }),
}) {}

export class BulkDeleteTicketsParams extends S.Struct({
  ids: S.String,
}) {}

export class MarkManyTicketsAsSpamParams extends S.Struct({
  ids: S.String,
}) {}

export class TicketsShowManyParams extends S.Struct({
  ids: S.String,
}) {}

export class TicketsUpdateManyParams extends S.Struct({
  ids: S.optionalWith(S.String, { nullable: true }),
}) {}

export class ListTriggerCategoriesParamsSort extends S.Literal(
  "position",
  "-position",
  "name",
  "-name",
  "created_at",
  "-created_at",
  "updated_at",
  "-updated_at",
) {}

export class ListTriggerCategoriesParamsInclude extends S.Literal(
  "rule_counts",
) {}

export class ListTriggerCategoriesParams extends S.Struct({
  "page[after]": S.optionalWith(S.String, { nullable: true }),
  "page[before]": S.optionalWith(S.String, { nullable: true }),
  "page[size]": S.optionalWith(S.Int, { nullable: true }),
  sort: S.optionalWith(ListTriggerCategoriesParamsSort, { nullable: true }),
  include: S.optionalWith(ListTriggerCategoriesParamsInclude, {
    nullable: true,
  }),
}) {}

export class TriggerCategory extends S.Class<TriggerCategory>(
  "TriggerCategory",
)({
  created_at: S.optionalWith(S.String, { nullable: true }),
  id: S.optionalWith(S.String, { nullable: true }),
  name: S.optionalWith(S.String, { nullable: true }),
  position: S.optionalWith(S.Int, { nullable: true }),
  updated_at: S.optionalWith(S.String, { nullable: true }),
}) {}

export class ListTriggerCategories200Res extends S.Struct({
  links: S.optionalWith(
    S.Struct({
      next: S.optionalWith(S.String, { nullable: true }),
      prev: S.optionalWith(S.String, { nullable: true }),
    }),
    { nullable: true },
  ),
  meta: S.optionalWith(
    S.Struct({
      after_cursor: S.optionalWith(S.String, { nullable: true }),
      before_cursor: S.optionalWith(S.String, { nullable: true }),
      has_more: S.optionalWith(S.Boolean, { nullable: true }),
    }),
    { nullable: true },
  ),
  trigger_categories: S.optionalWith(
    S.Array(S.Record({ key: S.String, value: S.Unknown })),
    { nullable: true },
  ),
}) {}

export class ListTriggerCategories200 extends ListTriggerCategories200Res {}

export class CreateTriggerCategoryRequestTriggerCategory extends S.Struct({
  name: S.String,
  position: S.optionalWith(S.Int, { nullable: true }),
}) {}

export class CreateTriggerCategoryRequest extends S.Class<CreateTriggerCategoryRequest>(
  "CreateTriggerCategoryRequest",
)({
  trigger_category: S.optionalWith(
    CreateTriggerCategoryRequestTriggerCategory,
    { nullable: true },
  ),
}) {}

export class TriggerCategoryResponse extends S.Class<TriggerCategoryResponse>(
  "TriggerCategoryResponse",
)({
  trigger_category: S.optionalWith(TriggerCategory, { nullable: true }),
}) {}

export class TriggerCategoryRequest extends S.Class<TriggerCategoryRequest>(
  "TriggerCategoryRequest",
)({
  name: S.optionalWith(S.String, { nullable: true }),
  position: S.optionalWith(S.Int, { nullable: true }),
}) {}

export class UpdateTriggerCategoryRequest extends S.Class<UpdateTriggerCategoryRequest>(
  "UpdateTriggerCategoryRequest",
)({
  trigger_category: S.optionalWith(TriggerCategoryRequest, { nullable: true }),
}) {}

export class BatchJobRequestJobAction extends S.Literal("patch") {}

export class TriggerCategoryBatchRequest extends S.Class<TriggerCategoryBatchRequest>(
  "TriggerCategoryBatchRequest",
)({
  id: S.String,
  position: S.Int,
}) {}

export class TriggerBatchRequest extends S.Class<TriggerBatchRequest>(
  "TriggerBatchRequest",
)({
  active: S.optionalWith(S.Boolean, { nullable: true }),
  category_id: S.optionalWith(S.String, { nullable: true }),
  id: S.String,
  position: S.optionalWith(S.Int, { nullable: true }),
}) {}

export class BatchJobRequest extends S.Class<BatchJobRequest>(
  "BatchJobRequest",
)({
  job: S.optionalWith(
    S.Struct({
      action: S.optionalWith(BatchJobRequestJobAction, { nullable: true }),
      items: S.optionalWith(
        S.Struct({
          trigger_categories: S.optionalWith(
            S.Array(TriggerCategoryBatchRequest),
            { nullable: true },
          ),
          triggers: S.optionalWith(S.Array(TriggerBatchRequest), {
            nullable: true,
          }),
        }),
        { nullable: true },
      ),
    }),
    { nullable: true },
  ),
}) {}

export class BatchErrorItem extends S.Class<BatchErrorItem>("BatchErrorItem")({
  trigger_id: S.optionalWith(S.String, { nullable: true }),
  code: S.String,
  detail: S.optionalWith(S.String, { nullable: true }),
  id: S.optionalWith(S.String, { nullable: true }),
  links: S.optionalWith(S.Record({ key: S.String, value: S.Unknown }), {
    nullable: true,
  }),
  source: S.optionalWith(S.Record({ key: S.String, value: S.Unknown }), {
    nullable: true,
  }),
  status: S.optionalWith(S.String, { nullable: true }),
  title: S.String,
}) {}

export class TriggerObject extends S.Class<TriggerObject>("TriggerObject")({
  /**
   * An array of actions describing what the ticket trigger will do. See [Actions reference](/documentation/ticketing/reference-guides/actions-reference)
   */
  actions: S.Array(TriggerActionObject),
  /**
   * Whether the ticket trigger is active
   */
  active: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * The ID of the category the ticket trigger belongs to
   */
  category_id: S.optionalWith(S.String, { nullable: true }),
  conditions: TriggerConditionsObject,
  /**
   * The time the ticket trigger was created
   */
  created_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * If true, the ticket trigger is a standard trigger
   */
  default: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * The description of the ticket trigger
   */
  description: S.optionalWith(S.String, { nullable: true }),
  /**
   * Automatically assigned when created
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Position of the ticket trigger, determines the order they will execute in
   */
  position: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The raw format of the title of the ticket trigger
   */
  raw_title: S.optionalWith(S.String, { nullable: true }),
  /**
   * The title of the ticket trigger
   */
  title: S.String,
  /**
   * The time of the last update of the ticket trigger
   */
  updated_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * The url of the ticket trigger
   */
  url: S.optionalWith(S.String, { nullable: true }),
}) {}

export class BatchJobResponseStatus extends S.Literal("complete", "failed") {}

export class BatchJobResponse extends S.Class<BatchJobResponse>(
  "BatchJobResponse",
)({
  errors: S.optionalWith(S.Array(BatchErrorItem), { nullable: true }),
  results: S.optionalWith(
    S.Struct({
      trigger_categories: S.optionalWith(S.Array(TriggerCategory), {
        nullable: true,
      }),
      triggers: S.optionalWith(S.Array(TriggerObject), { nullable: true }),
    }),
    { nullable: true },
  ),
  status: S.optionalWith(BatchJobResponseStatus, { nullable: true }),
}) {}

export class ListTriggersParams extends S.Struct({
  active: S.optionalWith(S.Boolean, { nullable: true }),
  sort: S.optionalWith(S.String, { nullable: true }),
  sort_by: S.optionalWith(S.String, { nullable: true }),
  sort_order: S.optionalWith(S.String, { nullable: true }),
  category_id: S.optionalWith(S.String, { nullable: true }),
}) {}

export class TriggersResponse extends S.Class<TriggersResponse>(
  "TriggersResponse",
)({
  count: S.optionalWith(S.Int, { nullable: true }),
  next_page: S.optionalWith(S.String, { nullable: true }),
  previous_page: S.optionalWith(S.String, { nullable: true }),
  triggers: S.optionalWith(S.Array(TriggerObject), { nullable: true }),
}) {}

export class TriggerWithCategoryRequestTrigger extends S.Struct({
  /**
   * An array of actions describing what the ticket trigger will do. See [Actions reference](/documentation/ticketing/reference-guides/actions-reference)
   */
  actions: S.Array(TriggerActionObject),
  /**
   * Whether the ticket trigger is active
   */
  active: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * The ID of the category the ticket trigger belongs to
   */
  category_id: S.optionalWith(S.String, { nullable: true }),
  conditions: TriggerConditionsObject,
  /**
   * The time the ticket trigger was created
   */
  created_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * If true, the ticket trigger is a standard trigger
   */
  default: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * The description of the ticket trigger
   */
  description: S.optionalWith(S.String, { nullable: true }),
  /**
   * Automatically assigned when created
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Position of the ticket trigger, determines the order they will execute in
   */
  position: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The raw format of the title of the ticket trigger
   */
  raw_title: S.optionalWith(S.String, { nullable: true }),
  /**
   * The title of the ticket trigger
   */
  title: S.String,
  /**
   * The time of the last update of the ticket trigger
   */
  updated_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * The url of the ticket trigger
   */
  url: S.optionalWith(S.String, { nullable: true }),
}) {}

export class TriggerWithCategoryRequest extends S.Class<TriggerWithCategoryRequest>(
  "TriggerWithCategoryRequest",
)({
  trigger: S.optionalWith(TriggerWithCategoryRequestTrigger, {
    nullable: true,
  }),
}) {}

export class TriggerResponse extends S.Class<TriggerResponse>(
  "TriggerResponse",
)({
  trigger: S.optionalWith(TriggerObject, { nullable: true }),
}) {}

export class TriggerChangeObject extends S.Class<TriggerChangeObject>(
  "TriggerChangeObject",
)({
  /**
   * One of `-`, `+`, `=` representing the type of change
   */
  change: S.optionalWith(S.String, { nullable: true }),
  /**
   * The value of the item it represents
   */
  content: S.optionalWith(
    S.Union(
      S.Boolean,
      S.String,
      S.Int,
      S.Array(S.Union(S.String, S.Int, S.Boolean)),
    ),
    { nullable: true },
  ),
}) {}

export class TriggerActionDiffObject extends S.Class<TriggerActionDiffObject>(
  "TriggerActionDiffObject",
)({
  /**
   * An array of [change](#change) objects.
   */
  field: S.optionalWith(S.Array(TriggerChangeObject), { nullable: true }),
  /**
   * An array of [change](#change) objects.
   */
  value: S.optionalWith(S.Array(TriggerChangeObject), { nullable: true }),
}) {}

export class TriggerConditionDiffObject extends S.Class<TriggerConditionDiffObject>(
  "TriggerConditionDiffObject",
)({
  /**
   * An array of [change](#change) objects
   */
  field: S.optionalWith(S.Array(TriggerChangeObject), { nullable: true }),
  /**
   * An array of [change](#change) objects
   */
  operator: S.optionalWith(S.Array(TriggerChangeObject), { nullable: true }),
  /**
   * An array of [change](#change) objects
   */
  value: S.optionalWith(S.Array(TriggerChangeObject), { nullable: true }),
}) {}

export class TriggerSnapshotObject extends S.Class<TriggerSnapshotObject>(
  "TriggerSnapshotObject",
)({
  /**
   * An array of [Actions](#actions) describing what the ticket trigger will do
   */
  actions: S.optionalWith(S.Array(TriggerActionObject), { nullable: true }),
  /**
   * Whether the ticket trigger is active
   */
  active: S.optionalWith(S.Boolean, { nullable: true }),
  conditions: S.optionalWith(TriggerConditionsObject, { nullable: true }),
  /**
   * The description of the ticket trigger
   */
  description: S.optionalWith(S.String, { nullable: true }),
  /**
   * The title of the ticket trigger
   */
  title: S.optionalWith(S.String, { nullable: true }),
}) {}

export class TriggerRevisionsResponse extends S.Class<TriggerRevisionsResponse>(
  "TriggerRevisionsResponse",
)({
  after_cursor: S.optionalWith(S.String, { nullable: true }),
  after_url: S.optionalWith(S.String, { nullable: true }),
  before_cursor: S.optionalWith(S.String, { nullable: true }),
  before_url: S.optionalWith(S.String, { nullable: true }),
  count: S.optionalWith(S.Int, { nullable: true }),
  trigger_revisions: S.optionalWith(
    S.Array(
      S.Struct({
        author_id: S.optionalWith(S.Int, { nullable: true }),
        created_at: S.optionalWith(S.String, { nullable: true }),
        diff: S.optionalWith(
          S.Struct({
            /**
             * An array that contain [action diff objects](#Action Diffs)
             */
            actions: S.optionalWith(S.Array(TriggerActionDiffObject), {
              nullable: true,
            }),
            /**
             * An array of [change](#change) objects
             */
            active: S.optionalWith(S.Array(TriggerChangeObject), {
              nullable: true,
            }),
            conditions: S.optionalWith(TriggerConditionDiffObject, {
              nullable: true,
            }),
            /**
             * An array of [change](#change) objects
             */
            description: S.optionalWith(S.Array(TriggerChangeObject), {
              nullable: true,
            }),
            /**
             * ID of the source revision
             */
            source_id: S.optionalWith(S.Int, { nullable: true }),
            /**
             * ID of the target revision
             */
            target_id: S.optionalWith(S.Int, { nullable: true }),
            /**
             * An array of [change](#change) objects
             */
            title: S.optionalWith(S.Array(TriggerChangeObject), {
              nullable: true,
            }),
          }),
          { nullable: true },
        ),
        id: S.optionalWith(S.Int, { nullable: true }),
        snapshot: S.optionalWith(TriggerSnapshotObject, { nullable: true }),
        url: S.optionalWith(S.String, { nullable: true }),
      }),
    ),
    { nullable: true },
  ),
}) {}

export class TriggerRevisionResponse extends S.Class<TriggerRevisionResponse>(
  "TriggerRevisionResponse",
)({
  trigger_revision: S.optionalWith(
    S.Struct({
      author_id: S.optionalWith(S.Int, { nullable: true }),
      created_at: S.optionalWith(S.String, { nullable: true }),
      id: S.optionalWith(S.Int, { nullable: true }),
      snapshot: S.optionalWith(
        S.Struct({
          actions: S.optionalWith(S.Array(TriggerActionObject), {
            nullable: true,
          }),
          active: S.optionalWith(S.Boolean, { nullable: true }),
          conditions: S.optionalWith(TriggerConditionsObject, {
            nullable: true,
          }),
          description: S.optionalWith(S.String, { nullable: true }),
          title: S.optionalWith(S.String, { nullable: true }),
        }),
        { nullable: true },
      ),
      url: S.optionalWith(S.String, { nullable: true }),
    }),
    { nullable: true },
  ),
}) {}

export class TriggerActionDefinitionObject extends S.Class<TriggerActionDefinitionObject>(
  "TriggerActionDefinitionObject",
)({
  group: S.optionalWith(S.String, { nullable: true }),
  nullable: S.optionalWith(S.Boolean, { nullable: true }),
  repeatable: S.optionalWith(S.Boolean, { nullable: true }),
  subject: S.optionalWith(S.String, { nullable: true }),
  title: S.optionalWith(S.String, { nullable: true }),
  type: S.optionalWith(S.String, { nullable: true }),
  values: S.optionalWith(
    S.Array(
      S.Struct({
        enabled: S.optionalWith(S.Boolean, { nullable: true }),
        title: S.optionalWith(S.String, { nullable: true }),
        value: S.optionalWith(S.String, { nullable: true }),
      }),
    ),
    { nullable: true },
  ),
}) {}

export class TriggerDefinitionObject extends S.Class<TriggerDefinitionObject>(
  "TriggerDefinitionObject",
)({
  actions: S.optionalWith(S.Array(TriggerActionDefinitionObject), {
    nullable: true,
  }),
  conditions_all: S.optionalWith(S.Array(TriggerConditionDefinitionObjectAll), {
    nullable: true,
  }),
  conditions_any: S.optionalWith(S.Array(TriggerConditionDefinitionObjectAny), {
    nullable: true,
  }),
}) {}

export class TriggerDefinitionResponse extends S.Class<TriggerDefinitionResponse>(
  "TriggerDefinitionResponse",
)({
  definitions: S.optionalWith(TriggerDefinitionObject, { nullable: true }),
}) {}

export class TriggerBulkUpdateItem extends S.Class<TriggerBulkUpdateItem>(
  "TriggerBulkUpdateItem",
)({
  /**
   * The active status of the ticket trigger (true or false)
   */
  active: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * The ID of the new category the ticket trigger is to be moved to
   */
  category_id: S.optionalWith(S.String, { nullable: true }),
  /**
   * The ID of the ticket trigger to update
   */
  id: S.Int,
  /**
   * The new position of the ticket trigger
   */
  position: S.optionalWith(S.Int, { nullable: true }),
}) {}

export class TriggerBulkUpdateRequest extends S.Class<TriggerBulkUpdateRequest>(
  "TriggerBulkUpdateRequest",
)({
  triggers: S.optionalWith(S.Array(TriggerBulkUpdateItem), { nullable: true }),
}) {}

export class AttachmentUploadResponse extends S.Class<AttachmentUploadResponse>(
  "AttachmentUploadResponse",
)({
  upload: S.optionalWith(
    S.Struct({
      attachment: S.optionalWith(AttachmentObject, { nullable: true }),
      attachments: S.optionalWith(S.Array(AttachmentObject), {
        nullable: true,
      }),
      /**
       * Token for subsequent request
       */
      token: S.optionalWith(S.String, { nullable: true }),
    }),
    { nullable: true },
  ),
}) {}

export class UserFieldObject extends S.Class<UserFieldObject>(
  "UserFieldObject",
)({
  /**
   * If true, this field is available for use
   */
  active: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * The time of the last update of the ticket field
   */
  created_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * Required and presented for a custom field of type "dropdown". Each option is represented by an object with a `name` and `value` property
   */
  custom_field_options: S.optionalWith(S.Array(CustomFieldOptionObject), {
    nullable: true,
  }),
  /**
   * User-defined description of this field's purpose
   */
  description: S.optionalWith(S.String, { nullable: true }),
  /**
   * Automatically assigned upon creation
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * A unique key that identifies this custom field. This is used for updating the field and referencing in placeholders. The key must consist of only letters, numbers, and underscores. It can't be only numbers
   */
  key: S.String,
  /**
   * Ordering of the field relative to other fields
   */
  position: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The dynamic content placeholder, if present, or the `description` value, if not. See [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)
   */
  raw_description: S.optionalWith(S.String, { nullable: true }),
  /**
   * The dynamic content placeholder, if present, or the `title` value, if not. See [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)
   */
  raw_title: S.optionalWith(S.String, { nullable: true }),
  /**
   * Regular expression field only. The validation pattern for a field value to be deemed valid
   */
  regexp_for_validation: S.optionalWith(S.String, { nullable: true }),
  /**
   * A filter definition that allows your autocomplete to filter down results
   */
  relationship_filter: S.optionalWith(
    S.Record({ key: S.String, value: S.Unknown }),
    { nullable: true },
  ),
  /**
   * A representation of what type of object the field references. Options are "zen:user", "zen:organization", "zen:ticket", and "zen:custom_object:{key}" where key is a custom object key. For example "zen:custom_object:apartment".
   */
  relationship_target_type: S.optionalWith(S.String, { nullable: true }),
  /**
   * If true, only active and position values of this field can be changed
   */
  system: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * Optional for custom field of type "checkbox"; not presented otherwise.
   */
  tag: S.optionalWith(S.String, { nullable: true }),
  /**
   * The title of the custom field
   */
  title: S.String,
  /**
   * The custom field type: "checkbox", "date", "decimal", "dropdown", "integer", ["lookup"](/api-reference/ticketing/lookup_relationships/lookup_relationships/), "multiselect", "regexp", "text", or "textarea"
   */
  type: S.String,
  /**
   * The time of the last update of the ticket field
   */
  updated_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * The URL for this resource
   */
  url: S.optionalWith(S.String, { nullable: true }),
}) {}

export class UserFieldsResponse extends S.Class<UserFieldsResponse>(
  "UserFieldsResponse",
)({
  /**
   * Total count of records retrieved
   */
  count: S.optionalWith(S.Int, { nullable: true }),
  /**
   * URL of the next page
   */
  next_page: S.optionalWith(S.String, { nullable: true }),
  /**
   * URL of the previous page
   */
  previous_page: S.optionalWith(S.String, { nullable: true }),
  user_fields: S.optionalWith(S.Array(UserFieldObject), { nullable: true }),
}) {}

export class UserFieldResponse extends S.Class<UserFieldResponse>(
  "UserFieldResponse",
)({
  user_field: S.optionalWith(UserFieldObject, { nullable: true }),
}) {}

/**
 * Empty response
 */
export class ReorderUserField200 extends S.String {}

export class ListUsersParamsRole extends S.Literal(
  "end-user",
  "agent",
  "admin",
) {}

export class ListUsersParams extends S.Struct({
  role: S.optionalWith(ListUsersParamsRole, { nullable: true }),
  "role[]": S.optionalWith(S.String, { nullable: true }),
  permission_set: S.optionalWith(S.Int, { nullable: true }),
  external_id: S.optionalWith(S.String, { nullable: true }),
}) {}

export class UserCreateInput extends S.Class<UserCreateInput>(
  "UserCreateInput",
)({
  agent_brand_ids: S.optionalWith(S.Array(S.Int), { nullable: true }),
  custom_role_id: S.optionalWith(S.Int, { nullable: true }),
  email: S.String,
  external_id: S.optionalWith(S.String, { nullable: true }),
  identities: S.optionalWith(
    S.Array(
      S.Struct({
        type: S.String,
        value: S.String,
      }),
    ),
    { nullable: true },
  ),
  name: S.String,
  organization: S.optionalWith(
    S.Struct({
      name: S.String,
    }),
    { nullable: true },
  ),
  organization_id: S.optionalWith(S.Int, { nullable: true }),
  role: S.optionalWith(S.String, { nullable: true }),
}) {}

export class UserMergePropertiesInput extends S.Class<UserMergePropertiesInput>(
  "UserMergePropertiesInput",
)({
  email: S.optionalWith(S.String, { nullable: true }),
  name: S.optionalWith(S.String, { nullable: true }),
  organization_id: S.optionalWith(S.Int, { nullable: true }),
  password: S.optionalWith(S.String, { nullable: true }),
}) {}

export class UserMergeByIdInput extends S.Class<UserMergeByIdInput>(
  "UserMergeByIdInput",
)({
  id: S.optionalWith(S.Int, { nullable: true }),
}) {}

export class UserInput extends S.Union(
  UserCreateInput,
  UserMergePropertiesInput,
  UserMergeByIdInput,
) {}

export class UserRequest extends S.Class<UserRequest>("UserRequest")({
  user: UserInput,
}) {}

export class UserResponse extends S.Class<UserResponse>("UserResponse")({
  user: S.optionalWith(UserObject, { nullable: true }),
}) {}

export class ShowUserComplianceDeletionStatusesParams extends S.Struct({
  application: S.optionalWith(S.String, { nullable: true }),
}) {}

export class ComplianceDeletionStatusObject extends S.Class<ComplianceDeletionStatusObject>(
  "ComplianceDeletionStatusObject",
)({
  account_subdomain: S.String,
  action: S.String,
  application: S.String,
  created_at: S.String,
  executer_id: S.NullOr(S.Int),
  user_id: S.Int,
}) {}

export class ComplianceDeletionStatusesResponse extends S.Class<ComplianceDeletionStatusesResponse>(
  "ComplianceDeletionStatusesResponse",
)({
  compliance_deletion_statuses: S.optionalWith(
    S.Array(ComplianceDeletionStatusObject),
    { nullable: true },
  ),
}) {}

/**
 * The type of this identity
 */
export class UserIdentityObjectType extends S.Literal(
  "email",
  "twitter",
  "facebook",
  "google",
  "phone_number",
  "agent_forwarding",
  "any_channel",
  "foreign",
  "sdk",
) {}

/**
 * Indicates the state of user identity verification. See [Verification method](#verification-method).
 */
export class UserIdentityObjectVerificationMethod extends S.Literal(
  "none",
  "low",
  "sso",
  "embed",
  "full",
) {}

export class UserIdentityObject extends S.Class<UserIdentityObject>(
  "UserIdentityObject",
)({
  /**
   * The time the identity was created
   */
  created_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * Email identity type only. Indicates if Zendesk sends notifications to the email address. See [Deliverable state](#deliverable-state)
   */
  deliverable_state: S.optionalWith(S.String, { nullable: true }),
  /**
   * Automatically assigned on creation
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * If the identity is the primary identity. *Writable only when creating, not when updating. Use the [Make Identity Primary](#make-identity-primary) endpoint instead
   */
  primary: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * The type of this identity
   */
  type: UserIdentityObjectType,
  /**
   * The number of times a soft-bounce response was received at that address
   */
  undeliverable_count: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The time the identity was updated
   */
  updated_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * The API url of this identity
   */
  url: S.optionalWith(S.String, { nullable: true }),
  /**
   * The id of the user
   */
  user_id: S.Int,
  /**
   * The identifier for this identity, such as an email address
   */
  value: S.String,
  /**
   * Indicates the state of user identity verification. See [Verification method](#verification-method).
   */
  verification_method: S.optionalWith(UserIdentityObjectVerificationMethod, {
    nullable: true,
  }),
  /**
   * If the identity has been verified. Deprecated. Use `verification_method` as a more accurate representation of a user's state of verification.
   */
  verified: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * The last time a full verification flow was completed for the identity
   */
  verified_at: S.optionalWith(S.String, { nullable: true }),
}) {}

export class UserIdentitiesResponse extends S.Class<UserIdentitiesResponse>(
  "UserIdentitiesResponse",
)({
  identities: S.optionalWith(S.Array(UserIdentityObject), { nullable: true }),
}) {}

export class UserIdentityResponse extends S.Class<UserIdentityResponse>(
  "UserIdentityResponse",
)({
  identity: S.optionalWith(UserIdentityObject, { nullable: true }),
}) {}

/**
 * Empty response
 */
export class RequestUserVerfication200 extends S.String {}

/**
 * Empty response
 */
export class ChangeOwnPassword200 extends S.String {}

/**
 * Empty response
 */
export class SetUserPassword200 extends S.String {}

export class UserPasswordRequirementsResponse extends S.Class<UserPasswordRequirementsResponse>(
  "UserPasswordRequirementsResponse",
)({
  requirements: S.optionalWith(S.Array(S.String), { nullable: true }),
}) {}

export class UserRelatedObject extends S.Class<UserRelatedObject>(
  "UserRelatedObject",
)({
  /**
   * Count of assigned tickets
   */
  assigned_tickets: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Count of collaborated tickets
   */
  ccd_tickets: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Count of organization subscriptions
   */
  organization_subscriptions: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Count of requested tickets
   */
  requested_tickets: S.optionalWith(S.Int, { nullable: true }),
}) {}

export class UserRelatedResponse extends S.Class<UserRelatedResponse>(
  "UserRelatedResponse",
)({
  user_related: S.optionalWith(UserRelatedObject, { nullable: true }),
}) {}

export class SessionResponse extends S.Class<SessionResponse>(
  "SessionResponse",
)({
  session: S.optionalWith(S.Array(SessionObject), { nullable: true }),
}) {}

export class TicketSkipsResponse extends S.Class<TicketSkipsResponse>(
  "TicketSkipsResponse",
)({
  skips: S.optionalWith(S.Array(TicketSkipObject), { nullable: true }),
}) {}

export class AutocompleteUsersParams extends S.Struct({
  name: S.String,
  field_id: S.optionalWith(S.String, { nullable: true }),
  source: S.optionalWith(S.String, { nullable: true }),
}) {}

export class CountUsersParamsRole extends S.Literal(
  "end-user",
  "agent",
  "admin",
) {}

export class CountUsersParams extends S.Struct({
  role: S.optionalWith(CountUsersParamsRole, { nullable: true }),
  "role[]": S.optionalWith(S.String, { nullable: true }),
  permission_set: S.optionalWith(S.Int, { nullable: true }),
}) {}

export class UsersRequest extends S.Class<UsersRequest>("UsersRequest")({
  users: S.Array(UserInput),
}) {}

export class DestroyManyUsersParams extends S.Struct({
  ids: S.optionalWith(S.String, { nullable: true }),
  external_ids: S.optionalWith(S.String, { nullable: true }),
}) {}

export class LogoutManyUsersParams extends S.Struct({
  ids: S.optionalWith(S.String, { nullable: true }),
}) {}

/**
 * Empty response
 */
export class LogoutManyUsers202 extends S.String {}

export class CurrentUserResponseUser extends S.Struct({
  /**
   * CSRF token required by some Zendesk APIs.
   */
  authenticity_token: S.optionalWith(S.String, { nullable: true }),
}) {}

export class CurrentUserResponse extends S.Class<CurrentUserResponse>(
  "CurrentUserResponse",
)({
  user: S.optionalWith(CurrentUserResponseUser, { nullable: true }),
}) {}

export class RenewSessionResponse extends S.Class<RenewSessionResponse>(
  "RenewSessionResponse",
)({
  /**
   * A token of authenticity for the request
   */
  authenticity_token: S.optionalWith(S.String, { nullable: true }),
}) {}

/**
 * Empty response
 */
export class RequestUserCreate200 extends S.String {}

export class SearchUsersParams extends S.Struct({
  query: S.optionalWith(S.String, { nullable: true }),
  external_id: S.optionalWith(S.String, { nullable: true }),
}) {}

export class ShowManyUsersParams extends S.Struct({
  ids: S.optionalWith(S.String, { nullable: true }),
  external_ids: S.optionalWith(S.String, { nullable: true }),
}) {}

export class UpdateManyUsersParams extends S.Struct({
  ids: S.optionalWith(S.String, { nullable: true }),
  external_ids: S.optionalWith(S.String, { nullable: true }),
}) {}

export class UpdateManyUsersRequest extends S.Union(
  UserRequest,
  UsersRequest,
) {}

export class ListViewsParams extends S.Struct({
  access: S.optionalWith(S.String, { nullable: true }),
  active: S.optionalWith(S.Boolean, { nullable: true }),
  group_id: S.optionalWith(S.Int, { nullable: true }),
  sort_by: S.optionalWith(S.String, { nullable: true }),
  sort_order: S.optionalWith(S.String, { nullable: true }),
}) {}

export class ViewObject extends S.Class<ViewObject>("ViewObject")({
  /**
   * Whether the view is active
   */
  active: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * Describes how the view is constructed. See [Conditions reference](/documentation/ticketing/reference-guides/conditions-reference)
   */
  conditions: S.optionalWith(S.Record({ key: S.String, value: S.Unknown }), {
    nullable: true,
  }),
  /**
   * The time the view was created
   */
  created_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * If true, the view is a default view
   */
  default: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * The description of the view
   */
  description: S.optionalWith(S.String, { nullable: true }),
  /**
   * Describes how the view should be executed. See [Execution](#execution)
   */
  execution: S.optionalWith(S.Record({ key: S.String, value: S.Unknown }), {
    nullable: true,
  }),
  /**
   * Automatically assigned when created
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The position of the view
   */
  position: S.optionalWith(S.Int, { nullable: true }),
  /**
   * Who may access this account. Is null when everyone in the account can access it
   */
  restriction: S.optionalWith(S.Record({ key: S.String, value: S.Unknown }), {
    nullable: true,
  }),
  /**
   * The title of the view
   */
  title: S.optionalWith(S.String, { nullable: true }),
  /**
   * The time the view was last updated
   */
  updated_at: S.optionalWith(S.String, { nullable: true }),
}) {}

export class ViewsResponse extends S.Class<ViewsResponse>("ViewsResponse")({
  count: S.optionalWith(S.Int, { nullable: true }),
  next_page: S.optionalWith(S.String, { nullable: true }),
  previous_page: S.optionalWith(S.String, { nullable: true }),
  views: S.optionalWith(S.Array(ViewObject), { nullable: true }),
}) {}

export class ViewResponse extends S.Class<ViewResponse>("ViewResponse")({
  columns: S.optionalWith(
    S.Array(S.Record({ key: S.String, value: S.Unknown })),
    { nullable: true },
  ),
  groups: S.optionalWith(
    S.Array(S.Record({ key: S.String, value: S.Unknown })),
    { nullable: true },
  ),
  rows: S.optionalWith(S.Array(S.Record({ key: S.String, value: S.Unknown })), {
    nullable: true,
  }),
  view: S.optionalWith(ViewObject, { nullable: true }),
}) {}

export class ViewCountObject extends S.Class<ViewCountObject>(
  "ViewCountObject",
)({
  /**
   * Only active views if true, inactive views if false, all views if null.
   */
  active: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * false if the cached data is stale and the system is still loading and caching new data
   */
  fresh: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * A pretty-printed text approximation of the view count
   */
  pretty: S.optionalWith(S.String, { nullable: true }),
  /**
   * The API url of the count
   */
  url: S.optionalWith(S.String, { nullable: true }),
  /**
   * The cached number of tickets in the view. Can also be null if the system is loading and caching new data. Not to be confused with 0 tickets
   */
  value: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The id of the view
   */
  view_id: S.optionalWith(S.Int, { nullable: true }),
}) {}

export class ViewCountResponse extends S.Class<ViewCountResponse>(
  "ViewCountResponse",
)({
  view_count: S.optionalWith(ViewCountObject, { nullable: true }),
}) {}

export class ExecuteViewParams extends S.Struct({
  sort_by: S.optionalWith(S.String, { nullable: true }),
  sort_order: S.optionalWith(S.String, { nullable: true }),
}) {}

export class ViewExportResponse extends S.Class<ViewExportResponse>(
  "ViewExportResponse",
)({
  export: S.optionalWith(
    S.Struct({
      status: S.optionalWith(S.String, { nullable: true }),
      view_id: S.optionalWith(S.Int, { nullable: true }),
    }),
    { nullable: true },
  ),
}) {}

export class ListTicketsFromViewParams extends S.Struct({
  sort_by: S.optionalWith(S.String, { nullable: true }),
  sort_order: S.optionalWith(S.String, { nullable: true }),
}) {}

export class ListActiveViewsParams extends S.Struct({
  access: S.optionalWith(S.String, { nullable: true }),
  group_id: S.optionalWith(S.Int, { nullable: true }),
  sort_by: S.optionalWith(S.String, { nullable: true }),
  sort_order: S.optionalWith(S.String, { nullable: true }),
}) {}

export class ViewsCountResponse extends S.Class<ViewsCountResponse>(
  "ViewsCountResponse",
)({
  count: S.optionalWith(
    S.Struct({
      refreshed_at: S.optionalWith(S.String, { nullable: true }),
      value: S.optionalWith(S.Int, { nullable: true }),
    }),
    { nullable: true },
  ),
}) {}

export class GetViewCountsParams extends S.Struct({
  ids: S.String,
}) {}

export class ViewCountsResponse extends S.Class<ViewCountsResponse>(
  "ViewCountsResponse",
)({
  view_counts: S.optionalWith(S.Array(ViewCountObject), { nullable: true }),
}) {}

export class BulkDeleteViewsParams extends S.Struct({
  ids: S.String,
}) {}

export class SearchViewsParams extends S.Struct({
  query: S.String,
  access: S.optionalWith(S.String, { nullable: true }),
  active: S.optionalWith(S.Boolean, { nullable: true }),
  group_id: S.optionalWith(S.Int, { nullable: true }),
  sort_by: S.optionalWith(S.String, { nullable: true }),
  sort_order: S.optionalWith(S.String, { nullable: true }),
  include: S.optionalWith(S.String, { nullable: true }),
}) {}

export class ListViewsByIdParams extends S.Struct({
  ids: S.String,
  active: S.optionalWith(S.Boolean, { nullable: true }),
}) {}

export class WorkspaceObject extends S.Class<WorkspaceObject>(
  "WorkspaceObject",
)({
  /**
   * If true, this workspace is available for use
   */
  activated: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * The apps associated to this workspace
   */
  apps: S.optionalWith(S.Array(S.Record({ key: S.String, value: S.Unknown })), {
    nullable: true,
  }),
  conditions: S.optionalWith(ConditionsObject, { nullable: true }),
  /**
   * The time the workspace was created
   */
  created_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * User-defined description of this workspace's purpose
   */
  description: S.optionalWith(S.String, { nullable: true }),
  /**
   * Automatically assigned upon creation
   */
  id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The ids of the macros associated to this workspace
   */
  macro_ids: S.optionalWith(S.Array(S.Int), { nullable: true }),
  /**
   * The ids of the macros associated to this workspace
   */
  macros: S.optionalWith(S.Array(S.Int), { nullable: true }),
  /**
   * Ordering of the workspace relative to other workspaces
   */
  position: S.optionalWith(S.Int, { nullable: true }),
  /**
   * If true, the order of apps within the workspace will be preserved
   */
  prefer_workspace_app_order: S.optionalWith(S.Boolean, { nullable: true }),
  /**
   * An array of the macro objects that will be used in this workspace. See [Macros](/api-reference/ticketing/business-rules/macros/)
   */
  selected_macros: S.optionalWith(S.Array(MacroObject), { nullable: true }),
  /**
   * The id of the ticket web form associated to this workspace
   */
  ticket_form_id: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The title of the workspace
   */
  title: S.optionalWith(S.String, { nullable: true }),
  /**
   * The time of the last update of the workspace
   */
  updated_at: S.optionalWith(S.String, { nullable: true }),
  /**
   * The URL for this resource
   */
  url: S.optionalWith(S.String, { nullable: true }),
}) {}

export class WorkspaceResponse extends S.Class<WorkspaceResponse>(
  "WorkspaceResponse",
)({
  /**
   * the total record count
   */
  count: S.optionalWith(S.Int, { nullable: true }),
  /**
   * the URL of the next page
   */
  next_page: S.optionalWith(S.String, { nullable: true }),
  /**
   * the URL of the previous page
   */
  previous_page: S.optionalWith(S.String, { nullable: true }),
  workspaces: S.optionalWith(S.Array(WorkspaceObject), { nullable: true }),
}) {}

export class WorkspaceInput extends S.Class<WorkspaceInput>("WorkspaceInput")({
  conditions: S.optionalWith(ConditionsObject, { nullable: true }),
  /**
   * User-defined description of this workspace's purpose
   */
  description: S.optionalWith(S.String, { nullable: true }),
  macros: S.optionalWith(S.Array(S.Number), { nullable: true }),
  ticket_form_id: S.optionalWith(S.Number, { nullable: true }),
  /**
   * The title of the workspace
   */
  title: S.optionalWith(S.String, { nullable: true }),
}) {}

export class CreateWorkspaceRequest extends S.Class<CreateWorkspaceRequest>(
  "CreateWorkspaceRequest",
)({
  workspace: S.optionalWith(WorkspaceInput, { nullable: true }),
}) {}

export class CreateWorkspace201 extends S.Struct({
  workspace: S.optionalWith(WorkspaceObject, { nullable: true }),
}) {}

export class ShowWorkspace200 extends S.Struct({
  workspace: S.optionalWith(WorkspaceObject, { nullable: true }),
}) {}

export class UpdateWorkspaceRequest extends S.Class<UpdateWorkspaceRequest>(
  "UpdateWorkspaceRequest",
)({
  workspace: S.optionalWith(WorkspaceInput, { nullable: true }),
}) {}

export class UpdateWorkspace200 extends S.Struct({
  workspace: S.optionalWith(WorkspaceObject, { nullable: true }),
}) {}

export class DestroyManyWorkspacesParams extends S.Struct({
  ids: S.Array(S.Int),
}) {}

/**
 * Empty response
 */
export class DestroyManyWorkspaces200 extends S.String {}

export class ReorderWorkspacesRequest extends S.Class<ReorderWorkspacesRequest>(
  "ReorderWorkspacesRequest",
)({
  ids: S.optionalWith(S.Array(S.Number), { nullable: true }),
}) {}

/**
 * Empty response
 */
export class ReorderWorkspaces200 extends S.String {}

export class OAuthTokenForGrantTypesObject extends S.Class<OAuthTokenForGrantTypesObject>(
  "OAuthTokenForGrantTypesObject",
)({
  /**
   * The access token
   */
  access_token: S.optionalWith(S.String, { nullable: true }),
  /**
   * Number of seconds the access token is valid. Must be more than 300 seconds (5 minutes) and less than 172,800 seconds (2 days), or less than `refresh_token_expires_in`, whichever is the smallest. Defaults to null
   */
  expires_in: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The refresh token
   */
  refresh_token: S.optionalWith(S.String, { nullable: true }),
  /**
   * Number of seconds the refresh token is valid. Must be more than 604,800 seconds (7 days) or `expires_in` (if given), and less than 7,776,000 seconds (90 days). Defaults to 2,592,000 seconds (30 days)
   */
  refresh_token_expires_in: S.optionalWith(S.Int, { nullable: true }),
  /**
   * The valid scopes for this token. See [Scope](#scope) below
   */
  scope: S.optionalWith(S.String, { nullable: true }),
  /**
   * Type of the access token, for example "bearer"
   */
  token_type: S.optionalWith(S.String, { nullable: true }),
}) {}

export const make = (
  httpClient: HttpClient.HttpClient,
  options: {
    readonly transformClient?:
      | ((
          client: HttpClient.HttpClient,
        ) => Effect.Effect<HttpClient.HttpClient>)
      | undefined;
  } = {},
): Client => {
  const unexpectedStatus = (response: HttpClientResponse.HttpClientResponse) =>
    Effect.flatMap(
      Effect.orElseSucceed(response.json, () => "Unexpected status code"),
      (description) =>
        Effect.fail(
          new HttpClientError.ResponseError({
            request: response.request,
            response,
            reason: "StatusCode",
            description:
              typeof description === "string"
                ? description
                : JSON.stringify(description),
          }),
        ),
    );
  const withResponse: <A, E>(
    f: (response: HttpClientResponse.HttpClientResponse) => Effect.Effect<A, E>,
  ) => (
    request: HttpClientRequest.HttpClientRequest,
  ) => Effect.Effect<any, any> = options.transformClient
    ? (f) => (request) =>
        Effect.flatMap(
          Effect.flatMap(options.transformClient!(httpClient), (client) =>
            client.execute(request),
          ),
          f,
        )
    : (f) => (request) => Effect.flatMap(httpClient.execute(request), f);
  const decodeSuccess =
    <A, I, R>(schema: S.Schema<A, I, R>) =>
    (response: HttpClientResponse.HttpClientResponse) =>
      HttpClientResponse.schemaBodyJson(schema)(response);
  const decodeError =
    <const Tag extends string, A, I, R>(tag: Tag, schema: S.Schema<A, I, R>) =>
    (response: HttpClientResponse.HttpClientResponse) =>
      Effect.flatMap(
        HttpClientResponse.schemaBodyJson(schema)(response),
        (cause) => Effect.fail(ClientError(tag, cause, response)),
      );
  return {
    httpClient,
    ListAssigneeFieldAssignableGroupsAndAgentsSearch: (options) =>
      HttpClientRequest.get("/api/lotus/assignables/autocomplete.json").pipe(
        HttpClientRequest.setUrlParams({ name: options?.["name"] as any }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(
              AssigneeFieldAssignableGroupsAndAgentsSearchResponse,
            ),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListAssigneeFieldAssignableGroups: () =>
      HttpClientRequest.get("/api/lotus/assignables/groups.json").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(AssigneeFieldAssignableGroupsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListAssigneeFieldAssignableGroupAgents: (groupId, options) =>
      HttpClientRequest.get(
        `/api/lotus/assignables/groups/${groupId}/agents.json`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(AssigneeFieldAssignableGroupAgentsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    GetSourcesByTarget: (targetType, targetId, fieldId, sourceType) =>
      HttpClientRequest.get(
        `/api/v2/${targetType}/${targetId}/relationship_fields/${fieldId}/${sourceType}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ReverseLookupResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowAccountSettings: () =>
      HttpClientRequest.get("/api/v2/account/settings").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(AccountSettingsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    UpdateAccountSettings: () =>
      HttpClientRequest.put("/api/v2/account/settings").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(AccountSettingsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CreateTrialAccount: () =>
      HttpClientRequest.post("/api/v2/accounts").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TrialAccountResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    VerifySubdomainAvailability: (options) =>
      HttpClientRequest.get("/api/v2/accounts/available").pipe(
        HttpClientRequest.setUrlParams({
          subdomain: options?.["subdomain"] as any,
        }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(VerifySubdomainAvailability200),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListActivities: () =>
      HttpClientRequest.get("/api/v2/activities").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ActivitiesResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowActivity: (activityId) =>
      HttpClientRequest.get(`/api/v2/activities/${activityId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ActivityResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CountActivities: () =>
      HttpClientRequest.get("/api/v2/activities/count").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ActivitiesCountResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ReportChannelbackError: () =>
      HttpClientRequest.post(
        "/api/v2/any_channel/channelback/report_error",
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ReportChannelbackError200),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    PushContentToSupport: () =>
      HttpClientRequest.post("/api/v2/any_channel/push").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ChannelFrameworkPushResultsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ValidateToken: () =>
      HttpClientRequest.post("/api/v2/any_channel/validate_token").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ValidateToken200),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CreateApprovalWorkflowInstance: () =>
      HttpClientRequest.post("/api/v2/approval_workflow_instances").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ApprovalWorkflowInstanceObject),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CreateApprovalRequest: (approvalWorkflowInstanceId, options) =>
      HttpClientRequest.post(
        `/api/v2/approval_workflow_instances/${approvalWorkflowInstanceId}/approval_requests`,
      ).pipe(
        HttpClientRequest.bodyUnsafeJson(options),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ApprovalRequestObject),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowApprovalRequest: (approvalWorkflowInstanceId, approvalRequestId) =>
      HttpClientRequest.get(
        `/api/v2/approval_workflow_instances/${approvalWorkflowInstanceId}/approval_requests/${approvalRequestId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ApprovalRequestObject),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    UpdateDecisionApprovalRequest: (
      approvalWorkflowInstanceId,
      approvalRequestId,
      options,
    ) =>
      HttpClientRequest.patch(
        `/api/v2/approval_workflow_instances/${approvalWorkflowInstanceId}/approval_requests/${approvalRequestId}/decision`,
      ).pipe(
        HttpClientRequest.bodyUnsafeJson(options),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ApprovalRequestObject),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    SearchApprovals: (approvalWorkflowInstanceId) =>
      HttpClientRequest.post(
        `/api/v2/approval_workflow_instances/${approvalWorkflowInstanceId}/approval_requests/search`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ApprovalRequestsSearchResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowAttachment: (attachmentId, options) =>
      HttpClientRequest.get(`/api/v2/attachments/${attachmentId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(AttachmentResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    UpdateAttachment: (attachmentId, options) =>
      HttpClientRequest.put(`/api/v2/attachments/${attachmentId}`).pipe(
        HttpClientRequest.bodyUnsafeJson(options.payload),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(AttachmentResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListAuditLogs: (options) =>
      HttpClientRequest.get("/api/v2/audit_logs").pipe(
        HttpClientRequest.setUrlParams({
          "filter[source_type]": options?.["filter[source_type]"] as any,
          "filter[source_id]": options?.["filter[source_id]"] as any,
          "filter[actor_id]": options?.["filter[actor_id]"] as any,
          "filter[ip_address]": options?.["filter[ip_address]"] as any,
          "filter[created_at]": options?.["filter[created_at]"] as any,
          "filter[action]": options?.["filter[action]"] as any,
          sort_by: options?.["sort_by"] as any,
          sort_order: options?.["sort_order"] as any,
          sort: options?.["sort"] as any,
        }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(AuditLogsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowAuditLog: (auditLogId) =>
      HttpClientRequest.get(`/api/v2/audit_logs/${auditLogId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(AuditLogResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ExportAuditLogs: (options) =>
      HttpClientRequest.post("/api/v2/audit_logs/export").pipe(
        HttpClientRequest.setUrlParams({
          "filter[source_type]": options?.["filter[source_type]"] as any,
          "filter[source_id]": options?.["filter[source_id]"] as any,
          "filter[actor_id]": options?.["filter[actor_id]"] as any,
          "filter[ip_address]": options?.["filter[ip_address]"] as any,
          "filter[created_at]": options?.["filter[created_at]"] as any,
          "filter[action]": options?.["filter[action]"] as any,
        }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ExportAuditLogs202),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    AutocompleteTags: () =>
      HttpClientRequest.get("/api/v2/autocomplete/tags").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TagsByObjectIdResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListAutomations: () =>
      HttpClientRequest.get("/api/v2/automations").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(AutomationsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CreateAutomation: () =>
      HttpClientRequest.post("/api/v2/automations").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(AutomationResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowAutomation: (automationId) =>
      HttpClientRequest.get(`/api/v2/automations/${automationId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(AutomationResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    UpdateAutomation: (automationId) =>
      HttpClientRequest.put(`/api/v2/automations/${automationId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(AutomationResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    DeleteAutomation: (automationId) =>
      HttpClientRequest.del(`/api/v2/automations/${automationId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "204": () => Effect.void,
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListActiveAutomations: () =>
      HttpClientRequest.get("/api/v2/automations/active").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(AutomationsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    BulkDeleteAutomations: (options) =>
      HttpClientRequest.del("/api/v2/automations/destroy_many").pipe(
        HttpClientRequest.setUrlParams({ ids: options?.["ids"] as any }),
        withResponse(
          HttpClientResponse.matchStatus({
            "204": () => Effect.void,
            orElse: unexpectedStatus,
          }),
        ),
      ),
    SearchAutomations: () =>
      HttpClientRequest.get("/api/v2/automations/search").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(AutomationsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    UpdateManyAutomations: () =>
      HttpClientRequest.put("/api/v2/automations/update_many").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(AutomationsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListBookmarks: () =>
      HttpClientRequest.get("/api/v2/bookmarks").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(BookmarksResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CreateBookmark: (options) =>
      HttpClientRequest.post("/api/v2/bookmarks").pipe(
        HttpClientRequest.bodyUnsafeJson(options),
        withResponse(
          HttpClientResponse.matchStatus({
            "200": decodeSuccess(BookmarkResponse),
            "201": decodeSuccess(BookmarkResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    DeleteBookmark: (bookmarkId) =>
      HttpClientRequest.del(`/api/v2/bookmarks/${bookmarkId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "204": () => Effect.void,
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListBrandAgents: (options) =>
      HttpClientRequest.get("/api/v2/brand_agents").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(BrandAgentsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowBrandAgentById: (brandAgentId, options) =>
      HttpClientRequest.get(`/api/v2/brand_agents/${brandAgentId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(BrandAgentResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListBrands: () =>
      HttpClientRequest.get("/api/v2/brands").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(BrandsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CreateBrand: (options) =>
      HttpClientRequest.post("/api/v2/brands").pipe(
        HttpClientRequest.bodyUnsafeJson(options),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(BrandResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowBrand: (brandId, options) =>
      HttpClientRequest.get(`/api/v2/brands/${brandId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(BrandResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    UpdateBrand: (brandId, options) =>
      HttpClientRequest.put(`/api/v2/brands/${brandId}`).pipe(
        HttpClientRequest.bodyUnsafeJson(options.payload),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(BrandResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    DeleteBrand: (brandId, options) =>
      HttpClientRequest.del(`/api/v2/brands/${brandId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "204": () => Effect.void,
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CheckHostMappingValidityForExistingBrand: (brandId, options) =>
      HttpClientRequest.get(
        `/api/v2/brands/${brandId}/check_host_mapping`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(HostMappingObject),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CheckHostMappingValidity: (options) =>
      HttpClientRequest.get("/api/v2/brands/check_host_mapping").pipe(
        HttpClientRequest.setUrlParams({
          host_mapping: options?.["host_mapping"] as any,
          subdomain: options?.["subdomain"] as any,
        }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(HostMappingObject),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListMonitoredTwitterHandles: () =>
      HttpClientRequest.get(
        "/api/v2/channels/twitter/monitored_twitter_handles",
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TwitterChannelsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowMonitoredTwitterHandle: (monitoredTwitterHandleId) =>
      HttpClientRequest.get(
        `/api/v2/channels/twitter/monitored_twitter_handles/${monitoredTwitterHandleId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TwitterChannelResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CreateTicketFromTweet: () =>
      HttpClientRequest.post("/api/v2/channels/twitter/tickets").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(CreateTicketFromTweet201),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    GettingTwicketStatus: (commentId, options) =>
      HttpClientRequest.get(
        `/api/v2/channels/twitter/tickets/${commentId}/statuses`,
      ).pipe(
        HttpClientRequest.setUrlParams({ ids: options?.["ids"] as any }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TwitterChannelTwicketStatusResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    OpenTicketInAgentBrowser: (agentId, ticketId, options) =>
      HttpClientRequest.post(
        `/api/v2/channels/voice/agents/${agentId}/tickets/${ticketId}/display`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(OpenTicketInAgentBrowser200),
            "404": decodeError(
              "OpenTicketInAgentBrowser404",
              OpenTicketInAgentBrowser404,
            ),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    OpenUsersProfileInAgentBrowser: (agentId, userId, options) =>
      HttpClientRequest.post(
        `/api/v2/channels/voice/agents/${agentId}/users/${userId}/display`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(OpenUsersProfileInAgentBrowser200),
            "404": decodeError(
              "OpenUsersProfileInAgentBrowser404",
              OpenUsersProfileInAgentBrowser404,
            ),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CreateTicketOrVoicemailTicket: (options) =>
      HttpClientRequest.post("/api/v2/channels/voice/tickets").pipe(
        HttpClientRequest.bodyUnsafeJson(options.payload),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TicketResponse),
            "404": decodeError(
              "CreateTicketOrVoicemailTicket404",
              CreateTicketOrVoicemailTicket404,
            ),
            "422": decodeError(
              "CreateTicketOrVoicemailTicket422",
              CreateTicketOrVoicemailTicket422,
            ),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    RedactChatCommentAttachment: (ticketId) =>
      HttpClientRequest.put(`/api/v2/chat_file_redactions/${ticketId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TicketChatCommentRedactionResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    RedactChatComment: (ticketId) =>
      HttpClientRequest.put(`/api/v2/chat_redactions/${ticketId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TicketChatCommentRedactionResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    RedactTicketCommentInAgentWorkspace: (ticketCommentId) =>
      HttpClientRequest.put(
        `/api/v2/comment_redactions/${ticketCommentId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TicketCommentResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListCustomObjects: () =>
      HttpClientRequest.get("/api/v2/custom_objects").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(CustomObjectsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CreateCustomObject: (options) =>
      HttpClientRequest.post("/api/v2/custom_objects").pipe(
        HttpClientRequest.bodyUnsafeJson(options),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(CustomObjectResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowCustomObject: (customObjectKey, options) =>
      HttpClientRequest.get(`/api/v2/custom_objects/${customObjectKey}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(CustomObjectResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    DeleteCustomObject: (customObjectKey, options) =>
      HttpClientRequest.del(`/api/v2/custom_objects/${customObjectKey}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "204": () => Effect.void,
            orElse: unexpectedStatus,
          }),
        ),
      ),
    UpdateCustomObject: (customObjectKey, options) =>
      HttpClientRequest.patch(`/api/v2/custom_objects/${customObjectKey}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(CustomObjectResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListCustomObjectFields: (customObjectKey, options) =>
      HttpClientRequest.get(
        `/api/v2/custom_objects/${customObjectKey}/fields`,
      ).pipe(
        HttpClientRequest.setUrlParams({
          include_standard_fields: options?.["include_standard_fields"] as any,
        }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(CustomObjectFieldsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CreateCustomObjectField: (customObjectKey, options) =>
      HttpClientRequest.post(
        `/api/v2/custom_objects/${customObjectKey}/fields`,
      ).pipe(
        HttpClientRequest.bodyUnsafeJson(options.payload),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(CustomObjectFieldResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowCustomObjectField: (
      customObjectKey,
      customObjectFieldKeyOrId,
      options,
    ) =>
      HttpClientRequest.get(
        `/api/v2/custom_objects/${customObjectKey}/fields/${customObjectFieldKeyOrId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(CustomObjectFieldResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    DeleteCustomObjectField: (
      customObjectKey,
      customObjectFieldKeyOrId,
      options,
    ) =>
      HttpClientRequest.del(
        `/api/v2/custom_objects/${customObjectKey}/fields/${customObjectFieldKeyOrId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "204": () => Effect.void,
            orElse: unexpectedStatus,
          }),
        ),
      ),
    UpdateCustomObjectField: (
      customObjectKey,
      customObjectFieldKeyOrId,
      options,
    ) =>
      HttpClientRequest.patch(
        `/api/v2/custom_objects/${customObjectKey}/fields/${customObjectFieldKeyOrId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(CustomObjectFieldResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ReorderCustomObjectFields: (customObjectKey, options) =>
      HttpClientRequest.put(
        `/api/v2/custom_objects/${customObjectKey}/fields/reorder`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ReorderCustomObjectFields200),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CustomObjectRecordBulkJobs: (customObjectKey, options) =>
      HttpClientRequest.post(
        `/api/v2/custom_objects/${customObjectKey}/jobs`,
      ).pipe(
        HttpClientRequest.bodyUnsafeJson(options.payload),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(CustomObjectRecordsJobsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CustomObjectFieldsLimit: (customObjectKey, options) =>
      HttpClientRequest.get(
        `/api/v2/custom_objects/${customObjectKey}/limits/field_limit`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(CustomObjectLimitsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListCustomObjectRecords: (customObjectKey, options) =>
      HttpClientRequest.get(
        `/api/v2/custom_objects/${customObjectKey}/records`,
      ).pipe(
        HttpClientRequest.setUrlParams({
          "filter[ids]": options?.["filter[ids]"] as any,
          "filter[external_ids]": options?.["filter[external_ids]"] as any,
          sort: options?.["sort"] as any,
          "page[before]": options?.["page[before]"] as any,
          "page[after]": options?.["page[after]"] as any,
          "page[size]": options?.["page[size]"] as any,
        }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(CustomObjectRecordsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CreateCustomObjectRecord: (customObjectKey, options) =>
      HttpClientRequest.post(
        `/api/v2/custom_objects/${customObjectKey}/records`,
      ).pipe(
        HttpClientRequest.bodyUnsafeJson(options.payload),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(CustomObjectRecordResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    DeleteCustomObjectRecordByExternalIdOrName: (customObjectKey, options) =>
      HttpClientRequest.del(
        `/api/v2/custom_objects/${customObjectKey}/records`,
      ).pipe(
        HttpClientRequest.setUrlParams({
          external_id: options?.["external_id"] as any,
          name: options?.["name"] as any,
        }),
        withResponse(
          HttpClientResponse.matchStatus({
            "204": () => Effect.void,
            orElse: unexpectedStatus,
          }),
        ),
      ),
    UpsertCustomObjectRecordByExternalIdOrName: (customObjectKey, options) =>
      HttpClientRequest.patch(
        `/api/v2/custom_objects/${customObjectKey}/records`,
      ).pipe(
        HttpClientRequest.setUrlParams({
          external_id: options.params?.["external_id"] as any,
          name: options.params?.["name"] as any,
        }),
        HttpClientRequest.bodyUnsafeJson(options.payload),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(CustomObjectRecordResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowCustomObjectRecord: (customObjectKey, customObjectRecordId, options) =>
      HttpClientRequest.get(
        `/api/v2/custom_objects/${customObjectKey}/records/${customObjectRecordId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(CustomObjectRecordResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    DeleteCustomObjectRecord: (
      customObjectKey,
      customObjectRecordId,
      options,
    ) =>
      HttpClientRequest.del(
        `/api/v2/custom_objects/${customObjectKey}/records/${customObjectRecordId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "204": () => Effect.void,
            orElse: unexpectedStatus,
          }),
        ),
      ),
    UpdateCustomObjectRecord: (
      customObjectKey,
      customObjectRecordId,
      options,
    ) =>
      HttpClientRequest.patch(
        `/api/v2/custom_objects/${customObjectKey}/records/${customObjectRecordId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(CustomObjectRecordResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    AutocompleteCustomObjectRecordSearch: (customObjectKey, options) =>
      HttpClientRequest.get(
        `/api/v2/custom_objects/${customObjectKey}/records/autocomplete`,
      ).pipe(
        HttpClientRequest.setUrlParams({
          name: options?.["name"] as any,
          "page[before]": options?.["page[before]"] as any,
          "page[after]": options?.["page[after]"] as any,
          "page[size]": options?.["page[size]"] as any,
          field_id: options?.["field_id"] as any,
          source: options?.["source"] as any,
          requester_id: options?.["requester_id"] as any,
          assignee_id: options?.["assignee_id"] as any,
          organization_id: options?.["organization_id"] as any,
        }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(CustomObjectRecordsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CountCustomObjectRecords: (customObjectKey, options) =>
      HttpClientRequest.get(
        `/api/v2/custom_objects/${customObjectKey}/records/count`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(CountCustomObjectRecords200),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    SearchCustomObjectRecords: (customObjectKey, options) =>
      HttpClientRequest.get(
        `/api/v2/custom_objects/${customObjectKey}/records/search`,
      ).pipe(
        HttpClientRequest.setUrlParams({
          query: options?.["query"] as any,
          sort: options?.["sort"] as any,
          "page[before]": options?.["page[before]"] as any,
          "page[after]": options?.["page[after]"] as any,
          "page[size]": options?.["page[size]"] as any,
        }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(CustomObjectRecordsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    FilteredSearchCustomObjectRecords: (customObjectKey, options) =>
      HttpClientRequest.post(
        `/api/v2/custom_objects/${customObjectKey}/records/search`,
      ).pipe(
        HttpClientRequest.setUrlParams({
          query: options.params?.["query"] as any,
          sort: options.params?.["sort"] as any,
          "page[before]": options.params?.["page[before]"] as any,
          "page[after]": options.params?.["page[after]"] as any,
          "page[size]": options.params?.["page[size]"] as any,
        }),
        HttpClientRequest.bodyUnsafeJson(options.payload),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(CustomObjectRecordsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListObjectTriggers: (customObjectKey, options) =>
      HttpClientRequest.get(
        `/api/v2/custom_objects/${customObjectKey}/triggers`,
      ).pipe(
        HttpClientRequest.setUrlParams({
          active: options?.["active"] as any,
          sort_by: options?.["sort_by"] as any,
          sort_order: options?.["sort_order"] as any,
        }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ObjectTriggersResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CreateObjectTrigger: (customObjectKey, options) =>
      HttpClientRequest.post(
        `/api/v2/custom_objects/${customObjectKey}/triggers`,
      ).pipe(
        HttpClientRequest.bodyUnsafeJson(options),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ObjectTriggerResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    GetObjectTrigger: (customObjectKey, triggerId) =>
      HttpClientRequest.get(
        `/api/v2/custom_objects/${customObjectKey}/triggers/${triggerId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ObjectTriggerResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    UpdateObjectTrigger: (customObjectKey, triggerId, options) =>
      HttpClientRequest.put(
        `/api/v2/custom_objects/${customObjectKey}/triggers/${triggerId}`,
      ).pipe(
        HttpClientRequest.bodyUnsafeJson(options),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ObjectTriggerResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    DeleteObjectTrigger: (customObjectKey, triggerId) =>
      HttpClientRequest.del(
        `/api/v2/custom_objects/${customObjectKey}/triggers/${triggerId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "204": () => Effect.void,
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListActiveObjectTriggers: (customObjectKey) =>
      HttpClientRequest.get(
        `/api/v2/custom_objects/${customObjectKey}/triggers/active`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ObjectTriggersResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListObjectTriggersDefinitions: (customObjectKey) =>
      HttpClientRequest.get(
        `/api/v2/custom_objects/${customObjectKey}/triggers/definitions`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ObjectTriggerDefinitionResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    DeleteManyObjectTriggers: (customObjectKey) =>
      HttpClientRequest.del(
        `/api/v2/custom_objects/${customObjectKey}/triggers/destroy_many`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "204": () => Effect.void,
            orElse: unexpectedStatus,
          }),
        ),
      ),
    SearchObjectTriggers: (customObjectKey) =>
      HttpClientRequest.get(
        `/api/v2/custom_objects/${customObjectKey}/triggers/search`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ObjectTriggersResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    UpdateManyObjectTriggers: (customObjectKey, options) =>
      HttpClientRequest.put(
        `/api/v2/custom_objects/${customObjectKey}/triggers/update_many`,
      ).pipe(
        HttpClientRequest.bodyUnsafeJson(options),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ObjectTriggersResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CustomObjectsLimit: () =>
      HttpClientRequest.get("/api/v2/custom_objects/limits/object_limit").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(CustomObjectLimitsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CustomObjectRecordsLimit: () =>
      HttpClientRequest.get("/api/v2/custom_objects/limits/record_limit").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(CustomObjectLimitsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListCustomRoles: () =>
      HttpClientRequest.get("/api/v2/custom_roles").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(CustomRolesResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CreateCustomRole: () =>
      HttpClientRequest.post("/api/v2/custom_roles").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(CustomRoleResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowCustomRoleById: (customRoleId) =>
      HttpClientRequest.get(`/api/v2/custom_roles/${customRoleId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(CustomRoleResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    UpdateCustomRoleById: (customRoleId) =>
      HttpClientRequest.put(`/api/v2/custom_roles/${customRoleId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(CustomRoleResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    DeleteCustomRoleById: (customRoleId) =>
      HttpClientRequest.del(`/api/v2/custom_roles/${customRoleId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "204": () => Effect.void,
            orElse: unexpectedStatus,
          }),
        ),
      ),
    BulkUpdateDefaultCustomStatus: (options) =>
      HttpClientRequest.put("/api/v2/custom_status/default").pipe(
        HttpClientRequest.bodyUnsafeJson(options),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(BulkUpdateDefaultCustomStatusResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListCustomStatuses: (options) =>
      HttpClientRequest.get("/api/v2/custom_statuses").pipe(
        HttpClientRequest.setUrlParams({
          status_categories: options?.["status_categories"] as any,
          active: options?.["active"] as any,
          default: options?.["default"] as any,
        }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(CustomStatusesResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CreateCustomStatus: (options) =>
      HttpClientRequest.post("/api/v2/custom_statuses").pipe(
        HttpClientRequest.bodyUnsafeJson(options),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(CustomStatusResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowCustomStatus: (customStatusId, options) =>
      HttpClientRequest.get(`/api/v2/custom_statuses/${customStatusId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(CustomStatusResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    UpdateCustomStatus: (customStatusId, options) =>
      HttpClientRequest.put(`/api/v2/custom_statuses/${customStatusId}`).pipe(
        HttpClientRequest.bodyUnsafeJson(options.payload),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(CustomStatusResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CreateTicketFormStatusesForCustomStatus: (customStatusId, options) =>
      HttpClientRequest.post(
        `/api/v2/custom_statuses/${customStatusId}/ticket_form_statuses`,
      ).pipe(
        HttpClientRequest.bodyUnsafeJson(options),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TicketFormStatusesResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListDeletedTickets: (options) =>
      HttpClientRequest.get("/api/v2/deleted_tickets").pipe(
        HttpClientRequest.setUrlParams({
          sort_by: options?.["sort_by"] as any,
          sort_order: options?.["sort_order"] as any,
        }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ListDeletedTicketsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    DeleteTicketPermanently: (ticketId, options) =>
      HttpClientRequest.del(`/api/v2/deleted_tickets/${ticketId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(JobStatusResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    RestoreDeletedTicket: (ticketId, options) =>
      HttpClientRequest.put(`/api/v2/deleted_tickets/${ticketId}/restore`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(RestoreDeletedTicket200),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    BulkPermanentlyDeleteTickets: (options) =>
      HttpClientRequest.del("/api/v2/deleted_tickets/destroy_many").pipe(
        HttpClientRequest.setUrlParams({ ids: options?.["ids"] as any }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(JobStatusResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    BulkRestoreDeletedTickets: (options) =>
      HttpClientRequest.put("/api/v2/deleted_tickets/restore_many").pipe(
        HttpClientRequest.setUrlParams({ ids: options?.["ids"] as any }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(BulkRestoreDeletedTickets200),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListDeletedUsers: () =>
      HttpClientRequest.get("/api/v2/deleted_users").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(DeletedUsersResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowDeletedUser: (deletedUserId) =>
      HttpClientRequest.get(`/api/v2/deleted_users/${deletedUserId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(DeletedUserResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    PermanentlyDeleteUser: (deletedUserId) =>
      HttpClientRequest.del(`/api/v2/deleted_users/${deletedUserId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(DeletedUserResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CountDeletedUsers: () =>
      HttpClientRequest.get("/api/v2/deleted_users/count").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(CountResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListDeletionSchedules: () =>
      HttpClientRequest.get("/api/v2/deletion_schedules").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ListDeletionSchedules200),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CreateDeletionSchedule: (options) =>
      HttpClientRequest.post("/api/v2/deletion_schedules").pipe(
        HttpClientRequest.bodyUnsafeJson(options),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(CreateDeletionSchedule201),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    GetDeletionSchedule: (deletionScheduleId, options) =>
      HttpClientRequest.get(
        `/api/v2/deletion_schedules/${deletionScheduleId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(GetDeletionSchedule200),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    UpdateDeletionSchedule: (deletionScheduleId, options) =>
      HttpClientRequest.put(
        `/api/v2/deletion_schedules/${deletionScheduleId}`,
      ).pipe(
        HttpClientRequest.bodyUnsafeJson(options.payload),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(UpdateDeletionSchedule200),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    DeleteDeletionSchedule: (deletionScheduleId, options) =>
      HttpClientRequest.del(
        `/api/v2/deletion_schedules/${deletionScheduleId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "204": () => Effect.void,
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListDynamicContents: () =>
      HttpClientRequest.get("/api/v2/dynamic_content/items").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(DynamicContentsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CreateDynamicContent: () =>
      HttpClientRequest.post("/api/v2/dynamic_content/items").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(DynamicContentResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowDynamicContentItem: (dynamicContentItemId) =>
      HttpClientRequest.get(
        `/api/v2/dynamic_content/items/${dynamicContentItemId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(DynamicContentResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    UpdateDynamicContentItem: (dynamicContentItemId) =>
      HttpClientRequest.put(
        `/api/v2/dynamic_content/items/${dynamicContentItemId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(DynamicContentResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    DeleteDynamicContentItem: (dynamicContentItemId) =>
      HttpClientRequest.del(
        `/api/v2/dynamic_content/items/${dynamicContentItemId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "204": () => Effect.void,
            orElse: unexpectedStatus,
          }),
        ),
      ),
    DynamicContentListVariants: (dynamicContentItemId) =>
      HttpClientRequest.get(
        `/api/v2/dynamic_content/items/${dynamicContentItemId}/variants`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(DynamicContentVariantsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CreateDynamicContentVariant: (dynamicContentItemId) =>
      HttpClientRequest.post(
        `/api/v2/dynamic_content/items/${dynamicContentItemId}/variants`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(DynamicContentVariantResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowDynamicContentVariant: (
      dynamicContentItemId,
      dynammicContentVariantId,
    ) =>
      HttpClientRequest.get(
        `/api/v2/dynamic_content/items/${dynamicContentItemId}/variants/${dynammicContentVariantId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(DynamicContentVariantResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    UpdateDynamicContentVariant: (
      dynamicContentItemId,
      dynammicContentVariantId,
    ) =>
      HttpClientRequest.put(
        `/api/v2/dynamic_content/items/${dynamicContentItemId}/variants/${dynammicContentVariantId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(DynamicContentVariantResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    DeleteDynamicContentVariant: (
      dynamicContentItemId,
      dynammicContentVariantId,
    ) =>
      HttpClientRequest.del(
        `/api/v2/dynamic_content/items/${dynamicContentItemId}/variants/${dynammicContentVariantId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "204": () => Effect.void,
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CreateManyDynamicContentVariants: (dynamicContentItemId) =>
      HttpClientRequest.post(
        `/api/v2/dynamic_content/items/${dynamicContentItemId}/variants/create_many`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(DynamicContentVariantsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    UpdateManyDynamicContentVariants: (dynamicContentItemId) =>
      HttpClientRequest.put(
        `/api/v2/dynamic_content/items/${dynamicContentItemId}/variants/update_many`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(DynamicContentVariantsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowManyDynamicContents: (options) =>
      HttpClientRequest.get("/api/v2/dynamic_content/items/show_many").pipe(
        HttpClientRequest.setUrlParams({
          identifiers: options?.["identifiers"] as any,
        }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(DynamicContentsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListEmailNotifications: () =>
      HttpClientRequest.get("/api/v2/email_notifications").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(EmailNotificationsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowEmailNotification: (notificationId) =>
      HttpClientRequest.get(
        `/api/v2/email_notifications/${notificationId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(EmailNotificationResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowManyEmailNotifications: () =>
      HttpClientRequest.get("/api/v2/email_notifications/show_many").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(EmailNotificationResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListGroupMemberships: (options) =>
      HttpClientRequest.get("/api/v2/group_memberships").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(GroupMembershipsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CreateGroupMembership: () =>
      HttpClientRequest.post("/api/v2/group_memberships").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(GroupMembershipResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowGroupMembershipById: (groupMembershipId) =>
      HttpClientRequest.get(
        `/api/v2/group_memberships/${groupMembershipId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(GroupMembershipResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    DeleteGroupMembership: (groupMembershipId) =>
      HttpClientRequest.del(
        `/api/v2/group_memberships/${groupMembershipId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "204": () => Effect.void,
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListAssignableGroupMemberships: () =>
      HttpClientRequest.get("/api/v2/group_memberships/assignable").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(GroupMembershipsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    GroupMembershipBulkCreate: () =>
      HttpClientRequest.post("/api/v2/group_memberships/create_many").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(JobStatusResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    GroupMembershipBulkDelete: (options) =>
      HttpClientRequest.del("/api/v2/group_memberships/destroy_many").pipe(
        HttpClientRequest.setUrlParams({ ids: options?.["ids"] as any }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(JobStatusResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListGroupSLAPolicies: () =>
      HttpClientRequest.get("/api/v2/group_slas/policies").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(GroupSLAPoliciesResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CreateGroupSLAPolicy: () =>
      HttpClientRequest.post("/api/v2/group_slas/policies").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(GroupSLAPolicyResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowGroupSLAPolicy: (groupSlaPolicyId) =>
      HttpClientRequest.get(
        `/api/v2/group_slas/policies/${groupSlaPolicyId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(GroupSLAPolicyResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    UpdateGroupSLAPolicy: (groupSlaPolicyId) =>
      HttpClientRequest.put(
        `/api/v2/group_slas/policies/${groupSlaPolicyId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(GroupSLAPolicyResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    DeleteGroupSLAPolicy: (groupSlaPolicyId) =>
      HttpClientRequest.del(
        `/api/v2/group_slas/policies/${groupSlaPolicyId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "204": () => Effect.void,
            orElse: unexpectedStatus,
          }),
        ),
      ),
    RetrieveGroupSLAPolicyFilterDefinitionItems: () =>
      HttpClientRequest.get("/api/v2/group_slas/policies/definitions").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(GroupSLAPolicyFilterDefinitionResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ReorderGroupSLAPolicies: (options) =>
      HttpClientRequest.put("/api/v2/group_slas/policies/reorder").pipe(
        HttpClientRequest.setUrlParams({
          group_sla_policy_ids: options?.["group_sla_policy_ids"] as any,
        }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ReorderGroupSLAPolicies200),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListGroups: (options) =>
      HttpClientRequest.get("/api/v2/groups").pipe(
        HttpClientRequest.setUrlParams({
          exclude_deleted: options?.["exclude_deleted"] as any,
        }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(GroupsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CreateGroup: () =>
      HttpClientRequest.post("/api/v2/groups").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(GroupResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowGroupById: (groupId) =>
      HttpClientRequest.get(`/api/v2/groups/${groupId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(GroupResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    UpdateGroup: (groupId) =>
      HttpClientRequest.put(`/api/v2/groups/${groupId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(GroupResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    DeleteGroup: (groupId) =>
      HttpClientRequest.del(`/api/v2/groups/${groupId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "204": () => Effect.void,
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListAssignableGroups: () =>
      HttpClientRequest.get("/api/v2/groups/assignable").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(GroupsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CountGroups: () =>
      HttpClientRequest.get("/api/v2/groups/count").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(GroupsCountObject),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    TicketImport: (options) =>
      HttpClientRequest.post("/api/v2/imports/tickets").pipe(
        HttpClientRequest.setUrlParams({
          archive_immediately: options.params?.["archive_immediately"] as any,
        }),
        HttpClientRequest.bodyUnsafeJson(options.payload),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TicketResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    TicketBulkImport: (options) =>
      HttpClientRequest.post("/api/v2/imports/tickets/create_many").pipe(
        HttpClientRequest.setUrlParams({
          archive_immediately: options.params?.["archive_immediately"] as any,
        }),
        HttpClientRequest.bodyUnsafeJson(options.payload),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(JobStatusResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    IncrementalSampleExport: (incrementalResource) =>
      HttpClientRequest.get(
        `/api/v2/incremental/${incrementalResource}/sample`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TimeBasedExportIncrementalTicketsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    IncrementalOrganizationExport: () =>
      HttpClientRequest.get("/api/v2/incremental/organizations").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ExportIncrementalOrganizationsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    IncrementalSkilBasedRoutingAttributeValuesExport: () =>
      HttpClientRequest.get(
        "/api/v2/incremental/routing/attribute_values",
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(IncrementalSkillBasedRouting),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    IncrementalSkilBasedRoutingAttributesExport: () =>
      HttpClientRequest.get("/api/v2/incremental/routing/attributes").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(IncrementalSkillBasedRouting),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    IncrementalSkilBasedRoutingInstanceValuesExport: () =>
      HttpClientRequest.get("/api/v2/incremental/routing/instance_values").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(IncrementalSkillBasedRouting),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    IncrementalTicketEvents: () =>
      HttpClientRequest.get("/api/v2/incremental/ticket_events").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ExportIncrementalTicketEventsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListTicketMetricEvents: (options) =>
      HttpClientRequest.get("/api/v2/incremental/ticket_metric_events").pipe(
        HttpClientRequest.setUrlParams({
          start_time: options?.["start_time"] as any,
          include_changes: options?.["include_changes"] as any,
        }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TicketMetricEventsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    IncrementalTicketExportTime: () =>
      HttpClientRequest.get("/api/v2/incremental/tickets").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TimeBasedExportIncrementalTicketsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    IncrementalTicketExportCursor: () =>
      HttpClientRequest.get("/api/v2/incremental/tickets/cursor").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(CursorBasedExportIncrementalTicketsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    IncrementalUserExportTime: () =>
      HttpClientRequest.get("/api/v2/incremental/users").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TimeBasedExportIncrementalUsersResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    IncrementalUserExportCursor: () =>
      HttpClientRequest.get("/api/v2/incremental/users/cursor").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(CursorBasedExportIncrementalUsersResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListJobStatuses: () =>
      HttpClientRequest.get("/api/v2/job_statuses").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(JobStatusesResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowJobStatus: (jobStatusId) =>
      HttpClientRequest.get(`/api/v2/job_statuses/${jobStatusId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(JobStatusResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowManyJobStatuses: (options) =>
      HttpClientRequest.get("/api/v2/job_statuses/show_many").pipe(
        HttpClientRequest.setUrlParams({ ids: options?.["ids"] as any }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(JobStatusesResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListLocales: () =>
      HttpClientRequest.get("/api/v2/locales").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(LocalesResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowLocaleById: (localeId) =>
      HttpClientRequest.get(`/api/v2/locales/${localeId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(LocaleResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListLocalesForAgent: () =>
      HttpClientRequest.get("/api/v2/locales/agent").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(LocalesResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowCurrentLocale: () =>
      HttpClientRequest.get("/api/v2/locales/current").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(LocaleResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    DetectBestLocale: () =>
      HttpClientRequest.get("/api/v2/locales/detect_best_locale").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(LocaleResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListAvailablePublicLocales: () =>
      HttpClientRequest.get("/api/v2/locales/public").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(LocalesResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListMacros: (options) =>
      HttpClientRequest.get("/api/v2/macros").pipe(
        HttpClientRequest.setUrlParams({
          include: options?.["include"] as any,
          access: options?.["access"] as any,
          active: options?.["active"] as any,
          category: options?.["category"] as any,
          group_id: options?.["group_id"] as any,
          only_viewable: options?.["only_viewable"] as any,
          sort_by: options?.["sort_by"] as any,
          sort_order: options?.["sort_order"] as any,
        }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(MacrosResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CreateMacro: (options) =>
      HttpClientRequest.post("/api/v2/macros").pipe(
        HttpClientRequest.bodyUnsafeJson(options),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(CreateMacro200),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowMacro: (macroId) =>
      HttpClientRequest.get(`/api/v2/macros/${macroId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(MacroResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    UpdateMacro: (macroId, options) =>
      HttpClientRequest.put(`/api/v2/macros/${macroId}`).pipe(
        HttpClientRequest.bodyUnsafeJson(options),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(UpdateMacro200),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    DeleteMacro: (macroId) =>
      HttpClientRequest.del(`/api/v2/macros/${macroId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "204": () => Effect.void,
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowChangesToTicket: (macroId) =>
      HttpClientRequest.get(`/api/v2/macros/${macroId}/apply`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(MacroApplyTicketResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListMacroAttachments: (macroId) =>
      HttpClientRequest.get(`/api/v2/macros/${macroId}/attachments`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(MacroAttachmentsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CreateAssociatedMacroAttachment: (macroId) =>
      HttpClientRequest.post(`/api/v2/macros/${macroId}/attachments`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(MacroAttachmentResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListMacrosActions: () =>
      HttpClientRequest.get("/api/v2/macros/actions").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ListMacrosActions200),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListActiveMacros: (options) =>
      HttpClientRequest.get("/api/v2/macros/active").pipe(
        HttpClientRequest.setUrlParams({
          include: options?.["include"] as any,
          access: options?.["access"] as any,
          category: options?.["category"] as any,
          group_id: options?.["group_id"] as any,
          sort_by: options?.["sort_by"] as any,
          sort_order: options?.["sort_order"] as any,
        }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(MacrosResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CreateMacroAttachment: () =>
      HttpClientRequest.post("/api/v2/macros/attachments").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(MacroAttachmentResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowMacroAttachment: (attachmentId) =>
      HttpClientRequest.get(`/api/v2/macros/attachments/${attachmentId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(MacroAttachmentResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListMacroCategories: () =>
      HttpClientRequest.get("/api/v2/macros/categories").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(MacroCategoriesResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListMacroActionDefinitions: () =>
      HttpClientRequest.get("/api/v2/macros/definitions").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ListMacroActionDefinitions200),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    DeleteManyMacros: (options) =>
      HttpClientRequest.del("/api/v2/macros/destroy_many").pipe(
        HttpClientRequest.setUrlParams({ ids: options?.["ids"] as any }),
        withResponse(
          HttpClientResponse.matchStatus({
            "204": () => Effect.void,
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowDerivedMacro: () =>
      HttpClientRequest.get("/api/v2/macros/new").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(MacroResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    SearchMacro: () =>
      HttpClientRequest.get("/api/v2/macros/search").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(MacrosResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    UpdateManyMacros: (options) =>
      HttpClientRequest.put("/api/v2/macros/update_many").pipe(
        HttpClientRequest.bodyUnsafeJson(options),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(MacrosResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListOAuthClients: () =>
      HttpClientRequest.get("/api/v2/oauth/clients").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(OAuthClientsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CreateOAuthClient: () =>
      HttpClientRequest.post("/api/v2/oauth/clients").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(OauthClientResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowClient: (oauthClientId) =>
      HttpClientRequest.get(`/api/v2/oauth/clients/${oauthClientId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(OauthClientResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    UpdateClient: (oauthClientId) =>
      HttpClientRequest.put(`/api/v2/oauth/clients/${oauthClientId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(OauthClientResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    DeleteClient: (oauthClientId) =>
      HttpClientRequest.del(`/api/v2/oauth/clients/${oauthClientId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "204": () => Effect.void,
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ClientGenerateSecret: (oauthClientId) =>
      HttpClientRequest.put(
        `/api/v2/oauth/clients/${oauthClientId}/generate_secret`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(OauthClientResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListGlobalOAuthClients: () =>
      HttpClientRequest.get("/api/v2/oauth/global_clients").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(GlobalClientsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowGlobalClient: (globalClientId) =>
      HttpClientRequest.get(
        `/api/v2/oauth/global_clients/${globalClientId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(GlobalClientResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    GlobalOAuthClientsTokenSummary: () =>
      HttpClientRequest.get("/api/v2/oauth/global_clients/token_summary").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(GlobalClientsTokenSummaryResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListOAuthTokens: () =>
      HttpClientRequest.get("/api/v2/oauth/tokens").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(OAuthTokensResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CreateOAuthToken: () =>
      HttpClientRequest.post("/api/v2/oauth/tokens").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(OAuthTokenResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowToken: (oauthTokenId) =>
      HttpClientRequest.get(`/api/v2/oauth/tokens/${oauthTokenId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(OAuthTokenResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    RevokeOAuthToken: (oauthTokenId) =>
      HttpClientRequest.del(`/api/v2/oauth/tokens/${oauthTokenId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "204": () => Effect.void,
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowEssentialsCard: (objectType) =>
      HttpClientRequest.get(
        `/api/v2/object_layouts/${objectType}/essentials_card`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(EssentialsCardResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    UpdateEssentialsCard: (objectType) =>
      HttpClientRequest.put(
        `/api/v2/object_layouts/${objectType}/essentials_card`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(EssentialsCardResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    DeleteEssentialsCard: (objectType) =>
      HttpClientRequest.del(
        `/api/v2/object_layouts/${objectType}/essentials_card`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "204": () => Effect.void,
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowEssentialsCards: () =>
      HttpClientRequest.get("/api/v2/object_layouts/essentials_cards").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(EssentialsCardsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListOrganizationFields: () =>
      HttpClientRequest.get("/api/v2/organization_fields").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(OrganizationFieldsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CreateOrganizationField: () =>
      HttpClientRequest.post("/api/v2/organization_fields").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(OrganizationFieldResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowOrganizationField: (organizationFieldId) =>
      HttpClientRequest.get(
        `/api/v2/organization_fields/${organizationFieldId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(OrganizationFieldResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    UpdateOrganizationField: (organizationFieldId) =>
      HttpClientRequest.put(
        `/api/v2/organization_fields/${organizationFieldId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(OrganizationFieldResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    DeleteOrganizationField: (organizationFieldId) =>
      HttpClientRequest.del(
        `/api/v2/organization_fields/${organizationFieldId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "204": () => Effect.void,
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ReorderOrganizationField: () =>
      HttpClientRequest.put("/api/v2/organization_fields/reorder").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ReorderOrganizationField200),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListOrganizationMemberships: () =>
      HttpClientRequest.get("/api/v2/organization_memberships").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(OrganizationMembershipsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CreateOrganizationMembership: () =>
      HttpClientRequest.post("/api/v2/organization_memberships").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(OrganizationMembershipResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowOrganizationMembershipById: (organizationMembershipId) =>
      HttpClientRequest.get(
        `/api/v2/organization_memberships/${organizationMembershipId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(OrganizationMembershipResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    DeleteOrganizationMembership: (organizationMembershipId) =>
      HttpClientRequest.del(
        `/api/v2/organization_memberships/${organizationMembershipId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "204": () => Effect.void,
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CreateManyOrganizationMemberships: () =>
      HttpClientRequest.post(
        "/api/v2/organization_memberships/create_many",
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(JobStatusResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    DeleteManyOrganizationMemberships: (options) =>
      HttpClientRequest.del(
        "/api/v2/organization_memberships/destroy_many",
      ).pipe(
        HttpClientRequest.setUrlParams({ ids: options?.["ids"] as any }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(JobStatusResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowOrganizationMerge: (organizationMergeId) =>
      HttpClientRequest.get(
        `/api/v2/organization_merges/${organizationMergeId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(OrganizationMergeResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListOrganizationSubscriptions: () =>
      HttpClientRequest.get("/api/v2/organization_subscriptions").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(OrganizationSubscriptionsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CreateOrganizationSubscription: (options) =>
      HttpClientRequest.post("/api/v2/organization_subscriptions").pipe(
        HttpClientRequest.bodyUnsafeJson(options),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(OrganizationSubscriptionResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowOrganizationSubscription: (organizationSubscriptionId, options) =>
      HttpClientRequest.get(
        `/api/v2/organization_subscriptions/${organizationSubscriptionId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(OrganizationSubscriptionResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    DeleteOrganizationSubscription: (organizationSubscriptionId, options) =>
      HttpClientRequest.del(
        `/api/v2/organization_subscriptions/${organizationSubscriptionId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "204": () => Effect.void,
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListOrganizations: () =>
      HttpClientRequest.get("/api/v2/organizations").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(OrganizationsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CreateOrganization: (options) =>
      HttpClientRequest.post("/api/v2/organizations").pipe(
        HttpClientRequest.bodyUnsafeJson(options),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(OrganizationResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowOrganization: (organizationId) =>
      HttpClientRequest.get(`/api/v2/organizations/${organizationId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(OrganizationResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    UpdateOrganization: (organizationId) =>
      HttpClientRequest.put(`/api/v2/organizations/${organizationId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(OrganizationResponse),
            "429": decodeError("Errors", Errors),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    DeleteOrganization: (organizationId) =>
      HttpClientRequest.del(`/api/v2/organizations/${organizationId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "204": () => Effect.void,
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CreateOrganizationMerge: (organizationId, options) =>
      HttpClientRequest.post(
        `/api/v2/organizations/${organizationId}/merge`,
      ).pipe(
        HttpClientRequest.bodyUnsafeJson(options),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(OrganizationMergeResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListOrganizationMerges: (organizationId) =>
      HttpClientRequest.get(
        `/api/v2/organizations/${organizationId}/merges`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(OrganizationMergeListResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    OrganizationRelated: (organizationId) =>
      HttpClientRequest.get(
        `/api/v2/organizations/${organizationId}/related`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(OrganizationsRelatedResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    AutocompleteOrganizations: () =>
      HttpClientRequest.get("/api/v2/organizations/autocomplete").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(OrganizationsResponse),
            "400": decodeError("Errors", Errors),
            "429": decodeError("Errors", Errors),
            "500": decodeError("Errors", Errors),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CountOrganizations: () =>
      HttpClientRequest.get("/api/v2/organizations/count").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(CountOrganizationResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CreateManyOrganizations: () =>
      HttpClientRequest.post("/api/v2/organizations/create_many").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(JobStatusResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CreateOrUpdateOrganization: () =>
      HttpClientRequest.post("/api/v2/organizations/create_or_update").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "200": decodeSuccess(OrganizationResponse),
            "201": decodeSuccess(OrganizationResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    DeleteManyOrganizations: () =>
      HttpClientRequest.del("/api/v2/organizations/destroy_many").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(JobStatusResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    SearchOrganizations: () =>
      HttpClientRequest.get("/api/v2/organizations/search").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(OrganizationsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowManyOrganizations: () =>
      HttpClientRequest.get("/api/v2/organizations/show_many").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(OrganizationsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    UpdateManyOrganizations: () =>
      HttpClientRequest.put("/api/v2/organizations/update_many").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(JobStatusResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListTicketProblems: () =>
      HttpClientRequest.get("/api/v2/problems").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ListTicketProblemsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    AutocompleteProblems: (options) =>
      HttpClientRequest.post("/api/v2/problems/autocomplete").pipe(
        HttpClientRequest.setUrlParams({
          text: options.params?.["text"] as any,
        }),
        HttpClientRequest.bodyUnsafeJson(options.payload),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ListTicketProblemsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    PushNotificationDevices: (options) =>
      HttpClientRequest.post(
        "/api/v2/push_notification_devices/destroy_many",
      ).pipe(
        HttpClientRequest.bodyUnsafeJson(options),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(PushNotificationDevices200),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListQueues: () =>
      HttpClientRequest.get("/api/v2/queues").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(QueuesResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CreateQueue: () =>
      HttpClientRequest.post("/api/v2/queues").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(QueueResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowQueueById: (queueId) =>
      HttpClientRequest.get(`/api/v2/queues/${queueId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(QueueResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    UpdateQueue: (queueId) =>
      HttpClientRequest.put(`/api/v2/queues/${queueId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(QueueResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    DeleteQueue: (queueId) =>
      HttpClientRequest.del(`/api/v2/queues/${queueId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "204": () => Effect.void,
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListQueueDefinitions: () =>
      HttpClientRequest.get("/api/v2/queues/definitions").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(DefinitionsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ReorderQueues: () =>
      HttpClientRequest.patch("/api/v2/queues/order").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "204": () => Effect.void,
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListSupportAddresses: () =>
      HttpClientRequest.get("/api/v2/recipient_addresses").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(SupportAddressesResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CreateSupportAddress: () =>
      HttpClientRequest.post("/api/v2/recipient_addresses").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(SupportAddressResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowSupportAddress: (supportAddressId) =>
      HttpClientRequest.get(
        `/api/v2/recipient_addresses/${supportAddressId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(SupportAddressResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    UpdateSupportAddress: (supportAddressId) =>
      HttpClientRequest.put(
        `/api/v2/recipient_addresses/${supportAddressId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(SupportAddressResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    DeleteRecipientAddress: (supportAddressId) =>
      HttpClientRequest.del(
        `/api/v2/recipient_addresses/${supportAddressId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "204": () => Effect.void,
            orElse: unexpectedStatus,
          }),
        ),
      ),
    VerifySupportAddressForwarding: (supportAddressId) =>
      HttpClientRequest.put(
        `/api/v2/recipient_addresses/${supportAddressId}/verify`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(VerifySupportAddressForwarding200),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    GetRelationshipFilterDefinitions: (targetType, options) =>
      HttpClientRequest.get(
        `/api/v2/relationships/definitions/${targetType}`,
      ).pipe(
        HttpClientRequest.setUrlParams({
          source_type: options?.["source_type"] as any,
        }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(RelationshipFilterDefinitionResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListRequests: (options) =>
      HttpClientRequest.get("/api/v2/requests").pipe(
        HttpClientRequest.setUrlParams({
          sort_by: options?.["sort_by"] as any,
          sort_order: options?.["sort_order"] as any,
        }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(RequestsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CreateRequest: () =>
      HttpClientRequest.post("/api/v2/requests").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(RequestResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowRequest: (requestId) =>
      HttpClientRequest.get(`/api/v2/requests/${requestId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(RequestResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    UpdateRequest: (requestId) =>
      HttpClientRequest.put(`/api/v2/requests/${requestId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(RequestResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListComments: (requestId, options) =>
      HttpClientRequest.get(`/api/v2/requests/${requestId}/comments`).pipe(
        HttpClientRequest.setUrlParams({
          since: options?.["since"] as any,
          role: options?.["role"] as any,
        }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TicketCommentsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowComment: (requestId, ticketCommentId) =>
      HttpClientRequest.get(
        `/api/v2/requests/${requestId}/comments/${ticketCommentId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TicketCommentResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    SearchRequests: (options) =>
      HttpClientRequest.get("/api/v2/requests/search").pipe(
        HttpClientRequest.setUrlParams({ query: options?.["query"] as any }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(RequestsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListResourceCollections: () =>
      HttpClientRequest.get("/api/v2/resource_collections").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ResourceCollectionsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CreateResourceCollection: () =>
      HttpClientRequest.post("/api/v2/resource_collections").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(JobStatusResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    RetrieveResourceCollection: (resourceCollectionId) =>
      HttpClientRequest.get(
        `/api/v2/resource_collections/${resourceCollectionId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ResourceCollectionResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    UpdateResourceCollection: (resourceCollectionId) =>
      HttpClientRequest.put(
        `/api/v2/resource_collections/${resourceCollectionId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(JobStatusResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    DeleteResourceCollection: (resourceCollectionId) =>
      HttpClientRequest.del(
        `/api/v2/resource_collections/${resourceCollectionId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(JobStatusResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListAGentAttributeValues: (userId) =>
      HttpClientRequest.get(
        `/api/v2/routing/agents/${userId}/instance_values`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(SkillBasedRoutingAttributeValuesResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    SetAgentAttributeValues: (userId) =>
      HttpClientRequest.post(
        `/api/v2/routing/agents/${userId}/instance_values`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(SkillBasedRoutingAttributeValuesResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListManyAgentsAttributeValues: (options) =>
      HttpClientRequest.get("/api/v2/routing/agents/instance_values").pipe(
        HttpClientRequest.setUrlParams({
          "filter[agent_ids]": options?.["filter[agent_ids]"] as any,
          "page[before]": options?.["page[before]"] as any,
          "page[after]": options?.["page[after]"] as any,
          "page[size]": options?.["page[size]"] as any,
        }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ManySkillBasedRoutingAttributeValuesResponse),
            "400": decodeError(
              "SkillBasedRoutingAttributeValuesError",
              SkillBasedRoutingAttributeValuesError,
            ),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    BulkSetAgentAttributeValuesJob: (options) =>
      HttpClientRequest.post("/api/v2/routing/agents/instance_values/job").pipe(
        HttpClientRequest.bodyUnsafeJson(options),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(JobStatusResponse),
            "400": decodeError(
              "SkillBasedRoutingAttributeValuesError",
              SkillBasedRoutingAttributeValuesError,
            ),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListAccountAttributes: () =>
      HttpClientRequest.get("/api/v2/routing/attributes").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(SkillBasedRoutingAttributesResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CreateAttribute: () =>
      HttpClientRequest.post("/api/v2/routing/attributes").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(SkillBasedRoutingAttributeResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowAttribute: (attributeId) =>
      HttpClientRequest.get(`/api/v2/routing/attributes/${attributeId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(SkillBasedRoutingAttributeResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    UpdateAttribute: (attributeId) =>
      HttpClientRequest.put(`/api/v2/routing/attributes/${attributeId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(SkillBasedRoutingAttributeResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    DeleteAttribute: (attributeId) =>
      HttpClientRequest.del(`/api/v2/routing/attributes/${attributeId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "204": () => Effect.void,
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListAttributeValues: (attributeId) =>
      HttpClientRequest.get(
        `/api/v2/routing/attributes/${attributeId}/values`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(SkillBasedRoutingAttributeValuesResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CreateAttributeValue: (attributeId) =>
      HttpClientRequest.post(
        `/api/v2/routing/attributes/${attributeId}/values`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(SkillBasedRoutingAttributeValueResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowAttributeValue: (attributeId, attributeValueId) =>
      HttpClientRequest.get(
        `/api/v2/routing/attributes/${attributeId}/values/${attributeValueId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(SkillBasedRoutingAttributeValueResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    DeleteAttributeValue: (attributeId, attributeValueId) =>
      HttpClientRequest.del(
        `/api/v2/routing/attributes/${attributeId}/values/${attributeValueId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "204": () => Effect.void,
            orElse: unexpectedStatus,
          }),
        ),
      ),
    UpdateAttributeValue: (attributeId, attributeValueId) =>
      HttpClientRequest.patch(
        `/api/v2/routing/attributes/${attributeId}/values/${attributeValueId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(SkillBasedRoutingAttributeValueResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListRoutingAttributeDefinitions: () =>
      HttpClientRequest.get("/api/v2/routing/attributes/definitions").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(SkillBasedRoutingAttributeDefinitions),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListTicketsFullfilledByUser: (options) =>
      HttpClientRequest.get("/api/v2/routing/requirements/fulfilled").pipe(
        HttpClientRequest.setUrlParams({
          ticket_ids: options?.["ticket_ids"] as any,
        }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(SkillBasedRoutingTicketFulfilledResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListTicketAttributeValues: (ticketId) =>
      HttpClientRequest.get(
        `/api/v2/routing/tickets/${ticketId}/instance_values`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(SkillBasedRoutingAttributeValuesResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    SetTicketAttributeValues: (ticketId) =>
      HttpClientRequest.post(
        `/api/v2/routing/tickets/${ticketId}/instance_values`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(SkillBasedRoutingAttributeValuesResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListSatisfactionRatings: () =>
      HttpClientRequest.get("/api/v2/satisfaction_ratings").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(SatisfactionRatingsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowSatisfactionRating: (satisfactionRatingId) =>
      HttpClientRequest.get(
        `/api/v2/satisfaction_ratings/${satisfactionRatingId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(SatisfactionRatingResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CountSatisfactionRatings: () =>
      HttpClientRequest.get("/api/v2/satisfaction_ratings/count").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(SatisfactionRatingsCountResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListSatisfactionRatingReasons: () =>
      HttpClientRequest.get("/api/v2/satisfaction_reasons").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(SatisfactionReasonsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowSatisfactionRatings: (satisfactionReasonId) =>
      HttpClientRequest.get(
        `/api/v2/satisfaction_reasons/${satisfactionReasonId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(SatisfactionReasonResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListSearchResults: (options) =>
      HttpClientRequest.get("/api/v2/search").pipe(
        HttpClientRequest.setUrlParams({
          query: options?.["query"] as any,
          sort_by: options?.["sort_by"] as any,
          sort_order: options?.["sort_order"] as any,
        }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(SearchResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CountSearchResults: (options) =>
      HttpClientRequest.get("/api/v2/search/count").pipe(
        HttpClientRequest.setUrlParams({ query: options?.["query"] as any }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(SearchCountResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ExportSearchResults: (options) =>
      HttpClientRequest.get("/api/v2/search/export").pipe(
        HttpClientRequest.setUrlParams({
          query: options?.["query"] as any,
          "page[size]": options?.["page[size]"] as any,
          "filter[type]": options?.["filter[type]"] as any,
        }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(SearchExportResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListSessions: () =>
      HttpClientRequest.get("/api/v2/sessions").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(SessionsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListSharingAgreements: () =>
      HttpClientRequest.get("/api/v2/sharing_agreements").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(SharingAgreementsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CreateSharingAgreement: () =>
      HttpClientRequest.post("/api/v2/sharing_agreements").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(SharingAgreementResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowSharingAgreement: (sharingAgreementId) =>
      HttpClientRequest.get(
        `/api/v2/sharing_agreements/${sharingAgreementId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(SharingAgreementResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    UpdateSharingAgreement: (sharingAgreementId) =>
      HttpClientRequest.put(
        `/api/v2/sharing_agreements/${sharingAgreementId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(SharingAgreementResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    DeleteSharingAgreement: (sharingAgreementId) =>
      HttpClientRequest.del(
        `/api/v2/sharing_agreements/${sharingAgreementId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "204": () => Effect.void,
            orElse: unexpectedStatus,
          }),
        ),
      ),
    RecordNewSkip: () =>
      HttpClientRequest.post("/api/v2/skips").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TicketSkipCreation),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListSLAPolicies: () =>
      HttpClientRequest.get("/api/v2/slas/policies").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(SLAPoliciesResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CreateSLAPolicy: () =>
      HttpClientRequest.post("/api/v2/slas/policies").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(SLAPolicyResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowSLAPolicy: (slaPolicyId) =>
      HttpClientRequest.get(`/api/v2/slas/policies/${slaPolicyId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(SLAPolicyResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    UpdateSLAPolicy: (slaPolicyId) =>
      HttpClientRequest.put(`/api/v2/slas/policies/${slaPolicyId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(SLAPolicyResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    DeleteSLAPolicy: (slaPolicyId) =>
      HttpClientRequest.del(`/api/v2/slas/policies/${slaPolicyId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "204": () => Effect.void,
            orElse: unexpectedStatus,
          }),
        ),
      ),
    RetrieveSLAPolicyFilterDefinitionItems: () =>
      HttpClientRequest.get("/api/v2/slas/policies/definitions").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(SLAPolicyFilterDefinitionResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ReorderSLAPolicies: (options) =>
      HttpClientRequest.put("/api/v2/slas/policies/reorder").pipe(
        HttpClientRequest.setUrlParams({
          sla_policy_ids: options?.["sla_policy_ids"] as any,
        }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ReorderSLAPolicies200),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListSuspendedTickets: () =>
      HttpClientRequest.get("/api/v2/suspended_tickets").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(SuspendedTicketsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowSuspendedTickets: (id, options) =>
      HttpClientRequest.get(`/api/v2/suspended_tickets/${id}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(SuspendedTicketsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    DeleteSuspendedTicket: (id, options) =>
      HttpClientRequest.del(`/api/v2/suspended_tickets/${id}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "204": () => Effect.void,
            orElse: unexpectedStatus,
          }),
        ),
      ),
    RecoverSuspendedTicket: (id, options) =>
      HttpClientRequest.put(`/api/v2/suspended_tickets/${id}/recover`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(RecoverSuspendedTicketResponse),
            "422": decodeError(
              "RecoverSuspendedTicketUnprocessableContentResponse",
              RecoverSuspendedTicketUnprocessableContentResponse,
            ),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    SuspendedTicketsAttachments: () =>
      HttpClientRequest.post("/api/v2/suspended_tickets/attachments").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(SuspendedTicketsAttachmentsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    DeleteSuspendedTickets: () =>
      HttpClientRequest.del("/api/v2/suspended_tickets/destroy_many").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "204": () => Effect.void,
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ExportSuspendedTickets: () =>
      HttpClientRequest.post("/api/v2/suspended_tickets/export").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(SuspendedTicketsExportResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    RecoverSuspendedTickets: () =>
      HttpClientRequest.put("/api/v2/suspended_tickets/recover_many").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(RecoverSuspendedTicketsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListTags: () =>
      HttpClientRequest.get("/api/v2/tags").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TagsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CountTags: () =>
      HttpClientRequest.get("/api/v2/tags/count").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TagCountResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListTargetFailures: () =>
      HttpClientRequest.get("/api/v2/target_failures").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TargetFailuresResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowTargetFailure: (targetFailureId) =>
      HttpClientRequest.get(`/api/v2/target_failures/${targetFailureId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TargetFailureResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListTargets: () =>
      HttpClientRequest.get("/api/v2/targets").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TargetsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CreateTarget: () =>
      HttpClientRequest.post("/api/v2/targets").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TargetResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowTarget: (targetId) =>
      HttpClientRequest.get(`/api/v2/targets/${targetId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TargetResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    UpdateTarget: (targetId) =>
      HttpClientRequest.put(`/api/v2/targets/${targetId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TargetResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    DeleteTarget: (targetId) =>
      HttpClientRequest.del(`/api/v2/targets/${targetId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "204": () => Effect.void,
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListTicketAudits: (options) =>
      HttpClientRequest.get("/api/v2/ticket_audits").pipe(
        HttpClientRequest.setUrlParams({
          "page[before]": options?.["page[before]"] as any,
          "page[after]": options?.["page[after]"] as any,
          "page[size]": options?.["page[size]"] as any,
        }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TicketAuditsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListTicketFields: (options) =>
      HttpClientRequest.get("/api/v2/ticket_fields").pipe(
        HttpClientRequest.setUrlParams({
          locale: options?.["locale"] as any,
          creator: options?.["creator"] as any,
        }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TicketFieldsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CreateTicketField: () =>
      HttpClientRequest.post("/api/v2/ticket_fields").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TicketFieldResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowTicketfield: (ticketFieldId) =>
      HttpClientRequest.get(`/api/v2/ticket_fields/${ticketFieldId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TicketFieldResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    UpdateTicketField: (ticketFieldId) =>
      HttpClientRequest.put(`/api/v2/ticket_fields/${ticketFieldId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TicketFieldResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    DeleteTicketField: (ticketFieldId) =>
      HttpClientRequest.del(`/api/v2/ticket_fields/${ticketFieldId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "204": () => Effect.void,
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListTicketFieldOptions: (ticketFieldId) =>
      HttpClientRequest.get(
        `/api/v2/ticket_fields/${ticketFieldId}/options`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(CustomFieldOptionsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CreateOrUpdateTicketFieldOption: (ticketFieldId) =>
      HttpClientRequest.post(
        `/api/v2/ticket_fields/${ticketFieldId}/options`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "200": decodeSuccess(CustomFieldOptionResponse),
            "201": decodeSuccess(CustomFieldOptionResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowTicketFieldOption: (ticketFieldId, ticketFieldOptionId) =>
      HttpClientRequest.get(
        `/api/v2/ticket_fields/${ticketFieldId}/options/${ticketFieldOptionId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(CustomFieldOptionResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    DeleteTicketFieldOption: (ticketFieldId, ticketFieldOptionId) =>
      HttpClientRequest.del(
        `/api/v2/ticket_fields/${ticketFieldId}/options/${ticketFieldOptionId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "204": () => Effect.void,
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CountTicketFields: () =>
      HttpClientRequest.get("/api/v2/ticket_fields/count").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TicketFieldCountResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ReorderTicketFields: () =>
      HttpClientRequest.put("/api/v2/ticket_fields/reorder").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ReorderTicketFields200),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListTicketFormStatuses: () =>
      HttpClientRequest.get("/api/v2/ticket_form_statuses").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TicketFormStatusesResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowManyTicketFormStatuses: (options) =>
      HttpClientRequest.get("/api/v2/ticket_form_statuses/show_many").pipe(
        HttpClientRequest.setUrlParams({ ids: options?.["ids"] as any }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TicketFormStatusesResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListTicketForms: (options) =>
      HttpClientRequest.get("/api/v2/ticket_forms").pipe(
        HttpClientRequest.setUrlParams({
          active: options?.["active"] as any,
          end_user_visible: options?.["end_user_visible"] as any,
          fallback_to_default: options?.["fallback_to_default"] as any,
          associated_to_brand: options?.["associated_to_brand"] as any,
        }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TicketFormsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CreateTicketForm: () =>
      HttpClientRequest.post("/api/v2/ticket_forms").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TicketFormResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowTicketForm: (ticketFormId) =>
      HttpClientRequest.get(`/api/v2/ticket_forms/${ticketFormId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TicketFormResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    UpdateTicketForm: (ticketFormId) =>
      HttpClientRequest.put(`/api/v2/ticket_forms/${ticketFormId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TicketFormResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    DeleteTicketForm: (ticketFormId) =>
      HttpClientRequest.del(`/api/v2/ticket_forms/${ticketFormId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "204": () => Effect.void,
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CloneTicketForm: (ticketFormId) =>
      HttpClientRequest.post(`/api/v2/ticket_forms/${ticketFormId}/clone`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TicketFormResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    TicketFormTicketFormStatuses: (ticketFormId) =>
      HttpClientRequest.get(
        `/api/v2/ticket_forms/${ticketFormId}/ticket_form_statuses`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TicketFormStatusesResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    UpdateTicketFormStatuses: (ticketFormId, options) =>
      HttpClientRequest.put(
        `/api/v2/ticket_forms/${ticketFormId}/ticket_form_statuses`,
      ).pipe(
        HttpClientRequest.bodyUnsafeJson(options),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TicketFormStatusesResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CreateTicketFormStatuses: (ticketFormId, options) =>
      HttpClientRequest.post(
        `/api/v2/ticket_forms/${ticketFormId}/ticket_form_statuses`,
      ).pipe(
        HttpClientRequest.bodyUnsafeJson(options),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TicketFormStatusesResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    DeleteTicketFormStatuses: (ticketFormId, options) =>
      HttpClientRequest.del(
        `/api/v2/ticket_forms/${ticketFormId}/ticket_form_statuses`,
      ).pipe(
        HttpClientRequest.bodyUnsafeJson(options),
        withResponse(
          HttpClientResponse.matchStatus({
            "204": () => Effect.void,
            orElse: unexpectedStatus,
          }),
        ),
      ),
    UpdateTicketFormStatusById: (ticketFormId, ticketFormStatusId, options) =>
      HttpClientRequest.put(
        `/api/v2/ticket_forms/${ticketFormId}/ticket_form_statuses/${ticketFormStatusId}`,
      ).pipe(
        HttpClientRequest.bodyUnsafeJson(options),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TicketFormStatusesResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    DeleteTicketFormStatusById: (ticketFormId, ticketFormStatusId) =>
      HttpClientRequest.del(
        `/api/v2/ticket_forms/${ticketFormId}/ticket_form_statuses/${ticketFormStatusId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "204": () => Effect.void,
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ReorderTicketForms: () =>
      HttpClientRequest.put("/api/v2/ticket_forms/reorder").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TicketFormsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowManyTicketForms: (options) =>
      HttpClientRequest.get("/api/v2/ticket_forms/show_many").pipe(
        HttpClientRequest.setUrlParams({
          ids: options?.["ids"] as any,
          active: options?.["active"] as any,
          end_user_visible: options?.["end_user_visible"] as any,
          fallback_to_default: options?.["fallback_to_default"] as any,
          associated_to_brand: options?.["associated_to_brand"] as any,
        }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TicketFormsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListTicketMetrics: () =>
      HttpClientRequest.get("/api/v2/ticket_metrics").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TicketMetricsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowTicketMetrics: (ticketMetricId) =>
      HttpClientRequest.get(`/api/v2/ticket_metrics/${ticketMetricId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TicketMetricsByTicketMetricIdResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListTickets: (options) =>
      HttpClientRequest.get("/api/v2/tickets").pipe(
        HttpClientRequest.setUrlParams({
          external_id: options?.["external_id"] as any,
        }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TicketsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CreateTicket: (options) =>
      HttpClientRequest.post("/api/v2/tickets").pipe(
        HttpClientRequest.bodyUnsafeJson(options),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TicketResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowTicket: (ticketId, options) =>
      HttpClientRequest.get(`/api/v2/tickets/${ticketId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TicketResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    UpdateTicket: (ticketId, options) =>
      HttpClientRequest.put(`/api/v2/tickets/${ticketId}`).pipe(
        HttpClientRequest.bodyUnsafeJson(options.payload),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TicketUpdateResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    DeleteTicket: (ticketId, options) =>
      HttpClientRequest.del(`/api/v2/tickets/${ticketId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "204": () => Effect.void,
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListAuditsForTicket: (ticketId) =>
      HttpClientRequest.get(`/api/v2/tickets/${ticketId}/audits`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TicketAuditsResponseNoneCursor),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowTicketAudit: (ticketId, ticketAuditId) =>
      HttpClientRequest.get(
        `/api/v2/tickets/${ticketId}/audits/${ticketAuditId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TicketAuditResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    MakeTicketCommentPrivateFromAudits: (ticketId, ticketAuditId) =>
      HttpClientRequest.put(
        `/api/v2/tickets/${ticketId}/audits/${ticketAuditId}/make_private`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(MakeTicketCommentPrivateFromAudits200),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CountAuditsForTicket: (ticketId) =>
      HttpClientRequest.get(`/api/v2/tickets/${ticketId}/audits/count`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TicketAuditsCountResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListTicketCollaborators: (ticketId, options) =>
      HttpClientRequest.get(`/api/v2/tickets/${ticketId}/collaborators`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ListTicketCollaboratorsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListTicketComments: (ticketId, options) =>
      HttpClientRequest.get(`/api/v2/tickets/${ticketId}/comments`).pipe(
        HttpClientRequest.setUrlParams({
          include_inline_images: options?.["include_inline_images"] as any,
          include: options?.["include"] as any,
        }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TicketCommentsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    RedactCommentAttachment: (ticketId, commentId, attachmentId) =>
      HttpClientRequest.put(
        `/api/v2/tickets/${ticketId}/comments/${commentId}/attachments/${attachmentId}/redact`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(AttachmentResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    MakeTicketCommentPrivate: (ticketId, ticketCommentId) =>
      HttpClientRequest.put(
        `/api/v2/tickets/${ticketId}/comments/${ticketCommentId}/make_private`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(MakeTicketCommentPrivate200),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    RedactStringInComment: (ticketId, ticketCommentId) =>
      HttpClientRequest.put(
        `/api/v2/tickets/${ticketId}/comments/${ticketCommentId}/redact`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TicketCommentResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CountTicketComments: (ticketId, options) =>
      HttpClientRequest.get(`/api/v2/tickets/${ticketId}/comments/count`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TicketCommentsCountResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListConversationLogForTicket: (ticketId, options) =>
      HttpClientRequest.get(
        `/api/v2/tickets/${ticketId}/conversation_log`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ConversationLogResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListTicketEmailCCs: (ticketId, options) =>
      HttpClientRequest.get(`/api/v2/tickets/${ticketId}/email_ccs`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ListTicketEmailCCsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListTicketFollowers: (ticketId, options) =>
      HttpClientRequest.get(`/api/v2/tickets/${ticketId}/followers`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ListTicketFollowersResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListTicketIncidents: (ticketId, options) =>
      HttpClientRequest.get(`/api/v2/tickets/${ticketId}/incidents`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ListTicketIncidentsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowTicketAfterChanges: (ticketId, macroId) =>
      HttpClientRequest.get(
        `/api/v2/tickets/${ticketId}/macros/${macroId}/apply`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(MacroApplyTicketResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    MarkTicketAsSpamAndSuspendRequester: (ticketId, options) =>
      HttpClientRequest.put(`/api/v2/tickets/${ticketId}/mark_as_spam`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(MarkTicketAsSpamAndSuspendRequester200),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    MergeTicketsIntoTargetTicket: (ticketId, options) =>
      HttpClientRequest.post(`/api/v2/tickets/${ticketId}/merge`).pipe(
        HttpClientRequest.bodyUnsafeJson(options.payload),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(JobStatusResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    TicketRelatedInformation: (ticketId, options) =>
      HttpClientRequest.get(`/api/v2/tickets/${ticketId}/related`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TicketRelatedInformation),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CreateTicketSatisfactionRating: (ticketId) =>
      HttpClientRequest.post(
        `/api/v2/tickets/${ticketId}/satisfaction_rating`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(SatisfactionRatingResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListResourceTags: (ticketId) =>
      HttpClientRequest.get(`/api/v2/tickets/${ticketId}/tags`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TagsByObjectIdResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    PutTagsTicket: (ticketId) =>
      HttpClientRequest.put(`/api/v2/tickets/${ticketId}/tags`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TagsByObjectIdResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    SetTagsTicket: (ticketId) =>
      HttpClientRequest.post(`/api/v2/tickets/${ticketId}/tags`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TagsByObjectIdResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    DeleteTagsTicket: (ticketId) =>
      HttpClientRequest.del(`/api/v2/tickets/${ticketId}/tags`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TagsByObjectIdResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CountTickets: () =>
      HttpClientRequest.get("/api/v2/tickets/count").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(CountTickets200),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    TicketsCreateMany: (options) =>
      HttpClientRequest.post("/api/v2/tickets/create_many").pipe(
        HttpClientRequest.bodyUnsafeJson(options),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(JobStatusResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    BulkDeleteTickets: (options) =>
      HttpClientRequest.del("/api/v2/tickets/destroy_many").pipe(
        HttpClientRequest.setUrlParams({ ids: options?.["ids"] as any }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(JobStatusResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    MarkManyTicketsAsSpam: (options) =>
      HttpClientRequest.put("/api/v2/tickets/mark_many_as_spam").pipe(
        HttpClientRequest.setUrlParams({ ids: options?.["ids"] as any }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(JobStatusResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    TicketsShowMany: (options) =>
      HttpClientRequest.get("/api/v2/tickets/show_many").pipe(
        HttpClientRequest.setUrlParams({ ids: options?.["ids"] as any }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TicketsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    TicketsUpdateMany: (options) =>
      HttpClientRequest.put("/api/v2/tickets/update_many").pipe(
        HttpClientRequest.setUrlParams({ ids: options?.["ids"] as any }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(JobStatusResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListTriggerCategories: (options) =>
      HttpClientRequest.get("/api/v2/trigger_categories").pipe(
        HttpClientRequest.setUrlParams({
          "page[after]": options?.["page[after]"] as any,
          "page[before]": options?.["page[before]"] as any,
          "page[size]": options?.["page[size]"] as any,
          sort: options?.["sort"] as any,
          include: options?.["include"] as any,
        }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ListTriggerCategories200),
            "400": decodeError("Errors", Errors),
            "403": decodeError("Errors", Errors),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CreateTriggerCategory: (options) =>
      HttpClientRequest.post("/api/v2/trigger_categories").pipe(
        HttpClientRequest.bodyUnsafeJson(options),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TriggerCategoryResponse),
            "400": decodeError("Errors", Errors),
            "403": decodeError("Errors", Errors),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowTriggerCategoryById: (triggerCategoryId) =>
      HttpClientRequest.get(
        `/api/v2/trigger_categories/${triggerCategoryId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TriggerCategoryResponse),
            "404": decodeError("Errors", Errors),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    DeleteTriggerCategory: (triggerCategoryId) =>
      HttpClientRequest.del(
        `/api/v2/trigger_categories/${triggerCategoryId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "400": decodeError("Errors", Errors),
            "404": decodeError("Errors", Errors),
            "204": () => Effect.void,
            orElse: unexpectedStatus,
          }),
        ),
      ),
    UpdateTriggerCategory: (triggerCategoryId, options) =>
      HttpClientRequest.patch(
        `/api/v2/trigger_categories/${triggerCategoryId}`,
      ).pipe(
        HttpClientRequest.bodyUnsafeJson(options),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TriggerCategoryResponse),
            "400": decodeError("Errors", Errors),
            "404": decodeError("Errors", Errors),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    BatchOperateTriggerCategories: (options) =>
      HttpClientRequest.post("/api/v2/trigger_categories/jobs").pipe(
        HttpClientRequest.bodyUnsafeJson(options),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(BatchJobResponse),
            "400": decodeError("BatchJobResponse", BatchJobResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListTriggers: (options) =>
      HttpClientRequest.get("/api/v2/triggers").pipe(
        HttpClientRequest.setUrlParams({
          active: options?.["active"] as any,
          sort: options?.["sort"] as any,
          sort_by: options?.["sort_by"] as any,
          sort_order: options?.["sort_order"] as any,
          category_id: options?.["category_id"] as any,
        }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TriggersResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CreateTrigger: (options) =>
      HttpClientRequest.post("/api/v2/triggers").pipe(
        HttpClientRequest.bodyUnsafeJson(options),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TriggerResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    GetTrigger: (triggerId) =>
      HttpClientRequest.get(`/api/v2/triggers/${triggerId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TriggerResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    UpdateTrigger: (triggerId, options) =>
      HttpClientRequest.put(`/api/v2/triggers/${triggerId}`).pipe(
        HttpClientRequest.bodyUnsafeJson(options),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TriggerResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    DeleteTrigger: (triggerId) =>
      HttpClientRequest.del(`/api/v2/triggers/${triggerId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "204": () => Effect.void,
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListTriggerRevisions: (triggerId) =>
      HttpClientRequest.get(`/api/v2/triggers/${triggerId}/revisions`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TriggerRevisionsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    TriggerRevision: (triggerId, triggerRevisionId) =>
      HttpClientRequest.get(
        `/api/v2/triggers/${triggerId}/revisions/${triggerRevisionId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TriggerRevisionResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListActiveTriggers: () =>
      HttpClientRequest.get("/api/v2/triggers/active").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TriggersResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListTriggerActionConditionDefinitions: () =>
      HttpClientRequest.get("/api/v2/triggers/definitions").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TriggerDefinitionResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    DeleteManyTriggers: () =>
      HttpClientRequest.del("/api/v2/triggers/destroy_many").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "204": () => Effect.void,
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ReorderTriggers: () =>
      HttpClientRequest.put("/api/v2/triggers/reorder").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TriggerResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    SearchTriggers: () =>
      HttpClientRequest.get("/api/v2/triggers/search").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TriggersResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    UpdateManyTriggers: (options) =>
      HttpClientRequest.put("/api/v2/triggers/update_many").pipe(
        HttpClientRequest.bodyUnsafeJson(options),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TriggersResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    UploadFiles: () =>
      HttpClientRequest.post("/api/v2/uploads").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(AttachmentUploadResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    DeleteUpload: (token) =>
      HttpClientRequest.del(`/api/v2/uploads/${token}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "204": () => Effect.void,
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListUserFields: () =>
      HttpClientRequest.get("/api/v2/user_fields").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(UserFieldsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CreateUserField: () =>
      HttpClientRequest.post("/api/v2/user_fields").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(UserFieldResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowUserField: (userFieldId) =>
      HttpClientRequest.get(`/api/v2/user_fields/${userFieldId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(UserFieldResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    UpdateUserField: (userFieldId) =>
      HttpClientRequest.put(`/api/v2/user_fields/${userFieldId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(UserFieldResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    DeleteUserField: (userFieldId) =>
      HttpClientRequest.del(`/api/v2/user_fields/${userFieldId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "204": () => Effect.void,
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListUserFieldOptions: (userFieldId) =>
      HttpClientRequest.get(`/api/v2/user_fields/${userFieldId}/options`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(CustomFieldOptionsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CreateOrUpdateUserFieldOption: (userFieldId) =>
      HttpClientRequest.post(`/api/v2/user_fields/${userFieldId}/options`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "200": decodeSuccess(CustomFieldOptionResponse),
            "201": decodeSuccess(CustomFieldOptionResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowUserFieldOption: (userFieldId, userFieldOptionId) =>
      HttpClientRequest.get(
        `/api/v2/user_fields/${userFieldId}/options/${userFieldOptionId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(CustomFieldOptionResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    DeleteUserFieldOption: (userFieldId, userFieldOptionId) =>
      HttpClientRequest.del(
        `/api/v2/user_fields/${userFieldId}/options/${userFieldOptionId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "204": () => Effect.void,
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ReorderUserField: () =>
      HttpClientRequest.put("/api/v2/user_fields/reorder").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ReorderUserField200),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListUsers: (options) =>
      HttpClientRequest.get("/api/v2/users").pipe(
        HttpClientRequest.setUrlParams({
          role: options?.["role"] as any,
          "role[]": options?.["role[]"] as any,
          permission_set: options?.["permission_set"] as any,
          external_id: options?.["external_id"] as any,
        }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(UsersResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CreateUser: (options) =>
      HttpClientRequest.post("/api/v2/users").pipe(
        HttpClientRequest.bodyUnsafeJson(options),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(UserResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowUser: (userId) =>
      HttpClientRequest.get(`/api/v2/users/${userId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(UserResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    UpdateUser: (userId, options) =>
      HttpClientRequest.put(`/api/v2/users/${userId}`).pipe(
        HttpClientRequest.bodyUnsafeJson(options),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(UserResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    DeleteUser: (userId) =>
      HttpClientRequest.del(`/api/v2/users/${userId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(UserResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowUserComplianceDeletionStatuses: (userId, options) =>
      HttpClientRequest.get(
        `/api/v2/users/${userId}/compliance_deletion_statuses`,
      ).pipe(
        HttpClientRequest.setUrlParams({
          application: options?.["application"] as any,
        }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ComplianceDeletionStatusesResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    GroupMembershipSetDefault: (userId, groupMembershipId) =>
      HttpClientRequest.put(
        `/api/v2/users/${userId}/group_memberships/${groupMembershipId}/make_default`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(GroupMembershipsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListUserIdentities: (userId) =>
      HttpClientRequest.get(`/api/v2/users/${userId}/identities`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(UserIdentitiesResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CreateUserIdentity: (userId) =>
      HttpClientRequest.post(`/api/v2/users/${userId}/identities`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(UserIdentityResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowUserIdentity: (userId, userIdentityId) =>
      HttpClientRequest.get(
        `/api/v2/users/${userId}/identities/${userIdentityId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(UserIdentityResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    UpdateUserIdentity: (userId, userIdentityId) =>
      HttpClientRequest.put(
        `/api/v2/users/${userId}/identities/${userIdentityId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(UserIdentityResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    DeleteUserIdentity: (userId, userIdentityId) =>
      HttpClientRequest.del(
        `/api/v2/users/${userId}/identities/${userIdentityId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "204": () => Effect.void,
            orElse: unexpectedStatus,
          }),
        ),
      ),
    MakeUserIdentityPrimary: (userId, userIdentityId) =>
      HttpClientRequest.put(
        `/api/v2/users/${userId}/identities/${userIdentityId}/make_primary`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(UserIdentitiesResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    RequestUserVerfication: (userId, userIdentityId) =>
      HttpClientRequest.put(
        `/api/v2/users/${userId}/identities/${userIdentityId}/request_verification`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(RequestUserVerfication200),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    VerifyUserIdentity: (userId, userIdentityId) =>
      HttpClientRequest.put(
        `/api/v2/users/${userId}/identities/${userIdentityId}/verify`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(UserIdentityResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    MergeEndUsers: (userId, options) =>
      HttpClientRequest.put(`/api/v2/users/${userId}/merge`).pipe(
        HttpClientRequest.bodyUnsafeJson(options),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(UserResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    SetOrganizationMembershipAsDefault: (userId, organizationMembershipId) =>
      HttpClientRequest.put(
        `/api/v2/users/${userId}/organization_memberships/${organizationMembershipId}/make_default`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(OrganizationMembershipsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    UnassignOrganization: (userId, organizationId) =>
      HttpClientRequest.del(
        `/api/v2/users/${userId}/organizations/${organizationId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "204": () => Effect.void,
            orElse: unexpectedStatus,
          }),
        ),
      ),
    SetOrganizationAsDefault: (userId, organizationId) =>
      HttpClientRequest.put(
        `/api/v2/users/${userId}/organizations/${organizationId}/make_default`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(OrganizationMembershipResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ChangeOwnPassword: (userId) =>
      HttpClientRequest.put(`/api/v2/users/${userId}/password`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ChangeOwnPassword200),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    SetUserPassword: (userId) =>
      HttpClientRequest.post(`/api/v2/users/${userId}/password`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(SetUserPassword200),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    GetUserPasswordRequirements: (userId) =>
      HttpClientRequest.get(
        `/api/v2/users/${userId}/password/requirements`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(UserPasswordRequirementsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowUserRelated: (userId) =>
      HttpClientRequest.get(`/api/v2/users/${userId}/related`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(UserRelatedResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    BulkDeleteSessionsByUserId: (userId) =>
      HttpClientRequest.del(`/api/v2/users/${userId}/sessions`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "204": () => Effect.void,
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowSession: (userId, sessionId) =>
      HttpClientRequest.get(
        `/api/v2/users/${userId}/sessions/${sessionId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(SessionResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    DeleteSession: (userId, sessionId) =>
      HttpClientRequest.del(
        `/api/v2/users/${userId}/sessions/${sessionId}`,
      ).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "204": () => Effect.void,
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListTicketSkips: (userId) =>
      HttpClientRequest.get(`/api/v2/users/${userId}/skips`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TicketSkipsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    AutocompleteUsers: (options) =>
      HttpClientRequest.get("/api/v2/users/autocomplete").pipe(
        HttpClientRequest.setUrlParams({
          name: options?.["name"] as any,
          field_id: options?.["field_id"] as any,
          source: options?.["source"] as any,
        }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(UsersResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CountUsers: (options) =>
      HttpClientRequest.get("/api/v2/users/count").pipe(
        HttpClientRequest.setUrlParams({
          role: options?.["role"] as any,
          "role[]": options?.["role[]"] as any,
          permission_set: options?.["permission_set"] as any,
        }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(CountResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CreateManyUsers: (options) =>
      HttpClientRequest.post("/api/v2/users/create_many").pipe(
        HttpClientRequest.bodyUnsafeJson(options),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(JobStatusResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CreateOrUpdateUser: (options) =>
      HttpClientRequest.post("/api/v2/users/create_or_update").pipe(
        HttpClientRequest.bodyUnsafeJson(options),
        withResponse(
          HttpClientResponse.matchStatus({
            "200": decodeSuccess(UserResponse),
            "201": decodeSuccess(UserResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CreateOrUpdateManyUsers: (options) =>
      HttpClientRequest.post("/api/v2/users/create_or_update_many").pipe(
        HttpClientRequest.bodyUnsafeJson(options),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(JobStatusResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    DestroyManyUsers: (options) =>
      HttpClientRequest.del("/api/v2/users/destroy_many").pipe(
        HttpClientRequest.setUrlParams({
          ids: options?.["ids"] as any,
          external_ids: options?.["external_ids"] as any,
        }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(JobStatusResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    LogoutManyUsers: (options) =>
      HttpClientRequest.post("/api/v2/users/logout_many").pipe(
        HttpClientRequest.setUrlParams({ ids: options?.["ids"] as any }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(LogoutManyUsers202),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowCurrentUser: () =>
      HttpClientRequest.get("/api/v2/users/me").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(CurrentUserResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    DeleteAuthenticatedSession: () =>
      HttpClientRequest.del("/api/v2/users/me/logout").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "204": () => Effect.void,
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowCurrentlyAuthenticatedSession: () =>
      HttpClientRequest.get("/api/v2/users/me/session").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(SessionResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    RenewCurrentSession: () =>
      HttpClientRequest.get("/api/v2/users/me/session/renew").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(RenewSessionResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    RequestUserCreate: (options) =>
      HttpClientRequest.post("/api/v2/users/request_create").pipe(
        HttpClientRequest.bodyUnsafeJson(options),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(RequestUserCreate200),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    SearchUsers: (options) =>
      HttpClientRequest.get("/api/v2/users/search").pipe(
        HttpClientRequest.setUrlParams({
          query: options?.["query"] as any,
          external_id: options?.["external_id"] as any,
        }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(UsersResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowManyUsers: (options) =>
      HttpClientRequest.get("/api/v2/users/show_many").pipe(
        HttpClientRequest.setUrlParams({
          ids: options?.["ids"] as any,
          external_ids: options?.["external_ids"] as any,
        }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(UsersResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    UpdateManyUsers: (options) =>
      HttpClientRequest.put("/api/v2/users/update_many").pipe(
        HttpClientRequest.setUrlParams({
          ids: options.params?.["ids"] as any,
          external_ids: options.params?.["external_ids"] as any,
        }),
        HttpClientRequest.bodyUnsafeJson(options.payload),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(JobStatusResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListViews: (options) =>
      HttpClientRequest.get("/api/v2/views").pipe(
        HttpClientRequest.setUrlParams({
          access: options?.["access"] as any,
          active: options?.["active"] as any,
          group_id: options?.["group_id"] as any,
          sort_by: options?.["sort_by"] as any,
          sort_order: options?.["sort_order"] as any,
        }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ViewsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CreateView: () =>
      HttpClientRequest.post("/api/v2/views").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ViewResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowView: (viewId) =>
      HttpClientRequest.get(`/api/v2/views/${viewId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ViewResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    UpdateView: (viewId) =>
      HttpClientRequest.put(`/api/v2/views/${viewId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ViewResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    DeleteView: (viewId) =>
      HttpClientRequest.del(`/api/v2/views/${viewId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "204": () => Effect.void,
            orElse: unexpectedStatus,
          }),
        ),
      ),
    GetViewCount: (viewId) =>
      HttpClientRequest.get(`/api/v2/views/${viewId}/count`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ViewCountResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ExecuteView: (viewId, options) =>
      HttpClientRequest.get(`/api/v2/views/${viewId}/execute`).pipe(
        HttpClientRequest.setUrlParams({
          sort_by: options?.["sort_by"] as any,
          sort_order: options?.["sort_order"] as any,
        }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ViewResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ExportView: (viewId) =>
      HttpClientRequest.get(`/api/v2/views/${viewId}/export`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ViewExportResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListTicketsFromView: (viewId, options) =>
      HttpClientRequest.get(`/api/v2/views/${viewId}/tickets`).pipe(
        HttpClientRequest.setUrlParams({
          sort_by: options?.["sort_by"] as any,
          sort_order: options?.["sort_order"] as any,
        }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(TicketsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListActiveViews: (options) =>
      HttpClientRequest.get("/api/v2/views/active").pipe(
        HttpClientRequest.setUrlParams({
          access: options?.["access"] as any,
          group_id: options?.["group_id"] as any,
          sort_by: options?.["sort_by"] as any,
          sort_order: options?.["sort_order"] as any,
        }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ViewsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListCompactViews: () =>
      HttpClientRequest.get("/api/v2/views/compact").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ViewsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CountViews: () =>
      HttpClientRequest.get("/api/v2/views/count").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ViewsCountResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    GetViewCounts: (options) =>
      HttpClientRequest.get("/api/v2/views/count_many").pipe(
        HttpClientRequest.setUrlParams({ ids: options?.["ids"] as any }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ViewCountsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    BulkDeleteViews: (options) =>
      HttpClientRequest.del("/api/v2/views/destroy_many").pipe(
        HttpClientRequest.setUrlParams({ ids: options?.["ids"] as any }),
        withResponse(
          HttpClientResponse.matchStatus({
            "204": () => Effect.void,
            orElse: unexpectedStatus,
          }),
        ),
      ),
    PreviewViews: () =>
      HttpClientRequest.post("/api/v2/views/preview").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ViewResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    PreviewCount: () =>
      HttpClientRequest.post("/api/v2/views/preview/count").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ViewCountResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    SearchViews: (options) =>
      HttpClientRequest.get("/api/v2/views/search").pipe(
        HttpClientRequest.setUrlParams({
          query: options?.["query"] as any,
          access: options?.["access"] as any,
          active: options?.["active"] as any,
          group_id: options?.["group_id"] as any,
          sort_by: options?.["sort_by"] as any,
          sort_order: options?.["sort_order"] as any,
          include: options?.["include"] as any,
        }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ViewsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListViewsById: (options) =>
      HttpClientRequest.get("/api/v2/views/show_many").pipe(
        HttpClientRequest.setUrlParams({
          ids: options?.["ids"] as any,
          active: options?.["active"] as any,
        }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ViewsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    UpdateManyViews: () =>
      HttpClientRequest.put("/api/v2/views/update_many").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ViewsResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ListWorkspaces: () =>
      HttpClientRequest.get("/api/v2/workspaces").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(WorkspaceResponse),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CreateWorkspace: (options) =>
      HttpClientRequest.post("/api/v2/workspaces").pipe(
        HttpClientRequest.bodyUnsafeJson(options),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(CreateWorkspace201),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ShowWorkspace: (workspaceId) =>
      HttpClientRequest.get(`/api/v2/workspaces/${workspaceId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ShowWorkspace200),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    UpdateWorkspace: (workspaceId, options) =>
      HttpClientRequest.put(`/api/v2/workspaces/${workspaceId}`).pipe(
        HttpClientRequest.bodyUnsafeJson(options),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(UpdateWorkspace200),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    DeleteWorkspace: (workspaceId) =>
      HttpClientRequest.del(`/api/v2/workspaces/${workspaceId}`).pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "204": () => Effect.void,
            orElse: unexpectedStatus,
          }),
        ),
      ),
    DestroyManyWorkspaces: (options) =>
      HttpClientRequest.del("/api/v2/workspaces/destroy_many").pipe(
        HttpClientRequest.setUrlParams({ ids: options?.["ids"] as any }),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(DestroyManyWorkspaces200),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    ReorderWorkspaces: (options) =>
      HttpClientRequest.put("/api/v2/workspaces/reorder").pipe(
        HttpClientRequest.bodyUnsafeJson(options),
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(ReorderWorkspaces200),
            orElse: unexpectedStatus,
          }),
        ),
      ),
    CreateTokenForGrantType: () =>
      HttpClientRequest.post("/oauth/tokens").pipe(
        withResponse(
          HttpClientResponse.matchStatus({
            "2xx": decodeSuccess(OAuthTokenForGrantTypesObject),
            orElse: unexpectedStatus,
          }),
        ),
      ),
  };
};

export interface Client {
  readonly httpClient: HttpClient.HttpClient;
  /**
   * List assignable groups and agents based on query matched against name
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly ListAssigneeFieldAssignableGroupsAndAgentsSearch: (
    options: typeof ListAssigneeFieldAssignableGroupsAndAgentsSearchParams.Encoded,
  ) => Effect.Effect<
    typeof AssigneeFieldAssignableGroupsAndAgentsSearchResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * List assignable groups on the AssigneeField
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly ListAssigneeFieldAssignableGroups: () => Effect.Effect<
    typeof AssigneeFieldAssignableGroupsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * List assignable agents from a group on the AssigneeField
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly ListAssigneeFieldAssignableGroupAgents: (
    groupId: string,
    options?:
      | typeof ListAssigneeFieldAssignableGroupAgentsParams.Encoded
      | undefined,
  ) => Effect.Effect<
    typeof AssigneeFieldAssignableGroupAgentsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns a list of source objects whose values are populated with the id of a related target object.  For example,
   * if you have a lookup field called "Success Manager" on a ticket, this endpoint can answer the question,
   * "What tickets (sources) is this user (found by `target_type` and `target_id`)
   * assigned as the 'Success Manager' (field referenced by `field_id`)?"
   *
   * #### Allowed For
   *
   * * Agents
   *
   * #### Pagination
   *
   * * Cursor pagination (recommended)
   * * Offset pagination
   *
   * See [Pagination](/api-reference/introduction/pagination/).
   */
  readonly GetSourcesByTarget: (
    targetType: string,
    targetId: string,
    fieldId: string,
    sourceType: string,
  ) => Effect.Effect<
    typeof ReverseLookupResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Shows the settings that are available for the account.
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly ShowAccountSettings: () => Effect.Effect<
    typeof AccountSettingsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Updates settings for the account. See [JSON Format](#json-format) above for the settings you can update.
   *
   * #### Allowed For
   *
   * * Admins
   */
  readonly UpdateAccountSettings: () => Effect.Effect<
    typeof AccountSettingsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Create Trial Account
   */
  readonly CreateTrialAccount: () => Effect.Effect<
    typeof TrialAccountResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Zendesk Support credentials are not required to access this endpoint. You can use any Zendesk Support subdomain.
   *
   * Returns "true" if the subdomain is available.
   */
  readonly VerifySubdomainAvailability: (
    options: typeof VerifySubdomainAvailabilityParams.Encoded,
  ) => Effect.Effect<
    typeof VerifySubdomainAvailability200.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Lists ticket activities in the last 30 days affecting the agent making the request.
   * Also sideloads the following arrays of user records:
   *
   * - actors - All actors involved in the listed activities
   * - users - All users involved in the listed activities
   *
   * #### Pagination
   *
   * - Cursor pagination (recommended)
   * - Offset pagination
   *
   * See [Pagination](/api-reference/introduction/pagination/).
   *
   * Returns a maximum of 100 records per page.
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly ListActivities: () => Effect.Effect<
    typeof ActivitiesResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Lists a specific activity.
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly ShowActivity: (
    activityId: string,
  ) => Effect.Effect<
    typeof ActivityResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns an approximate count of ticket activities in the last 30 days affecting the agent making the request. If the count exceeds 100,000, the count will return a cached result. This cached result will update every 24 hours.
   *
   * The `count[refreshed_at]` property is a timestamp that indicates when the count was last updated.
   *
   * **Note**: When the count exceeds 100,000, `count[refreshed_at]` may occasionally be null.
   * This indicates that the count is being updated in the background, and `count[value]` is limited to 100,000 until the update is complete.
   *
   * #### Allowed For
   * * Agents
   */
  readonly CountActivities: () => Effect.Effect<
    typeof ActivitiesCountResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Admins
   *
   * #### Request parameters
   *
   * The POST request takes a JSON object parameter which contains information about the
   * problematic [channelback](/documentation/channel_framework/understanding-the-channel-framework/channelback/).
   *
   * | Name               | Type      | Required  | Comments
   * | ------------------ | ----------| --------- | -------------------
   * | instance_push_id   | string    | yes       | The ID of the account to which data will be pushed.  This was passed to the integration service when the administrator set up the account
   * | external_id        | string    | yes       | Unique identifier of the external resource from the original channelback (string)
   * | description        | string    | no        | A human readable description of the error
   * | request_id         | string    | no        | A unique identifier for the request
   *
   *
   * #### Response format
   *
   * The response does not include a response body
   */
  readonly ReportChannelbackError: () => Effect.Effect<
    typeof ReportChannelbackError200.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Pushes Channel framework content to Zendesk.
   *
   * #### Allowed For
   *
   * * Admins
   *
   * #### Request parameters
   *
   * The POST request takes a JSON object parameter which contains data about all
   * the resources that the client is pushing.
   *
   * | Name               | Type      | Required  | Comments
   * | ------------------ | ----------| --------- | -------------------
   * | instance_push_id   | string    | yes       | The account ID where data will be pushed. This was passed to the integration service when the administrator set up the account
   * | request_id         | string    | no        | A unique identifier for the push request
   * | external_resources | array     | yes       | The [resources](#external_resource-object) to push
   *
   * #### external_resource object
   *
   * | Name               | Type                               | Max length | Mandatory | Comments
   * |------------------- | ---------------------------------- |------------| --------- | ----------
   * | external_id        | string                             | 255        | yes       | Unique identifier of the external resource. Must be ASCII characters
   * | internal_note      | boolean                            |            | no        | If true creates a new internal note comment
   * | message            | string                             | 65535      | yes       | Text to be converted to a ticket or comment
   * | html_message       | string                             | 65535      | no        | HTML version of message
   * | parent_id          | string                             | 511        | no        | Unique identifier of the external resource for which this is a response. Used to choose the correct thread. Responses may include `parent_id` or `thread_id`, but not both. See [Conversation threads](/documentation/channel_framework/understanding-the-channel-framework/pull_endpoint/#conversation-threads)
   * | thread_id          | string                             | 255        | no        | Arbitrary identifier of the thread to which this item should belong. Responses may include `parent_id` or `thread_id`, but not both. See [Conversation threads](/documentation/channel_framework/understanding-the-channel-framework/pull_endpoint/#conversation-threads)
   * | created_at         | string                             |            | yes       | When the resource was created in the origin system, as an ISO 8601 extended format date-time. Example: '2015-09-08T22:48:09Z'
   * | author             | object                             |            | yes       | See [author object](#author-object) below
   * | display_info       | array                              |            | no        | Array of integration-specific data used by apps to modify the agent UI. See [display_info object](#display_info-object) below
   * | allow_channelback  | boolean                            |            | no        | If false, prevents the agent from making additional comments on the message in the Zendesk interface
   * | fields             | array                              |            | no        | Array of ticket fields to set in Zendesk and their values. See [fields array](#fields-array)
   * | file_urls          | array                              | 10         | no        | Array of files to be imported into Zendesk. See [file urls](/documentation/channel_framework/understanding-the-channel-framework/pull_endpoint/#file-urls) in the Channel framework docs
   *
   * #### author object
   *
   * | Name        | Type   | Max chars | Mandatory | Comments
   * |------------ | ------ |---------- |---------- |-----------
   * | external_id | string | 255       | yes       | Unique identifier of the user in the origin service
   * | name        | string | 255       | no        | If not supplied, defaults to external id
   * | image_url   | string | 255       | no        | URL to an image for the user
   * | locale      | String | 255       | no        | The user's locale. Must be one of the supported [locales](/api-reference/ticketing/account-configuration/locales/#list-available-public-locales) in Zendesk
   * | fields      | array  |           | no        | Array of items containing user field identifier ('id') and value of field ('value'.)  For system fields ('notes' or 'details'), the identifier is the English name. For custom fields, the identifier may be the ID or the name
   *
   * #### display_info object
   *
   * | Name | Type   | Max chars | Mandatory | Comments
   * |----- | ------ |---------- |---------- |-----------
   * | type | string | 255       | yes       | Globally unique type identifier defined by the integration origin service. Examples: a GUID or URI
   * | data | string | 65535     | yes       | JSON data containing display hints
   *
   * #### fields array
   *
   * The `fields` array lists ticket fields to set in Zendesk and their values. Each item consists of a field identifier (`id`) and a value (`value`) for the field. For Zendesk system fields such as `subject`, the identifier is the English name. For custom fields, the identifier may be a field ID or a name. See [Ticket Fields](/api-reference/ticketing/tickets/ticket_fields/).
   *
   * The `fields` array can only set ticket values on ticket creation, not on ticket updates.
   *
   * #### Response format
   *
   * The response is a JSON object containing a single key:
   *
   * | Name      | Type     | Comments
   * | --------- | -------- | -------------------
   * | results   | array    | An array of [result objects](#result-object)
   *
   * The `results` array contains an entry for each item in the incoming `external_resources` array, in the
   * same order.  For example, if you call `push` with 3 external resources, a successful response will include
   * `results` with three entries, corresponding to your 3 resources.
   *
   * #### result object
   *
   * | Name                 | Type                           | Comments
   * | -------------------- | ------------------------------ | -------------------
   * | external_resource_id | string                         | The external ID of the resource, as passed in
   * | status               | object                         | The status of the import for the indicated resource. See [status object](#status-object)
   *
   * #### status object
   *
   * | Name        | Type   | Comments
   * | ----------- | ------ | -------------------
   * | code        | string | A code indicating the status of the import of the resource, as described in [status codes](#status-codes)
   * | description | string | In the case of an exception, a description of the exception. Otherwise, not present.
   *
   * #### status codes
   *
   * | Key                                       | Description
   * | ----------------------------------------- | ----------------
   * | success                                   | The external resource was successfully converted to a ticket or comment
   * | already_imported                          | Reimport of the external resource was skipped due to a pre-existing ticket or comment for the resource
   * | could_not_locate_parent_external_resource | The parent resource, as identified by parent_id in the [request](#request-parameters), could not be found. The unrecognized parent ID is returned in the description of the [status](#status-object)
   * | processing_error                          | An internal exception occurred while processing the resource. See `description` in the [status object](#status-object)
   * | halted                                    | This resource was not processed because processing of previous resources failed
   */
  readonly PushContentToSupport: () => Effect.Effect<
    typeof ChannelFrameworkPushResultsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Admins
   *
   * #### Request parameters
   *
   * The POST request takes a JSON object parameter which contains the token to be validated.
   *
   * | Name               | Type      | Required  | Comments
   * | ------------------ | ----------| --------- | -------------------
   * | instance_push_id   | string    | yes       | The ID of the account to which data will be pushed. This was passed to the integration service when the administrator set up the account
   * | request_id         | string    | no        | A unique identifier for the push request
   *
   * #### Response format
   *
   * The response body is empty.
   */
  readonly ValidateToken: () => Effect.Effect<
    typeof ValidateToken200.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Creates an approval workflow instance attached to a ticket. The request must include a name for the workflow and a ticket id to associate with the workflow instance.
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly CreateApprovalWorkflowInstance: () => Effect.Effect<
    typeof ApprovalWorkflowInstanceObject.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Creates an approval request that is attached to a ticket. The request must include all of the following information:
   * - A subject and message for the approval
   * - A ticket the request should be associated with
   * - A [workflow instance id](/api-reference/ticketing/approvals/approval_workflow_instances/#approval-workflow-instances) for the request
   * - An assignee that will act as an approver
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly CreateApprovalRequest: (
    approvalWorkflowInstanceId: string,
    options: typeof ApprovalRequestCreateRequest.Encoded,
  ) => Effect.Effect<
    typeof ApprovalRequestObject.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Shows an approval request.
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly ShowApprovalRequest: (
    approvalWorkflowInstanceId: string,
    approvalRequestId: string,
  ) => Effect.Effect<
    typeof ApprovalRequestObject.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Updates the  approver's decision about an approval request.
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly UpdateDecisionApprovalRequest: (
    approvalWorkflowInstanceId: string,
    approvalRequestId: string,
    options: typeof UpdateDecisionApprovalRequestRequest.Encoded,
  ) => Effect.Effect<
    typeof ApprovalRequestObject.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns a list of approvals associated with a specific [workflow instance](/api-reference/ticketing/approvals/approval_workflow_instances/#approval-workflow-instances). Results can be filtered by approval request status.
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly SearchApprovals: (
    approvalWorkflowInstanceId: string,
  ) => Effect.Effect<
    typeof ApprovalRequestsSearchResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Shows attachment details. You can get the value of the `attachment_id` parameter by listing the ticket's comments.
   * See [List Comments](/api-reference/ticketing/tickets/ticket_comments/#list-comments). Each comment
   * in the list has an `attachments` list that specifies an `id` for each attachment.
   *
   *
   *  #### Allowed for
   *
   *  * Agents
   */
  readonly ShowAttachment: (
    attachmentId: string,
    options?: typeof ShowAttachmentParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof AttachmentResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Toggles enabling or restricting agent access to attachments with detected malware.
   *
   * #### Allowed For
   *
   * * Admins
   */
  readonly UpdateAttachment: (
    attachmentId: string,
    options: {
      readonly params?: typeof UpdateAttachmentParams.Encoded | undefined;
      readonly payload: typeof AttachmentUpdateRequest.Encoded;
    },
  ) => Effect.Effect<
    typeof AttachmentResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Admins on accounts that have audit log access
   *
   * #### Pagination
   *
   * * Cursor pagination (recommended)
   * * Offset pagination
   *
   * See [Pagination](/api-reference/introduction/pagination/).
   *
   * Returns a maximum of 100 records per page.
   */
  readonly ListAuditLogs: (
    options?: typeof ListAuditLogsParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof AuditLogsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Admins on accounts that have audit-log access
   */
  readonly ShowAuditLog: (
    auditLogId: string,
  ) => Effect.Effect<
    typeof AuditLogResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Admins on accounts that have audit log access
   */
  readonly ExportAuditLogs: (
    options?: typeof ExportAuditLogsParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof ExportAuditLogs202.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns an array of registered and recent tag names that start with the characters specified in the `name` query parameter. You must specify at least 2 characters.
   *
   * #### Pagination
   *
   * * Offset pagination only
   *
   * See [Using Offset Pagination](/api-reference/ticketing/introduction/#using-offset-pagination).
   *
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly AutocompleteTags: () => Effect.Effect<
    typeof TagsByObjectIdResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Lists all automations for the current account.
   *
   * #### Allowed For
   *
   * * Agents
   *
   * #### Available Parameters
   *
   * You can pass in any combination of the following optional filters:
   *
   * | Name       | Type    | Comment
   * | ---------- | ------- | -------
   * | active     | boolean | Only active automations if true, inactive automations if false
   * | sort_by    | string  | Possible values are "alphabetical", "created_at", "updated_at", "usage_1h", "usage_24h", or "usage_7d". Defaults to "position"
   * | sort_order | string  | One of "asc" or "desc". Defaults to "asc" for alphabetical and position sort, "desc" for all others
   *
   * #### Sideloads
   *
   * The following sideloads are supported. The usage sideloads are only supported on the Support Professional or Suite Growth plan or above.
   *
   * | Name             | Will sideload
   * | ---------------- | -------------
   * | app_installation | The app installation that requires each automation, if present
   * | permissions      | The permissions for each automation
   * | usage_1h         | The number of times each automation has been used in the past hour
   * | usage_24h        | The number of times each automation has been used in the past day
   * | usage_7d         | The number of times each automation has been used in the past week
   * | usage_30d        | The number of times each automation has been used in the past thirty days
   *
   * #### Pagination
   *
   * - Cursor pagination (recommended)
   * - Offset pagination
   *
   * See [Pagination](/api-reference/introduction/pagination/).
   *
   * Returns a maximum of 100 records per page.
   */
  readonly ListAutomations: () => Effect.Effect<
    typeof AutomationsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Creates an automation.
   *
   * New automations must be unique and have at least one condition that is true only once or an action that nullifies at least one of the conditions. Active automations can have overlapping conditions but can't be identical.
   *
   * The request must include the following conditions in the `all` array:
   *
   * - At least one time-based condition
   * - At least one condition that checks one of the following fields: `status`, `type`, `group_id`, `assignee_id`, or `requester_id`.
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly CreateAutomation: () => Effect.Effect<
    typeof AutomationResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Agents
   */
  readonly ShowAutomation: (
    automationId: string,
  ) => Effect.Effect<
    typeof AutomationResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Updates an automation.
   *
   * Updated automations must be unique and have at least one condition that is true only once or an action that nullifies at least one of the conditions. Active automations can have overlapping conditions but can't be identical.
   *
   * The request must include the following conditions in the `all` array:
   * - At least one time-based condition
   * - At least one condition that checks one of the following fields: 'status', 'type', 'group_id', 'assignee_id', or 'requester_id'
   *
   * **Note**: Updating a condition or action updates both the `conditions` and `actions` arrays, clearing all existing values of both arrays. Include all your conditions and actions when updating any condition or action.
   * **Note**: You might be restricted from updating some default automations.
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly UpdateAutomation: (
    automationId: string,
  ) => Effect.Effect<
    typeof AutomationResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * **Note**: You might be restricted from deleting some default automations.
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly DeleteAutomation: (
    automationId: string,
  ) => Effect.Effect<void, HttpClientError.HttpClientError | ParseError>;
  /**
   * Lists all active automations.
   *
   * #### Allowed For
   *
   * * Agents
   *
   * #### Available Parameters
   *
   * You can pass in any combination of the following optional filters:
   *
   * | Name       | Type   | Comment
   * | ---------- | ------ | -------
   * | sort_by    | string | Possible values are "alphabetical", "created_at", "updated_at", "usage_1h", "usage_24h", or "usage_7d". Defaults to "position"
   * | sort_order | string | One of "asc" or "desc". Defaults to "asc" for alphabetical and position sort, "desc" for all others
   *
   * #### Sideloads
   *
   * The following sideloads are supported:
   *
   * | Name             | Will sideload
   * | ---------------- | -------------
   * | app_installation | The app installation that requires each automation, if present
   * | permissions      | The permissions for each automation
   * | usage_1h         | The number of times each automation has been used in the past hour
   * | usage_24h        | The number of times each automation has been used in the past day
   * | usage_7d         | The number of times each automation has been used in the past week
   * | usage_30d        | The number of times each automation has been used in the past thirty days
   */
  readonly ListActiveAutomations: () => Effect.Effect<
    typeof AutomationsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Deletes the automations corresponding to the provided comma-separated list of IDs.
   *
   * **Note**: You might be restricted from deleting some default automations. If included in a bulk deletion, the unrestricted automations will be deleted.
   *
   * #### Allowed For
   *
   * * Agents
   *
   * #### Request Parameters
   *
   * The DELETE request takes one parameter, an `ids` object that lists the automations to delete.
   *
   * | Name | Description
   * | ---- | -----------
   * | ids  | The IDs of the automations to delete
   *
   * #### Example request
   *
   * ```js
   * {
   *   "ids": "25,23,27,22"
   * }
   * ```
   */
  readonly BulkDeleteAutomations: (
    options?: typeof BulkDeleteAutomationsParams.Encoded | undefined,
  ) => Effect.Effect<void, HttpClientError.HttpClientError | ParseError>;
  /**
   * #### Pagination
   *
   * * Offset pagination only
   *
   * See [Using Offset Pagination](/api-reference/ticketing/introduction/#using-offset-pagination).
   *
   * #### Allowed For
   *
   * * Agents
   *
   * #### Sideloads
   *
   * The following sideloads are supported. For more information, see [Side-loading](/documentation/ticketing/using-the-zendesk-api/side_loading/).
   *
   * | Name             | Will sideload
   * | ---------------- | -------------
   * | app_installation | The app installation that requires each automation, if present
   * | permissions      | The permissions for each automation
   * | usage_1h         | The number of times each automation has been used in the past hour
   * | usage_24h        | The number of times each automation has been used in the past day
   * | usage_7d         | The number of times each automation has been used in the past week
   * | usage_30d        | The number of times each automation has been used in the past thirty days
   */
  readonly SearchAutomations: () => Effect.Effect<
    typeof AutomationsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * **Note**: You might be restricted from updating some default automations. If included in a bulk update, the unrestricted automations will be updated.
   *
   * #### Allowed For
   *
   * * Agents
   *
   * #### Request Parameters
   *
   * The PUT request expects an `automations` object that lists the automations to update.
   *
   * Each automation may have the following properties:
   *
   * | Name     | Mandatory | Description
   * | -------- | --------- | -----------
   * | id       | yes       | The ID of the automation to update
   * | position | no        | The new position of the automation
   * | active   | no        | The active status of the automation (true or false)
   *
   * #### Example Request
   *
   * ```js
   * {
   *   "automations": [
   *     {"id": 25, "position": 3},
   *     {"id": 23, "position": 5},
   *     {"id": 27, "position": 9},
   *     {"id": 22, "position": 7}
   *   ]
   * }
   * ```
   */
  readonly UpdateManyAutomations: () => Effect.Effect<
    typeof AutomationsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   * - Agents
   */
  readonly ListBookmarks: () => Effect.Effect<
    typeof BookmarksResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   * - Agents
   */
  readonly CreateBookmark: (
    options: typeof BookmarkCreateRequest.Encoded,
  ) => Effect.Effect<
    typeof BookmarkResponse.Type | typeof BookmarkResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   * - Agents (own bookmarks only)
   *
   * If the bookmark already exists with a specified ticket id, the response status will be `http Status: 200 OK`.
   */
  readonly DeleteBookmark: (
    bookmarkId: string,
  ) => Effect.Effect<void, HttpClientError.HttpClientError | ParseError>;
  /**
   * Returns a list of all brand agent memberships for your account.
   *
   *
   * #### Pagination
   *
   * * Cursor pagination (recommended)
   * * Offset pagination
   *
   * See [Pagination](/api-reference/introduction/pagination/).
   *
   * Returns a maximum of 100 records per page.
   *
   * #### Allowed For:
   *
   * * Admins
   */
  readonly ListBrandAgents: (
    options?: typeof ListBrandAgentsParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof BrandAgentsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns a brand agent membership for your account.
   *
   *
   * #### Allowed For
   *
   * * Admins
   */
  readonly ShowBrandAgentById: (
    brandAgentId: string,
    options?: typeof ShowBrandAgentByIdParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof BrandAgentResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns a list of all brands for your account sorted by name.
   *
   * #### Allowed for
   *
   * * Admins
   * * Agents with the `assign_tickets_to_any_brand` permission can list all brands for the account
   * * Agents without the `assign_tickets_to_any_brand` permission can only list brands they are members of
   *
   * #### Pagination
   *
   * * Cursor pagination (recommended)
   * * Offset pagination
   *
   * See [Pagination](/api-reference/introduction/pagination/).
   */
  readonly ListBrands: () => Effect.Effect<
    typeof BrandsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed for
   * - Admins
   */
  readonly CreateBrand: (
    options: typeof BrandCreateRequest.Encoded,
  ) => Effect.Effect<
    typeof BrandResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns a brand for your account.
   *
   * #### Allowed for
   *
   * * Admins, Agents
   */
  readonly ShowBrand: (
    brandId: string,
    options?: typeof ShowBrandParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof BrandResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns an updated brand.
   *
   * #### Allowed for
   * * Admins
   *
   * #### Updating a Brand's Image
   * A brand image can be updated by uploading a local file using the update brand endpoint. See the **Using curl** sections below for more information.
   */
  readonly UpdateBrand: (
    brandId: string,
    options: {
      readonly params?: typeof UpdateBrandParams.Encoded | undefined;
      readonly payload: typeof BrandUpdateRequest.Encoded;
    },
  ) => Effect.Effect<
    typeof BrandResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Deletes a brand.
   *
   * #### Allowed for
   * - Admins
   */
  readonly DeleteBrand: (
    brandId: string,
    options?: typeof DeleteBrandParams.Encoded | undefined,
  ) => Effect.Effect<void, HttpClientError.HttpClientError | ParseError>;
  /**
   * Returns a JSON object determining whether a host mapping is valid for the given brand.
   *
   * #### Allowed for
   * - Admins
   */
  readonly CheckHostMappingValidityForExistingBrand: (
    brandId: string,
    options?:
      | typeof CheckHostMappingValidityForExistingBrandParams.Encoded
      | undefined,
  ) => Effect.Effect<
    typeof HostMappingObject.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns a JSON object determining whether a host mapping is valid for a given subdomain.
   *
   * #### Allowed for
   *
   * * Admins
   */
  readonly CheckHostMappingValidity: (
    options: typeof CheckHostMappingValidityParams.Encoded,
  ) => Effect.Effect<
    typeof HostMappingObject.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Admins
   * * Agents
   */
  readonly ListMonitoredTwitterHandles: () => Effect.Effect<
    typeof TwitterChannelsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Admins
   * * Agents
   */
  readonly ShowMonitoredTwitterHandle: (
    monitoredTwitterHandleId: string,
  ) => Effect.Effect<
    typeof TwitterChannelResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Turns a tweet into a ticket. You must provide the tweet id as well as the id of a monitored X (formerly Twitter) handle configured for your account.
   *
   * The submitter of the ticket is set to be the user submitting the API request.
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly CreateTicketFromTweet: () => Effect.Effect<
    typeof CreateTicketFromTweet201.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Agents
   */
  readonly GettingTwicketStatus: (
    commentId: string,
    options?: typeof GettingTwicketStatusParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof TwitterChannelTwicketStatusResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Allows you to instruct an agent's browser to open a ticket.
   *
   * When the message is successfully delivered to an agent's browser:
   *
   * ```http
   * Status: 200 OK
   * ```
   *
   * When `agent_id` or `ticket_id` is invalid:
   *
   * ```http
   * Status: 404 Not Found
   * ```
   *
   * #### Allowed For
   * * Agents
   */
  readonly OpenTicketInAgentBrowser: (
    agentId: string,
    ticketId: string,
    options?: typeof OpenTicketInAgentBrowserParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof OpenTicketInAgentBrowser200.Type,
    | HttpClientError.HttpClientError
    | ParseError
    | ClientError<
        "OpenTicketInAgentBrowser404",
        typeof OpenTicketInAgentBrowser404.Type
      >
  >;
  /**
   * Allows you to instruct an agent's browser to open a user's profile.
   *
   * When the message is successfully delivered to an agent's browser:
   *
   * ```http
   * Status: 200 OK
   * ```
   *
   * When `agent_id` or `user_id` is invalid:
   *
   * ```http
   * Status: 404 Not Found
   * ```
   *
   * #### Allowed For
   * * Agents
   */
  readonly OpenUsersProfileInAgentBrowser: (
    agentId: string,
    userId: string,
    options?: typeof OpenUsersProfileInAgentBrowserParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof OpenUsersProfileInAgentBrowser200.Type,
    | HttpClientError.HttpClientError
    | ParseError
    | ClientError<
        "OpenUsersProfileInAgentBrowser404",
        typeof OpenUsersProfileInAgentBrowser404.Type
      >
  >;
  /**
   * #### Allowed For
   * * Agents
   *
   * ### Creating tickets
   *
   * #### Introduction
   *
   * Creating tickets using Talk Partner Edition follows the same conventions as the Create Ticket endpoint. See [Create Ticket](/api-reference/ticketing/tickets/tickets/#create-ticket).
   *
   * #### Request parameters
   *
   * The POST request takes a mandatory `ticket` object that lists the values to set when the ticket is created.
   * You may also include an optional `display_to_agent` value such as the ID of the agent that will see the newly created ticket.
   * The `display_to_agent` is validated before creating the ticket, returning a 422 error if it is invalid.
   *
   * Tickets created using this endpoint must have a `via_id` parameter. See the following
   * section for possible values.
   *
   * #### Zendesk Talk Integration Via IDs
   *
   * Tickets created using this endpoint must have one of the following `via_id` parameters:
   *
   * | ID       | Description
   * | ---------| -------------
   * | 44       | Voicemail
   * | 45       | Phone call (inbound)
   * | 46       | Phone call (outbound)
   *
   * ### Creating voicemail tickets
   * #### Request parameters
   *
   * The POST request takes a mandatory `ticket` object that lists the values to set when the ticket is created.
   * The ticket must have a `voice_comment` with the following values:
   *
   * | Name               | Type                  | Comment
   * | ------------------ | ----------------------| -------
   * | from               | string                | Incoming phone number
   * | to                 | string                | Dialed phone number
   * | recording_url      | string                | URL of the recording
   * | started_at         | date                  | [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) timestamp of the call starting time
   * | call_duration      | integer               | Duration in seconds of the call
   * | answered_by_id     | integer               | The agent who answered the call
   * | transcription_text | string                | Transcription of the call (optional)
   * | location           | string                | Location of the caller (optional)
   */
  readonly CreateTicketOrVoicemailTicket: (options: {
    readonly params?:
      | typeof CreateTicketOrVoicemailTicketParams.Encoded
      | undefined;
    readonly payload: typeof TicketCreateVoicemailTicketRequest.Encoded;
  }) => Effect.Effect<
    typeof TicketResponse.Type,
    | HttpClientError.HttpClientError
    | ParseError
    | ClientError<
        "CreateTicketOrVoicemailTicket404",
        typeof CreateTicketOrVoicemailTicket404.Type
      >
    | ClientError<
        "CreateTicketOrVoicemailTicket422",
        typeof CreateTicketOrVoicemailTicket422.Type
      >
  >;
  /**
   * Permanently removes one or more chat attachments from a chat ticket.
   *
   * **Note**: This does not work on active chats. For chat tickets that predate March 2020, consider using [Redact Ticket Comment In Agent Workspace](#redact-ticket-comment-in-agent-workspace).
   *
   * #### Allowed For
   *
   * - Agents
   *
   * [Agent Workspace](https://support.zendesk.com/hc/en-us/articles/360024218473) must enabled for the account. Deleting tickets must be enabled for agents.
   *
   * #### Request Body Properties
   *
   * | Name         | Type    | Required | Description                                                                                                                                                                                                                                            |
   * | ------------ | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
   * | chat_id      | string  | true     | The `chat_id` in the `ChatStartedEvent` event in the ticket audit. See [Ticket Audits](/api-reference/ticketing/tickets/ticket_audits)                                                                                                                 |
   * | chat_indexes | array   | false    | The array of `chat_index` in the `ChatFileAttachment` event in the ticket audit. See [Ticket Audits](/api-reference/ticketing/tickets/ticket_audits). Mandatory if `message_ids` is not used                                                           |
   * | message_ids  | array   | false    | The array of `message_id` in the `ChatFileAttachment` event in the ticket audit that is part of a `ChatStartedEvent` history. Used when redacting a ChatFileAttachment that is part of a conversation history. Mandatory if `chat_indexes` is not used |
   *
   * To get the required body properties, make a request to the [Ticket Audits](/api-reference/ticketing/tickets/ticket_audits) endpoint. Example response:
   *
   * ```http
   * Status 200 OK
   * {
   *   "audits": [
   *     "events": [
   *       {
   *         "id": 1932802680168,
   *         "type": "ChatStartedEvent",
   *         "value": {
   *           "visitor_id": "10502823-16EkM3T6VNq7KMd",
   *           "chat_id": "2109.10502823.Sjuj2YrBpXwei",
   *           "history": [
   *             {
   *               "chat_index": 0,
   *               "type": "ChatFileAttachment",
   *               "filename": "image1.jpg"
   *             },
   *             {
   *               "chat_index": 1,
   *               "type": "ChatFileAttachment",
   *               "filename": "image2.jpg"
   *             }
   *           ]
   *         }
   *       }
   *     ]
   *   ]
   * }
   * ```
   */
  readonly RedactChatCommentAttachment: (
    ticketId: string,
  ) => Effect.Effect<
    typeof TicketChatCommentRedactionResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Permanently removes words or strings from a chat ticket's comment.
   *
   * Wrap `<redact>` tags around the content in the chat comment you want redacted. Example:
   *
   * ```json
   * {
   *   "text": "My ID number is <redact>847564</redact>!"
   * }
   * ```
   *
   * The characters contained in the tag will be replaced by the ▇ symbol.
   *
   * **Note**: This does not work on active chats. For chat tickets that predate March 2020, consider using [Redact Ticket Comment In Agent Workspace](#redact-ticket-comment-in-agent-workspace).
   *
   * #### Allowed For
   *
   * - Agents
   *
   * [Agent Workspace](https://support.zendesk.com/hc/en-us/articles/360024218473) must enabled for the account. Deleting tickets must be enabled for agents.
   *
   * #### Request Body Properties
   *
   * | Name                     | Type    | Required | Description                                                                                                                                                                                                                                       |
   * | ------------------------ | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   * | chat_id                  | string  | true     | The `chat_id` in the `ChatStartedEvent` event in the ticket audit. See [Ticket Audits](/api-reference/ticketing/tickets/ticket_audits)                                                                                                            |
   * | chat_index               | integer | false    | The `chat_index` in the `ChatMessage` event in the ticket audit. See [Ticket Audits](/api-reference/ticketing/tickets/ticket_audits). Mandatory if `message_id` is not used                                                                       |
   * | message_id               | string  | false    | The `message_id` of the `ChatMessage` event in the ticket audit that is part of a `ChatStartedEvent` history. Used when redacting a ChatMessage that is part of a conversation history. Mandatory if `chat_index` is not used                     |
   * | text                     | string  | true     | The `message` in the `ChatMessage` event in the ticket audit. See [Ticket Audits](/api-reference/ticketing/tickets/ticket_audits).  Wrap `message` with `<redact>` tags                                                                           |
   *
   * To get the required body properties, make a request to the [Ticket Audit](/api-reference/ticketing/tickets/ticket_audits) endpoint. Example response:
   *
   * ```http
   * Status 200 OK
   * {
   *   "audits": [
   *     "events": [
   *       {
   *         "id": 1932802680168,
   *         "type": "ChatStartedEvent",
   *         "value": {
   *           "visitor_id": "10502823-16EkM3T6VNq7KMd",
   *           "chat_id": "2109.10502823.Sjuj2YrBpXwei",
   *           "history": [
   *             {
   *               "chat_index": 0,
   *               "type": "ChatMessage",
   *               "message": "My ID number is 847564!"
   *             }
   *           ]
   *         }
   *       }
   *     ]
   *   ]
   * }
   * ```
   */
  readonly RedactChatComment: (
    ticketId: string,
  ) => Effect.Effect<
    typeof TicketChatCommentRedactionResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Redaction allows you to permanently remove words, strings, or attachments from a ticket comment.
   *
   * In the `html_body` of the comment, wrap the content you want redacted in `<redact>` tags. Example:
   *
   * ```json
   * {
   *   "html_body": "<div class=\"zd-comment\" dir=\"auto\">My ID number is <redact>847564</redact>!</div>",
   *   "ticket_id":100
   * }
   * ```
   *
   * The characters in the redact tag will be replaced by the ▇ symbol.
   *
   * To redact HTML elements such inline images, anchor tags, and links, add the `redact` tag attribute to the element as well as the `<redact>` tag to inner text, if any. Example:
   *
   * `<a href="http://example.com" redact><redact>some link</redact></a>`
   *
   * The `redact` attribute only redacts the tag. Any inner text will be left behind if not enclosed in a `<redact>` tag.
   *
   * Redaction is permanent and can not be undone. Data is permanently deleted from Zendesk servers with no way to recover it.
   *
   * This endpoint provides all the same functionality that the [Redact String in Comment](/api-reference/ticketing/tickets/ticket_comments/#redact-string-in-comment) endpoint provides, plus:
   *
   * - Redaction of comments in closed tickets
   *
   * - Redaction of comments in archived tickets
   *
   * - Redaction of formatted text (bold, italics, hyperlinks)
   *
   * **Limitations**: When content is redacted from an email comment, the content is also redacted from the original email through a background job. It may take a while for the changes to be completed.
   *
   * **Note**: We recommend using this endpoint instead of the [Redact String in Comment](/api-reference/ticketing/tickets/ticket_comments/#redact-string-in-comment) endpoint, which will eventually be deprecated.
   *
   * #### Allowed For
   *
   * - Agents
   *
   * [Agent Workspace](https://support.zendesk.com/hc/en-us/articles/360024218473) must be enabled on the account. For professional accounts, deleting tickets must be enabled for agents. On Enterprise accounts, you can assign agents to a custom role with permissions to redact ticket content.
   *
   * #### Request Body Properties
   *
   * | Name                     | Type    | Required | Description                                                                                                                                      |
   * | -------------------------| ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
   * | ticket_id                | integer | true     | The ID of the ticket                                                                                                                             |
   * | html_body                | string  | false    | The `html_body` of the comment containing `<redact>` tags or `redact` attributes                                           |
   * | external_attachment_urls | array   | false    | Array of attachment URLs belonging to the comment to be redacted. See [`content_url` property of Attachment](/api-reference/ticketing/tickets/ticket-attachments/) |
   */
  readonly RedactTicketCommentInAgentWorkspace: (
    ticketCommentId: string,
  ) => Effect.Effect<
    typeof TicketCommentResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Lists all undeleted custom objects for the account
   * #### Allowed For
   * * Agents
   */
  readonly ListCustomObjects: () => Effect.Effect<
    typeof CustomObjectsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Creates an object describing all the properties required to create a custom object record
   * #### Allowed For
   * * Admins
   */
  readonly CreateCustomObject: (
    options: typeof CustomObjectsCreateRequest.Encoded,
  ) => Effect.Effect<
    typeof CustomObjectResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns an object with the specified key
   * #### Allowed For
   * * Agents
   */
  readonly ShowCustomObject: (
    customObjectKey: string,
    options?: typeof ShowCustomObjectParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof CustomObjectResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Permanently deletes the custom object with the specified key
   * #### Allowed For
   * * Admins
   */
  readonly DeleteCustomObject: (
    customObjectKey: string,
    options?: typeof DeleteCustomObjectParams.Encoded | undefined,
  ) => Effect.Effect<void, HttpClientError.HttpClientError | ParseError>;
  /**
   * Updates an individual custom object. The updating rules are as follows:
   * * Takes a `custom_object` object that specifies the properties to update
   * * The `key` property cannot be updated
   * #### Allowed For
   * * Admins
   */
  readonly UpdateCustomObject: (
    customObjectKey: string,
    options?: typeof UpdateCustomObjectParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof CustomObjectResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Lists all undeleted custom fields for the specified object.
   *
   * #### Allowed For
   * * Agents
   *
   * #### Pagination
   * * Cursor pagination (recommended)
   * * Offset pagination
   *
   * See [Pagination](/api-reference/introduction/pagination/).
   */
  readonly ListCustomObjectFields: (
    customObjectKey: string,
    options?: typeof ListCustomObjectFieldsParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof CustomObjectFieldsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Creates any of the following custom field types:
   *
   * * text (default when no "type" is specified)
   * * textarea
   * * checkbox
   * * date
   * * integer
   * * decimal
   * * regexp
   * * dropdown
   * * lookup
   * * multiselect
   *
   * See [About custom field types](https://support.zendesk.com/hc/en-us/articles/203661866) in Zendesk help.
   *
   * #### Allowed For
   *
   * * Admins
   */
  readonly CreateCustomObjectField: (
    customObjectKey: string,
    options: {
      readonly params?:
        | typeof CreateCustomObjectFieldParams.Encoded
        | undefined;
      readonly payload: typeof CustomObjectFieldsCreateRequest.Encoded;
    },
  ) => Effect.Effect<
    typeof CustomObjectFieldResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns a custom field for a specific object using a provided key or id of the field.
   * #### Allowed For
   * * Agents
   */
  readonly ShowCustomObjectField: (
    customObjectKey: string,
    customObjectFieldKeyOrId: string,
    options?: typeof ShowCustomObjectFieldParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof CustomObjectFieldResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Deletes a field with the specified key. Note: You can't delete standard fields.
   * #### Allowed For
   * * Admins
   */
  readonly DeleteCustomObjectField: (
    customObjectKey: string,
    customObjectFieldKeyOrId: string,
    options?: typeof DeleteCustomObjectFieldParams.Encoded | undefined,
  ) => Effect.Effect<void, HttpClientError.HttpClientError | ParseError>;
  /**
   * Updates individual custom object fields. The updating rules are as follows:
   * * Takes a `custom_object_field` object that specifies the properties to update
   * * The `key` property cannot be updated
   * * If updating a standard field, only the `title`, `description`, and `properties` attributes can be updated.
   * * The `properties` parameter is comprised of four parts and can't be changed if any records exist for the object.
   *     * `autoincrement_enabled`: A Boolean that enables and disables autonumbering. Must be false if is_unique is true.
   *     * `autoincrement_prefix`: A string value that is used as a prefix to the autogenerated numbers. It can't exceed 30 characters.
   *     * `autoincrement_padding`: An integer specifying the starting number of digits in the autogenerated numbers. This value may be between 0-9. However, if you create records in excess of of these digits, additional digits are added as necessary.
   *     * `autoincrement_next_sequence`: An integer that will be used as the next number in the autonumbering sequence. It can't be negative or less than the current autonumbering value.
   *     * `is_unique`: A Boolean that enforces uniqueness for manually entered record names. When true, custom object record names must be unique. Must be false if autoincrement_enabled is true.
   * #### Allowed For
   * * Admins
   */
  readonly UpdateCustomObjectField: (
    customObjectKey: string,
    customObjectFieldKeyOrId: string,
    options?: typeof UpdateCustomObjectFieldParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof CustomObjectFieldResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Sets a preferred order of custom fields for a specific object by providing field ids in the desired order.
   * #### Allowed For
   *
   * * Admins
   */
  readonly ReorderCustomObjectFields: (
    customObjectKey: string,
    options?: typeof ReorderCustomObjectFieldsParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof ReorderCustomObjectFields200.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Queues a background job to perform bulk actions on up to 100 custom object records per single request.
   * Takes a `job` object with two nested fields:
   * * `action`, one of:
   *     * `"create"`
   *     * `"delete"`
   *     * `"delete_by_external_id"`
   *     * `"create_or_update_by_external_id"`
   *     * `"create_or_update_by_name"`
   *     * `"update"`
   * * `items`
   *     * For a `"create"` action, an array of JSON objects representing the custom object records being created
   *     * For a `"delete"` action, an array of strings representing Zendesk record ids
   *     * For a `"delete_by_external_id"` action, an array of strings representing external ids
   *     * For a `"create_or_update_by_external_id"` action, an array of JSON objects representing the custom object records being created or updated by external id
   *     * For a `"create_or_update_by_name"` action, an array of JSON objects representing the custom object records being created or updated by name. The `is_unique` property on the custom object's name field must be enabled.
   *     * For an `"update"` action, an array of JSON objects representing the custom object records being updated
   *
   * Note: If autonumbering is selected for the custom object's name field, record names aren't allowed in the request body because they are generated automatically. If uniqueness is enabled, the record names must be unique.
   *
   * #### Allowed For
   * * Agents
   *
   * #### Response ###
   * This endpoint returns a `job_status` [JSON object](/api-reference/ticketing/ticket-management/job_statuses/#json-format) and queues a background job to do the work. Use the [Show Job Status](/api-reference/ticketing/ticket-management/job_statuses/#show-job-status) endpoint to check for the job's completion. Only a certain number of jobs can be queued or running at the same time. See [Job limit](/api-reference/introduction/rate-limits/#job-limit) for more information.
   */
  readonly CustomObjectRecordBulkJobs: (
    customObjectKey: string,
    options: {
      readonly params?:
        | typeof CustomObjectRecordBulkJobsParams.Encoded
        | undefined;
      readonly payload: typeof CustomObjectRecordsBulkCreateRequest.Encoded;
    },
  ) => Effect.Effect<
    typeof CustomObjectRecordsJobsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * List the current count and the limit for a custom object's fields
   * #### Allowed For
   * * Agents
   */
  readonly CustomObjectFieldsLimit: (
    customObjectKey: string,
    options?: typeof CustomObjectFieldsLimitParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof CustomObjectLimitsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Lists all undeleted custom object records for the specified object
   *
   *  #### Pagination
   *
   * * [Cursor pagination](/api-reference/introduction/pagination/#cursor-pagination) only.
   * #### Allowed For
   * * Agents
   */
  readonly ListCustomObjectRecords: (
    customObjectKey: string,
    options?: typeof ListCustomObjectRecordsParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof CustomObjectRecordsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Creates a custom object record according to all the properties described by a custom object definition. If `autoincrement_enabled` is true, record names aren't allowed in the request body because they are generated automatically. If `is_unique` is true, record names must be unique.
   * #### Allowed For
   * * Agents
   */
  readonly CreateCustomObjectRecord: (
    customObjectKey: string,
    options: {
      readonly params?:
        | typeof CreateCustomObjectRecordParams.Encoded
        | undefined;
      readonly payload: typeof CustomObjectRecordsCreateRequest.Encoded;
    },
  ) => Effect.Effect<
    typeof CustomObjectRecordResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Deletes a record with the specified external id or name. The `is_unique` property on the custom object's name field must be enabled in order to delete by name. External id and name cannot be used together in the same request.
   * #### Allowed For
   * * Agents
   */
  readonly DeleteCustomObjectRecordByExternalIdOrName: (
    customObjectKey: string,
    options: typeof DeleteCustomObjectRecordByExternalIdOrNameParams.Encoded,
  ) => Effect.Effect<void, HttpClientError.HttpClientError | ParseError>;
  /**
   * If a record exists for the given external id or name, updates it. Only the specified attributes are updated. Otherwise, creates a new record with the provided external id, name and other attributes. The `is_unqiue` property on the custom object's name field must be enabled in order to update or create by name. External id and name cannot be used together in the same request.
   * #### Allowed For
   * * Agents
   */
  readonly UpsertCustomObjectRecordByExternalIdOrName: (
    customObjectKey: string,
    options: {
      readonly params: typeof UpsertCustomObjectRecordByExternalIdOrNameParams.Encoded;
      readonly payload: typeof CustomObjectRecordsUpsertRequest.Encoded;
    },
  ) => Effect.Effect<
    typeof CustomObjectRecordResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns a custom record for a specific object using a provided id.
   * #### Allowed For
   * * Agents
   */
  readonly ShowCustomObjectRecord: (
    customObjectKey: string,
    customObjectRecordId: string,
    options?: typeof ShowCustomObjectRecordParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof CustomObjectRecordResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Deletes a record with the specified id
   * #### Allowed For
   * * Agents
   */
  readonly DeleteCustomObjectRecord: (
    customObjectKey: string,
    customObjectRecordId: string,
    options?: typeof DeleteCustomObjectRecordParams.Encoded | undefined,
  ) => Effect.Effect<void, HttpClientError.HttpClientError | ParseError>;
  /**
   * Updates an individual custom object record. The updating rules are as follows:
   * * Takes a `custom_object_record` object that specifies the properties to update
   * * The custom object fields should be nested inside a `custom_object_fields` object
   * #### Allowed For
   * * Agents
   */
  readonly UpdateCustomObjectRecord: (
    customObjectKey: string,
    customObjectRecordId: string,
    options?: typeof UpdateCustomObjectRecordParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof CustomObjectRecordResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Retrieves an array of custom object records that have a field value that matches the value specified in the `name` parameter.
   *
   * #### Pagination
   *
   * * [Cursor pagination](/api-reference/introduction/pagination/#cursor-pagination) only.
   * * Returns the first 10,000 records sorted by relevancy with page limits.
   * #### Allowed For
   * * Agents
   */
  readonly AutocompleteCustomObjectRecordSearch: (
    customObjectKey: string,
    options?:
      | typeof AutocompleteCustomObjectRecordSearchParams.Encoded
      | undefined,
  ) => Effect.Effect<
    typeof CustomObjectRecordsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns a total count of records for a specific custom object as well as the time the count was refreshed.
   * #### Allowed For
   * * Agents
   */
  readonly CountCustomObjectRecords: (
    customObjectKey: string,
    options?: typeof CountCustomObjectRecordsParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof CountCustomObjectRecords200.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns an array of custom object records that meet the search criteria
   *
   * #### Pagination
   *
   * * [Cursor pagination](/api-reference/introduction/pagination/#cursor-pagination) only.
   * * Returns the records sorted by relevancy with page limits. Without a `sort` parameter, only the first 10,000 records are returned. With a `sort` parameter, all records are returned.
   * #### Allowed For
   * * Agents
   */
  readonly SearchCustomObjectRecords: (
    customObjectKey: string,
    options?: typeof SearchCustomObjectRecordsParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof CustomObjectRecordsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns an array of custom object records that meet the search and filter criteria.
   *
   * Filters can contain either an individual [comparison object](#comparison-object) or an array of [comparison objects](#comparison-object) within logical namespaces.
   *
   * A filter is a JSON object that has the following properties:
   *
   * | Name      | Type   | Required | Description
   * | --------- | ------ | -------- | -----------
   * | ATTRIBUTE | object | no       | A [comparison object](#comparison-object) specifying an attribute value condition to be met for records to match.<br/><br/>Examples are marked below.
   * | $and      | array  | no       | Array of conjunctive filter objects (logical AND)
   * | $or       | array  | no       | Array of conjunctive filter objects (logical OR)
   *
   * ##### Examples
   *
   *
   * ```js
   * {
   *   "filter": {
   *     "custom_object_fields.field_key": { "$eq": "value" } // ATTRIBUTE
   *   }
   * }
   * ```
   *
   * ```js
   * // $or
   * {
   *   "filter": {
   *     "$or": [
   *       { "custom_object_fields.field_key": { "$eq": "value" } }, // ATTRIBUTE
   *       { "external_id": { "$eq": "Record123" } } // ATTRIBUTE
   *     ]
   *   }
   * }
   * ```
   *
   * #### Comparison Object
   *
   * A comparison object defines a condition a record must meet to be considered a match. The condition is based on an attribute value or object type.
   *
   * A comparison object is a JSON object that has the following properties:
   *
   * | Name      | Type          | Required | Description
   * | --------- | ------------- | -------- | -----------
   * | FIELD_KEY | string        | yes      | When filtering on a custom field, they must be namedspaced with `custom_object_fields.`. ex. `custom_object_fields.field_key`<br/><br/>When filtering on a standard field, no namespace is required. The following fields are considered standard: `created_at`, `updated_at`, `created_by_user`, `updated_by_user`, `name`, `external_id`
   * | OPERATOR  | string        | yes      | [Supported operators](/documentation/custom-data/v2/searching-custom-object-records/) vary by the value's data type
   * | VALUE     | string, array | yes      | The value you're filtering for
   *
   * #### Pagination
   *
   * * [Cursor pagination](/api-reference/introduction/pagination/#cursor-pagination) only.
   * * Returns the records sorted by relevancy with page limits. Without a `sort` parameter, only the first 10,000 records are returned. With a `sort` parameter, all records are returned.
   *
   * #### Allowed For
   *
   * * Agents
   * * End users (when an admin [configures](https://support.zendesk.com/hc/en-us/articles/6034260247066) the custom object to be accessible to end users)
   */
  readonly FilteredSearchCustomObjectRecords: (
    customObjectKey: string,
    options: {
      readonly params?:
        | typeof FilteredSearchCustomObjectRecordsParams.Encoded
        | undefined;
      readonly payload: typeof FilteredSearchCustomObjectRecordsRequest.Encoded;
    },
  ) => Effect.Effect<
    typeof CustomObjectRecordsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Lists all triggers for the specified custom object.
   *
   * #### Allowed For
   * * Agents
   */
  readonly ListObjectTriggers: (
    customObjectKey: string,
    options?: typeof ListObjectTriggersParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof ObjectTriggersResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Creates a new object trigger for a specified object.
   *
   * #### Allowed For
   *
   * * Administrators
   * * Agents in custom roles with the `manage_triggers` permission (Enterprise only)
   */
  readonly CreateObjectTrigger: (
    customObjectKey: string,
    options: typeof ObjectTriggerRequest.Encoded,
  ) => Effect.Effect<
    typeof ObjectTriggerResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns details of a specific object trigger.
   * #### Allowed For
   *
   * * Agents
   */
  readonly GetObjectTrigger: (
    customObjectKey: string,
    triggerId: string,
  ) => Effect.Effect<
    typeof ObjectTriggerResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Updates a specified object trigger.
   *
   * **Note**: Updating a condition or action updates both the conditions and actions arrays,
   * clearing all existing values of both arrays. Include all your conditions
   * and actions when updating any condition or action.
   *
   * #### Allowed For
   *
   * * Administrators
   * * Agents in custom roles with the `manage_triggers` permission (Enterprise only)
   */
  readonly UpdateObjectTrigger: (
    customObjectKey: string,
    triggerId: string,
    options: typeof ObjectTriggerRequest.Encoded,
  ) => Effect.Effect<
    typeof ObjectTriggerResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Deletes a specified object trigger.
   *
   * #### Allowed For
   *
   * * Administrators
   * * Agents in custom roles with the `manage_triggers` permission (Enterprise only)
   */
  readonly DeleteObjectTrigger: (
    customObjectKey: string,
    triggerId: string,
  ) => Effect.Effect<void, HttpClientError.HttpClientError | ParseError>;
  /**
   * Lists all active object triggers.
   *
   * #### Pagination
   *
   * - Cursor pagination (recommended)
   * - Offset pagination
   *
   * See [Pagination](/api-reference/introduction/pagination/).
   *
   * Returns a maximum of 100 records per page.
   *
   * #### Allowed For
   *
   * * Administrators
   * * Agents in custom roles with the `manage_triggers` permission (Enterprise only)
   */
  readonly ListActiveObjectTriggers: (
    customObjectKey: string,
  ) => Effect.Effect<
    typeof ObjectTriggersResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Lists the conditions and actions of all triggers for the specified custom object.
   *
   * #### Allowed For
   * * Agents
   */
  readonly ListObjectTriggersDefinitions: (
    customObjectKey: string,
  ) => Effect.Effect<
    typeof ObjectTriggerDefinitionResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Deletes the object triggers corresponding to the provided comma-separated list of ids.
   *
   * **Note**: You can only bulk-delete triggers associated with one object at a time, specified by the `custom_object_key` in the request.
   *
   * #### Allowed For
   *
   * * Administrators
   * * Agents in custom roles with the `manage_triggers` permission (Enterprise only)
   *
   * #### Request Parameters
   *
   * The DELETE request takes an `ids` object that lists the
   * object triggers to delete. All of the specified object trigger `ids` must be associated with a single object.
   *
   * | Name | Description
   * | ---- | -----------
   * | ids  | The ids of the triggers to delete
   *
   * #### Example request
   *
   * ```js
   * {
   *   "ids": "25,23,27,22"
   * }
   * ```
   */
  readonly DeleteManyObjectTriggers: (
    customObjectKey: string,
  ) => Effect.Effect<void, HttpClientError.HttpClientError | ParseError>;
  /**
   * Returns a list of object triggers that meet your filter or search criteria.
   *
   * #### Pagination
   *
   * * Offset pagination only
   *
   * See [Using Offset Pagination](/api-reference/ticketing/introduction/#using-offset-pagination).
   *
   * #### Allowed For
   *
   * * Agents
   *
   * #### Filter
   *
   * Use the `filter` query parameter to filter an object trigger search by one or more attributes. For example, the following `filter` argument filters object triggers by the `title` attribute:
   *
   * ```json
   * {
   *   "json": {
   *     "title": "test"
   *   }
   * }
   * ```
   */
  readonly SearchObjectTriggers: (
    customObjectKey: string,
  ) => Effect.Effect<
    typeof ObjectTriggersResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Updates the position or the active status of multiple object triggers. Any additional properties are ignored.
   *
   * **Note**: You can only bulk-update triggers associated with one object at a time, specified by the `custom_object_key` in the request.
   *
   * #### Allowed For
   *
   * * Administrators
   * * Agents in custom roles with the `manage_triggers` permission (Enterprise only)
   *
   * #### Request Parameters
   *
   * The PUT request expects a `triggers` object that lists the object triggers to update. All of the specified object trigger `ids` must be associated with a single object.
   *
   * You can specify the following properties for each object trigger you're updating:
   *
   * | Name        | Mandatory | Description
   * | --------    | --------- | -----------
   * | id          | yes       | The ID of the object trigger to update
   * | position    | no        | The new position of the object trigger
   * | active      | no        | The active status of the object trigger (true or false)
   *
   * #### Example Request
   *
   * ```js
   * {
   *   "triggers": [
   *     {"id": 25, "position": 3},
   *     {"id": 23, "active": true},
   *     {"id": 27, "position": 9, "active": false},
   *     {"id": 22, "position": 7}
   *   ]
   * }
   * ```
   */
  readonly UpdateManyObjectTriggers: (
    customObjectKey: string,
    options: typeof ObjectTriggerBulkUpdateRequest.Encoded,
  ) => Effect.Effect<
    typeof ObjectTriggersResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * List the current count and the limit for custom objects
   * #### Allowed For
   * * Admins
   */
  readonly CustomObjectsLimit: () => Effect.Effect<
    typeof CustomObjectLimitsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * List the current count and the limit for custom object records
   * #### Allowed For
   * * Agents
   */
  readonly CustomObjectRecordsLimit: () => Effect.Effect<
    typeof CustomObjectLimitsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Availability
   *
   * * Accounts on the Enterprise plan or above
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly ListCustomRoles: () => Effect.Effect<
    typeof CustomRolesResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Availability
   *
   * * Accounts on the Enterprise plan or above
   *
   * #### Allowed for
   *
   * * Administrators
   * * Agents with the `manage_roles` permission
   */
  readonly CreateCustomRole: () => Effect.Effect<
    typeof CustomRoleResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Availability
   *
   * * Accounts on the Enterprise plan or above
   *
   * #### Allowed for
   *
   * * Administrators
   * * Agents with the `manage_roles` permission
   */
  readonly ShowCustomRoleById: (
    customRoleId: string,
  ) => Effect.Effect<
    typeof CustomRoleResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Availability
   *
   * * Accounts on the Enterprise plan or above
   *
   * #### Allowed for
   *
   * * Administrators
   * Agents with the `manage_roles` permission
   */
  readonly UpdateCustomRoleById: (
    customRoleId: string,
  ) => Effect.Effect<
    typeof CustomRoleResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Availability
   *
   * * Accounts on the Enterprise plan or above
   *
   * #### Allowed for
   *
   * * Administrators
   * * Agents with the `manage_roles` permission
   */
  readonly DeleteCustomRoleById: (
    customRoleId: string,
  ) => Effect.Effect<void, HttpClientError.HttpClientError | ParseError>;
  /**
   * Updates the default values for many custom ticket statuses at once.
   *
   * #### Allowed For
   *
   * * Admins
   */
  readonly BulkUpdateDefaultCustomStatus: (
    options: typeof BulkUpdateDefaultCustomStatusRequest.Encoded,
  ) => Effect.Effect<
    typeof BulkUpdateDefaultCustomStatusResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Lists all undeleted custom ticket statuses for the account. No pagination is provided.
   *
   * #### Allowed For
   *
   * * End Users
   */
  readonly ListCustomStatuses: (
    options?: typeof ListCustomStatusesParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof CustomStatusesResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Takes a `custom_status` object that specifies the custom ticket status properties to create.
   *
   * #### Allowed For
   *
   * * Admins
   */
  readonly CreateCustomStatus: (
    options: typeof CustomStatusCreateRequest.Encoded,
  ) => Effect.Effect<
    typeof CustomStatusResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns the custom ticket status object.
   *
   * #### Allowed For
   *
   * * End Users
   */
  readonly ShowCustomStatus: (
    customStatusId: string,
    options?: typeof ShowCustomStatusParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof CustomStatusResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Takes a `custom_status` object that specifies the properties to update.
   *
   * #### Allowed For
   *
   * * Admins
   */
  readonly UpdateCustomStatus: (
    customStatusId: string,
    options: {
      readonly params?: typeof UpdateCustomStatusParams.Encoded | undefined;
      readonly payload: typeof CustomStatusUpdateRequest.Encoded;
    },
  ) => Effect.Effect<
    typeof CustomStatusResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Creates one or many tickets form status associations for a custom status.
   *
   * #### Allowed For
   *
   * * Admins
   */
  readonly CreateTicketFormStatusesForCustomStatus: (
    customStatusId: string,
    options: typeof CreateTicketFormStatusesForCustomStatusRequest.Encoded,
  ) => Effect.Effect<
    typeof TicketFormStatusesResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns a maximum of 100 deleted tickets per page. See [Pagination](/api-reference/introduction/pagination/).
   *
   * The results includes all deleted (and not yet archived) tickets that
   * have not yet been [scrubbed](https://support.zendesk.com/hc/en-us/articles/4408845703194#topic_fv5_w51_sdb) in the past 30 days. Archived tickets are
   * not included in the results. See [About archived tickets](https://support.zendesk.com/hc/en-us/articles/203657756)
   * in the Support Help Center.
   *
   * The tickets are ordered chronologically by created date, from oldest to newest.
   * The first ticket listed may not be the oldest ticket in your
   * account due to [ticket archiving](https://support.zendesk.com/hc/en-us/articles/203657756).
   *
   * #### Pagination
   *
   * - Cursor pagination (recommended)
   * - Offset pagination
   *
   * See [Pagination](/api-reference/introduction/pagination/).
   *
   * Returns a maximum of 100 records per page.
   *
   * #### Allowed For
   *
   * * Agents
   *
   * #### Rate Limit
   *
   * You can make 10 requests every 1 minute using this endpoint.
   * When making requests beyond page 100, you can make 5 requests every 1 minute.
   * The rate limiting mechanism behaves as described in
   * [Monitoring your request activity](/api-reference/ticketing/account-configuration/usage_limits/#monitoring-your-request-activity) in the API introduction.
   */
  readonly ListDeletedTickets: (
    options?: typeof ListDeletedTicketsParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof ListDeletedTicketsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Permanently deletes a soft-deleted ticket. See [Soft delete](https://support.zendesk.com/hc/en-us/articles/4408834005530#topic_zrm_wbj_1db)
   * in the Zendesk GDPR docs. To soft delete a ticket, use the [Delete Ticket](#delete-ticket) endpoint.
   *
   * This endpoint enqueues a ticket deletion job and returns a payload with the jobs status.
   *
   * If the job succeeds, the ticket is permanently deleted. This operation can't be undone.
   *
   * This endpoint returns a `job_status` [JSON object](/api-reference/ticketing/ticket-management/job_statuses/#json-format) and queues a background job to do the work.
   * Use the [Show Job Status](/api-reference/ticketing/ticket-management/job_statuses/#show-job-status) endpoint to check for the job's completion.
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly DeleteTicketPermanently: (
    ticketId: string,
    options?: typeof DeleteTicketPermanentlyParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof JobStatusResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Agents
   */
  readonly RestoreDeletedTicket: (
    ticketId: string,
    options?: typeof RestoreDeletedTicketParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof RestoreDeletedTicket200.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Permanently deletes up to 100 soft-deleted tickets. See [Soft delete](https://support.zendesk.com/hc/en-us/articles/4408834005530#topic_zrm_wbj_1db)
   * in the Zendesk GDPR docs. To soft delete tickets, use the [Bulk Delete Tickets](#bulk-delete-tickets) endpoint.
   *
   * This endpoint accepts a comma-separated list of up to 100 ticket ids. It enqueues
   * a ticket deletion job and returns a payload with the jobs status.
   *
   * If one ticket fails to be deleted, the endpoint still attempts to delete the others. If the job succeeds,
   * the tickets that were successfully deleted are permanently deleted. This operation can't be undone.
   *
   * This endpoint returns a `job_status` [JSON object](/api-reference/ticketing/ticket-management/job_statuses/#json-format) and queues a background job to do the work. Use the [Show Job Status](/api-reference/ticketing/ticket-management/job_statuses/#show-job-status) endpoint to check for the job's completion. Only a certain number of jobs can be queued or running at the same time. See [Job limit](/api-reference/introduction/rate-limits/#job-limit) for more information.
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly BulkPermanentlyDeleteTickets: (
    options: typeof BulkPermanentlyDeleteTicketsParams.Encoded,
  ) => Effect.Effect<
    typeof JobStatusResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Agents
   */
  readonly BulkRestoreDeletedTickets: (
    options: typeof BulkRestoreDeletedTicketsParams.Encoded,
  ) => Effect.Effect<
    typeof BulkRestoreDeletedTickets200.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns deleted users, including permanently deleted users.
   *
   * If the results contains permanently deleted users, the users' properties
   * that normally contain personal data, such as `email` and `phone`,
   * are null. The `name` property is "Permanently Deleted User".
   *
   * #### Pagination
   *
   * * Cursor pagination (recommended)
   * * Offset pagination
   *
   * See [Pagination](/api-reference/introduction/pagination/).
   *
   * Returns a maximum of 100 records per page.
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly ListDeletedUsers: () => Effect.Effect<
    typeof DeletedUsersResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns users that have been deleted but not permanently yet. See [Permanently Delete User](#permanently-delete-user).
   *
   * #### Allowed For:
   *
   * * Agents
   */
  readonly ShowDeletedUser: (
    deletedUserId: string,
  ) => Effect.Effect<
    typeof DeletedUserResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Before permanently deleting a user, you must delete the user first. See [Delete User](/api-reference/ticketing/users/users/#delete-user).
   *
   * WARNING: Permanently deleting a user deletes all of their information. This information is not recoverable.
   *
   * #### Permanent user deletion rate limit
   *
   * You can permanently delete 700 users every 10 minutes.
   * The rate limiting mechanism behaves as described in
   * [Rates Limits](/api-reference/introduction/rate-limits/#monitoring-your-request-activity) in the API introduction.
   * Zendesk recommends that you obey the Retry-After header values.
   *
   * #### Allowed For
   *
   * * Admins and [agents in custom roles with permission](https://support.zendesk.com/hc/en-us/articles/4408882153882#topic_cxn_hig_bd) to manage end users or team members
   */
  readonly PermanentlyDeleteUser: (
    deletedUserId: string,
  ) => Effect.Effect<
    typeof DeletedUserResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns an approximate count of deleted users, including permanently deleted users. If the count exceeds 100,000, it is updated every 24 hours.
   *
   * The response includes a `refreshed_at` property in a `count` object that contains a timestamp indicating when the count was last updated.
   *
   * **Note**: When the count exceeds 100,000, `count[refreshed_at]` may occasionally be null.
   * This indicates that the count is being updated in the background, and `count[value]` is limited to 100,000 until the update is complete.
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly CountDeletedUsers: () => Effect.Effect<
    typeof CountResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Lists all deletion schedules for the account. Deletion schedules are used to automatically delete data from the account after a certain period of time.
   *
   * #### Allowed For
   *
   * * Admins
   */
  readonly ListDeletionSchedules: () => Effect.Effect<
    typeof ListDeletionSchedules200.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Creates a new deletion schedule.
   *
   * #### Allowed For
   *
   * * Admins
   */
  readonly CreateDeletionSchedule: (
    options: typeof CreateDeletionScheduleRequest.Encoded,
  ) => Effect.Effect<
    typeof CreateDeletionSchedule201.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Gets a deletion schedule by its id.
   *
   * #### Allowed For
   *
   * * Admins
   */
  readonly GetDeletionSchedule: (
    deletionScheduleId: string,
    options?: typeof GetDeletionScheduleParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof GetDeletionSchedule200.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Updates a deletion schedule by its id.
   *
   * **Note**: Updating a condition updates the conditions array, clearing all existing values of the array. Include all your conditions when updating any condition.
   *
   * #### Allowed For
   *
   * * Admins
   */
  readonly UpdateDeletionSchedule: (
    deletionScheduleId: string,
    options: {
      readonly params?: typeof UpdateDeletionScheduleParams.Encoded | undefined;
      readonly payload: typeof UpdateDeletionScheduleRequest.Encoded;
    },
  ) => Effect.Effect<
    typeof UpdateDeletionSchedule200.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Deletes a deletion schedule by its id.
   *
   * #### Allowed For
   *
   * * Admins
   */
  readonly DeleteDeletionSchedule: (
    deletionScheduleId: string,
    options?: typeof DeleteDeletionScheduleParams.Encoded | undefined,
  ) => Effect.Effect<void, HttpClientError.HttpClientError | ParseError>;
  /**
   * Returns a list of all dynamic content items for your account if accessed as an admin or agents who have permission to manage dynamic content.
   *
   * #### Allowed For
   *
   * * Admins, Agents
   *
   * #### Pagination
   *
   * * Cursor pagination (recommended)
   * * Offset pagination
   *
   * See [Pagination](/api-reference/introduction/pagination/).
   */
  readonly ListDynamicContents: () => Effect.Effect<
    typeof DynamicContentsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Create a new content item, with one or more variants in the item's `variants` array. See [Specifying item variants](#specifying-item-variants).
   *
   * The `default_locale_id` and variant `locale_id` values must be one of the locales the account has active. You can get the list with the [List Locales](/api-reference/ticketing/account-configuration/locales/#list-locales) endpoint.
   *
   * #### Allowed For
   *
   * * Admins, Agents
   */
  readonly CreateDynamicContent: () => Effect.Effect<
    typeof DynamicContentResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Admins, Agents
   */
  readonly ShowDynamicContentItem: (
    dynamicContentItemId: string,
  ) => Effect.Effect<
    typeof DynamicContentResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * The only attribute you can change is the name.
   *
   * To add a variant to the item, or to update or delete the variants of the item, use the [Item Variants API](/api-reference/ticketing/ticket-management/dynamic_content_item_variants/#update-many-variants).
   *
   * #### Allowed For
   *
   * * Admins, Agents
   */
  readonly UpdateDynamicContentItem: (
    dynamicContentItemId: string,
  ) => Effect.Effect<
    typeof DynamicContentResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Admins, Agents
   */
  readonly DeleteDynamicContentItem: (
    dynamicContentItemId: string,
  ) => Effect.Effect<void, HttpClientError.HttpClientError | ParseError>;
  /**
   * Returns all the variants of the specified dynamic content item.
   *
   * #### Allowed For
   *
   * * Admins
   * * Agents who have permission to manage dynamic content
   *
   * #### Pagination
   *
   * * Cursor pagination
   *
   * See [Pagination](/api-reference/introduction/pagination/).
   */
  readonly DynamicContentListVariants: (
    dynamicContentItemId: string,
  ) => Effect.Effect<
    typeof DynamicContentVariantsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * You can only create one variant for each locale id. If a locale variant already exists, the request is rejected.
   *
   * #### Allowed For
   *
   * * Admins, Agents
   */
  readonly CreateDynamicContentVariant: (
    dynamicContentItemId: string,
  ) => Effect.Effect<
    typeof DynamicContentVariantResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Admins, Agents
   */
  readonly ShowDynamicContentVariant: (
    dynamicContentItemId: string,
    dynammicContentVariantId: string,
  ) => Effect.Effect<
    typeof DynamicContentVariantResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Updates the specified variant. You don't need to include all the properties. If you just want to update content, for example, then include just that.
   *
   * You can't switch the active state of the default variant of an item. Similarly, you can't switch the default to false if the variant is the default. You must make another variant default instead.
   *
   * #### Allowed For
   *
   * * Admins, Agents
   */
  readonly UpdateDynamicContentVariant: (
    dynamicContentItemId: string,
    dynammicContentVariantId: string,
  ) => Effect.Effect<
    typeof DynamicContentVariantResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Admins, Agents
   */
  readonly DeleteDynamicContentVariant: (
    dynamicContentItemId: string,
    dynammicContentVariantId: string,
  ) => Effect.Effect<void, HttpClientError.HttpClientError | ParseError>;
  /**
   * #### Allowed For
   *
   * * Admins, Agents
   */
  readonly CreateManyDynamicContentVariants: (
    dynamicContentItemId: string,
  ) => Effect.Effect<
    typeof DynamicContentVariantsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Updates one or more variants. See [Update Variant](/api-reference/ticketing/ticket-management/dynamic_content_item_variants/#update-variant).
   *
   * You must specify the variants by id in the body. To get the variant ids, see [List Variants](/api-reference/ticketing/ticket-management/dynamic_content_item_variants/#list-variants).
   *
   * #### Allowed For
   *
   * * Admins, Agents
   */
  readonly UpdateManyDynamicContentVariants: (
    dynamicContentItemId: string,
  ) => Effect.Effect<
    typeof DynamicContentVariantsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Stability
   *
   * * Development
   *
   * #### Allowed For
   *
   * * Admins, Agents
   */
  readonly ShowManyDynamicContents: (
    options?: typeof ShowManyDynamicContentsParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof DynamicContentsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Agents
   *
   * #### Filters
   *
   * * By notification: `api/v2/email_notifications.json?filter[notification_id]=7824075373693`
   * * By comment: `api/v2/email_notifications.json?filter[comment_id]=7824075373565`
   * * By ticket: `api/v2/email_notifications.json?filter[ticket_id]=623`
   *
   * #### Pagination
   *
   * By default, a maximum of 100 email notifications are included per page. Use cursor-based pagination parameters (`page[after]` and `page[before]`) to navigate the records (can't be used together in the same request). See [Pagination](/api-reference/introduction/pagination/) for more details.
   *
   * * Limit items per-page: `api/v2/email_notifications.json?page[size]=25`
   * * Retrieve next page: `api/v2/email_notifications.json?page[size]=25&page[after]=xxx`
   * * Retrieve previous page: `api/v2/email_notifications.json?page[size]=25&page[before]=yyy`
   *
   * The values `xxx` and `yyy` are placeholder values that represent cursors.
   *
   * #### Sorting
   *
   * By default, email notifications are sorted by creation time (newest first). The query parameter is not supported for this endpoint.
   *
   * * By creation time (oldest first): `api/v2/email_notifications.json?sort=created_at`
   * * By creation time (newest first): `api/v2/email_notifications.json?sort=-created_at`
   * * By modification time (recently updated first): `api/v2/email_notifications.json?sort=updated_at`
   * * By modification time (recently updated last): `api/v2/email_notifications.json?sort=-updated_at`
   */
  readonly ListEmailNotifications: () => Effect.Effect<
    typeof EmailNotificationsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Shows details on an email notification. You can get the value of the `notification_id` parameter by listing the ticket's outbound emails.
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly ShowEmailNotification: (
    notificationId: string,
  ) => Effect.Effect<
    typeof EmailNotificationResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Shows details of many email notifications. Allows you to query by providing a list of notifications, comments, or tickets IDs.
   *
   * #### Allowed For
   *
   * * Agents
   *
   * #### Filters
   *
   * * By notification: `?ids=8433702508541,8433348111869`
   * * By comment: `?comment_ids=8433348111741,8433544226045,8433702508413`
   * * By ticket: `?ticket_ids=730,723`
   */
  readonly ShowManyEmailNotifications: () => Effect.Effect<
    typeof EmailNotificationResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Pagination
   *
   * * Cursor pagination (recommended)
   * * Offset pagination
   *
   * See [Pagination](/api-reference/introduction/pagination/).
   *
   * Returns a maximum of 100 records per page.
   *
   * #### Allowed For:
   *
   * * Agents
   */
  readonly ListGroupMemberships: (
    options?: typeof ListGroupMembershipsParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof GroupMembershipsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Assigns an agent to a given group.
   *
   * #### Allowed For
   *
   * * Admins
   * * Agents assigned to a custom role with permissions to manage group memberships (Enterprise only)
   */
  readonly CreateGroupMembership: () => Effect.Effect<
    typeof GroupMembershipResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * The 'id' is the group membership id, not a group id.
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly ShowGroupMembershipById: (
    groupMembershipId: string,
  ) => Effect.Effect<
    typeof GroupMembershipResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Immediately removes a user from a group and schedules a job to unassign all working tickets that are assigned to the given user and group combination.
   *
   * #### Allowed For
   *
   * * Admins
   * * Agents assigned to a custom role with permissions to manage group memberships (Enterprise only)
   */
  readonly DeleteGroupMembership: (
    groupMembershipId: string,
  ) => Effect.Effect<void, HttpClientError.HttpClientError | ParseError>;
  /**
   * Returns a maximum of 100 group memberships per page.
   *
   * #### Pagination
   *
   * * Cursor pagination (recommended)
   * * Offset pagination
   *
   * See [Pagination](/api-reference/introduction/pagination/).
   *
   * Returns a maximum of 100 records per page.
   *
   * #### Allowed For:
   *
   * * Agents
   */
  readonly ListAssignableGroupMemberships: () => Effect.Effect<
    typeof GroupMembershipsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Assigns up to 100 agents to given groups.
   *
   * #### Allowed For
   *
   * * Admins
   * * Agents assigned to a custom role with permissions to manage group memberships (Enterprise only)
   *
   * #### Response
   *
   * This endpoint returns a `job_status` [JSON object](/api-reference/ticketing/ticket-management/job_statuses/#json-format) and queues a background job to do the work. Use the [Show Job Status](/api-reference/ticketing/ticket-management/job_statuses/#show-job-status) endpoint to check for the job's completion.
   */
  readonly GroupMembershipBulkCreate: () => Effect.Effect<
    typeof JobStatusResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Immediately removes users from groups and schedules a job to unassign all working tickets that are assigned to the given user and group combinations.
   *
   * #### Allowed For
   *
   * * Admins
   * * Agents assigned to a custom role with permissions to manage group memberships (Enterprise only)
   */
  readonly GroupMembershipBulkDelete: (
    options?: typeof GroupMembershipBulkDeleteParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof JobStatusResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Admins
   */
  readonly ListGroupSLAPolicies: () => Effect.Effect<
    typeof GroupSLAPoliciesResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Admins
   */
  readonly CreateGroupSLAPolicy: () => Effect.Effect<
    typeof GroupSLAPolicyResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Admins
   */
  readonly ShowGroupSLAPolicy: (
    groupSlaPolicyId: string,
  ) => Effect.Effect<
    typeof GroupSLAPolicyResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Updates the specified policy.
   *
   * #### Allowed For
   *
   * * Admins
   */
  readonly UpdateGroupSLAPolicy: (
    groupSlaPolicyId: string,
  ) => Effect.Effect<
    typeof GroupSLAPolicyResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Admins
   */
  readonly DeleteGroupSLAPolicy: (
    groupSlaPolicyId: string,
  ) => Effect.Effect<void, HttpClientError.HttpClientError | ParseError>;
  /**
   * #### Allowed For
   *
   * * Admins
   */
  readonly RetrieveGroupSLAPolicyFilterDefinitionItems: () => Effect.Effect<
    typeof GroupSLAPolicyFilterDefinitionResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Admins
   */
  readonly ReorderGroupSLAPolicies: (
    options?: typeof ReorderGroupSLAPoliciesParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof ReorderGroupSLAPolicies200.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Pagination
   *
   * * Cursor pagination (recommended)
   * * Offset pagination
   *
   * See [Pagination](/api-reference/introduction/pagination/).
   *
   * Returns a maximum of 100 records per page.
   *
   * #### Allowed For
   *
   * * Admins
   * * Agents
   */
  readonly ListGroups: (
    options?: typeof ListGroupsParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof GroupsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Admins
   * * Agents assigned to a custom role with permissions to manage groups (Enterprise only)
   */
  readonly CreateGroup: () => Effect.Effect<
    typeof GroupResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Admins
   * * Agents
   */
  readonly ShowGroupById: (
    groupId: string,
  ) => Effect.Effect<
    typeof GroupResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Admins
   */
  readonly UpdateGroup: (
    groupId: string,
  ) => Effect.Effect<
    typeof GroupResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Admins
   * * Agents assigned to a custom role with permissions to manage groups (Enterprise only)
   */
  readonly DeleteGroup: (
    groupId: string,
  ) => Effect.Effect<void, HttpClientError.HttpClientError | ParseError>;
  /**
   * #### Pagination
   *
   * * Cursor pagination (recommended)
   * * Offset pagination
   *
   * See [Pagination](/api-reference/introduction/pagination/).
   *
   * Returns a maximum of 100 records per page.
   *
   * #### Allowed For
   *
   * * Admins
   * * Agents
   */
  readonly ListAssignableGroups: () => Effect.Effect<
    typeof GroupsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns an approximate count of groups. If the count exceeds 100,000, it is updated every 24 hours.
   *
   * The `refreshed_at` property of the `count` object is a timestamp that indicates when the count was last updated.
   *
   * **Note**: When the count exceeds 100,000, `refreshed_at` may occasionally be null. This indicates that the count is being updated in the background, and the `value` property of the `count` object is limited to 100,000 until the update is complete.
   *
   * #### Allowed For
   *
   * * Admins
   * * Agents
   */
  readonly CountGroups: () => Effect.Effect<
    typeof GroupsCountObject.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Admins
   */
  readonly TicketImport: (options: {
    readonly params?: typeof TicketImportParams.Encoded | undefined;
    readonly payload: typeof TicketImportRequest.Encoded;
  }) => Effect.Effect<
    typeof TicketResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Accepts an array of up to 100 ticket objects.
   *
   * #### Allowed For
   *
   * * Admins
   */
  readonly TicketBulkImport: (options: {
    readonly params?: typeof TicketBulkImportParams.Encoded | undefined;
    readonly payload: typeof TicketBulkImportRequest.Encoded;
  }) => Effect.Effect<
    typeof JobStatusResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Use this endpoint to test the incremental export format. It's more strict in terms of rate limiting,
   * at 10 requests per 20 minutes instead of 10 requests per minute. It also returns only up to 50
   * results per request. Otherwise, it's identical to the above APIs.
   *
   * Use the `incremental_resource` parameter to specify the resource. Possible values are "tickets", "ticket_events", "users", or "organizations".
   */
  readonly IncrementalSampleExport: (
    incrementalResource: string,
  ) => Effect.Effect<
    typeof TimeBasedExportIncrementalTicketsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   *  * Admins
   *
   * #### Sideloading
   *
   * See [Organizations sideloads](/documentation/ticketing/using-the-zendesk-api/side_loading/#supported-endpoints).
   */
  readonly IncrementalOrganizationExport: () => Effect.Effect<
    typeof ExportIncrementalOrganizationsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns a stream of changes that occurred on routing attribute values.
   *
   * #### Allowed For
   *
   * * Admins
   *
   * #### Parameters
   *
   * Optional
   *
   * | Name   | Type   | Comment
   * | ------ | ------ | -------
   * | cursor | string | The `cursor` parameter is a non-human-readable argument you can use to move forward or backward in time. The cursor is a read-only URL parameter that's only available in API responses. See [Pagination](#pagination).
   */
  readonly IncrementalSkilBasedRoutingAttributeValuesExport: () => Effect.Effect<
    typeof IncrementalSkillBasedRouting.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns a stream of changes that occurred on routing attributes.
   *
   * #### Allowed For
   *
   * * Admins
   *
   * #### Parameters
   *
   * Optional
   *
   *
   * | Name   | Type   | Comment
   * | ------ | ------ | -------
   * | cursor | string | The `cursor` parameter is a non-human-readable argument you can use to move forward or backward in time. The cursor is a read-only URL parameter that's only available in API responses. See [Pagination](#pagination).
   */
  readonly IncrementalSkilBasedRoutingAttributesExport: () => Effect.Effect<
    typeof IncrementalSkillBasedRouting.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns a stream of changes that occurred on routing instance values. Changes are grouped by `attribute_value_id`,
   * with associate type events listed alongside unassociate type events based on the unassociate event’s timestamp.
   *
   * #### Allowed For
   *
   * * Admins
   *
   * #### Parameters
   *
   * Optional
   *
   * | Name   | Type   | Comment
   * | ------ | ------ | -------
   * | cursor | string | The `cursor` parameter is a non-human-readable argument you can use to move forward or backward in time. The cursor is a read-only URL parameter that's only available in API responses. See [Pagination](#pagination).
   */
  readonly IncrementalSkilBasedRoutingInstanceValuesExport: () => Effect.Effect<
    typeof IncrementalSkillBasedRouting.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns a stream of changes that occurred on tickets, excluding events occuring within one minute of the request. Each event is tied
   * to an update on a ticket and contains all the fields that were updated in that
   * change. For more information, see:
   *
   * - [Exporting ticket events](/documentation/ticketing/managing-tickets/using-the-incremental-export-api#exporting-ticket-events) in [Using the Incremental Exports API](/documentation/ticketing/managing-tickets/using-the-incremental-export-api)
   * - [Time-based incremental exports](/documentation/ticketing/managing-tickets/using-the-incremental-export-api#time-based-incremental-exports) in [Using the Incremental Exports API](/documentation/ticketing/managing-tickets/using-the-incremental-export-api)
   *
   * You can include comments in the event stream by using the `comment_events`
   * sideload. See Sideloading below. If you don't specify the sideload, any comment
   * present in the ticket update is described only by Boolean `comment_present`
   * and `comment_public` object properties in the event's `child_events` array.
   * The comment itself is not included.
   *
   * #### Allowed For
   *
   *  * Admins
   *
   * #### Sideloading
   *
   * The endpoint supports the `comment_events` sideload. Any comment present in the ticket
   * update is listed as an object in the event's `child_events` array. Example:
   *
   * ```js
   * "child_events": [
   *   {
   *     "id": 91048994488,
   *     "via": {
   *       "channel": "api",
   *       "source": {"from":{},"to":{},"rel":null}},
   *     "via_reference_id":null,
   *     "type": "Comment",
   *     "author_id": 5031726587,
   *     "body": "This is a comment",
   *     "html_body": "&lt;div class="zd-comment"&gt;&lt;p dir="auto"&gt;This is a comment&lt;/p&gt;",
   *     "public": true,
   *     "attachments": [],
   *     "audit_id": 91048994468,
   *     "created_at": "2009-06-25T10:15:18Z",
   *     "event_type": "Comment"
   *   },
   *   ...
   * ],
   * ...
   * ```
   */
  readonly IncrementalTicketEvents: () => Effect.Effect<
    typeof ExportIncrementalTicketEventsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns ticket metric events that occurred on or after the start time.
   *
   * Cursor pagination returns a maximum of 100 records per page. Events are listed in chronological order.
   *
   * If the results are not paginated, events will be returned as a time-based incremental export.
   *
   * See [Time-based incremental exports](/documentation/ticketing/managing-tickets/using-the-incremental-export-api#time-based-incremental-exports).
   *
   * #### Pagination
   * * Cursor pagination
   *
   * See [Pagination](/api-reference/introduction/pagination/).
   *
   * #### Allowed For
   *
   * * Admins
   */
  readonly ListTicketMetricEvents: (
    options: typeof ListTicketMetricEventsParams.Encoded,
  ) => Effect.Effect<
    typeof TicketMetricEventsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns the tickets that changed since the start time. For more information,
   * see [Exporting tickets](/documentation/ticketing/managing-tickets/using-the-incremental-export-api#exporting-tickets) in [Using the Incremental Exports API](/documentation/ticketing/managing-tickets/using-the-incremental-export-api).
   *
   * This endpoint supports time-based incremental exports.
   * For more information, see [Time-based incremental exports](/documentation/ticketing/managing-tickets/using-the-incremental-export-api#time-based-incremental-exports) in [Using the Incremental Exports API](/documentation/ticketing/managing-tickets/using-the-incremental-export-api). You can also return tickets using cursor-based pagination. See [Incremental Ticket Export, Cursor Based](#incremental-ticket-export-cursor-based).
   *
   * The results include tickets that were updated by the system. See
   * [Excluding system-updated tickets](/documentation/ticketing/managing-tickets/using-the-incremental-export-api#excluding-system-updated-tickets-time-based-exports) in [Using the Incremental Exports API](/documentation/ticketing/managing-tickets/using-the-incremental-export-api).
   *
   * The endpoint can return tickets with an `updated_at` time that's earlier than the
   * `start_time` time. The reason is that the API compares the `start_time` with the ticket's
   * `generated_timestamp` value, not its `updated_at` value. The `updated_at` value is
   * updated only if the update generates a [ticket event](#incremental-ticket-event-export).
   * The `generated_timestamp` value is updated for all ticket updates, including system
   * updates. If a system update occurs after a ticket event, the unchanged
   * `updated_at` time will become earlier relative to the updated `generated_timestamp`
   * time.
   *
   * #### Allowed For
   *
   *  * Admins
   *
   * #### Sideloading
   *
   * See [Tickets sideloads](/documentation/ticketing/using-the-zendesk-api/side_loading/#supported-endpoints). For performance reasons,
   * `last_audits` sideloads aren't supported.
   */
  readonly IncrementalTicketExportTime: () => Effect.Effect<
    typeof TimeBasedExportIncrementalTicketsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns the tickets that changed since the start time. For more information,
   * see [Exporting tickets](/documentation/ticketing/managing-tickets/using-the-incremental-export-api#exporting-tickets) in [Using the Incremental Exports API](/documentation/ticketing/managing-tickets/using-the-incremental-export-api).
   *
   * This endpoint supports cursor-based incremental exports.
   * Cursor-based exports are highly encouraged because they provide more consistent performance and
   * response body sizes. For more information, see [Cursor-based incremental exports](/documentation/ticketing/managing-tickets/using-the-incremental-export-api#cursor-based-incremental-exports) in [Using the Incremental Exports API](/documentation/ticketing/managing-tickets/using-the-incremental-export-api).
   *
   *
   *
   * #### Allowed For
   *
   *  * Admins
   *
   * #### Sideloading
   *
   * See [Tickets sideloads](/documentation/ticketing/using-the-zendesk-api/side_loading/#supported-endpoints). For performance reasons,
   * `last_audits` sideloads aren't supported.
   */
  readonly IncrementalTicketExportCursor: () => Effect.Effect<
    typeof CursorBasedExportIncrementalTicketsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   *  * Admins
   *
   * #### Sideloading
   *
   * See [Users sideloads](/documentation/ticketing/using-the-zendesk-api/side_loading/#supported-endpoints).
   */
  readonly IncrementalUserExportTime: () => Effect.Effect<
    typeof TimeBasedExportIncrementalUsersResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   *  * Admins
   *
   * #### Sideloading
   *
   * See [Users sideloads](/documentation/ticketing/using-the-zendesk-api/side_loading/#supported-endpoints).
   */
  readonly IncrementalUserExportCursor: () => Effect.Effect<
    typeof CursorBasedExportIncrementalUsersResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Shows the statuses for background jobs. Statuses are sorted first by completion date and then by creation date in descending order.
   *
   * #### Allowed For:
   *
   * * Agents
   *
   * #### Pagination
   *
   * * Cursor pagination
   *
   * See [Pagination](/api-reference/introduction/pagination/).
   */
  readonly ListJobStatuses: () => Effect.Effect<
    typeof JobStatusesResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Shows the status of a background job.
   *
   * #### Allowed For:
   *
   * * Agents
   */
  readonly ShowJobStatus: (
    jobStatusId: string,
  ) => Effect.Effect<
    typeof JobStatusResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Accepts a comma-separated list of job status ids.
   *
   * #### Allowed For:
   *
   * * Agents
   */
  readonly ShowManyJobStatuses: (
    options: typeof ShowManyJobStatusesParams.Encoded,
  ) => Effect.Effect<
    typeof JobStatusesResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Lists the translation locales available for the account.
   *
   * **Note**: You can alter the list by passing an updated `locale_ids` array to the [Update Account Settings](/api-reference/ticketing/account-configuration/account_settings/#update-account-settings) endpoint.
   *
   * #### Allowed For
   *
   * * Anyone
   */
  readonly ListLocales: () => Effect.Effect<
    typeof LocalesResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Anyone
   */
  readonly ShowLocaleById: (
    localeId: string,
  ) => Effect.Effect<
    typeof LocaleResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Lists the translation locales that have been localized for agents on a specific account.
   *
   * #### Allowed For
   *
   * * Anyone
   */
  readonly ListLocalesForAgent: () => Effect.Effect<
    typeof LocalesResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * This works like [Show Locale](#show-locale), but instead of taking a locale id as an argument, it renders the locale of the user performing the request.
   *
   * #### Allowed For
   *
   * * Anyone
   */
  readonly ShowCurrentLocale: () => Effect.Effect<
    typeof LocaleResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Anyone
   */
  readonly DetectBestLocale: () => Effect.Effect<
    typeof LocaleResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Lists the translation locales that are available to all accounts.
   *
   * #### Allowed For
   *
   * * Anyone
   */
  readonly ListAvailablePublicLocales: () => Effect.Effect<
    typeof LocalesResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Lists all shared and personal macros available to the current user. For admins, the API returns all macros for the account, including the personal macros of agents and other admins.
   *
   * #### Pagination
   *
   * - Cursor pagination (recommended)
   * - Offset pagination
   *
   * See [Pagination](/api-reference/introduction/pagination/).
   *
   * Returns a maximum of 100 records per page.
   *
   * #### Allowed For
   * * Agents
   */
  readonly ListMacros: (
    options?: typeof ListMacrosParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof MacrosResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   * * Agents
   */
  readonly CreateMacro: (
    options: typeof CreateMacroRequest.Encoded,
  ) => Effect.Effect<
    typeof CreateMacro200.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   * * Agents
   */
  readonly ShowMacro: (
    macroId: string,
  ) => Effect.Effect<
    typeof MacroResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   * * Agents
   */
  readonly UpdateMacro: (
    macroId: string,
    options: typeof UpdateMacroRequest.Encoded,
  ) => Effect.Effect<
    typeof UpdateMacro200.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   * * Agents, with restrictions applying on certain actions
   */
  readonly DeleteMacro: (
    macroId: string,
  ) => Effect.Effect<void, HttpClientError.HttpClientError | ParseError>;
  /**
   * Returns the changes the macro would make to a ticket. It doesn't actually
   * change a ticket. You can use the response data in a subsequent API call
   * to the [Tickets](/api-reference/ticketing/tickets/tickets/) endpoint to update the ticket.
   *
   * The response includes only the ticket fields that would be changed by the
   * macro. To get the full ticket object after the macro is applied,
   * see [Show Ticket After Changes](#show-ticket-after-changes).
   *
   * #### Allowed For
   * * Agents
   */
  readonly ShowChangesToTicket: (
    macroId: string,
  ) => Effect.Effect<
    typeof MacroApplyTicketResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Lists the attachments associated with a macro.
   *
   * #### Allowed For
   * * Agents
   */
  readonly ListMacroAttachments: (
    macroId: string,
  ) => Effect.Effect<
    typeof MacroAttachmentsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Allows an attachment to be uploaded and associated with a macro at the same time.
   *
   * **Note:** A macro can be associated with up to five attachments.
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly CreateAssociatedMacroAttachment: (
    macroId: string,
  ) => Effect.Effect<
    typeof MacroAttachmentResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   * * Agents
   */
  readonly ListMacrosActions: () => Effect.Effect<
    typeof ListMacrosActions200.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Lists all active shared and personal macros available to the current user.
   *
   * #### Allowed For
   * * Agents
   */
  readonly ListActiveMacros: (
    options?: typeof ListActiveMacrosParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof MacrosResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Allows an attachment to be uploaded that can be associated with a macro at a later time.
   *
   * **Note:** To ensure an uploaded attachment is not lost, associate it with a macro as soon as possible. From time to time, old attachments that are not not associated with any macro are purged.
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly CreateMacroAttachment: () => Effect.Effect<
    typeof MacroAttachmentResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Shows the properties of the specified macro attachment.
   *
   * #### Allowed For
   * * Agents
   */
  readonly ShowMacroAttachment: (
    attachmentId: string,
  ) => Effect.Effect<
    typeof MacroAttachmentResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Lists all macro categories available to the current user.
   *
   * #### Allowed For
   * * Agents
   */
  readonly ListMacroCategories: () => Effect.Effect<
    typeof MacroCategoriesResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns the definitions of the actions a macro can perform. For example,
   * one action can set the status of a ticket. The definition of the action
   * includes a title ("Status"), a type ("list"), and possible values. For a
   * list of support actions, see [Actions reference](/documentation/ticketing/reference-guides/actions-reference).
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly ListMacroActionDefinitions: () => Effect.Effect<
    typeof ListMacroActionDefinitions200.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Deletes the macros corresponding to the provided comma-separated list of IDs.
   *
   * #### Allowed For
   * * Agents
   */
  readonly DeleteManyMacros: (
    options: typeof DeleteManyMacrosParams.Encoded,
  ) => Effect.Effect<void, HttpClientError.HttpClientError | ParseError>;
  /**
   * Returns an unpersisted macro representation derived from a ticket or macro.
   *
   * The endpoint takes one of the following query parameters: `macro_id` or `ticket_id`. If you include both, `macro_id` is used.
   *
   * #### Allowed For
   * * Agents
   */
  readonly ShowDerivedMacro: () => Effect.Effect<
    typeof MacroResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Pagination
   *
   * * Offset pagination only
   *
   * See [Using Offset Pagination](/api-reference/ticketing/introduction/#using-offset-pagination).
   *
   * #### Allowed For
   * * Agents
   */
  readonly SearchMacro: () => Effect.Effect<
    typeof MacrosResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Updates the provided macros with the specified changes.
   *
   * #### Allowed For
   * * Agents
   */
  readonly UpdateManyMacros: (
    options: typeof MacroUpdateManyInput.Encoded,
  ) => Effect.Effect<
    typeof MacrosResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Pagination
   *
   * * Cursor pagination (recommended)
   * * Offset pagination
   *
   * See [Pagination](/api-reference/introduction/pagination/).
   *
   * Returns a maximum of 100 records per page.
   *
   * #### Allowed For
   *
   * * Admins
   */
  readonly ListOAuthClients: () => Effect.Effect<
    typeof OAuthClientsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Admins
   */
  readonly CreateOAuthClient: () => Effect.Effect<
    typeof OauthClientResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed for
   * * Admins
   */
  readonly ShowClient: (
    oauthClientId: string,
  ) => Effect.Effect<
    typeof OauthClientResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed for
   *  * Admins
   */
  readonly UpdateClient: (
    oauthClientId: string,
  ) => Effect.Effect<
    typeof OauthClientResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed for
   *  * Admins
   */
  readonly DeleteClient: (
    oauthClientId: string,
  ) => Effect.Effect<void, HttpClientError.HttpClientError | ParseError>;
  /**
   * #### Allowed for
   *  * Admins
   */
  readonly ClientGenerateSecret: (
    oauthClientId: string,
  ) => Effect.Effect<
    typeof OauthClientResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns all the global OAuth clients that users on your account have authorized.
   *
   * #### Pagination
   *
   * * Cursor pagination (recommended)
   * * Offset pagination
   *
   * See [Pagination](/api-reference/introduction/pagination/).
   *
   * Returns a maximum of 100 records per page.
   *
   * #### Allowed For
   *
   * * Admins
   */
  readonly ListGlobalOAuthClients: () => Effect.Effect<
    typeof GlobalClientsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns the global OAuth client associated with the ID sent on the request.
   *
   * #### Allowed for
   * * Admins
   */
  readonly ShowGlobalClient: (
    globalClientId: string,
  ) => Effect.Effect<
    typeof GlobalClientResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns information about tokens for the global clients that your account has authorized.
   *
   * #### Pagination
   *
   * * Cursor pagination (recommended)
   * * Offset pagination
   *
   * See [Pagination](/api-reference/introduction/pagination/).
   *
   * Returns a maximum of 100 records per page.
   *
   * #### Allowed For
   *
   * * Admins
   */
  readonly GlobalOAuthClientsTokenSummary: () => Effect.Effect<
    typeof GlobalClientsTokenSummaryResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns the properties of the tokens for the current user. Admins can view OAuth token properties for all users using the [all](/api-reference/ticketing/oauth/oauth_tokens/#parameters) parameter. The [client_id](/api-reference/ticketing/oauth/oauth_tokens/#parameters) parameter can be included to filter that list by a global or local OAuth client ID. For security reasons, only the first 10 characters of each access token are included.
   *
   * #### Pagination
   *
   * * Cursor pagination (recommended)
   * * Offset pagination
   *
   * See [Pagination](/api-reference/introduction/pagination/).
   *
   * Returns a maximum of 100 records per page.
   *
   * #### Allowed For
   *
   * * Admins
   */
  readonly ListOAuthTokens: () => Effect.Effect<
    typeof OAuthTokensResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns an OAuth access token with a specified [scope](#scopes).
   *
   * Refresh tokens aren't used. An access token doesn't expire but it can be [revoked](#revoke-token).
   *
   * For a tutorial, see [Creating and using OAuth tokens with the API](/documentation/ticketing/working-with-oauth/creating-and-using-oauth-tokens-with-the-api/).
   *
   * **Note**: For OAuth authorization code, use the [Create Token for Grant Type](/api-reference/ticketing/oauth/grant_type_tokens/#create-token-for-grant-type) endpoint.
   * The two APIs don't share the same path, JSON format, or request parameters. However, both APIs return access tokens that can be used to [authenticate API requests](/api-reference/ticketing/introduction/#oauth-access-token).
   *
   * #### Allowed For
   *
   * * Admins
   *
   * #### Request parameters
   *
   * The POST request takes a "token" object that contains an OAuth client's resource id and scopes.
   *
   * | Name      | Type    | Description
   * | --------- | ------- | --------------------------------------------------
   * | client_id | integer | The resource `id` of an [OAuth client](/api-reference/ticketing/oauth/oauth_clients/#json-format) (not the client's unique identifier). For the ids, see [List Clients](/api-reference/ticketing/oauth/oauth_clients/#list-clients)
   * | scopes    | array   | Valid scopes for the token. See [Scopes](#scopes) below
   *
   * #### Scopes
   *
   * The **scopes** parameter defines whether requests authenticated with the token can
   * post, put, and delete data, or only get data.
   *
   * **Note**: Don't confuse the **scopes** parameter (plural) with the **scope** parameter (singular)
   * for [grant-type tokens](/api-reference/ticketing/oauth/grant_type_tokens/).
   *
   * The **scopes** parameter is an array of strings, each specifying a resource name and
   * an access setting. Access is either "read" or "write". If you don't specify a resource,
   * access to all resources is assumed. If you don't specify the access, read and write
   * access are assumed.
   *
   * The syntax is as follows:
   *
   * `"scopes": [resource:scope, ...]`
   *
   * where `resource` is optional.
   *
   * **Examples**
   *
   * `"scopes": ["read"]`
   *
   * `"scopes": ["tickets:read"]`
   *
   * To give read and write access to a resource, specify both scopes:
   *
   * `"scopes": ["users:read", "users:write"]`
   *
   * To give write access only to one resource and read access to everything
   * else:
   *
   * `"scopes": ["organizations:write", "read"]`
   *
   * **Note**: The endpoint returns an access token even if you specify an
   * invalid scope. Any request you make with the token will return
   * a "Forbidden" error.
   *
   * **Available scopes**
   *
   * * `read` - gives access to GET endpoints. Includes
   * permission to sideload related resources
   * * `write` - gives access to POST, PUT, and DELETE endpoints
   * * `impersonate` - allows Zendesk Support admins to make requests on behalf of
   * end users. See [Making API requests on behalf of end users](/documentation/ticketing/using-the-zendesk-api/making-api-requests-on-behalf-of-end-users/)
   *
   * **Resources that can be scoped**
   *
   * * tickets
   * * users
   * * auditlogs (read only)
   * * organizations
   * * hc
   * * apps
   * * triggers
   * * automations
   * * targets
   * * webhooks
   * * macros
   * * requests
   * * satisfaction_ratings
   * * dynamic_content
   * * any_channel (write only)
   * * web_widget (write only)
   */
  readonly CreateOAuthToken: () => Effect.Effect<
    typeof OAuthTokenResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns the properties of the specified token. For security reasons, only the first 10 characters of the access token are included.
   *
   * In the first endpoint, `id` is a token id, not the full token.
   *
   * In the second endpoint, include an `Authorization: Bearer` header with the full token to get its associated properties. Example:
   *
   * ```sh
   * curl https://{subdomain}.zendesk.com/api/v2/oauth/tokens/current.json \
   *   -H 'Authorization: Bearer ${authToken}' \
   *   -v -u {email_address}/token:{api_token}
   * ```
   *
   * #### Allowed for
   *
   * * Admins, Agents, End Users
   */
  readonly ShowToken: (
    oauthTokenId: string,
  ) => Effect.Effect<
    typeof OAuthTokenResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed for
   *  * Admins, Agents, End Users
   */
  readonly RevokeOAuthToken: (
    oauthTokenId: string,
  ) => Effect.Effect<void, HttpClientError.HttpClientError | ParseError>;
  /**
   * Gets the essentials card for an object type.
   * #### Allowed For
   * * Admins and agents
   */
  readonly ShowEssentialsCard: (
    objectType: string,
  ) => Effect.Effect<
    typeof EssentialsCardResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Updates the essentials card for an object type.
   * #### Allowed For
   * * Admins
   */
  readonly UpdateEssentialsCard: (
    objectType: string,
  ) => Effect.Effect<
    typeof EssentialsCardResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Delete the essentials card for an object type.
   * #### Allowed For
   * * Admins and agents
   */
  readonly DeleteEssentialsCard: (
    objectType: string,
  ) => Effect.Effect<void, HttpClientError.HttpClientError | ParseError>;
  /**
   * Gets the list of essentials cards.
   * #### Allowed For
   * * Admins
   */
  readonly ShowEssentialsCards: () => Effect.Effect<
    typeof EssentialsCardsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns a list of custom organization fields in your account. Fields are returned in the order that you specify in your organization fields configuration in Zendesk Support. Clients should cache this resource for the duration of their API usage and map the key for each organization field to the values returned under the `organization_fields` attribute on the [organization](/api-reference/ticketing/organizations/organizations/) resource.
   *
   * #### Pagination
   *
   * * Cursor pagination (recommended)
   * * Offset pagination
   *
   * See [Pagination](/api-reference/introduction/pagination/).
   *
   * Returns a maximum of 100 records per page.
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly ListOrganizationFields: () => Effect.Effect<
    typeof OrganizationFieldsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Creates any of the following custom field types:
   *
   * * text (default when no "type" is specified)
   * * textarea
   * * checkbox
   * * date
   * * integer
   * * decimal
   * * regexp
   * * dropdown
   * * lookup
   * * multiselect
   *
   * See [About custom field types](https://support.zendesk.com/hc/en-us/articles/203661866) in Zendesk help.
   *
   * #### Allowed For
   *
   * * Admins
   */
  readonly CreateOrganizationField: () => Effect.Effect<
    typeof OrganizationFieldResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed for
   *
   * * Agents
   */
  readonly ShowOrganizationField: (
    organizationFieldId: string,
  ) => Effect.Effect<
    typeof OrganizationFieldResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Updating a Dropdown (Tagger) or Multiselect Field
   *
   * Dropdown and multiselect fields return an array of `custom_field_options` which specify the name, value, and order of dropdown or multiselect options. When updating a dropdown or multiselect field, note the following information:
   *
   * - All options must be passed on update. Options that are not passed will be removed. As a result, these values will be removed from any organizations
   * - To create a new option, pass a null `id` along with the `name` and `value`
   * - To update an existing option, pass its `id` along with the `name` and `value`
   * - To reorder an option, reposition it in the `custom_field_options` array relative to the other options
   * - To remove an option, omit it from the list of options upon update
   *
   * #### Example Request
   *
   * ```bash
   * curl https://{subdomain}.zendesk.com/api/v2/organization_fields/{organization_field_id}.json \
   *   -H "Content-Type: application/json" -X PUT \
   *   -d '{"organization_field": {"custom_field_options": [{"id": 124, "name": "Option 2", "value": "option_2"}, {"id": 123, "name": "Option 1", "value": "option_1"}, {"id": 125, "name": "Option 3", "value": "option_3"}]}}' \
   *   -v -u {email_address}/token:{api_token}
   * ```
   * #### Allowed for
   *
   * * Admins
   */
  readonly UpdateOrganizationField: (
    organizationFieldId: string,
  ) => Effect.Effect<
    typeof OrganizationFieldResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed for
   *
   * * Admins
   */
  readonly DeleteOrganizationField: (
    organizationFieldId: string,
  ) => Effect.Effect<void, HttpClientError.HttpClientError | ParseError>;
  /**
   * #### Allowed For
   *
   * * Admins
   */
  readonly ReorderOrganizationField: () => Effect.Effect<
    typeof ReorderOrganizationField200.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns a list of organization memberships for the account, user or organization in question.
   *
   * **Note**: When returning organization memberships for a user, organization memberships are sorted with the default organization first, and then by organization name.
   *
   * #### Pagination
   *
   * * Cursor pagination (recommended)
   * * Offset pagination
   *
   * See [Pagination](/api-reference/introduction/pagination/).
   *
   * Returns a maximum of 100 records per page.
   *
   * #### Allowed For
   *
   * - Agents
   * - End users
   */
  readonly ListOrganizationMemberships: () => Effect.Effect<
    typeof OrganizationMembershipsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Assigns a user to a given organization. Returns an error with status 422 if the user is already assigned to the organization.
   *
   * #### Allowed For
   *
   * * Admins
   * * Agents when creating a new organization membership for an end user
   */
  readonly CreateOrganizationMembership: () => Effect.Effect<
    typeof OrganizationMembershipResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed for
   *
   * * Agents
   */
  readonly ShowOrganizationMembershipById: (
    organizationMembershipId: string,
  ) => Effect.Effect<
    typeof OrganizationMembershipResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Immediately removes a user from an organization and schedules a job to unassign all working tickets currently assigned to the user and organization combination. The `organization_id` of the unassigned tickets is set to null.
   *
   * #### Allowed for
   *
   * * Admins
   * * Agents when deleting an organization membership for an end user
   */
  readonly DeleteOrganizationMembership: (
    organizationMembershipId: string,
  ) => Effect.Effect<void, HttpClientError.HttpClientError | ParseError>;
  /**
   * Accepts an array of up to 100 organization membership objects.
   *
   * This endpoint returns a `job_status` [JSON object](/api-reference/ticketing/ticket-management/job_statuses/#json-format) and queues a background job to do the work. Use the [Show Job Status](/api-reference/ticketing/ticket-management/job_statuses/#show-job-status) endpoint to check for the job's completion. Only a certain number of jobs can be queued or running at the same time. See [Job limit](/api-reference/introduction/rate-limits/#job-limit) for more information.
   *
   * #### Allowed For
   * * Admins
   * * Agents
   */
  readonly CreateManyOrganizationMemberships: () => Effect.Effect<
    typeof JobStatusResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Immediately removes a user from an organization and schedules a job to unassign all working tickets currently assigned to the user and organization combination. The `organization_id` of the unassigned tickets is set to null.
   *
   * #### Response
   *
   * This endpoint returns a `job_status` [JSON object](/api-reference/ticketing/ticket-management/job_statuses/#json-format) and queues a background job to do the work. Use the [Show Job Status](/api-reference/ticketing/ticket-management/job_statuses/#show-job-status) endpoint to check for the job's completion. Only a certain number of jobs can be queued or running at the same time. See [Job limit](/api-reference/introduction/rate-limits/#job-limit) for more information.
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly DeleteManyOrganizationMemberships: (
    options?:
      | typeof DeleteManyOrganizationMembershipsParams.Encoded
      | undefined,
  ) => Effect.Effect<
    typeof JobStatusResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Retrieves the details of a specific organization merge operation. This endpoint is useful for obtaining the status and outcome of a merge that was previously initiated. It provides information such as the winning and losing organization IDs, the status of the merge, and the associated URLs.
   *
   * This endpoint can be used to determine if a merge is still in progress, has completed successfully, or has encountered an error.
   *
   * #### Allowed For
   *
   * * Admins
   */
  readonly ShowOrganizationMerge: (
    organizationMergeId: string,
  ) => Effect.Effect<
    typeof OrganizationMergeResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Pagination
   *
   * * Cursor pagination (recommended)
   * * Offset pagination
   *
   * See [Pagination](/api-reference/introduction/pagination/).
   *
   * Returns a maximum of 100 records per page.
   *
   * #### Allowed For:
   *
   * * Agents
   * * End users
   *
   * For end users, the response will only list the subscriptions created by the requesting end user.
   */
  readonly ListOrganizationSubscriptions: () => Effect.Effect<
    typeof OrganizationSubscriptionsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For:
   *
   * * Agents
   * * End users
   *
   * End users can only subscribe to shared organizations in which they're members.
   */
  readonly CreateOrganizationSubscription: (
    options: typeof OrganizationSubscriptionCreateRequest.Encoded,
  ) => Effect.Effect<
    typeof OrganizationSubscriptionResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For:
   *
   * * Agents
   * * End users
   *
   * For end users, the response will only list the subscriptions created by the requesting end user.
   */
  readonly ShowOrganizationSubscription: (
    organizationSubscriptionId: string,
    options?: typeof ShowOrganizationSubscriptionParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof OrganizationSubscriptionResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For:
   *
   * * Agents
   * * End users
   */
  readonly DeleteOrganizationSubscription: (
    organizationSubscriptionId: string,
    options?: typeof DeleteOrganizationSubscriptionParams.Encoded | undefined,
  ) => Effect.Effect<void, HttpClientError.HttpClientError | ParseError>;
  /**
   * #### Pagination
   *
   * * Cursor pagination (recommended)
   * * Offset pagination
   *
   * See [Pagination](/api-reference/introduction/pagination/).
   *
   * Returns a maximum of 100 records per page.
   *
   * #### Allowed For
   *
   * * Agents, with certain restrictions
   *
   * If the agent has a custom agent role that restricts their access to only users in their own organization, a 403 Forbidden error is returned. See [Creating custom agent roles](https://support.zendesk.com/hc/en-us/articles/203662026-Creating-custom-roles-and-assigning-agents#topic_cxn_hig_bd) in Zendesk help.
   */
  readonly ListOrganizations: () => Effect.Effect<
    typeof OrganizationsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * You must provide a unique `name` for each organization. Normally
   * the system doesn't allow records to be created with identical names.
   * However, a race condition can occur if you make two or more identical
   * POSTs very close to each other, causing the records to have identical
   * organization names.
   *
   * #### Allowed For
   *
   * * Admins
   * * Agents assigned to a custom role with permissions to manage organizations (Enterprise only)
   */
  readonly CreateOrganization: (
    options: typeof CreateOrganizationRequest.Encoded,
  ) => Effect.Effect<
    typeof OrganizationResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Admins
   * * Agents
   */
  readonly ShowOrganization: (
    organizationId: string,
  ) => Effect.Effect<
    typeof OrganizationResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Admins
   * * Agents
   *
   * Agents with no permissions restrictions can only update "notes" on organizations.
   *
   * **Note:** Updating an organization's `domain_names` property overwrites all existing `domain_names` values. To prevent this, submit a complete list of `domain_names` for the organization in your request.
   *
   * #### Example Request
   *
   * ```js
   * {
   *   "organization": {
   *     "notes": "Something interesting"
   *   }
   * }
   * ```
   */
  readonly UpdateOrganization: (
    organizationId: string,
  ) => Effect.Effect<
    typeof OrganizationResponse.Type,
    | HttpClientError.HttpClientError
    | ParseError
    | ClientError<"Errors", typeof Errors.Type>
  >;
  /**
   * #### Allowed For
   *
   * * Admins
   * * Agents assigned to a custom role with permissions to manage organizations (Enterprise only)
   */
  readonly DeleteOrganization: (
    organizationId: string,
  ) => Effect.Effect<void, HttpClientError.HttpClientError | ParseError>;
  /**
   * Merges two organizations by moving all users, tickets, and domain names from the organization specified by `{organization_id}` to the organization specified by `winner_id`. After the merge:
   *
   * - The "losing" organization will be deleted.
   * - Other organization fields and their values will not be carried over to the "winning" organization.
   * - The merge operation creates an `Organization Merge` record which contains a status indicating the progress of the merge.
   *
   * **Note**: This operation is irreversible.
   *
   * #### Merge Statuses
   *
   * | Status | Description |
   * |--------|-------------|
   * | new | A job has been queued to merge the two organizations. |
   * | in progress | The job to merge the two organizations has started. |
   * | error | An error occurred during the merge job. The merge can be retried by repeating the API call. |
   * | complete | The merge has been completed successfully. |
   *
   * #### Allowed For
   *
   * * Admins
   */
  readonly CreateOrganizationMerge: (
    organizationId: string,
    options: typeof OrganizationMergeRequest.Encoded,
  ) => Effect.Effect<
    typeof OrganizationMergeResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Retrieves a list of all organization merge operations associated with a given organization. This endpoint allows you to track the history of merge actions for an organization, including ongoing and completed merges.
   *
   * Each entry in the list contains details such as the ID of the merge, the winning and losing organization IDs, the current status of the merge, and a URL to access the `Organization Merge` record.
   *
   * #### Pagination
   *
   * - Cursor pagination is used for this endpoint.
   * - A maximum of 100 records can be returned per page.
   *
   * See [Pagination](/api-reference/introduction/pagination/) for more details.
   *
   * #### Allowed For
   *
   * * Admins
   */
  readonly ListOrganizationMerges: (
    organizationId: string,
  ) => Effect.Effect<
    typeof OrganizationMergeListResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Agents
   */
  readonly OrganizationRelated: (
    organizationId: string,
  ) => Effect.Effect<
    typeof OrganizationsRelatedResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns an array of organizations whose name starts with the
   * value specified in the `name` parameter.
   *
   * #### Pagination
   *
   * * Offset pagination only
   *
   * See [Using Offset Pagination](/api-reference/ticketing/introduction/#using-offset-pagination).
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly AutocompleteOrganizations: () => Effect.Effect<
    typeof OrganizationsResponse.Type,
    | HttpClientError.HttpClientError
    | ParseError
    | ClientError<"Errors", typeof Errors.Type>
    | ClientError<"Errors", typeof Errors.Type>
    | ClientError<"Errors", typeof Errors.Type>
  >;
  /**
   * Returns an approximate count of organizations. If the count exceeds
   * 100,000, it is updated every 24 hours.
   *
   * The `refreshed_at` property of the `count` object is a timestamp that indicates
   * when the count was last updated.
   *
   * When the count exceeds 100,000, the `refreshed_at` property may
   * occasionally be null. This indicates that the count is being
   * updated in the background and the `value` property of the `count` object is limited to
   * 100,000 until the update is complete.
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly CountOrganizations: () => Effect.Effect<
    typeof CountOrganizationResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Accepts an array of up to 100 organization objects.
   *
   * #### Response
   *
   * This endpoint returns a `job_status` [JSON object](/api-reference/ticketing/ticket-management/job_statuses/#json-format) and queues a background job to do the work. Use the [Show Job Status](/api-reference/ticketing/ticket-management/job_statuses/#show-job-status) endpoint to check for the job's completion. Only a certain number of jobs can be queued or running at the same time. See [Job limit](/api-reference/introduction/rate-limits/#job-limit) for more information.
   *
   * #### Allowed For
   *
   * * Agents, with restrictions applying on certain actions
   */
  readonly CreateManyOrganizations: () => Effect.Effect<
    typeof JobStatusResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Creates an organization if it doesn't already exist, or updates
   * an existing organization. Using this method means one less call
   * to check if an organization exists before creating it. You need
   * to specify the id or external id when updating
   * an organization to avoid a duplicate error response. Name is
   * not available as a matching criteria.
   *
   * #### Allowed For
   *
   * * Agents, with restrictions on certain actions
   */
  readonly CreateOrUpdateOrganization: () => Effect.Effect<
    typeof OrganizationResponse.Type | typeof OrganizationResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Accepts a comma-separated list of up to 100 organization ids or external ids.
   *
   * #### Response
   *
   * This endpoint returns a `job_status` [JSON object](/api-reference/ticketing/ticket-management/job_statuses/#json-format) and queues a background job to do the work. Use the [Show Job Status](/api-reference/ticketing/ticket-management/job_statuses/#show-job-status) endpoint to check for the job's completion. Only a certain number of jobs can be queued or running at the same time. See [Job limit](/api-reference/introduction/rate-limits/#job-limit) for more information.
   *
   * #### Allowed For
   *
   * * Admins
   * * Agents assigned to a custom role with permissions to manage organizations (Enterprise only)
   */
  readonly DeleteManyOrganizations: () => Effect.Effect<
    typeof JobStatusResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns an array of organizations matching the criteria. You may search by an organization's `external_id` or `name`, but not both:
   *
   * #### Searching by `external_id`
   *
   * If you set the `external_id` value of an organization to associate it to an external record, you can use it to search for the organization.
   *
   * For an organization to be returned, its `external_id` must exactly match the value provided (case insensitive).
   *
   * #### Searching by `name`
   *
   * For an organization to be returned, its `name` must exactly match the value provided (case insensitive).
   *
   * #### Allowed For:
   *
   * * Admins
   * * Agents assigned to a custom role with permissions to add or modify organizations (Enterprise only)
   *
   * See [Creating custom agent roles](https://support.zendesk.com/hc/en-us/articles/203662026#topic_cxn_hig_bd) in the Support Help Center.
   */
  readonly SearchOrganizations: () => Effect.Effect<
    typeof OrganizationsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Accepts a comma-separated list of up to 100 organization ids or external ids.
   *
   * #### Allowed For
   *
   * * Admins
   * * Agents
   */
  readonly ShowManyOrganizations: () => Effect.Effect<
    typeof OrganizationsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Bulk or batch updates up to 100 organizations.
   *
   * #### Bulk update
   *
   * To make the same change to multiple organizations, use the following endpoint and data format:
   *
   * `https://{subdomain}.zendesk.com/api/v2/organizations/update_many.json?ids=1,2,3`
   *
   * ```js
   * {
   *   "organization": {
   *     "notes": "Priority"
   *   }
   * }
   * ```
   *
   * #### Batch update
   *
   * To make different changes to multiple organizations, use the following endpoint and data format:
   *
   * `https://{subdomain}.zendesk.com/api/v2/organizations/update_many.json`
   *
   * ```js
   * {
   *   "organizations": [
   *     { "id": 1, "notes": "Priority" },
   *     { "id": 2, "notes": "Normal" }
   *   ]
   * }
   * ```
   *
   * #### Response
   *
   * This endpoint returns a `job_status` [JSON object](/api-reference/ticketing/ticket-management/job_statuses/#json-format) and queues a background job to do the work. Use the [Show Job Status](/api-reference/ticketing/ticket-management/job_statuses/#show-job-status) endpoint to check for the job's completion. Only a certain number of jobs can be queued or running at the same time. See [Job limit](/api-reference/introduction/rate-limits/#job-limit) for more information.
   *
   * #### Allowed For
   *
   * * Admins
   * * Agents
   *
   * Agents with no permissions restrictions can only update "notes" on organizations.
   */
  readonly UpdateManyOrganizations: () => Effect.Effect<
    typeof JobStatusResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * The response is always ordered by `updated_at` in descending order
   *
   * #### Allowed For
   *
   * * Agents
   *
   * #### Pagination
   *
   * * Cursor pagination (recommended)
   * * Offset pagination
   *
   * See [Pagination](/api-reference/introduction/pagination/).
   */
  readonly ListTicketProblems: () => Effect.Effect<
    typeof ListTicketProblemsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns tickets whose type is "problem" and whose subject contains the string specified in the `text` parameter.
   *
   * You can specify the `text` parameter in the request body rather than the query string. Example:
   *
   * `{"text": "fire"}`
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly AutocompleteProblems: (options: {
    readonly params?: typeof AutocompleteProblemsParams.Encoded | undefined;
    readonly payload: typeof AutocompleteProblemsRequest.Encoded;
  }) => Effect.Effect<
    typeof ListTicketProblemsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Unregisters the mobile devices that are receiving push notifications. Specify the devices as an array of mobile device tokens.
   *
   * #### Allowed for
   *
   * * Admins
   */
  readonly PushNotificationDevices: (
    options: typeof PushNotificationDevicesRequest.Encoded,
  ) => Effect.Effect<
    typeof PushNotificationDevices200.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns all active queues for an account.
   *
   * #### Allowed For
   *
   * * Admins
   */
  readonly ListQueues: () => Effect.Effect<
    typeof QueuesResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Creates a queue. Accepts a JSON queue definition as the request body.
   *
   * #### Allowed For
   *
   * * Admins
   */
  readonly CreateQueue: () => Effect.Effect<
    typeof QueueResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns a queue for the given queue id.
   * #### Allowed For
   *
   * * Agents
   */
  readonly ShowQueueById: (
    queueId: string,
  ) => Effect.Effect<
    typeof QueueResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Updates the queue definition for a given queue id.
   * #### Allowed For
   *
   * * Admins
   */
  readonly UpdateQueue: (
    queueId: string,
  ) => Effect.Effect<
    typeof QueueResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Deletes the queue and related records.
   * #### Allowed For
   *
   * * Admins
   */
  readonly DeleteQueue: (
    queueId: string,
  ) => Effect.Effect<void, HttpClientError.HttpClientError | ParseError>;
  /**
   * Returns the definitions of the queues and the
   * definitions of the conditions under which a queue can execute. The
   * definition of the action includes a title ("Status"), a type ("list"), and
   * possible values. The definition of the condition includes the same fields
   * as well as the possible operators.
   * #### Allowed For
   *
   * * Admins
   */
  readonly ListQueueDefinitions: () => Effect.Effect<
    typeof DefinitionsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Alters the evaluation order of OCR queues in the account.
   * The evaluation order is set in a `queue_ids` array in the request body.
   *
   * You must include every queue id in your account to reorder the OCR queues. If not, the endpoint will return 400 Bad Request.
   *
   * #### Allowed For
   *
   * * Admins
   */
  readonly ReorderQueues: () => Effect.Effect<
    void,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Lists all the support addresses for the account.
   *
   * #### Pagination
   *
   * - Cursor pagination (recommended)
   * - Offset pagination
   *
   * See [Pagination](/api-reference/introduction/pagination/).
   *
   * Returns a maximum of 100 records per page.
   *
   * #### Allowed For
   *
   * * Admins
   * * Agents
   */
  readonly ListSupportAddresses: () => Effect.Effect<
    typeof SupportAddressesResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Adds a Zendesk or external support address to your account.
   *
   * To add a Zendesk address, use the following syntax: `{local-part}@{accountname}.zendesk.com`.
   * Example: 'sales-team@example.zendesk.com'. The [local-part](https://en.wikipedia.org/wiki/Email_address#Local-part) can be anything you like.
   *
   * To add an external email address such as help@omniwearshop.com, the email must already exist and you must set up forwarding on your email server. The exact steps depend on your mail server. See [Forwarding incoming email to Zendesk Support](https://support.zendesk.com/hc/en-us/articles/203663266). After setting up forwarding, run the [Verify Support Address Forwarding](#verify-support-address-forwarding) endpoint. The address won't work in Zendesk Support until it's been verified.
   *
   * #### Allowed For
   *
   * * Admins
   * * Agents with permission to manage channels and extensions. See the system permissions in [Creating custom roles and assigning agents (Enterprise)](https://support.zendesk.com/hc/en-us/articles/203662026-Creating-custom-roles-and-assigning-agents-Enterprise-#topic_cxn_hig_bd) in the Support Help Center
   */
  readonly CreateSupportAddress: () => Effect.Effect<
    typeof SupportAddressResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Admins
   * * Agents
   */
  readonly ShowSupportAddress: (
    supportAddressId: string,
  ) => Effect.Effect<
    typeof SupportAddressResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Updates an existing support address for your account.
   *
   * You can't use this endpoint to update a support address's `email` property.
   * Instead, you can create a new address using the [Create Support
   * Address](#create-support-address) endpoint.
   *
   * #### Allowed For
   *
   * * Admins
   * * Agents with permission to manage channels and extensions. See the system permissions in [Creating custom roles and assigning agents (Enterprise)](https://support.zendesk.com/hc/en-us/articles/203662026-Creating-custom-roles-and-assigning-agents-Enterprise-#topic_cxn_hig_bd) in the Support Help Center
   */
  readonly UpdateSupportAddress: (
    supportAddressId: string,
  ) => Effect.Effect<
    typeof SupportAddressResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Deletes a support address.
   *
   * #### Allowed For
   *
   * * Admins
   * * Agents with permission to manage channels and extensions. See the system permissions in [Creating custom roles and assigning agents (Enterprise)](https://support.zendesk.com/hc/en-us/articles/203662026-Creating-custom-roles-and-assigning-agents-Enterprise-#topic_cxn_hig_bd) in the Support Help Center
   */
  readonly DeleteRecipientAddress: (
    supportAddressId: string,
  ) => Effect.Effect<void, HttpClientError.HttpClientError | ParseError>;
  /**
   * Sends a test email to the specified support address to verify that email forwarding for the address works. An external support address won't work in Zendesk Support until it's verified.
   *
   * **Note**: You don't need to verify Zendesk system support addresses.
   *
   * The endpoint takes the following body: `{"type": "forwarding"}`. The value of the `type` property defaults to "forwarding" if none is specified, but the values "spf" and "dns" are also accepted.
   *
   * Use this endpoint after [adding](#create-support-address) an external support address to Zendesk Support and setting up forwarding on your email server. See [Forwarding incoming email to Zendesk Support](https://support.zendesk.com/hc/en-us/articles/203663266).
   *
   * The endpoint doesn't return the results of the test. Instead, use the [Show Support Address](#show-support-address) endpoint to check that the `forwarding_status` property is "verified".
   *
   * Other verification checks can also be performed using this API. These include SPF checks and DNS checks.
   *
   * When calling the endpoint with `type` set to "spf", it will queries the DNS records to check that the SPF records for Zendesk are present for outbound emails.
   *
   * When calling the endpoint with `type` set to "dns", it runs checks on your CNAME records to make sure they are set up properly in your DNS.
   *
   * #### Allowed For
   *
   * * Admins
   * * Agents with permission to manage channels and extensions. See the system permissions in [Creating custom roles and assigning agents (Enterprise)](https://support.zendesk.com/hc/en-us/articles/203662026-Creating-custom-roles-and-assigning-agents-Enterprise-#topic_cxn_hig_bd) in the Support Help Center
   */
  readonly VerifySupportAddressForwarding: (
    supportAddressId: string,
  ) => Effect.Effect<
    typeof VerifySupportAddressForwarding200.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns filter definitions based on the given target type.  Target types
   * include users (zen:user), tickets (zen:ticket), organizations (zen:organization), or custom objects (zen:custom_object:CUSTOM_OBJECT_KEY).
   * The returned filter definitions are the options that you can use to build a custom field or ticket field's
   * `relationship_filter`.
   */
  readonly GetRelationshipFilterDefinitions: (
    targetType: string,
    options?: typeof GetRelationshipFilterDefinitionsParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof RelationshipFilterDefinitionResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed for
   *
   * * End Users
   *
   * #### Pagination
   *
   * * Cursor pagination (recommended)
   * * Offset pagination
   *
   * See [Pagination](/api-reference/introduction/pagination/).
   */
  readonly ListRequests: (
    options?: typeof ListRequestsParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof RequestsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Accepts a `request` object that sets one or more properties.
   *
   * #### Allowed for
   *
   * * End users
   * * Anonymous users (rate limit of 5 requests per hour for [trial accounts](/documentation/developer-tools/getting-started/getting-a-trial-or-sponsored-account-for-development/))
   *
   * #### Additional properties
   *
   * In addition to the writable request properties in the [JSON Format table](#json-format) above, you can set the following properties when creating a request.
   *
   * | Name                | Type   | Mandatory | Comment
   * | ----------------    | -------| --------- | -------
   * | comment             | object | yes       | Describes the problem, incident, question, or task. See [Request comments](#request-comments)
   * | collaborators       | array  | no        | Adds collaborators (cc's) to the request. An email notification is sent to them when the ticket is created. See [Setting collaborators](/documentation/ticketing/managing-tickets/creating-and-managing-requests#setting-collaborators)
   * | requester           | object | yes*      | \*Required for anonymous requests. Specifies the requester of the anonymous request. See [Creating anonymous requests](/documentation/ticketing/managing-tickets/creating-and-managing-requests#creating-anonymous-requests)
   *
   * #### Creating follow-up requests
   *
   * Once a ticket is closed (as distinct from solved), it can't be reopened. However, you can create a new request that references the closed ticket. To create the follow-up request, include a `via_followup_source_id` property in the `request` object that specifies the closed ticket. The parameter only works with closed tickets. It has no effect with other tickets.
   */
  readonly CreateRequest: () => Effect.Effect<
    typeof RequestResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Sideloads
   *
   * The following sideloads are supported:
   *
   * | Name             | Will sideload
   * | ---------------- | -------------
   * | users            | The email ccs for a request by side-loading users
   *
   * #### Allowed For
   *
   * * End Users
   */
  readonly ShowRequest: (
    requestId: string,
  ) => Effect.Effect<
    typeof RequestResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Updates a request with a comment or collaborators (cc's). The end user who created the request can also use it to mark the request as solved. The endpoint can't be used to update other request attributes.
   *
   * #### Writable properties
   * This endpoint can only update the following properties in the request.
   *
   * | Name                     | Type    | Required | Description                                          |
   * | ------------------------ | ------- | -------- | ---------------------------------------------------- |
   * | comment                  | object  | no       | Adds a comment to the request. See [Request comments](#request-comments) |
   * | solved                   | boolean | no       | Marks the request as solved. Example: `{"request": {"solved": "true"}}`. End users can mark requests as solved only if the request's `can_be_solved_by_me` property is true. The property is true only when the ticket is assigned to an agent and the ticket type is not a problem but a question, task, or incident |
   * | additional_collaborators | array   | no       | Adds collaborators to the request. An email notification is sent to them when the ticket is updated. See [Adding collaborators](/documentation/ticketing/managing-tickets/creating-and-managing-requests#adding-collaborators) |
   *
   * #### Allowed For
   *
   * * End users
   */
  readonly UpdateRequest: (
    requestId: string,
  ) => Effect.Effect<
    typeof RequestResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Pagination
   *
   * - Cursor pagination (recommended)
   * - Offset pagination
   *
   * See [Pagination](/api-reference/introduction/pagination/).
   *
   * #### Sorting
   *
   * By default, comments are sorted by creation date in ascending order.
   *
   * When using cursor pagination, use the following parameter to change the sort order:
   *
   * | Name   | Type   | Required | Comments
   * | ------ | ------ | -------- | --------
   * | `sort` | string | no       | Possible values are "created_at" (ascending order) or "-created_at" (descending order)
   *
   * When using offset pagination, use the following parameters to change the sort order:
   *
   * | Name         | Type   | Required | Comments
   * | ------------ | ------ | -------- | --------
   * | `sort_by`    | string | no       | One of `created_at`, `updated_at`
   * | `sort_order` | string | no       | One of `asc`, `desc`
   *
   * #### Allowed For
   *
   * * End Users
   */
  readonly ListComments: (
    requestId: string,
    options?: typeof ListCommentsParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof TicketCommentsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * End Users
   */
  readonly ShowComment: (
    requestId: string,
    ticketCommentId: string,
  ) => Effect.Effect<
    typeof TicketCommentResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Examples:
   *
   * * `GET /api/v2/requests/search.json?query=printer`
   * * `GET /api/v2/requests/search.json?query=printer&organization_id=1`
   * * `GET /api/v2/requests/search.json?query=printer&cc_id=true`
   * * `GET /api/v2/requests/search.json?query=printer&status=hold,open`
   *
   * #### Pagination
   *
   * * Offset pagination only
   *
   * See [Using Offset Pagination](/api-reference/ticketing/introduction/#using-offset-pagination).
   *
   * #### Results limit
   *
   * The Search Requests endpoint returns up to 1,000 results per query, with a maximum of 100 results per page. See [Pagination](/api-reference/ticketing/introduction/#pagination). If you request a page past the limit (`page=11` at 100 results per page), a 422 Insufficient Resource Error is returned.
   *
   * #### Allowed For
   *
   * * End Users
   */
  readonly SearchRequests: (
    options?: typeof SearchRequestsParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof RequestsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Lists resource collections for the account.
   *
   * #### Allowed for
   *
   * * Admins
   */
  readonly ListResourceCollections: () => Effect.Effect<
    typeof ResourceCollectionsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Creates a resource collection from a provided `payload` object. The `payload` object is specified the same way as the content of a requirements.json file in a Zendesk app. See [Specifying Apps Requirements](/documentation/apps/app-developer-guide/apps_requirements/) in the Zendesk Apps framework docs.
   *
   * The response includes a [job
   * status](/api-reference/ticketing/ticket-management/job_statuses/) for creation of the specified resources.
   *
   * #### Allowed for
   *
   * * Admins
   */
  readonly CreateResourceCollection: () => Effect.Effect<
    typeof JobStatusResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Retrieves details for a specified resource collection.
   *
   * #### Allowed for
   *
   * * Admins
   */
  readonly RetrieveResourceCollection: (
    resourceCollectionId: string,
  ) => Effect.Effect<
    typeof ResourceCollectionResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Updates a resource collection using a provided `payload` object. The `payload` object  is specified the same way as the content of a requirements.json file in a Zendesk app. See [Specifying Apps Requirements](/documentation/apps/app-developer-guide/apps_requirements/) in the Zendesk Apps framework docs.
   *
   * The response includes a [job
   * status](/api-reference/ticketing/ticket-management/job_statuses/) for the resource updates.
   *
   * #### Allowed for
   *
   * * Admins
   */
  readonly UpdateResourceCollection: (
    resourceCollectionId: string,
  ) => Effect.Effect<
    typeof JobStatusResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Deletes a specified resource collection.
   *
   * The response includes a [job
   * status](/api-reference/ticketing/ticket-management/job_statuses/) for deletion of the collection's resources.
   *
   * #### Allowed for
   *
   * * Admins
   */
  readonly DeleteResourceCollection: (
    resourceCollectionId: string,
  ) => Effect.Effect<
    typeof JobStatusResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns an attribute value.
   *
   * #### Allowed For
   *
   * * Agents and admins
   */
  readonly ListAGentAttributeValues: (
    userId: string,
  ) => Effect.Effect<
    typeof SkillBasedRoutingAttributeValuesResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Adds the specified attributes if no attributes exists, or replaces all existing attributes with the specified attributes.
   *
   * #### Allowed For
   *
   * * Admins
   */
  readonly SetAgentAttributeValues: (
    userId: string,
  ) => Effect.Effect<
    typeof SkillBasedRoutingAttributeValuesResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Accepts a comma-separated list of up to 100 agent ids and returns attribute values for each agent in the list.
   *
   * #### Allowed For
   * * Admins
   * * [Agents in custom role with permission to manage skills](https://support.zendesk.com/hc/en-us/articles/4408882153882-Creating-custom-roles-and-assigning-agents)
   *
   * #### Pagination
   * * [Cursor pagination](/api-reference/introduction/pagination/#cursor-pagination) only.
   * Note: `page[before]` and `page[after]` can't be used together in the same request.
   */
  readonly ListManyAgentsAttributeValues: (
    options: typeof ListManyAgentsAttributeValuesParams.Encoded,
  ) => Effect.Effect<
    typeof ManySkillBasedRoutingAttributeValuesResponse.Type,
    | HttpClientError.HttpClientError
    | ParseError
    | ClientError<
        "SkillBasedRoutingAttributeValuesError",
        typeof SkillBasedRoutingAttributeValuesError.Type
      >
  >;
  /**
   * Adds, replaces or removes multiple attributes for up to 100 agents.
   *
   * #### Allowed For
   * * Admins
   * * [Agents in custom role with permission to manage skills](https://support.zendesk.com/hc/en-us/articles/4408882153882-Creating-custom-roles-and-assigning-agents)
   *
   * #### Available Parameters
   *
   * The request takes a data object with the following properties:
   * | Name       | Type   | Required | Description                                                                                       |
   * | ---------- | ------ | -------- | ------------------------------------------------------------------------------------------------- |
   * | action     | string | true     | The action to perform on the attribute values. One of the following: "upsert", "update", "delete" |
   * | attributes | object | true     | The attribute values to update. See [Attribute Values](#attribute-values)                         |
   * | items      | array  | true     | The list of agent ids                                                                             |
   *
   * Action can be one of the following:
   *   * upsert: Adds new attribute values to the agents
   *   * update: Replaces all the current attribute values of the agents with the new values
   *   * delete: Removes specified attribute values from the agents
   *
   * This endpoint returns a `job_status` [JSON object](/api-reference/ticketing/ticket-management/job_statuses/#json-format) and queues a background job to do the work. Use the [Show Job Status](/api-reference/ticketing/ticket-management/job_statuses/#show-job-status) endpoint to check for the job's completion.
   */
  readonly BulkSetAgentAttributeValuesJob: (
    options: typeof BulkSkillBasedRoutingAttributeValuesRequest.Encoded,
  ) => Effect.Effect<
    typeof JobStatusResponse.Type,
    | HttpClientError.HttpClientError
    | ParseError
    | ClientError<
        "SkillBasedRoutingAttributeValuesError",
        typeof SkillBasedRoutingAttributeValuesError.Type
      >
  >;
  /**
   * Returns a list of attributes for the account.
   *
   * #### Sideloads
   *
   * The following sideloads are supported:
   *
   * | Name             | Will sideload
   * | ---------------- | -------------
   * | attribute_values | The attribute values available on the account
   *
   * #### Allowed For
   *
   * * Agents and admins
   */
  readonly ListAccountAttributes: () => Effect.Effect<
    typeof SkillBasedRoutingAttributesResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Creates an attribute.
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly CreateAttribute: () => Effect.Effect<
    typeof SkillBasedRoutingAttributeResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns an attribute.
   *
   * #### Allowed For
   *
   * * Admins
   */
  readonly ShowAttribute: (
    attributeId: string,
  ) => Effect.Effect<
    typeof SkillBasedRoutingAttributeResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Updates an attribute.
   *
   * #### Allowed For
   *
   * * Admins
   */
  readonly UpdateAttribute: (
    attributeId: string,
  ) => Effect.Effect<
    typeof SkillBasedRoutingAttributeResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Deletes an attribute.
   *
   * #### Allowed For
   *
   * * Admins
   */
  readonly DeleteAttribute: (
    attributeId: string,
  ) => Effect.Effect<void, HttpClientError.HttpClientError | ParseError>;
  /**
   * Returns a list of attribute values for a provided attribute.
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly ListAttributeValues: (
    attributeId: string,
  ) => Effect.Effect<
    typeof SkillBasedRoutingAttributeValuesResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Creates an attribute value.
   *
   * #### Allowed For
   *
   * * Admins
   */
  readonly CreateAttributeValue: (
    attributeId: string,
  ) => Effect.Effect<
    typeof SkillBasedRoutingAttributeValueResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns an attribute value.
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly ShowAttributeValue: (
    attributeId: string,
    attributeValueId: string,
  ) => Effect.Effect<
    typeof SkillBasedRoutingAttributeValueResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Deletes an attribute value.
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly DeleteAttributeValue: (
    attributeId: string,
    attributeValueId: string,
  ) => Effect.Effect<void, HttpClientError.HttpClientError | ParseError>;
  /**
   * Updates the name and ticket conditions of a skill. When a ticket is created, the skill is applied to a ticket  if the ticket meets the specified condition or conditions. See the [Conditions reference](/documentation/ticketing/reference-guides/conditions-reference/) for more information.
   *
   * #### Allowed For
   *
   * * Admins
   */
  readonly UpdateAttributeValue: (
    attributeId: string,
    attributeValueId: string,
  ) => Effect.Effect<
    typeof SkillBasedRoutingAttributeValueResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns the condition definitions that can be configured to apply attributes to a ticket.
   *
   * #### Allowed For
   *
   * * Admins
   */
  readonly ListRoutingAttributeDefinitions: () => Effect.Effect<
    typeof SkillBasedRoutingAttributeDefinitions.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns a list of ticket ids that contain attributes matching the current user's attributes. Accepts a `ticket_ids` parameter for relevant tickets to check for matching attributes.
   *
   * #### Allowed For
   *
   * * Agents and admins
   */
  readonly ListTicketsFullfilledByUser: (
    options: typeof ListTicketsFullfilledByUserParams.Encoded,
  ) => Effect.Effect<
    typeof SkillBasedRoutingTicketFulfilledResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns a list of attributes values for the ticket.
   *
   * #### Allowed For
   *
   * * Agents and admins
   */
  readonly ListTicketAttributeValues: (
    ticketId: string,
  ) => Effect.Effect<
    typeof SkillBasedRoutingAttributeValuesResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Adds the specified attributes if no attributes exists, or replaces all existing attributes with the specified attributes.
   *
   * Invalid or deleted attributes are ignored.
   *
   * #### Allowed For
   *
   * * Admins
   */
  readonly SetTicketAttributeValues: (
    ticketId: string,
  ) => Effect.Effect<
    typeof SkillBasedRoutingAttributeValuesResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   * * Admins
   *
   * #### Pagination
   *
   * * Cursor pagination (recommended)
   * * Offset pagination
   *
   * See [Pagination](/api-reference/introduction/pagination/).
   *
   * #### Filters
   *
   * | Parameter  | Value
   * | ---------- | -----
   * | score      | offered, unoffered, received, received\_with\_comment, received\_without\_comment,<br/>good, good\_with\_comment, good\_without\_comment,<br/>bad, bad\_with\_comment, bad\_without\_comment
   * | start_time | Time of the oldest satisfaction rating, as a [Unix epoch time](https://www.epochconverter.com/)
   * | end_time   | Time of the most recent satisfaction rating, as a [Unix epoch time](https://www.epochconverter.com/)
   *
   * If you specify an unqualified score such as `good`, the results include all the records with and without comments.
   *
   * Examples:
   *
   * * `/api/v2/satisfaction_ratings.json?score=bad`
   * * `/api/v2/satisfaction_ratings.json?score=bad&start_time=1498151194`
   * * `/api/v2/satisfaction_ratings.json?start_time=1340384793&end_time=1371920793`
   */
  readonly ListSatisfactionRatings: () => Effect.Effect<
    typeof SatisfactionRatingsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns a specific satisfaction rating. You can get the id from
   * the [List Satisfaction Ratings](#list-satisfaction-ratings) endpoint.
   *
   * #### Allowed For
   *
   *  * Admins
   */
  readonly ShowSatisfactionRating: (
    satisfactionRatingId: string,
  ) => Effect.Effect<
    typeof SatisfactionRatingResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns an approximate count of satisfaction ratings in the account. If the count exceeds 100,000, the count will return a cached result. This cached result will update every 24 hours.
   *
   * The `count[refreshed_at]` property is a timestamp that indicates when the count was last updated.
   *
   * **Note**: When the count exceeds 100,000, `count[refreshed_at]` may occasionally be null.
   * This indicates that the count is being updated in the background, and `count[value]` is limited to 100,000 until the update is complete.
   *
   * #### Allowed For
   * * Admins
   */
  readonly CountSatisfactionRatings: () => Effect.Effect<
    typeof SatisfactionRatingsCountResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * List all reasons for an account
   *
   * #### Allowed For
   *
   * * Admins
   */
  readonly ListSatisfactionRatingReasons: () => Effect.Effect<
    typeof SatisfactionReasonsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Admins
   */
  readonly ShowSatisfactionRatings: (
    satisfactionReasonId: string,
  ) => Effect.Effect<
    typeof SatisfactionReasonResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns the search results. See [Query basics](#query-basics) for the syntax of the `query` parameter.
   *
   * Use the ampersand character (&) to append the `sort_by` or `sort_order` parameters to the URL.
   *
   * For examples, see [Searching with Zendesk API](/documentation/ticketing/using-the-zendesk-api/searching-with-the-zendesk-api).
   *
   * #### Allowed For
   *
   * * Agents
   *
   * #### Pagination
   *
   * * Offset pagination only
   *
   * Offset pagination may result in duplicate results when paging. You can also use the
   * [Export Search Results](/api-reference/ticketing/ticket-management/search/#export-search-results) endpoint, which
   * uses cursor-based pagination and doesn't return duplicate results. See
   * [Using cursor pagination](/api-reference/introduction/pagination/#using-cursor-pagination) for more information.
   *
   *
   * #### Errors JSON Format
   *
   * Errors are represented as JSON objects which have the following keys:
   *
   * | Name                  | Type                 | Comment
   * | --------------------- | ---------------------| --------------------
   * | error                 | string               | The type of error. Examples: "unavailable", "invalid"
   * | description           | string               |
   *
   * ##### Example Error
   * ```js
   * {
   *   "error": "unavailable",
   *   "description": "Sorry, we could not complete your search query. Please try again in a moment."
   * }
   * ```
   */
  readonly ListSearchResults: (
    options: typeof ListSearchResultsParams.Encoded,
  ) => Effect.Effect<
    typeof SearchResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns the number of items matching the query rather than the items. The search string works the same as a regular search.
   *
   * #### Allowed For
   *
   * - Agents
   */
  readonly CountSearchResults: (
    options: typeof CountSearchResultsParams.Encoded,
  ) => Effect.Effect<
    typeof SearchCountResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Exports a set of results. See [Query syntax](#query-syntax) for the syntax of the `query` parameter.
   *
   * Use this endpoint for search queries that will return more than 1000 results. The result set is ordered only by the `created_at` attribute.
   *
   * The search only returns results of a single object type. The following object types are supported: ticket, organization, user, or group.
   *
   * You must specify the type in the `filter[type]` parameter. Searches with type in the query string will result in an error.
   *
   * #### Allowed For
   *
   * - Agents
   *
   * #### Pagination
   *
   * - Cursor pagination
   *
   * See [Pagination](/api-reference/introduction/pagination/).
   *
   * Returns a maximum of 1000 records per page. The number of results shown in a page is determined by the `page[size]` parameter.
   *
   * **Note**: You may experience a speed reduction or a timeout if you request 1000 results per page and you have many archived tickets in the results. Try reducing the number of results per page. We recommend 100 results per page.
   *
   * The cursor specified by the `after_cursor` property in a response expires after one hour.
   *
   * For more information on cursor-based pagination, see the following articles:
   *
   * - [Comparing cursor pagination and offset pagination](/documentation/developer-tools/pagination/comparing-cursor-pagination-and-offset-pagination)
   * - [Paginating through lists using cursor pagination](/documentation/developer-tools/pagination/paginating-through-lists-using-cursor-pagination)
   *
   * #### Limits
   *
   * This API endpoint is rate-limited to 100 requests per minute per account. The limit also counts towards the global API rate limit.
   *
   * #### Response Format
   *
   * | Name                  | Type                 | Comment
   * | --------------------- | ---------------------| --------------------
   * | links[next]           | string               | URL to the next page of results
   * | meta[has_more]        | string               | Boolean indicating if there are more results
   * | meta[after_cursor]    | string               | Cursor object returned from the Search Service
   * | results               | array                | May consist of tickets, users, groups, or organizations, as specified by the `filter_type` parameter
   *
   * The response is similar to the response of `GET /api/v2/search.json?`, with a few changes:
   *
   * * `links` - Has the following nested properties: `prev` and `next`. These replace the `next_page` and `prev_page` links. The `prev` property is always null because backward pagination is not supported. The `next` property may include an auto-generated link to the next page of results.
   * * `meta` - Has the following nested properties: `has_more` and `after_cursor`. The `has_more` property indicates whether the next page has more results. The `after_cursor` property is the cursor used to paginate to the next page. It expires after one hour.
   *
   * There's no `count` property.
   */
  readonly ExportSearchResults: (
    options: typeof ExportSearchResultsParams.Encoded,
  ) => Effect.Effect<
    typeof SearchExportResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * If authenticated as an admin, returns all the account's sessions. If authenticated as an agent or end user, returns only the sessions of the user making the request.
   *
   * #### Pagination
   *
   * - Cursor pagination (recommended)
   * - Offset pagination
   *
   * See [Pagination](/api-reference/introduction/pagination/).
   *
   * #### Allowed For
   *
   * * Admins, Agents, End users
   */
  readonly ListSessions: () => Effect.Effect<
    typeof SessionsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Agents
   */
  readonly ListSharingAgreements: () => Effect.Effect<
    typeof SharingAgreementsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Admins
   */
  readonly CreateSharingAgreement: () => Effect.Effect<
    typeof SharingAgreementResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns a sharing agreement for your account.
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly ShowSharingAgreement: (
    sharingAgreementId: string,
  ) => Effect.Effect<
    typeof SharingAgreementResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns an updated sharing agreement. Only `status` is allowed to be updated.
   *
   * #### Allowed For
   *
   * * Admins
   */
  readonly UpdateSharingAgreement: (
    sharingAgreementId: string,
  ) => Effect.Effect<
    typeof SharingAgreementResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Deletes a sharing agreement.
   *
   * #### Allowed For
   *
   * * Admins
   */
  readonly DeleteSharingAgreement: (
    sharingAgreementId: string,
  ) => Effect.Effect<void, HttpClientError.HttpClientError | ParseError>;
  /**
   * Record a new ticket skip for the current user.
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly RecordNewSkip: () => Effect.Effect<
    typeof TicketSkipCreation.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Availability
   *
   * * Accounts on the Support Professional or Suite Growth plan or above
   *
   * #### Allowed For
   *
   * * Admins
   */
  readonly ListSLAPolicies: () => Effect.Effect<
    typeof SLAPoliciesResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Availability
   *
   * * Accounts on the Support Professional or Suite Growth plan or above
   *
   * #### Allowed For
   *
   * * Admins
   */
  readonly CreateSLAPolicy: () => Effect.Effect<
    typeof SLAPolicyResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Availability
   *
   * * Accounts on the Support Professional or Suite Growth plan or above
   *
   * #### Allowed For
   *
   * * Admins
   */
  readonly ShowSLAPolicy: (
    slaPolicyId: string,
  ) => Effect.Effect<
    typeof SLAPolicyResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Updates the specified policy.
   *
   * #### Availability
   *
   * * Accounts on the Support Professional or Suite Growth plan or above
   *
   * #### Allowed For
   *
   * * Admins
   */
  readonly UpdateSLAPolicy: (
    slaPolicyId: string,
  ) => Effect.Effect<
    typeof SLAPolicyResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Availability
   *
   * * Accounts on the Support Professional or Suite Growth plan or above
   *
   * #### Allowed For
   *
   * * Admins
   */
  readonly DeleteSLAPolicy: (
    slaPolicyId: string,
  ) => Effect.Effect<void, HttpClientError.HttpClientError | ParseError>;
  /**
   * #### Availability
   *
   * * Accounts on the Support Professional or Suite Growth plan or above
   *
   * #### Allowed For
   *
   * * Admins
   */
  readonly RetrieveSLAPolicyFilterDefinitionItems: () => Effect.Effect<
    typeof SLAPolicyFilterDefinitionResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Availability
   *
   * * Accounts on the Support Professional or Suite Growth plan or above
   *
   * #### Allowed For
   *
   * * Admins
   */
  readonly ReorderSLAPolicies: (
    options?: typeof ReorderSLAPoliciesParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof ReorderSLAPolicies200.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Admins and [agents in custom roles with permission](https://support.zendesk.com/hc/en-us/articles/4408882153882#topic_cxn_hig_bd) to manage suspended tickets on Enterprise plans
   * * Unrestricted agents on all other plans
   *
   * #### Sorting
   *
   * You can sort the tickets with the `sort_by` and `sort_order` query string parameters.
   *
   * #### Pagination
   *
   * * Cursor pagination
   *
   * See [Pagination](/api-reference/introduction/pagination/).
   */
  readonly ListSuspendedTickets: () => Effect.Effect<
    typeof SuspendedTicketsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Admins and [agents in custom roles with permission](https://support.zendesk.com/hc/en-us/articles/4408882153882#topic_cxn_hig_bd) to manage suspended tickets on Enterprise plans
   * * Unrestricted agents on all other plans
   */
  readonly ShowSuspendedTickets: (
    id: string,
    options?: typeof ShowSuspendedTicketsParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof SuspendedTicketsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Unrestricted agents
   */
  readonly DeleteSuspendedTicket: (
    id: string,
    options?: typeof DeleteSuspendedTicketParams.Encoded | undefined,
  ) => Effect.Effect<void, HttpClientError.HttpClientError | ParseError>;
  /**
   * **Note**: During recovery, the API sets the requester to the authenticated agent who called the API, not the original requester. This prevents the ticket from being re-suspended after recovery. To preserve the original requester, use the [Recover Multiple Suspended Tickets](#recover-multiple-suspended-tickets) endpoint with the single ticket.
   *
   * This endpoint does not queue an asynchronous job that can be tracked from [Job Statuses](/api-reference/ticketing/ticket-management/job_statuses/). Instead, it processes the request with a synchronous response.
   *    - If all recoveries are successful, it returns a 200 with a `tickets` array in the response.
   *    - If all recoveries fail, it returns a 422 with a `suspended_tickets` array in the response.
   *    - If there is a mixture of successes and failures in a single call, it returns a 422 with a `suspended_tickets` array of the failures in the response.
   *
   * #### Allowed For
   *
   * * Admins and [agents in custom roles with permission](https://support.zendesk.com/hc/en-us/articles/4408882153882#topic_cxn_hig_bd) to manage suspended tickets on Enterprise plans
   * * Unrestricted agents on all other plans
   */
  readonly RecoverSuspendedTicket: (
    id: string,
    options?: typeof RecoverSuspendedTicketParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof RecoverSuspendedTicketResponse.Type,
    | HttpClientError.HttpClientError
    | ParseError
    | ClientError<
        "RecoverSuspendedTicketUnprocessableContentResponse",
        typeof RecoverSuspendedTicketUnprocessableContentResponse.Type
      >
  >;
  /**
   * Makes copies of any attachments on a suspended ticket and returns them as [attachment tokens](/api-reference/ticketing/tickets/ticket-attachments/). If the  ticket is manually recovered, you can include the attachment tokens on the new ticket.
   *
   * #### Allowed For
   *
   * * Admins and [agents in custom roles with permission](https://support.zendesk.com/hc/en-us/articles/4408882153882#topic_cxn_hig_bd) to manage suspended tickets on Enterprise plans
   * * Unrestricted agents on all other plans
   */
  readonly SuspendedTicketsAttachments: () => Effect.Effect<
    typeof SuspendedTicketsAttachmentsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Accepts up to 100 ids (the auto-generated id, not the ticket id.)
   *
   * #### Allowed For
   *
   * * Admins and [agents in custom roles with permission](https://support.zendesk.com/hc/en-us/articles/4408882153882#topic_cxn_hig_bd) to manage suspended tickets on Enterprise plans
   * * Unrestricted agents on all other plans
   */
  readonly DeleteSuspendedTickets: () => Effect.Effect<
    void,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Exports a list of suspended tickets for the Zendesk Support instance. To export the list, the endpoint enqueues a job to create a CSV file with the data. When done, Zendesk sends the requester an email containing a link to the CSV file. In the CSV, tickets are sorted by the update timestamp in ascending order.
   *
   *  #### Allowed For
   *
   *  * Admins and [agents in custom roles with permission](https://support.zendesk.com/hc/en-us/articles/4408882153882#topic_cxn_hig_bd) to manage suspended tickets on Enterprise plans
   *  * Unrestricted agents on all other plans
   *
   *  #### Rate limits
   *
   *  Limited to one request per minute and up to one million records in return. The rate-limiting mechanism behaves identically to the one described in [Usage limits](/api-reference/ticketing/account-configuration/usage_limits/#monitoring-your-request-activity).
   *  We recommend using the `Retry-After` header value as described in [Catching errors caused by rate limiting](/documentation/ticketing/using-the-zendesk-api/best-practices-for-avoiding-rate-limiting#catch).
   */
  readonly ExportSuspendedTickets: () => Effect.Effect<
    typeof SuspendedTicketsExportResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Accepts up to 100 ids (the auto-generated id, not the ticket id.) Note that suspended tickets that fail to be recovered are still included in the response.
   *
   * #### Allowed For
   *
   * * Admins and [agents in custom roles with permission](https://support.zendesk.com/hc/en-us/articles/4408882153882#topic_cxn_hig_bd) to manage suspended tickets on Enterprise plans
   * * Unrestricted agents on all other plans
   */
  readonly RecoverSuspendedTickets: () => Effect.Effect<
    typeof RecoverSuspendedTicketsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Lists up to the 20,000 most popular tags in the last 60 days, in decreasing popularity.
   *
   * #### Pagination
   *
   * * Cursor pagination (recommended)
   * * Offset pagination
   *
   * See [Pagination](/api-reference/introduction/pagination/).
   *
   * Returns a maximum of 100 records per page.
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly ListTags: () => Effect.Effect<
    typeof TagsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns an approximate count of tags. If the count exceeds 100,000, it
   * is updated every 24 hours.
   *
   * The `refreshed_at` property of the `count` object is a timestamp that indicates when
   * the count was last updated.
   *
   * **Note**: When the count exceeds 100,000, the `refreshed_at` property in the `count` object may
   * occasionally be null. This indicates that the count is being
   * updated in the background and the `value` property in the `count` object is limited to
   * 100,000 until the update is complete.
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly CountTags: () => Effect.Effect<
    typeof TagCountResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns the 25 most recent target failures, per target.
   *
   * #### Stability
   *
   * * Development
   *
   * #### Allowed For
   *
   * * Admins
   */
  readonly ListTargetFailures: () => Effect.Effect<
    typeof TargetFailuresResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Stability
   *
   * * Development
   *
   * #### Allowed For
   *
   * * Admins
   */
  readonly ShowTargetFailure: (
    targetFailureId: string,
  ) => Effect.Effect<
    typeof TargetFailureResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Agents
   */
  readonly ListTargets: () => Effect.Effect<
    typeof TargetsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Admins
   */
  readonly CreateTarget: () => Effect.Effect<
    typeof TargetResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Agents
   */
  readonly ShowTarget: (
    targetId: string,
  ) => Effect.Effect<
    typeof TargetResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   * * Admins
   */
  readonly UpdateTarget: (
    targetId: string,
  ) => Effect.Effect<
    typeof TargetResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   * * Admins
   */
  readonly DeleteTarget: (
    targetId: string,
  ) => Effect.Effect<void, HttpClientError.HttpClientError | ParseError>;
  /**
   * Returns ticket audits. Archived tickets are not included in the response. Use the [List Audits for a Ticket](#list-audits-for-a-ticket) endpoint to
   * retrieve audit records for an archived ticket. To learn more about archived tickets, see [About archived tickets](https://support.zendesk.com/hc/en-us/articles/203657756).
   *
   * This endpoint should not be used for capturing change data. When continually chasing the tail of a cursor, some records will be skipped. For this use case, use the [Incremental Ticket Event Export API](/api-reference/ticketing/ticket-management/incremental_exports/#incremental-ticket-event-export).
   *
   * #### Allowed For
   *
   * * Admins
   */
  readonly ListTicketAudits: (
    options?: typeof ListTicketAuditsParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof TicketAuditsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns a list of all system and custom ticket fields in your account.
   *
   * For end users, only the ticket fields with visible_in_portal set to true are returned.
   *
   * Cursor pagination returns a maximum of 100 records per page and fields are returned in the order specified by their id.
   *
   * If the results are not paginated, every field is returned in the response and fields are returned in the order specified by the position.
   *
   * You can adjust the position of ticket fields by:
   *
   * - Using the [Update Ticket Field](/api-reference/ticketing/tickets/ticket_fields/#update-ticket-field) endpoint
   * - Using the [Reorder Ticket Fields](/api-reference/ticketing/tickets/ticket_fields/#reorder-ticket-fields) endpoint
   * - Ticket Fields page in the Admin Center (**Admin Center** > **Manage** > **Ticket** > **Fields** > **Actions** > **Edit order**)
   *
   * These adjustments determine the order in which fields are displayed in various locations. For accounts without access to multiple ticket forms, the order will also be used to display field values within tickets. However, for accounts with access to multiple ticket forms, the field order on the ticket page is defined within each form.
   *
   * Consider caching this resource to use with the [Tickets](/api-reference/ticketing/tickets/tickets/#json-format) API.
   *
   * #### Pagination
   *
   * - Cursor pagination (recommended)
   * - No pagination
   *
   * See [Pagination](/api-reference/introduction/pagination/).
   *
   * #### Sideloads
   *
   * The following sideloads are supported:
   *
   * | Name             | Will sideload
   * | ---------------- | -------------
   * | users            | The user or users that created the ticket field
   *
   * #### Allowed For
   *
   * * Anyone
   */
  readonly ListTicketFields: (
    options?: typeof ListTicketFieldsParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof TicketFieldsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Creates any of the following custom field types:
   *
   * | Custom field type | Description                                                                                                                                                     |
   * |-------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
   * | text              | Default custom field type when `type` is not specified                                                                                                          |
   * | textarea          | For multi-line text                                                                                                                                             |
   * | checkbox          | To capture a boolean value. Allowed values are true or false. Optionally, you can specify a tag to be added to the ticket when the value is true.               |
   * | date              | Example: 2021-04-16                                                                                                                                             |
   * | integer           | String composed of numbers. May contain an optional decimal point                                                                                               |
   * | decimal           | For numbers containing decimals                                                                                                                                 |
   * | regexp            | Matches the Regex pattern found in the custom field settings                                                                                                    |
   * | partialcreditcard | A credit card number. Only the last 4 digits are retained                                                                                                       |
   * | multiselect       | Enables users to choose multiple options from a dropdown menu. It contains one or more tag values belonging to the field's options.                             |
   * | tagger            | Single-select dropdown menu. It contains one or more tag values belonging to the field's options. Example: ( {"id": 21938362, "value": ["hd_3000", "hd_5555"]}) |
   * | lookup            | A field to create a relationship (see [lookup relationships](/api-reference/ticketing/lookup_relationships/lookup_relationships/)) to another object such as a user, ticket, or organization |
   *
   * **Note**: Tags can't be re-used across custom ticket fields. For example, if you configure a tag for a checkbox field, you can't use that tag value for a dropdown (tagger) field option. The use of tags isn't validated and can prevent editing in the future.
   *
   * See [About custom field types](https://support.zendesk.com/hc/en-us/articles/203661866) in the Zendesk Help Center.
   *
   * #### Allowed For
   *
   * * Admins
   *
   * #### Field limits
   *
   * We recommend the following best practices for ticket fields limits. Creating more than these amounts can affect performance.
   *
   * * 400 ticket fields per account if your account doesn't have ticket forms
   * * 400 ticket fields per ticket form if your account has ticket forms
   */
  readonly CreateTicketField: () => Effect.Effect<
    typeof TicketFieldResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed for
   *
   * * Agents
   *
   * #### Sideloads
   *
   * The following sideloads are supported:
   *
   * | Name             | Will sideload
   * | ---------------- | -------------
   * | users            | The user or users that created the ticket field
   */
  readonly ShowTicketfield: (
    ticketFieldId: string,
  ) => Effect.Effect<
    typeof TicketFieldResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Updating drop-down field options
   *
   * You can also use the update endpoint to add, update, or remove options in a drop-down custom field. Updating field options for multi-select fields works exactly the same as drop-down field options.
   *
   * **Important**: Unless you want to remove some options, you must specify all existing options in any update request. Omitting an option removes it from the drop-down field, which removes its values from any tickets or macros.
   *
   * Use the `custom_field_options` attribute to update the options. The attribute consists of an array of option objects, with each object consisting of a `name` and `value` property. The properties correspond to the "Title" and "Tag" text boxes in the admin interface. Example request body:
   *
   * ```json
   * {"ticket_field": {
   *     "custom_field_options": [
   *       {"name": "Apple Pie", "value": "apple"},
   *       {"name": "Pecan Pie", "value": "pecan"}
   *     ]
   *   }
   * }
   * ```
   *
   * #### Example Request
   *
   * ```bash
   * curl https://{subdomain}.zendesk.com/api/v2/ticket_fields/{id}.json \
   *   -d '{"ticket_field": {"custom_field_options": [{"name": "Apple Pie", "value": "apple"}, {"name": "Pecan Pie", "value": "pecan"}]}}' \
   *   -H "Content-Type: application/json" -X PUT \
   *   -v -u {email_address}/token:{api_token}
   * ```
   *
   * #### Example Response
   *
   * ```http
   * Status: 200 OK
   *
   * {
   *   "ticket_field": {
   *     "id":21938362,
   *     "type":"tagger",
   *     "title":"Pies",
   *     ...
   *     "custom_field_options": [
   *       {
   *         "id":21029772,
   *         "name":"Apple Pie",
   *         "raw_name":"Apple Pie",
   *         "value":"apple",
   *         "default":false
   *       },
   *       ...
   *     ]
   *   }
   * }
   * ```
   *
   * #### Allowed for
   *
   * * Admins
   */
  readonly UpdateTicketField: (
    ticketFieldId: string,
  ) => Effect.Effect<
    typeof TicketFieldResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed for
   *
   * * Admins
   */
  readonly DeleteTicketField: (
    ticketFieldId: string,
  ) => Effect.Effect<void, HttpClientError.HttpClientError | ParseError>;
  /**
   * Returns a list of custom ticket field options for the given drop-down ticket field.
   *
   * #### Allowed For
   *
   * * Agents
   *
   * #### Pagination
   *
   * * Cursor pagination (recommended)
   * * Offset pagination
   *
   * See [Pagination](/api-reference/introduction/pagination/).
   */
  readonly ListTicketFieldOptions: (
    ticketFieldId: string,
  ) => Effect.Effect<
    typeof CustomFieldOptionsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Creates or updates an option for the given drop-down ticket field.
   *
   * To update an option, include the id of the option in the `custom_field_option` object. Example:
   *
   * `{"custom_field_option": {"id": 10002, "name": "Pineapples", ... }`
   *
   * If an option exists for the given ID, the option will be updated. Otherwise, a new option will be created.
   *
   * #### Response
   *
   * Returns one of the following status codes:
   *
   * - 200 with `Location: /api/v2/ticket_fields/{ticket_field_id}/options.json` if the ticket field option already exists in the database
   * - 201 with `Location: /api/v2/ticket_fields/{ticket_field_id}/options.json` if the ticket field option is new
   *
   * #### Allowed For
   *
   * * Admins
   *
   * #### Rate Limit
   * You can make 100 requests every 1 minute using this endpoint.
   * The rate limiting mechanism behaves as described in
   * [Monitoring your request activity](/api-reference/ticketing/account-configuration/usage_limits/#monitoring-your-request-activity) in the API introduction.
   *
   * #### Field Option Limits
   *
   * * 2000 options per ticket field
   */
  readonly CreateOrUpdateTicketFieldOption: (
    ticketFieldId: string,
  ) => Effect.Effect<
    | typeof CustomFieldOptionResponse.Type
    | typeof CustomFieldOptionResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed for
   * * Agents
   */
  readonly ShowTicketFieldOption: (
    ticketFieldId: string,
    ticketFieldOptionId: string,
  ) => Effect.Effect<
    typeof CustomFieldOptionResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed for
   * * Admins
   */
  readonly DeleteTicketFieldOption: (
    ticketFieldId: string,
    ticketFieldOptionId: string,
  ) => Effect.Effect<void, HttpClientError.HttpClientError | ParseError>;
  /**
   * Returns an approximate count of system and custom ticket fields in the account. If the count exceeds 100,000, the count will return a cached result.  This cached result will update every 24 hours.
   *
   * The `count[refreshed_at]` property is a timestamp that indicates when the count was last updated.
   *
   * **Note**: When the count exceeds 100,000, `count[refreshed_at]` may occasionally be null.
   * This indicates that the count is being updated in the background, and `count[value]` is limited to 100,000 until the update is complete.
   *
   * #### Allowed For
   * * Agents
   */
  readonly CountTicketFields: () => Effect.Effect<
    typeof TicketFieldCountResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   * * Admins
   *
   * #### Request Parameters
   *
   * You can pass in the following parameter in the payload:
   *
   * | Name                | Type   | Comment
   * | ------------------- | ------ | --------
   * | ticket_field_ids    | array  | An array of ticket field ids. Example: "[2, 23, 46, 50]". Not all ticket_field_ids are necessary in the payload; only those provided will be assigned to the first positions. Missing IDs will be assigned incremental positions automatically.
   */
  readonly ReorderTicketFields: () => Effect.Effect<
    typeof ReorderTicketFields200.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Fetches all of the ticket form statuses for the account.
   *
   * #### Allowed For
   *
   * * Admins
   * * Agents
   */
  readonly ListTicketFormStatuses: () => Effect.Effect<
    typeof TicketFormStatusesResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Fetches all of the ticket form statuses specified by a comma separated list of ids.
   * #### Allowed For
   * * Admins
   * * Agents
   */
  readonly ShowManyTicketFormStatuses: (
    options: typeof ShowManyTicketFormStatusesParams.Encoded,
  ) => Effect.Effect<
    typeof TicketFormStatusesResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns a list of all ticket forms for your account if accessed as an admin or agent. End users only see ticket forms that have `end_user_visible` set to true.
   *
   * #### Allowed For
   *
   * * Anyone
   */
  readonly ListTicketForms: (
    options?: typeof ListTicketFormsParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof TicketFormsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Admins
   */
  readonly CreateTicketForm: () => Effect.Effect<
    typeof TicketFormResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Admins, Agents, and End Users
   */
  readonly ShowTicketForm: (
    ticketFormId: string,
  ) => Effect.Effect<
    typeof TicketFormResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   * * Admins
   */
  readonly UpdateTicketForm: (
    ticketFormId: string,
  ) => Effect.Effect<
    typeof TicketFormResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   * * Admins
   */
  readonly DeleteTicketForm: (
    ticketFormId: string,
  ) => Effect.Effect<void, HttpClientError.HttpClientError | ParseError>;
  /**
   * #### Allowed For
   *
   * * Admins
   */
  readonly CloneTicketForm: (
    ticketFormId: string,
  ) => Effect.Effect<
    typeof TicketFormResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Fetches all of the associated ticket form statuses of a ticket form.
   *
   * #### Allowed For
   *
   * * Admins
   * * Agents
   */
  readonly TicketFormTicketFormStatuses: (
    ticketFormId: string,
  ) => Effect.Effect<
    typeof TicketFormStatusesResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Updates or deletes ticket form status associations. This is a bulk operation that can both add and remove ticket form status associations for a form in one call.
   *
   * #### Allowed For
   *
   * * Admins
   */
  readonly UpdateTicketFormStatuses: (
    ticketFormId: string,
    options: typeof UpdateTicketFormStatusesParams.Encoded,
  ) => Effect.Effect<
    typeof TicketFormStatusesResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Creates one or many ticket form status associations
   *
   * #### Allowed For
   *
   * * Admins
   */
  readonly CreateTicketFormStatuses: (
    ticketFormId: string,
    options: typeof TicketFormStatusesParams.Encoded,
  ) => Effect.Effect<
    typeof TicketFormStatusesResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Deletes all of of the ticket form statuses by id.
   *
   * #### Allowed For
   *
   * * Admins
   * * Agents
   */
  readonly DeleteTicketFormStatuses: (
    ticketFormId: string,
    options: typeof DeleteTicketFormStatusesRequest.Encoded,
  ) => Effect.Effect<void, HttpClientError.HttpClientError | ParseError>;
  /**
   * Updates or deletes ticket form status association by id.
   *
   * #### Allowed For
   *
   * * Admins
   */
  readonly UpdateTicketFormStatusById: (
    ticketFormId: string,
    ticketFormStatusId: string,
    options: typeof UpdateTicketFormStatusesParams.Encoded,
  ) => Effect.Effect<
    typeof TicketFormStatusesResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Deletes a ticket form status by id.
   *
   * #### Allowed For
   *
   * * Admins
   */
  readonly DeleteTicketFormStatusById: (
    ticketFormId: string,
    ticketFormStatusId: string,
  ) => Effect.Effect<void, HttpClientError.HttpClientError | ParseError>;
  /**
   * #### Allowed For
   * * Admins
   *
   * #### Request Parameters
   *
   * You can pass in the following parameter in the payload:
   *
   * | Name                | Type   | Comment
   * | ------------------- | ------ | --------
   * | ticket_form_ids     | array  | An array of ticket form ids. Example: "[2, 23, 46, 50]"
   */
  readonly ReorderTicketForms: () => Effect.Effect<
    typeof TicketFormsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Takes an `ids` query parameter that accepts a comma-separated list of up to 100 ticket form ids. This endpoint is used primarily by the [mobile SDK](/documentation/classic-web-widget-sdks/) and the [Web Widget](/api-reference/widget/introduction/).
   *
   * #### Allowed For
   *
   * * Anyone
   */
  readonly ShowManyTicketForms: (
    options: typeof ShowManyTicketFormsParams.Encoded,
  ) => Effect.Effect<
    typeof TicketFormsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns a list of tickets with their metrics.
   *
   * Tickets are ordered chronologically by created date, from newest to oldest.
   * The last ticket listed may not be the absolute oldest ticket in your account
   * due to ticket archiving.
   *
   * Archived tickets are not included in the response. See
   * [About archived tickets](https://support.zendesk.com/hc/en-us/articles/203657756) in
   * Zendesk help.
   *
   * #### Pagination
   *
   * - Cursor pagination (recommended)
   * - Offset pagination
   *
   * See [Pagination](/api-reference/introduction/pagination/).
   *
   * Returns a maximum of 100 records per page.
   *
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly ListTicketMetrics: () => Effect.Effect<
    typeof TicketMetricsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns a specific metric, or the metrics of a specific ticket.
   *
   * #### Pagination
   *
   * - Cursor pagination (recommended)
   * - Offset pagination
   *
   * See [Pagination](/api-reference/introduction/pagination/).
   *
   * Returns a maximum of 100 records per page.
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly ShowTicketMetrics: (
    ticketMetricId: string,
  ) => Effect.Effect<
    typeof TicketMetricsByTicketMetricIdResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * List Tickets
   */
  readonly ListTickets: (
    options?: typeof ListTicketsParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof TicketsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Create Ticket
   */
  readonly CreateTicket: (
    options: typeof TicketCreateRequest.Encoded,
  ) => Effect.Effect<
    typeof TicketResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns a number of ticket properties though not the ticket comments. To get the comments, use [List Comments](/api-reference/ticketing/tickets/ticket_comments/#list-comments)
   *
   * #### Allowed For
   * * Agents
   */
  readonly ShowTicket: (
    ticketId: string,
    options?: typeof ShowTicketParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof TicketResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Update Ticket
   */
  readonly UpdateTicket: (
    ticketId: string,
    options: {
      readonly params?: typeof UpdateTicketParams.Encoded | undefined;
      readonly payload: typeof TicketUpdateRequest.Encoded;
    },
  ) => Effect.Effect<
    typeof TicketUpdateResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Admins
   * * Agents with permission to delete tickets
   *
   * Agent delete permissions are set in Support. See
   * [Deleting tickets](https://support.zendesk.com/hc/en-us/articles/203690936)
   * in the Support Help Center.
   *
   * #### Ticket deletion rate limit
   *
   * You can delete 400 tickets every 1 minute using this endpoint.
   * The rate limiting mechanism behaves as described in
   * [Rate limits](/api-reference/introduction/rate-limits/) in the API introduction.
   * Zendesk recommends that you obey the Retry-After header values.
   * To delete many tickets, you may use [Bulk Delete Tickets](/api-reference/ticketing/tickets/tickets/#bulk-delete-tickets).
   */
  readonly DeleteTicket: (
    ticketId: string,
    options?: typeof DeleteTicketParams.Encoded | undefined,
  ) => Effect.Effect<void, HttpClientError.HttpClientError | ParseError>;
  /**
   * Lists the audits for a specified ticket.
   *
   * #### Pagination
   *
   * - Cursor pagination (recommended)
   * - Offset pagination
   *
   * See [Pagination](/api-reference/introduction/pagination/).
   *
   * Returns a maximum of 100 records per page.
   *
   * **Note**: Audits for [Archived Tickets](https://support.zendesk.com/hc/en-us/articles/4408887617050) do not support pagination for this endpoint.
   *
   * #### Allowed for
   *
   * * Agents
   */
  readonly ListAuditsForTicket: (
    ticketId: string,
  ) => Effect.Effect<
    typeof TicketAuditsResponseNoneCursor.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed for
   *
   * * Agents
   */
  readonly ShowTicketAudit: (
    ticketId: string,
    ticketAuditId: string,
  ) => Effect.Effect<
    typeof TicketAuditResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed for
   *
   * * Agents
   */
  readonly MakeTicketCommentPrivateFromAudits: (
    ticketId: string,
    ticketAuditId: string,
  ) => Effect.Effect<
    typeof MakeTicketCommentPrivateFromAudits200.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns an approximate count of audits for a specified ticket. If the count exceeds 100,000, the count will return a cached result.  This cached result will update every 24 hours.
   *
   * The `count[refreshed_at]` property is a timestamp that indicates when the count was last updated.
   *
   * **Note**: If the total number of audits for a ticket exceeds 100,000, this endpoint returns a count of 100,000 with a `count[refreshed_at]` value of null. This value is cached for 24 hours, during which any requests returns the same count and timestamp. After 24 hours, the endpoint temporarily shows the same count again before providing an updated total.
   *
   * #### Allowed for
   *
   * * Agents
   */
  readonly CountAuditsForTicket: (
    ticketId: string,
  ) => Effect.Effect<
    typeof TicketAuditsCountResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Agents
   */
  readonly ListTicketCollaborators: (
    ticketId: string,
    options?: typeof ListTicketCollaboratorsParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof ListTicketCollaboratorsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns the comments added to the ticket.
   *
   * Each comment may include a `content_url` for an attachment or a `recording_url` for a voice comment that points to a file that may be hosted externally. For security reasons, take care not to inadvertently send Zendesk authentication credentials to third parties when attempting to access these files. See [Working with url properties](/documentation/ticketing/managing-tickets/working-with-url-properties).
   *
   * #### Pagination
   *
   * - Cursor pagination (recommended)
   * - Offset pagination
   *
   * See [Pagination](/api-reference/introduction/pagination/).
   *
   * Returns a maximum of 100 records per page.
   *
   * #### Sorting
   *
   * By default, comments are sorted by creation date in ascending order.
   *
   * When using cursor pagination, use the following parameter to change the sort order:
   *
   * | Name   | Type   | Required | Comments
   * | ------ | ------ | -------- | --------
   * | `sort` | string | no       | Possible values are "created_at" (ascending order) or "-created_at" (descending order)
   *
   * When using offset pagination, use the following parameters to change the sort order:
   *
   * | Name         | Type   | Required | Comments
   * | ------------ | ------ | -------- | --------
   * | `sort_order` | string | no       | One of `asc`, `desc`. Defaults to `asc`
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly ListTicketComments: (
    ticketId: string,
    options?: typeof ListTicketCommentsParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof TicketCommentsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Redaction allows you to permanently remove attachments from an existing comment on a ticket. Once removed from a comment, the attachment is replaced with an empty "redacted.txt" file.
   *
   * The redaction is permanent. It is not possible to undo redaction or see what was removed. Once a ticket is closed, redacting its attachments is no longer possible.
   *
   * Also, if you want to redact an inline attachment, you can use the `include_inline_images` parameter in the [List Comments](/api-reference/ticketing/tickets/ticket_comments/#list-comments) operation to obtain the inline attachment ID, and use it in the request URL.
   *
   * #### Allowed For
   *
   * * Admins
   * * Agents when [deleting tickets is enabled for agents on professional accounts](https://support.zendesk.com/hc/en-us/articles/360002128107)
   * * Agents assigned to a custom role with permissions to redact ticket content (Enterprise only)
   */
  readonly RedactCommentAttachment: (
    ticketId: string,
    commentId: string,
    attachmentId: string,
  ) => Effect.Effect<
    typeof AttachmentResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Agents
   */
  readonly MakeTicketCommentPrivate: (
    ticketId: string,
    ticketCommentId: string,
  ) => Effect.Effect<
    typeof MakeTicketCommentPrivate200.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Permanently removes words or strings from a ticket comment. Specify the string to redact in an object with a `text` property. Example: `'{"text": "987-65-4320"}'`. The characters of the word or string are replaced by the ▇ symbol.
   *
   * If the comment was made by email, the endpoint also attempts to redact the string from the original email retained by Zendesk for audit purposes.
   *
   * **Note**: If you use the rich text editor, support for redacting formatted text (bold, italics, hyperlinks) is limited.
   *
   * Redaction is permanent. You can't undo the redaction or see *what* was removed. Once a ticket is closed, you can no longer redact strings from its comments.
   *
   * To use this endpoint, the "Agents can delete tickets" option must be enabled in the Zendesk Support admin interface at **Admin** > **Settings** > **Agents**.
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly RedactStringInComment: (
    ticketId: string,
    ticketCommentId: string,
  ) => Effect.Effect<
    typeof TicketCommentResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns an approximate count of the comments added to the ticket. If the count exceeds 100,000, the count will return a cached result.  This cached result will update every 24 hours.
   *
   * The `count[refreshed_at]` property is a timestamp that indicates when the count was last updated.
   *
   * **Note**: When the count exceeds 100,000, `count[refreshed_at]` may occasionally be null.
   * This indicates that the count is being updated in the background, and `count[value]` is limited to 100,000 until the update is complete.
   *
   * #### Allowed For
   * * Agents
   */
  readonly CountTicketComments: (
    ticketId: string,
    options?: typeof CountTicketCommentsParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof TicketCommentsCountResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Lists the conversation log events for a specified ticket.
   *
   * #### Pagination
   *
   * - Cursor pagination (recommended)
   * - Offset pagination
   *
   * See [Pagination](/api-reference/introduction/pagination/).
   *
   * Returns a maximum of 100 records per page.
   *
   * #### Allowed for
   *
   * * Agents
   */
  readonly ListConversationLogForTicket: (
    ticketId: string,
    options?: typeof ListConversationLogForTicketParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof ConversationLogResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns any users cc'd on the ticket.
   *
   * #### Availability
   *
   * The [CCs and Followers](https://support.zendesk.com/hc/en-us/articles/203690846) feature must be enabled in Zendesk Support.
   *
   * If the feature is not enabled, the default CC functionality is used. In that case, use [List Collaborators](/api-reference/ticketing/tickets/tickets/#list-collaborators-for-a-ticket) to list the users cc'ed on the ticket.
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly ListTicketEmailCCs: (
    ticketId: string,
    options?: typeof ListTicketEmailCCsParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof ListTicketEmailCCsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns any users who follow the ticket.
   *
   * #### Availability
   *
   * The [CCs and Followers](https://support.zendesk.com/hc/en-us/articles/203690846) feature must be enabled in Zendesk Support.
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly ListTicketFollowers: (
    ticketId: string,
    options?: typeof ListTicketFollowersParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof ListTicketFollowersResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Agents
   *
   * #### Pagination
   * * Cursor pagination (recommended)
   * * Offset pagination
   *
   * See [Pagination](/api-reference/introduction/pagination/).
   */
  readonly ListTicketIncidents: (
    ticketId: string,
    options?: typeof ListTicketIncidentsParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof ListTicketIncidentsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns the full ticket object as it would be after applying the macro to the ticket.
   * It doesn't actually change the ticket.
   *
   * To get only the ticket fields that would be changed by the macro,
   * see [Show Changes to Ticket](#show-changes-to-ticket).
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly ShowTicketAfterChanges: (
    ticketId: string,
    macroId: string,
  ) => Effect.Effect<
    typeof MacroApplyTicketResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Agents
   */
  readonly MarkTicketAsSpamAndSuspendRequester: (
    ticketId: string,
    options?:
      | typeof MarkTicketAsSpamAndSuspendRequesterParams.Encoded
      | undefined,
  ) => Effect.Effect<
    typeof MarkTicketAsSpamAndSuspendRequester200.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Merges one or more tickets into the ticket with the specified id.
   *
   * See [Merging tickets](https://support.zendesk.com/hc/en-us/articles/203690916)
   * in the Support Help Center for ticket merging rules.
   *
   * Any attachment to the source ticket is copied to the target ticket.
   *
   * This endpoint returns a `job_status` [JSON object](/api-reference/ticketing/ticket-management/job_statuses/#json-format) and queues a background job to do the work. Use the [Show Job Status](/api-reference/ticketing/ticket-management/job_statuses/#show-job-status) endpoint to check for the job's completion. Only a certain number of jobs can be queued or running at the same time. See [Job limit](/api-reference/introduction/rate-limits/#job-limit) for more information.
   *
   * #### Allowed For
   *
   * * Agents
   *
   * Agents in the Enterprise account must have merge permissions.
   * See [Creating custom roles and assigning agents (Enterprise)](https://support.zendesk.com/hc/en-us/articles/203662026)
   * in the Support Help Center.
   *
   * #### Available parameters
   *
   * The request takes a data object with the following properties:
   *
   * | Name                     | Type    | Required | Comments                                                |
   * | ------------------------ | ------- | -------- | ------------------------------------------------------- |
   * | ids                      | array   | yes      | Ids of tickets to merge into the target ticket          |
   * | target_comment           | string  | no       | Private comment to add to the target ticket. This comment is optional but strongly recommended |
   * | source_comment           | string  | no       | Private comment to add to the source ticket. This comment is optional but strongly recommended |
   * | target_comment_is_public | boolean | no       | Whether comments in the target ticket are public or private   |
   * | source_comment_is_public | boolean | no       | Whether comments in the source tickets are public or private |
   *
   * `target_comment` and `source_comment` can be used to provide a reason for the merge for recordkeeping purposes. If the source ticket has attachments, they are included in `target_comment`.
   *
   * Comments are private and can't be modified in the following cases:
   *
   *   * Any of the sources or target tickets are private
   *   * Any of the sources or target tickets were created through X (formerly Twitter), Facebook or the Channel framework
   *
   * In any other case, comments default to private but can be modified with the comment privacy parameters.
   */
  readonly MergeTicketsIntoTargetTicket: (
    ticketId: string,
    options: {
      readonly params?:
        | typeof MergeTicketsIntoTargetTicketParams.Encoded
        | undefined;
      readonly payload: typeof TicketMergeInput.Encoded;
    },
  ) => Effect.Effect<
    typeof JobStatusResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * The request returns a data object with the following properties:
   *
   * | Name                | Type    | Comment
   * | ------------------- | ------- | -------
   * | topic_id            | string  | Related topic in the Web portal (deprecated feature)
   * | jira_issue_ids      | array   | Array of associated jira issues
   * | followup_source_ids | array   | Sources to follow up
   * | from_archive        | boolean | Is true if the current ticket is archived
   * | incidents           | integer | A count of related incident occurrences
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly TicketRelatedInformation: (
    ticketId: string,
    options?: typeof TicketRelatedInformationParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof TicketRelatedInformation.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Creates a CSAT rating for a solved ticket, or for a ticket that was previously
   * solved and then reopened.
   *
   * Only the end user listed as the ticket requester can create a satisfaction rating for the ticket.
   *
   * #### Allowed For
   *
   * * End user who requested the ticket
   *
   * The end user must be a verified user.
   */
  readonly CreateTicketSatisfactionRating: (
    ticketId: string,
  ) => Effect.Effect<
    typeof SatisfactionRatingResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Agents
   */
  readonly ListResourceTags: (
    ticketId: string,
  ) => Effect.Effect<
    typeof TagsByObjectIdResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * You can also add tags to multiple tickets with the [Update Many
   * Tickets](/api-reference/ticketing/tickets/tickets/#update-many-tickets) endpoint.
   *
   * #### Safe Update
   *
   * If the same ticket is updated by multiple API requests at
   * the same time, some tags could be lost because of ticket
   * update collisions. Include `updated_stamp` and `safe_update`
   * properties in the request body to make a safe update.
   *
   * For `updated_stamp`, retrieve and specify the ticket's
   * latest `updated_at` timestamp. The tag update only occurs
   * if the `updated_stamp` timestamp matches the ticket's
   * actual `updated_at` timestamp at the time of the request.
   * If the timestamps don't match (in other words, if the
   * ticket was updated since you retrieved the ticket's
   * last `updated_at` timestamp), the request returns a
   * 409 Conflict error.
   *
   * #### Example
   *
   * ```js
   * {
   *   "tags": ["customer"],
   *   "updated_stamp":"2019-09-12T21:45:16Z",
   *   "safe_update":"true"
   * }
   * ```
   *
   * For details, see [Protecting against ticket update collisions](/api-reference/ticketing/tickets/tickets/#protecting-against-ticket-update-collisions).
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly PutTagsTicket: (
    ticketId: string,
  ) => Effect.Effect<
    typeof TagsByObjectIdResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Agents
   */
  readonly SetTagsTicket: (
    ticketId: string,
  ) => Effect.Effect<
    typeof TagsByObjectIdResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * You can also delete tags from multiple tickets with the
   * [Update Many Tickets](/api-reference/ticketing/tickets/tickets/#update-many-tickets) endpoint.
   *
   * This endpoint supports safe updates. See [Safe Update](/api-reference/ticketing/ticket-management/tags/#safe-update).
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly DeleteTagsTicket: (
    ticketId: string,
  ) => Effect.Effect<
    typeof TagsByObjectIdResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns an approximate count of tickets in the account. If the count exceeds 100,000, it is updated every 24 hours.
   *
   * `ccd` lists tickets that the specified user is cc'd on.
   *
   * The `count[refreshed_at]` property is a timestamp that indicates when the count was last updated.
   *
   * **Note**: When the count exceeds 100,000, `count[refreshed_at]` may occasionally be null.
   * This indicates that the count is being updated in the background, and `count[value]` is limited to 100,000 until the update is complete.
   *
   * #### Allowed For
   * * Agents
   */
  readonly CountTickets: () => Effect.Effect<
    typeof CountTickets200.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Accepts an array of up to 100 ticket objects. **Note**: Every ticket created with this endpoint may be affected by your business rules, which can include sending email notifications to your end users. If you are importing historical tickets or creating more than 1000 tickets, consider using the [Ticket Bulk Import](/api-reference/ticketing/tickets/ticket_import/#ticket-bulk-import) endpoint.
   *
   * This endpoint returns a `job_status` [JSON object](/api-reference/ticketing/ticket-management/job_statuses/#json-format) and queues a background job to do the work. Use the [Show Job Status](/api-reference/ticketing/ticket-management/job_statuses/#show-job-status) endpoint to check for the job's completion. Only a certain number of jobs can be queued or running at the same time. See [Job limit](/api-reference/introduction/rate-limits/#job-limit) for more information.
   *
   * #### Allowed For
   * * Agents
   */
  readonly TicketsCreateMany: (
    options: typeof TicketsCreateRequest.Encoded,
  ) => Effect.Effect<
    typeof JobStatusResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Accepts a comma-separated list of up to 100 ticket ids.
   *
   * #### Allowed For
   *
   * * Admins
   * * Agents with permission to delete tickets
   *
   * Agent delete permissions are set in Support. See
   * [Deleting tickets](https://support.zendesk.com/hc/en-us/articles/203690936)
   * in the Support Help Center.
   *
   * This endpoint returns a `job_status` [JSON object](/api-reference/ticketing/ticket-management/job_statuses/#json-format) and queues a background job to do the work. Use the [Show Job Status](/api-reference/ticketing/ticket-management/job_statuses/#show-job-status) endpoint to check for the job's completion. Only a certain number of jobs can be queued or running at the same time. See [Job limit](/api-reference/introduction/rate-limits/#job-limit) for more information.
   */
  readonly BulkDeleteTickets: (
    options: typeof BulkDeleteTicketsParams.Encoded,
  ) => Effect.Effect<
    typeof JobStatusResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Accepts a comma-separated list of up to 100 ticket ids.
   *
   * This endpoint returns a `job_status` [JSON object](/api-reference/ticketing/ticket-management/job_statuses/#json-format) and queues a background job to do the work. Use the [Show Job Status](/api-reference/ticketing/ticket-management/job_statuses/#show-job-status) endpoint to check for the job's completion. Only a certain number of jobs can be queued or running at the same time. See [Job limit](/api-reference/introduction/rate-limits/#job-limit) for more information.
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly MarkManyTicketsAsSpam: (
    options: typeof MarkManyTicketsAsSpamParams.Encoded,
  ) => Effect.Effect<
    typeof JobStatusResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Accepts a comma-separated list of ticket ids to return.
   *
   * This endpoint will return up to 100 tickets records.
   *
   * #### Allowed For
   * * Agents
   */
  readonly TicketsShowMany: (
    options: typeof TicketsShowManyParams.Encoded,
  ) => Effect.Effect<
    typeof TicketsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Accepts an array of up to 100 ticket objects, or a comma-separated list of up to 100 ticket ids.
   */
  readonly TicketsUpdateMany: (
    options?: typeof TicketsUpdateManyParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof JobStatusResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns all the ticket trigger categories in the account.
   *
   * #### Pagination
   *
   * * Cursor pagination (recommended)
   * * Offset pagination
   *
   * See [Pagination](/api-reference/introduction/pagination/).
   */
  readonly ListTriggerCategories: (
    options?: typeof ListTriggerCategoriesParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof ListTriggerCategories200.Type,
    | HttpClientError.HttpClientError
    | ParseError
    | ClientError<"Errors", typeof Errors.Type>
    | ClientError<"Errors", typeof Errors.Type>
  >;
  /**
   * Creates a ticket trigger category.
   */
  readonly CreateTriggerCategory: (
    options: typeof CreateTriggerCategoryRequest.Encoded,
  ) => Effect.Effect<
    typeof TriggerCategoryResponse.Type,
    | HttpClientError.HttpClientError
    | ParseError
    | ClientError<"Errors", typeof Errors.Type>
    | ClientError<"Errors", typeof Errors.Type>
  >;
  /**
   * Returns the ticket trigger category with the specified ID.
   */
  readonly ShowTriggerCategoryById: (
    triggerCategoryId: string,
  ) => Effect.Effect<
    typeof TriggerCategoryResponse.Type,
    | HttpClientError.HttpClientError
    | ParseError
    | ClientError<"Errors", typeof Errors.Type>
  >;
  /**
   * Deletes the ticket trigger category with the specified ID.
   */
  readonly DeleteTriggerCategory: (
    triggerCategoryId: string,
  ) => Effect.Effect<
    void,
    | HttpClientError.HttpClientError
    | ParseError
    | ClientError<"Errors", typeof Errors.Type>
    | ClientError<"Errors", typeof Errors.Type>
  >;
  /**
   * Updates the ticket trigger category with the specified ID.
   */
  readonly UpdateTriggerCategory: (
    triggerCategoryId: string,
    options: typeof UpdateTriggerCategoryRequest.Encoded,
  ) => Effect.Effect<
    typeof TriggerCategoryResponse.Type,
    | HttpClientError.HttpClientError
    | ParseError
    | ClientError<"Errors", typeof Errors.Type>
    | ClientError<"Errors", typeof Errors.Type>
  >;
  /**
   * Creates a job that performs a batch operation for the given ticket trigger categories.
   */
  readonly BatchOperateTriggerCategories: (
    options: typeof BatchJobRequest.Encoded,
  ) => Effect.Effect<
    typeof BatchJobResponse.Type,
    | HttpClientError.HttpClientError
    | ParseError
    | ClientError<"BatchJobResponse", typeof BatchJobResponse.Type>
  >;
  /**
   * Lists all ticket triggers for the current account.
   *
   * #### Pagination
   *
   * - Cursor pagination (recommended)
   * - Offset pagination
   *
   * See [Pagination](/api-reference/introduction/pagination/).
   *
   * Returns a maximum of 100 records per page.
   *
   * #### Allowed For
   *
   * * Agents
   *
   * #### Sideloads
   *
   * The following sideloads are supported. The usage sideloads are only supported on the Support Professional or Suite Growth plan or above.
   *
   * | Name             | Will sideload
   * | ---------------- | -------------
   * | app_installation | The app installation that requires each trigger, if present
   * | permissions      | The permissions for each trigger
   * | usage_1h         | The number of times each trigger has been used in the past hour
   * | usage_24h        | The number of times each trigger has been used in the past day
   * | usage_7d         | The number of times each trigger has been used in the past week
   * | usage_30d        | The number of times each trigger has been used in the past thirty days
   */
  readonly ListTriggers: (
    options?: typeof ListTriggersParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof TriggersResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Agents
   */
  readonly CreateTrigger: (
    options: typeof TriggerWithCategoryRequest.Encoded,
  ) => Effect.Effect<
    typeof TriggerResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Agents
   *
   * The Via Type value is a number instead of a text string. See [Via types reference](/documentation/ticketing/reference-guides/via-types/) for the keys.
   */
  readonly GetTrigger: (
    triggerId: string,
  ) => Effect.Effect<
    typeof TriggerResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Agents
   *
   * #### Note
   *
   * Updating a condition or action updates both the conditions and actions arrays,
   * clearing all existing values of both arrays. Include all your conditions
   * and actions when updating any condition or action.
   */
  readonly UpdateTrigger: (
    triggerId: string,
    options: typeof TriggerWithCategoryRequest.Encoded,
  ) => Effect.Effect<
    typeof TriggerResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Agents
   */
  readonly DeleteTrigger: (
    triggerId: string,
  ) => Effect.Effect<void, HttpClientError.HttpClientError | ParseError>;
  /**
   * List the revisions associated with a ticket trigger. Ticket trigger revision history is only available on Enterprise plans.
   *
   * #### Allowed For
   *
   *  * Agents
   *
   * #### Sideloads
   *
   * The following sideloads are supported:
   *
   * | Name  | Will sideload
   * | ----- | -------------
   * | users | The user that authored each revision
   *
   * #### Pagination
   *
   * This endpoint uses cursor-based pagination. The records are ordered in
   * descending order by the `created_at` timestamp, then by `id` on duplicate
   * `created_at` values.
   *
   * The `cursor` parameter is a non-human-readable argument you can use to move
   * forward or backward in time.
   *
   * Each JSON response will contain the following attributes to help you get
   * more results:
   *
   * - `after_url` requests more recent results
   * - `before_url` requests older results
   * - `after_cursor` is the cursor to build the request yourself
   * - `before_cursor` is the cursor to build the request yourself
   *
   * The properties are null if no more records are available.
   *
   * You can request a maximum of 1000 records using the `limit` parameter. If
   * no `limit` parameter is supplied, it will default to 1,000.
   */
  readonly ListTriggerRevisions: (
    triggerId: string,
  ) => Effect.Effect<
    typeof TriggerRevisionsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Fetches a revision associated with a ticket trigger. Ticket trigger revision history is only available on Enterprise plans.
   *
   * #### Allowed For
   *
   *  * Agents
   *
   * #### Sideloads
   *
   * The following sideloads are supported:
   *
   * | Name  | Will sideload
   * | ----- | -------------
   * | users | The user that authored each revision
   */
  readonly TriggerRevision: (
    triggerId: string,
    triggerRevisionId: string,
  ) => Effect.Effect<
    typeof TriggerRevisionResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Lists all active ticket triggers.
   *
   * #### Pagination
   *
   * - Cursor pagination (recommended)
   * - Offset pagination
   *
   * See [Pagination](/api-reference/introduction/pagination/).
   *
   * Returns a maximum of 100 records per page.
   * #### Allowed For
   *
   * * Agents
   *
   * #### Sideloads
   *
   * The following sideloads are supported:
   *
   * | Name             | Will sideload
   * | ---------------- | -------------
   * | app_installation | The app installation that requires each ticket trigger, if present
   * | permissions      | The permissions for each trigger
   * | usage_1h         | The number of times each ticket trigger has been used in the past hour
   * | usage_24h        | The number of times each ticket trigger has been used in the past day
   * | usage_7d         | The number of times each ticket trigger has been used in the past week
   * | usage_30d        | The number of times each ticket trigger has been used in the past thirty days
   */
  readonly ListActiveTriggers: () => Effect.Effect<
    typeof TriggersResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns the definitions of the actions a ticket trigger can perform and the
   * definitions of the conditions under which a ticket trigger can execute. The
   * definition of the action includes a title ("Status"), a type ("list"), and
   * possible values. The definition of the condition includes the same fields
   * as well as the possible operators.
   *
   * For a list of supported actions, see the [Actions reference](/documentation/ticketing/reference-guides/actions-reference)
   * For a list of supported conditions, see the [Conditions reference](/documentation/ticketing/reference-guides/conditions-reference)
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly ListTriggerActionConditionDefinitions: () => Effect.Effect<
    typeof TriggerDefinitionResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Deletes the ticket triggers corresponding to the provided comma-separated list of IDs.
   *
   * #### Allowed For
   *
   * * Agents
   *
   * #### Request Parameters
   *
   * The DELETE request takes one parameter, an `ids` object that lists the
   * ticket triggers to delete.
   *
   * | Name | Description
   * | ---- | -----------
   * | ids  | The IDs of the triggers to delete
   *
   * #### Example request
   *
   * ```js
   * {
   *   "ids": "25,23,27,22"
   * }
   * ```
   */
  readonly DeleteManyTriggers: () => Effect.Effect<
    void,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Alters the firing order of ticket triggers in the account. See
   * [Reordering and sorting triggers](https://support.zendesk.com/hc/en-us/articles/115015696088)
   * in the Zendesk Help Center. The firing order is set in a `trigger_ids` array in the request body.
   *
   * You must include every ticket trigger id in your account to reorder the ticket triggers. If not, the endpoint will return 404 Forbidden.
   *
   * Reordering ticket triggers via the API is not permitted if you have more than one ticket trigger category. If there is more than one
   * ticket trigger category, the endpoint will return a `LimitOneCategory` error.
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly ReorderTriggers: () => Effect.Effect<
    typeof TriggerResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Pagination
   *
   * * Offset pagination only
   *
   * See [Using Offset Pagination](/api-reference/ticketing/introduction/#using-offset-pagination).
   *
   * #### Allowed For
   *
   * * Agents
   *
   * #### Sideloads
   *
   * The following sideloads are supported. For more information, see [Side-loading](/documentation/ticketing/using-the-zendesk-api/side_loading/).
   *
   * | Name             | Will sideload
   * | ---------------- | -------------
   * | app_installation | The app installation that requires each ticket trigger, if present
   * | permissions      | The permissions for each ticket trigger
   * | usage_1h         | The number of times each ticket trigger has been used in the past hour
   * | usage_24h        | The number of times each ticket trigger has been used in the past day
   * | usage_7d         | The number of times each ticket trigger has been used in the past week
   * | usage_30d        | The number of times each ticket trigger has been used in the past thirty days
   *
   * #### Filter
   *
   * Use the `filter` query parameter to filter a ticket trigger search by one or more attributes. For example, the following `filter` argument filters ticket triggers by the `description` attribute:
   *
   * ```json
   * {
   *   "json": {
   *     "description": "Close a ticket"
   *   }
   * }
   * ```
   */
  readonly SearchTriggers: () => Effect.Effect<
    typeof TriggersResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Updates the position or the active status of multiple ticket triggers. Any additional properties are ignored.
   *
   * #### Allowed For
   *
   * * Agents
   *
   * #### Request Parameters
   *
   * The PUT request expects a `triggers` object that lists the ticket triggers to update.
   *
   * Each ticket trigger may have the following properties:
   *
   * | Name        | Mandatory | Description
   * | --------    | --------- | -----------
   * | id          | yes       | The ID of the ticket trigger to update
   * | position    | no        | The new position of the ticket trigger
   * | active      | no        | The active status of the ticket trigger (true or false)
   * | category_id | no        | The ID of the new category the ticket trigger is to be moved to
   *
   * #### Example Request
   *
   * ```js
   * {
   *   "triggers": [
   *     {"id": 25, "position": 3},
   *     {"id": 23, "position": 5},
   *     {"id": 27, "position": 9},
   *     {"id": 22, "position": 7}
   *   ]
   * }
   * ```
   */
  readonly UpdateManyTriggers: (
    options: typeof TriggerBulkUpdateRequest.Encoded,
  ) => Effect.Effect<
    typeof TriggersResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Uploads a file that can be attached to a ticket comment. It doesn't attach the file to the comment. For details and examples, see [Attaching ticket comments with the API](/documentation/ticketing/using-the-zendesk-api/adding-ticket-attachments-with-the-api).
   *
   * The endpoint has a required `filename` query parameter. The parameter specifies what the file will be named when attached to the ticket comment (to give the agent more context about the file). The parameter does not specify the file on the local system to be uploaded. While the two names can be different, their file extensions must be the same. If they don't match, the agent's browser or file reader could give an error when attempting to open the attachment.
   *
   * The `Content-Type` header must contain a recognized MIME type that correctly describes the type of the uploaded file. Failing to send a recognized, correct type may cause undesired behavior. For example, in-browser audio playback may be interrupted by the browser's security mechanisms for MP3s uploaded with an incorrect type.
   *
   * Adding multiple files to the same upload is handled by splitting requests and passing the API token received from the first request to each subsequent request. The token is valid for 60 minutes.
   *
   * **Note**: Even if [private attachments](https://support.zendesk.com/hc/en-us/articles/204265396) are enabled in the Zendesk Support instance, uploaded files are visible to any authenticated user at the `content_URL` specified in the [JSON response](#json-format) until the upload token is consumed. Once a file is associated with a ticket or post, visibility is restricted to users with access to the ticket or post with the attachment.
   *
   * #### Allowed For
   *
   * * End users
   */
  readonly UploadFiles: () => Effect.Effect<
    typeof AttachmentUploadResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed for
   *
   * * End Users
   */
  readonly DeleteUpload: (
    token: string,
  ) => Effect.Effect<void, HttpClientError.HttpClientError | ParseError>;
  /**
   * Returns a list of custom user fields in your account. Fields are returned in the order that you specify in your user fields configuration in Zendesk Support. Clients should cache this resource for the duration of their API usage and map the key for each User Field to the values returned under the `user_fields` attribute on the [User](/api-reference/ticketing/users/users/) resource.
   *
   * #### Pagination
   *
   * * Cursor pagination (recommended)
   * * Offset pagination
   *
   * See [Pagination](/api-reference/introduction/pagination/).
   *
   * Returns a maximum of 100 records per page.
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly ListUserFields: () => Effect.Effect<
    typeof UserFieldsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Creates any of the following custom field types:
   *
   * * text (default when no "type" is specified)
   * * textarea
   * * checkbox
   * * date
   * * integer
   * * decimal
   * * regexp
   * * dropdown
   * * lookup
   * * multiselect
   *
   * See [About custom field types](https://support.zendesk.com/hc/en-us/articles/203661866) in Zendesk help.
   *
   * #### Allowed For
   *
   * * Admins
   */
  readonly CreateUserField: () => Effect.Effect<
    typeof UserFieldResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed for
   *
   * * Agents
   */
  readonly ShowUserField: (
    userFieldId: string,
  ) => Effect.Effect<
    typeof UserFieldResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Updating a Dropdown (Tagger) or Multiselect Field
   *
   * Dropdown and multiselect fields return an array of `custom_field_options` which specify the name, value, and order of the list of dropdown or multiselect options.
   * Understand the following behavior when updating a dropdown or multiselect field:
   *
   * - All options must be passed on update. Options that are not passed will be removed. As a result, these values will be removed from any organizations.
   * - To create a new option, pass a null `id` along with `name` and `value`.
   * - To update an existing option, pass its `id` along with `name` and `value`.
   * - To re-order an option, reposition it in the `custom_field_options` array relative to the other options.
   * - To remove an option, omit it from the list of options upon update.
   *
   * #### Example Request
   *
   * ```bash
   * curl https://{subdomain}.zendesk.com/api/v2/user_fields/{user_field_id}.json \
   *   -H "Content-Type: application/json" -X PUT \
   *   -d '{"user_field": {"custom_field_options": [{"id": 124, "name": "Option 2", "value": "option_2"}, {"id": 123, "name": "Option 1", "value": "option_1"}, {"id": 125, "name": "Option 2", "value": "option_3"}]}}' \
   *   -v -u {email_address}/token:{api_token}
   * ```
   * #### Allowed for
   *
   * * Admins
   */
  readonly UpdateUserField: (
    userFieldId: string,
  ) => Effect.Effect<
    typeof UserFieldResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed for
   *
   * * Admins
   */
  readonly DeleteUserField: (
    userFieldId: string,
  ) => Effect.Effect<void, HttpClientError.HttpClientError | ParseError>;
  /**
   * Returns a list of custom user field options for the given dropdown user field.
   *
   * #### Pagination
   *
   * * Cursor pagination (recommended)
   * * Offset pagination
   *
   * See [Pagination](/api-reference/introduction/pagination/).
   *
   * Returns a maximum of 100 records per page.
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly ListUserFieldOptions: (
    userFieldId: string,
  ) => Effect.Effect<
    typeof CustomFieldOptionsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Creates a new option or updates an existing option for the given drop-down user field.
   *
   * To update an option, include the id of the option in the `custom_field_option` object. Example: `{"custom_field_option": {"id": 10002, "name": "Pineapples", ... }`. If an option exists for the given ID, the option will be updated. Otherwise, a new option will be created.
   *
   * #### Response
   *
   * Returns one of the following status codes:
   *
   * - 200 with `Location: /api/v2/user_fields/{user_field_id}/options.json` if the user field option already exists in the database
   * - 201 with `Location: /api/v2/user_fields/{user_field_id}/options.json` if the user field option is new
   *
   * #### Allowed For
   *
   * * Admins
   */
  readonly CreateOrUpdateUserFieldOption: (
    userFieldId: string,
  ) => Effect.Effect<
    | typeof CustomFieldOptionResponse.Type
    | typeof CustomFieldOptionResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed for
   * * Agents
   */
  readonly ShowUserFieldOption: (
    userFieldId: string,
    userFieldOptionId: string,
  ) => Effect.Effect<
    typeof CustomFieldOptionResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed for
   * * Admins
   */
  readonly DeleteUserFieldOption: (
    userFieldId: string,
    userFieldOptionId: string,
  ) => Effect.Effect<void, HttpClientError.HttpClientError | ParseError>;
  /**
   * #### Allowed For
   *
   * * Admins
   */
  readonly ReorderUserField: () => Effect.Effect<
    typeof ReorderUserField200.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Pagination
   *
   * * Cursor pagination (recommended)
   * * Offset pagination
   *
   * See [Pagination](/api-reference/introduction/pagination/).
   *
   * Returns a maximum of 100 records per page.
   *
   * #### Allowed For
   *
   * * Admins, Agents and Light Agents
   */
  readonly ListUsers: (
    options?: typeof ListUsersParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof UsersResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Create User
   */
  readonly CreateUser: (
    options: typeof UserRequest.Encoded,
  ) => Effect.Effect<
    typeof UserResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Agents
   */
  readonly ShowUser: (
    userId: string,
  ) => Effect.Effect<
    typeof UserResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Update User
   */
  readonly UpdateUser: (
    userId: string,
    options: typeof UserRequest.Encoded,
  ) => Effect.Effect<
    typeof UserResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Deletes the user and associated records from the account.
   *
   * **Warning**:
   *
   * * Deleted users are not recoverable.
   * * Both agents and administrators can soft delete users in the agent interface in Zendesk Support. Agents with permission can delete end users, while administrators can delete all users except the account owner.
   *
   * To comply with GDPR, a further step is needed. See [Permanently Delete User](/api-reference/ticketing/users/users/#permanently-delete-user).
   *
   * #### Allowed For
   *
   * * Admins and [agents in custom roles with permission](https://support.zendesk.com/hc/en-us/articles/4408882153882#topic_cxn_hig_bd) to manage end users or team members
   */
  readonly DeleteUser: (
    userId: string,
  ) => Effect.Effect<
    typeof UserResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns the GDPR status for each user per area of compliance. A Zendesk area of compliance is typically a product like "support/explore" but can be more fine-grained for areas within the product lines.
   *
   * If the user is not in the account, the request returns a 404 status.
   *
   * ```http
   * Status: 404
   * {
   *   "error":"RecordNotFound",
   *   "description":"Not found"
   * }
   * ```
   *
   * #### Allowed For
   *
   * * Agents, with restrictions
   *
   * #### Pagination
   *
   * * Cursor pagination (recommended)
   * * Offset pagination
   *
   * See [Pagination](/api-reference/introduction/pagination/).
   */
  readonly ShowUserComplianceDeletionStatuses: (
    userId: string,
    options?:
      | typeof ShowUserComplianceDeletionStatusesParams.Encoded
      | undefined,
  ) => Effect.Effect<
    typeof ComplianceDeletionStatusesResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For:
   *
   * * Agents
   */
  readonly GroupMembershipSetDefault: (
    userId: string,
    groupMembershipId: string,
  ) => Effect.Effect<
    typeof GroupMembershipsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns a list of identities for the given user.
   *
   * Use the first endpoint if authenticating as an agent. Use the second if authenticating as an end user. End users can only list email and phone number identities.
   *
   * #### Pagination
   *
   * * Cursor pagination (recommended)
   * * Offset pagination
   *
   * See [Pagination](/api-reference/introduction/pagination/).
   *
   * Returns a maximum of 100 records per page for cursor pagination.
   *
   * #### Allowed For
   *
   * * Agents
   * * Verified end users
   */
  readonly ListUserIdentities: (
    userId: string,
  ) => Effect.Effect<
    typeof UserIdentitiesResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Adds an identity to a user's profile. An agent can add an identity to any user profile.
   *
   * Supported identity types:
   *
   * | Type             | Example |
   * | ---------------- | ------- |
   * | email            | `{ "type" : "email", "value" : "someone@example.com" }` |
   * | twitter          | `{ "type" : "twitter", "value" : "screen_name" }` |
   * | facebook         | `{ "type" : "facebook", "value" : "855769377321" }` |
   * | google           | `{ "type" : "google", "value" : "example@gmail.com" }` |
   * | agent_forwarding | `{ "type" : "agent_forwarding", "value" : "+1 555-123-4567" }` |
   * | phone_number     | `{ "type" : "phone_number", "value" : "+1 555-123-4567" }` |
   *
   * To create an identity without sending out a verification email, include a `"skip_verify_email": true` property. The `"skip_verify_email": true` property does not apply when updating your own agent profile. A welcome or verification email will be sent regardless of this setting.
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly CreateUserIdentity: (
    userId: string,
  ) => Effect.Effect<
    typeof UserIdentityResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Shows the identity with the given id for a given user.
   *
   * Use the first endpoint if authenticating as an agent. Use the second if authenticating as an end user. End users can only view email or phone number identity.
   *
   * #### Allowed For
   *
   * * Agents
   * * Verified end users
   */
  readonly ShowUserIdentity: (
    userId: string,
    userIdentityId: string,
  ) => Effect.Effect<
    typeof UserIdentityResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * This endpoint allows you to:
   *
   * * Set the specified identity as verified (by setting `verified` to "true" or `verification_method` to "low")
   * * Unverify a verified identity (by setting `verified` to "false" or `verification_method` to "none")
   * * Update the `value` property of the specified identity
   *
   * You can't change an identity's `primary` attribute with this endpoint. You must use the [Make Identity Primary](#make-identity-primary) endpoint instead.
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly UpdateUserIdentity: (
    userId: string,
    userIdentityId: string,
  ) => Effect.Effect<
    typeof UserIdentityResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Deletes the identity for a given user.
   * In certain cases, a phone number associated with an identity is still visible on the user profile after the identity has been deleted via API. You can remove the phone number from the user profile by updating the `phone` attribute of the user to an empty string. See [Update User via API](/api-reference/ticketing/users/users/#update-user) for details and examples.
   *
   * Deleting identities with type `messaging` could break messaging functionality. For example, an agent may stop being able to send messages via the messaging channel.
   *
   * #### Allowed For
   * * Agents
   */
  readonly DeleteUserIdentity: (
    userId: string,
    userIdentityId: string,
  ) => Effect.Effect<void, HttpClientError.HttpClientError | ParseError>;
  /**
   * Sets the specified identity as primary. To change other attributes, use the [Update  Identity](#update-identity) endpoint. This is a collection-level operation and the correct behavior for an API client is to subsequently reload the entire collection.
   *
   * The first endpoint is the preferred option if authenticating as an agent. If authenticating as an end user, you can only use the second endpoint. In addition, an end user can only make an email identity primary if the email is verified.
   *
   * #### Allowed For
   *
   * * Agents
   * * Verified end users
   */
  readonly MakeUserIdentityPrimary: (
    userId: string,
    userIdentityId: string,
  ) => Effect.Effect<
    typeof UserIdentitiesResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Sends the user a verification email with a link to verify ownership of the email address.
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly RequestUserVerfication: (
    userId: string,
    userIdentityId: string,
  ) => Effect.Effect<
    typeof RequestUserVerfication200.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Sets the specified identity as verified.
   *
   * For security reasons, you can't use this endpoint to update the email identity of the account owner. To verify the person's identity, send a verification email. See [Verifying the account owner's email address](https://support.zendesk.com/hc/en-us/articles/4408828975130) in Zendesk help.
   *
   * If [automatic mapping of users to organizations using the email domain](https://support.zendesk.com/hc/en-us/articles/4408882246298-Creating-organizations#topic_nxl_vdt_bc) is enabled and the user is not already a member of an organization, they will be automatically added to the organization associated with the email domain once the email identity is verified.
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly VerifyUserIdentity: (
    userId: string,
    userIdentityId: string,
  ) => Effect.Effect<
    typeof UserIdentityResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Merges the end user specified in the path parameter into the existing end user specified in the request body.
   *
   * Any two end users can be merged with the exception of end users created by sharing agreements.
   *
   * To be eligible for merging, the user in the path parameter must be a requester on 10,000 or fewer tickets. Otherwise, the merge will be blocked.
   *
   * Agents, admins, and users with more than 10,000 requested tickets cannot be merged.
   *
   * For more information about how user data is merged, see [Merging a user's duplicate account](https://support.zendesk.com/hc/en-us/articles/4408887695898) in Zendesk help.
   *
   * #### Allowed For
   *
   * * Admins or agents with permission to edit end users
   */
  readonly MergeEndUsers: (
    userId: string,
    options: typeof UserRequest.Encoded,
  ) => Effect.Effect<
    typeof UserResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Sets the default organization membership of a given user.
   *
   * #### Allowed for
   *
   * * Admins
   * * Agents when setting the default organization membership for an end user
   */
  readonly SetOrganizationMembershipAsDefault: (
    userId: string,
    organizationMembershipId: string,
  ) => Effect.Effect<
    typeof OrganizationMembershipsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Immediately removes a user from an organization and schedules a job to unassign all working tickets currently assigned to the user and organization combination. The `organization_id` of the unassigned tickets is set to null.
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly UnassignOrganization: (
    userId: string,
    organizationId: string,
  ) => Effect.Effect<void, HttpClientError.HttpClientError | ParseError>;
  /**
   * Sets the default organization membership of a given user.
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly SetOrganizationAsDefault: (
    userId: string,
    organizationId: string,
  ) => Effect.Effect<
    typeof OrganizationMembershipResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * You can only change your own password. Nobody can change the password of another user because it requires knowing the user's existing password. However, an admin can set a new password for another user without knowing the existing password. See [Set a User's Password](#set-a-users-password) above.
   *
   * #### Allowed For
   *
   * * Agents
   * * End Users
   */
  readonly ChangeOwnPassword: (
    userId: string,
  ) => Effect.Effect<
    typeof ChangeOwnPassword200.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * An admin can set a user's password only if the setting is enabled in Zendesk Support under **Settings** > **Security** > **Global**. The setting is off by default. Only the account owner can access and change this setting.
   *
   * #### Allowed For
   *
   * * Admins
   */
  readonly SetUserPassword: (
    userId: string,
  ) => Effect.Effect<
    typeof SetUserPassword200.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Agents
   * * End Users
   */
  readonly GetUserPasswordRequirements: (
    userId: string,
  ) => Effect.Effect<
    typeof UserPasswordRequirementsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Show User Related Information
   */
  readonly ShowUserRelated: (
    userId: string,
  ) => Effect.Effect<
    typeof UserRelatedResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Deletes all the sessions for a user.
   *
   * #### Allowed For
   *
   * * Admins, Agents, End users
   */
  readonly BulkDeleteSessionsByUserId: (
    userId: string,
  ) => Effect.Effect<void, HttpClientError.HttpClientError | ParseError>;
  /**
   * #### Allowed For
   *
   * * Admins, Agents, End users
   */
  readonly ShowSession: (
    userId: string,
    sessionId: string,
  ) => Effect.Effect<
    typeof SessionResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Admins, Agents, End users
   */
  readonly DeleteSession: (
    userId: string,
    sessionId: string,
  ) => Effect.Effect<void, HttpClientError.HttpClientError | ParseError>;
  /**
   * Archived tickets are not included in the response. See
   * [About archived tickets](https://support.zendesk.com/hc/en-us/articles/203657756) in
   * the Support Help Center.
   *
   * #### Pagination
   *
   * - Cursor pagination (recommended)
   * - Offset pagination
   *
   * See [Pagination](/api-reference/introduction/pagination/).
   *
   * Returns a maximum of 100 records per page.
   *
   * #### Allowed For
   * * Agents with "View only" or higher reports permissions in Support.
   *   These permissions are distinct from Explore permissions.
   * * Agents retrieving their own skips
   */
  readonly ListTicketSkips: (
    userId: string,
  ) => Effect.Effect<
    typeof TicketSkipsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns an array of users whose name starts with the value specified in the `name` parameter.
   * It only returns users with no foreign identities.
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly AutocompleteUsers: (
    options: typeof AutocompleteUsersParams.Encoded,
  ) => Effect.Effect<
    typeof UsersResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns an approximate count of users. If the count exceeds 100,000, it is updated every 24 hours.
   *
   * The response includes a `refreshed_at` property in a `count` object that contains a timestamp indicating when the count was last updated.
   *
   * **Note**: When the count exceeds 100,000, the `refreshed_at` property may occasionally be null.
   * This indicates that the count is being updated in the background. The `count` object's `value` property is limited to 100,000 until the update is complete.
   *
   * #### Allowed For
   *
   * * Admins, Agents and Light Agents
   */
  readonly CountUsers: (
    options?: typeof CountUsersParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof CountResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Accepts an array of up to 100 user objects.
   *
   * **Note**: To protect the data in your Zendesk account, bulk user imports are not enabled by default in Zendesk accounts. The account owner must contact [Zendesk Customer Support](https://support.zendesk.com/hc/en-us/articles/4408843597850) to enable the imports. A 403 Forbidden
   * error is returned if data imports are not enabled.
   *
   * #### Allowed For
   *
   * * Admins and [agents in custom roles with permission](https://support.zendesk.com/hc/en-us/articles/4408882153882#topic_cxn_hig_bd) to manage end users or team members
   *
   * #### Specifying an organization
   *
   * You can assign a user to an existing organization by setting an
   * `organization_id` property in the user object.
   *
   * #### Response
   *
   * This endpoint returns a `job_status` [JSON object](/api-reference/ticketing/ticket-management/job_statuses/#json-format) and queues a background job to do the work. Use the [Show Job Status](/api-reference/ticketing/ticket-management/job_statuses/#show-job-status) endpoint to check for the job's completion. Only a certain number of jobs can be queued or running at the same time. See [Job limit](/api-reference/introduction/rate-limits/#job-limit) for more information.
   */
  readonly CreateManyUsers: (
    options: typeof UsersRequest.Encoded,
  ) => Effect.Effect<
    typeof JobStatusResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Creates a user if the user does not already exist, or updates an existing user
   * identified by e-mail address or external ID.
   *
   * If you don't specify a role parameter, the new user is assigned the role of end user.
   *
   * If you need to create users without sending out a verification email, include a `"skip_verify_email": true` property in the body.
   *
   * #### External ID Case Sensitivity
   *
   * When providing an external id to identify an existing user to update, the search for the user record is not case sensitive.
   *
   * However, if an existing user is found, the system will update the user's external id to match the case of the external id used to find the user.
   *
   * #### Response Status Code
   *
   * - If the user exists in Zendesk, a successful request returns a 200 status code with "Location: /api/v2/users/{user_id}.json".
   * - If the user does not exist in Zendesk, a successful request returns a 201 status code with "Location: /api/v2/users/{new_user_id}.json".
   *
   * #### Allowed For
   *
   * * Admins and [agents in custom roles with permission](https://support.zendesk.com/hc/en-us/articles/4408882153882#topic_cxn_hig_bd) to manage end users or team members
   */
  readonly CreateOrUpdateUser: (
    options: typeof UserRequest.Encoded,
  ) => Effect.Effect<
    typeof UserResponse.Type | typeof UserResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Accepts an array of up to 100 user objects. For each user, the user is created if it does not
   * already exist, or the existing user is updated.
   *
   * **Note**: To protect the data in your Zendesk account, bulk user imports are not enabled by default in Zendesk accounts. The account owner must contact [Zendesk Customer Support](https://support.zendesk.com/hc/en-us/articles/4408843597850) to enable the imports. A 403 Forbidden
   * error is returned if data imports are not enabled.
   *
   * Each individual user object can identify an existing user by `email` or by `external_id`.
   *
   * This endpoint returns a `job_status` [JSON object](/api-reference/ticketing/ticket-management/job_statuses/#json-format) and queues a background job to do the work. Use the [Show Job Status](/api-reference/ticketing/ticket-management/job_statuses/#show-job-status) endpoint to check for the job's completion. Only a certain number of jobs can be queued or running at the same time. See [Job limit](/api-reference/introduction/rate-limits/#job-limit) for more information.
   *
   * #### Allowed For
   *
   * * Admins and [agents in custom roles with permission](https://support.zendesk.com/hc/en-us/articles/4408882153882#topic_cxn_hig_bd) to manage end users or team members
   */
  readonly CreateOrUpdateManyUsers: (
    options: typeof UsersRequest.Encoded,
  ) => Effect.Effect<
    typeof JobStatusResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Accepts a comma-separated list of up to 100 user ids.
   *
   * The request takes an `ids` or an `external_ids` query parameter.
   *
   * #### Allowed for
   *
   * - Admins
   *
   * #### Response
   *
   * This endpoint returns a `job_status` [JSON object](/api-reference/ticketing/ticket-management/job_statuses/#json-format) and queues a background job to do the work. Use the [Show Job Status](/api-reference/ticketing/ticket-management/job_statuses/#show-job-status) endpoint to check for the job's completion. Only a certain number of jobs can be queued or running at the same time. See [Job limit](/api-reference/introduction/rate-limits/#job-limit) for more information.
   */
  readonly DestroyManyUsers: (
    options?: typeof DestroyManyUsersParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof JobStatusResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Accepts a comma-separated list of up to 100 user ids.
   *
   * #### Allowed For:
   *
   * * Admins
   */
  readonly LogoutManyUsers: (
    options?: typeof LogoutManyUsersParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof LogoutManyUsers202.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * The endpoint returns [user information](/api-reference/ticketing/users/users/) and an `authenticity_token`.
   *
   * #### Allowed For
   *
   * * Anonymous users
   *
   * #### Authenticity Token
   *
   * Zendesk API calls made by end users from a Zendesk help center must include `authenticity_token` in the `X-CSRF-Token` HTTP header. This helps prevent [cross-site request forgery (CSRF)](https://en.wikipedia.org/wiki/Cross-site_request_forgery) attacks.
   *
   * For an example using an authenticity token, see the AJAX request in the [Upgrading from Templating API v1](https://developer.zendesk.com/documentation/help_center/help-center-templates/v1#jquery) documentation.
   */
  readonly ShowCurrentUser: () => Effect.Effect<
    typeof CurrentUserResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Deletes the current session. In practice, this only works when using session auth for requests, such as client-side requests
   * made from a Zendesk app. When using OAuth or basic authentication, you don't have a current session so this endpoint has no effect.
   *
   * #### Allowed For
   *
   * * Admins, Agents, End users
   */
  readonly DeleteAuthenticatedSession: () => Effect.Effect<
    void,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Admins, Agents, End users
   */
  readonly ShowCurrentlyAuthenticatedSession: () => Effect.Effect<
    typeof SessionResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Admins, Agents, End users
   */
  readonly RenewCurrentSession: () => Effect.Effect<
    typeof RenewSessionResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Sends the owner a reminder email to update their subscription so more agents can be created.
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly RequestUserCreate: (
    options: typeof UserRequest.Encoded,
  ) => Effect.Effect<
    typeof RequestUserCreate200.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns an array of users who meet the search criteria.
   *
   * Returns up to 100 records per page to a maximum of 10,000 records per query. See [Using offset pagination](/api-reference/introduction/pagination/#using-offset-pagination).
   *
   * #### Pagination
   *
   * * Offset pagination only
   *
   * See [Using Offset Pagination](/api-reference/ticketing/introduction/#using-offset-pagination).
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly SearchUsers: (
    options?: typeof SearchUsersParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof UsersResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Accepts a comma-separated list of up to 100 user ids or external ids.
   *
   * #### Allowed For:
   *
   * * Agents
   */
  readonly ShowManyUsers: (
    options?: typeof ShowManyUsersParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof UsersResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Update Many Users
   */
  readonly UpdateManyUsers: (options: {
    readonly params?: typeof UpdateManyUsersParams.Encoded | undefined;
    readonly payload: typeof UpdateManyUsersRequest.Encoded;
  }) => Effect.Effect<
    typeof JobStatusResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Lists shared and personal views available to the current user.
   *
   * #### Sideloads
   *
   * The following sideloads are supported:
   *
   * | Name             | Will sideload
   * | ---------------- | -------------
   * | app_installation | The app installation that requires each view, if present
   * | permissions      | The permissions for each view
   *
   * #### Pagination
   *
   * - Cursor pagination (recommended, but only sorts by `created_at`)
   * - Offset pagination
   *
   * See [Pagination](/api-reference/introduction/pagination/).
   *
   * Returns a maximum of 100 records per page.
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly ListViews: (
    options?: typeof ListViewsParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof ViewsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Agents
   *
   * #### JSON Format
   *
   * The JSON format consists of one property, a `view` object that lists the values to set when the view is created.
   *
   * **Note**: The request must include at least one condition in the `all` array that checks one of the following fields: `status`, `type`, `group_id`, `assignee_id`, or `requester_id`.
   *
   * | Name        | Description
   * | ----------- | -----------
   * | title       | Required. The title of the view
   * | all         | Required. An array of one or more conditions. A ticket must meet all of them to be included in the view. See [Conditions reference](/documentation/ticketing/reference-guides/conditions-reference)
   * | any         | An array of one or more conditions. A ticket must meet any of them to be included in the view. See [Conditions reference](/documentation/ticketing/reference-guides/conditions-reference)
   * | description | The description of the view
   * | active      | Allowed values are true or false. Determines if the view is displayed or not
   * | output      | An object that specifies the columns to display. Example: `"output": {"columns": ["status", "description", "priority"]}`. See [View columns](#view-columns)
   * | restriction | An object that describes who can access the view. To give all agents access to the view, omit this property
   *
   * The `restriction` object has the following properties.
   *
   * | Name | Comment
   * | ---- | -------
   * | type | Allowed values are "Group" or "User"
   * | id   | The numeric ID of a single group or user
   * | ids  | The numeric IDs of a single or more groups. Recommended for "Group" `type`
   *
   * If `type` is "Group", the `ids` property is the preferred method of specifying the group id or ids.
   *
   * #### Example Request Body
   *
   * ```js
   * {
   *   "view": {
   *     "title": "Kelly's tickets",
   *     "raw_title": "{{dc.tickets_assigned_to_kelly}}",
   *     "description": "Tickets that are assigned to Kelly",
   *     "active": true,
   *     "position": 3,
   *     "restriction": {
   *       "type": "User",
   *       "id": "213977756"
   *     },
   *     "all": [
   *       {
   *         "field": "status",
   *         "operator": "less_than",
   *         "value": "solved"
   *       },
   *       {
   *         "field": "group_id",
   *         "operator": "is",
   *         "value": "24000932"
   *       },
   *       {
   *         "field": "custom_fields_360011872073",
   *         "operator": "is",
   *         "value": "Canada"
   *       },
   *       ...
   *     ],
   *     "output": {
   *       "columns": ["status", "requester", "assignee"],
   *       "group_by": "assignee",
   *       "group_order": "desc",
   *       "sort_by": "status",
   *       "sort_order": "desc"
   *     }
   *   }
   * }
   * ```
   *
   * #### View columns
   *
   * The `output` request parameter lets you specify what columns to include in the view in the agent interface. Example: `"output": {"columns": ["status", "description", "priority"]}`. The following table lists possible columns for views in the agent UI and the corresponding values in the `columns` array.
   *
   * For custom fields, specify the id of the custom field in the `columns` array.
   *
   * You can specify a total of 10 columns to a view.
   *
   * | View column title in UI     | Value                |
   * |---------------------------- | -------------------- |
   * | Assigned                    | `assigned`           |
   * | Assignee                    | `assignee`           |
   * | Due Date                    | `due_date`           |
   * | Group                       | `group`              |
   * | ID                          | `nice_id`            |
   * | Updated                     | `updated`            |
   * | Assignee updated            | `updated_assignee`   |
   * | Requester updated           | `updated_requester`  |
   * | Updater                     | `updated_by_type`    |
   * | Organization                | `organization`       |
   * | Priority                    | `priority`           |
   * | Requested                   | `created`            |
   * | Requester                   | `requester`          |
   * | Requester language          | `locale_id`          |
   * | Satisfaction                | `satisfaction_score` |
   * | Solved                      | `solved`             |
   * | Status category             | `status`             |
   * | Subject                     | `description`        |
   * | Submitter                   | `submitter`          |
   * | Ticket form                 | `ticket_form`        |
   * | Type                        | `type`               |
   * | Brand                       | `brand`              |
   * | Ticket status               | `custom_status_id`   |
   *
   * #### View sorting
   *
   * You can group and sort items in the view by adding items to the `output` parameter:
   *
   * | Attribute                   | Description
   * |-----------------------------| -----------
   * | `group_by`, `sort_by`       | Sort or group the tickets by a column in the [View columns](#view-columns) table. The `description`, `submitter` and `custom_status_id` columns are not supported
   * | `group_order`, `sort_order` | Either "asc" or "desc"
   */
  readonly CreateView: () => Effect.Effect<
    typeof ViewResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Agents
   */
  readonly ShowView: (
    viewId: string,
  ) => Effect.Effect<
    typeof ViewResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Agents
   *
   * #### JSON Format
   *
   *  The PUT request takes one property, a `view` object that lists the values to update. All properties are optional.
   *
   * **Note**: Updating a condition updates the containing array, clearing the other conditions. Include all your conditions when updating any condition.
   *
   * | Name        | Description
   * | ----------- | -----------
   * | title       | The title of the view
   * | all         | An array of one or more conditions. A ticket must meet all the conditions to be included in the view. The PUT request replaces all existing conditions. See [Conditions reference](/documentation/ticketing/reference-guides/conditions-reference)
   * | any         | An array of one or more conditions. A ticket must meet any of them to be included in the view. At least one `all` condition must be defined with the `any` conditions. The PUT request replaces all existing `any` conditions. See [Conditions reference](/documentation/ticketing/reference-guides/conditions-reference)
   * | active      | Allowed values are true or false. Determines if the view is displayed or not
   * | output      | An object that specifies the columns to display. Example: `"output": {"columns": ["status", "description," "priority"]}`. See [View columns](#view-columns)
   * | restriction | An object that describes who can access the view. To give all agents access to the view, omit this property
   *
   * The `restriction` object has the following properties.
   *
   * | Name | Comment
   * | ---- | -------
   * | type | Allowed values are "Group" or "User"
   * | id   | The numeric ID of a single group or user
   * | ids  | The numeric IDs of a single or more groups. Recommended for "Group" `type`
   *
   * If `type` is "Group", the `ids` property is the preferred method of specifying the group id or ids.
   *
   * You can also update how items are sorted and grouped. See [View sorting](#view-sorting) in Create View.
   *
   * #### Example Request Body
   *
   * ```js
   * {
   *   "view": {
   *     "title": "Code red tickets",
   *     "restriction": {
   *       "type": "Group",
   *       "ids": [10052, 10057, 10062, 10002]
   *     },
   *     "all": [
   *       {
   *         "field": "priority",
   *         "operator": "is",
   *         "value": "urgent"
   *       }
   *     ],
   *     "output": {
   *       "columns": ["status", "requester", "assignee", "updated"]
   *     }
   *   }
   * }
   * ```
   */
  readonly UpdateView: (
    viewId: string,
  ) => Effect.Effect<
    typeof ViewResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   * * Agents
   */
  readonly DeleteView: (
    viewId: string,
  ) => Effect.Effect<void, HttpClientError.HttpClientError | ParseError>;
  /**
   * Returns the ticket count for a single view.
   *
   * This endpoint is rate limited to 5 requests per minute, per view, per agent.
   *
   * #### View Counts
   *
   * The view count endpoints, Count Tickets in View (this endpoint) and [Count Tickets in Views](#count-tickets-in-views), let you estimate how many tickets remain in a view without having to retrieve the entire view. They're designed to help estimate view size. From a business perspective, accuracy becomes less relevant as view size increases.
   *
   * To ensure quality of service, these counts are cached more heavily as the number of tickets in a view grows. For a view with thousands of tickets, you can expect the count to be cached for 60-90 minutes. As a result, the count may not reflect the actual number of tickets in your view.
   *
   * View counts are represented as JSON objects with the following attributes:
   *
   * | Name            | Type        | Comment
   * | --------------- | ------------| -------
   * | view_id         | integer     | The id of the view
   * | url             | string      | The API url of the count
   * | value           | integer     | The cached number of tickets in the view. Can also be null if the system is loading and caching new data. Not to be confused with 0 tickets
   * | pretty          | string      | A pretty-printed text approximation of the view count
   * | fresh           | boolean     | false if the cached data is stale and the system is still loading and caching new data
   * | active          | boolean     | Only active views if true, inactive views if false, all views if null.
   *
   * #### Example
   * ```js
   * {
   *   "view_count": {
   *     "view_id": 25,
   *     "url":     "https://company.zendesk.com/api/v2/views/25/count.json",
   *     "value":   719,
   *     "pretty":  "~700",
   *     "fresh":   true
   *   }
   * }
   * ```
   */
  readonly GetViewCount: (
    viewId: string,
  ) => Effect.Effect<
    typeof ViewCountResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns the column titles and the rows of the specified view.
   *
   * The `columns` array lists the view's column titles and includes only views parameters.
   *
   * The `rows` array lists the values of each column for each ticket and includes parameters from both views and tickets. Though not displayed in the view, a partial ticket object is included with each row object.
   *
   * **Note**: To get the full ticket objects for a specified view, use [List Tickets from a View](#list-tickets-from-a-view).
   *
   * This endpoint is rate limited to 5 requests per minute, per view, per agent. This rate limit includes activity in Zendesk Support. An API script is more likely to encounter rate limit errors if the authenticating agent or admin is concurrently active in Zendesk Support.
   *
   * The view execution system is designed for periodic rather than high-frequency API usage. In particular, views called very frequently may be cached by Zendesk. This means that the API client will still receive a result, but that result may have been computed at any time within the last 10 minutes.
   *
   * Zendesk recommends using the Incremental Ticket Export endpoint to get the latest changes. You can call it more often, and it returns all the tickets that changed since the last poll. For details and rate limits, see [Incremental Exports](/api-reference/ticketing/ticket-management/incremental_exports/).
   *
   * View output sorting can be controlled by passing the `sort_by` and `sort_order` parameters in the format described in the table in [Preview Views](#preview-views).
   *
   * #### Allowed For
   *
   * * Agents
   *
   * #### Pagination
   *
   * * Cursor pagination (recommended)
   * * Offset pagination
   *
   * See [Pagination](/api-reference/introduction/pagination/).
   */
  readonly ExecuteView: (
    viewId: string,
    options?: typeof ExecuteViewParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof ViewResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns the csv attachment of the specified view if possible. Enqueues a job to produce the csv if necessary.
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly ExportView: (
    viewId: string,
  ) => Effect.Effect<
    typeof ViewExportResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Agents
   *
   * #### Pagination
   * * Cursor pagination (recommended)
   * * Offset pagination
   *
   * See [Pagination](/api-reference/introduction/pagination/).
   */
  readonly ListTicketsFromView: (
    viewId: string,
    options?: typeof ListTicketsFromViewParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof TicketsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Lists active shared and personal views available to the current user.
   *
   * #### Sideloads
   *
   * The following sideloads are supported:
   *
   * | Name             | Will sideload
   * | ---------------- | -------------
   * | app_installation | The app installation that requires each view, if present
   * | permissions      | The permissions for each view
   *
   * #### Pagination
   *
   * - Offset pagination
   *
   * See [Pagination](/api-reference/introduction/pagination/).
   *
   * Returns a maximum of 100 records per page.
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly ListActiveViews: (
    options?: typeof ListActiveViewsParams.Encoded | undefined,
  ) => Effect.Effect<
    typeof ViewsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * A compacted list of shared and personal views available to the current user. This endpoint never returns more than 32 records and does not respect the "per_page" option.
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly ListCompactViews: () => Effect.Effect<
    typeof ViewsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns an approximate count of shared and personal views available to the current user. If the count exceeds 100,000, the count will return a cached result.  This cached result will update every 24 hours.
   *
   * The `count[refreshed_at]` property is a timestamp that indicates when the count was last updated.
   *
   * **Note**: When the count exceeds 100,000, `count[refreshed_at]` may occasionally be null.
   * This indicates that the count is being updated in the background, and `count[value]` is limited to 100,000 until the update is complete.
   *
   * #### Allowed For
   * * Agents
   */
  readonly CountViews: () => Effect.Effect<
    typeof ViewsCountResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns the ticket count of each view in a list of views. Accepts up to 20 view ids per request. For the ticket count of a single view, see [Count Tickets in View](#count-tickets-in-view).
   *
   * Only returns values for personal and shared views accessible to the user performing the request.
   *
   * This endpoint is rate limited to 6 requests every 5 minutes.
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly GetViewCounts: (
    options: typeof GetViewCountsParams.Encoded,
  ) => Effect.Effect<
    typeof ViewCountsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Deletes the views corresponding to the provided list of IDs.
   *
   * #### Allowed For
   * * Agents
   */
  readonly BulkDeleteViews: (
    options: typeof BulkDeleteViewsParams.Encoded,
  ) => Effect.Effect<void, HttpClientError.HttpClientError | ParseError>;
  /**
   * You can preview views by constructing the conditions in the proper format and nesting them under the `view` property. See [Conditions reference](/documentation/ticketing/reference-guides/conditions-reference/). The output can also be controlled by passing in any of the following parameters and nesting them under the `output` property.
   *
   * | Name            | Type    | Comment
   * | --------------- | ------- | -------
   * | columns         | Array   | The ticket fields to display. System fields are looked up by name, custom fields by title or id. See the [View columns](#view-columns) table
   * | group_by        | String  | When present, the field by which the tickets are grouped
   * | group_order     | String  | The direction the tickets are grouped. May be one of "asc" or "desc"
   * | sort_order      | String  | The direction the tickets are sorted. May be one of "asc" or "desc"
   * | sort_by         | String  | The ticket field used for sorting. This will either be a title or a custom field id.
   *
   * This endpoint is rate limited to 5 requests per minute, per view, per agent.
   *
   * #### Pagination
   *
   * - Cursor pagination (recommended)
   * - Offset pagination
   *
   * See [Pagination](/api-reference/introduction/pagination/).
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly PreviewViews: () => Effect.Effect<
    typeof ViewResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns the ticket count for a single preview.
   *
   * #### Allowed For
   *
   * * Agents
   */
  readonly PreviewCount: () => Effect.Effect<
    typeof ViewCountResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Pagination
   *
   * * Offset pagination only
   *
   * See [Using Offset Pagination](/api-reference/ticketing/introduction/#using-offset-pagination).
   *
   * #### Allowed For
   *
   * * Agents
   *
   * #### Sideloads
   *
   * The following sideloads are supported. For more information, see [Side-loading](/documentation/ticketing/using-the-zendesk-api/side_loading/).
   *
   * | Name             | Will sideload
   * | ---------------- | -------------
   * | app_installation | The app installation that requires each view, if present
   * | permissions      | The permissions for each view
   */
  readonly SearchViews: (
    options: typeof SearchViewsParams.Encoded,
  ) => Effect.Effect<
    typeof ViewsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Agents
   *
   * #### Sideloads
   *
   * The following sideloads are supported:
   *
   * | Name             | Will sideload
   * | ---------------- | -------------
   * | app_installation | The app installation that requires each view, if present
   * | permissions      | The permissions for each view
   */
  readonly ListViewsById: (
    options: typeof ListViewsByIdParams.Encoded,
  ) => Effect.Effect<
    typeof ViewsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Agents
   *
   * #### Request Parameters
   *
   * The PUT request expects a `views` object that lists the views to update.
   *
   * Each view may have the following properties:
   *
   * | Name     | Mandatory | Description
   * | -------- | --------- | -----------
   * | id       | yes       | The ID of the view to update
   * | position | no        | The new position of the view
   * | active   | no        | The active status of the view (true or false)
   *
   * #### Example Request Body
   *
   * ```js
   * {
   *   "views": [
   *     {"id": 25, "position": 3},
   *     {"id": 23, "position": 5},
   *     {"id": 27, "position": 9},
   *     {"id": 22, "position": 7}
   *   ]
   * }
   * ```
   */
  readonly UpdateManyViews: () => Effect.Effect<
    typeof ViewsResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Admins, Agents
   */
  readonly ListWorkspaces: () => Effect.Effect<
    typeof WorkspaceResponse.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   *
   * * Admins
   */
  readonly CreateWorkspace: (
    options: typeof CreateWorkspaceRequest.Encoded,
  ) => Effect.Effect<
    typeof CreateWorkspace201.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   * * Admins
   */
  readonly ShowWorkspace: (
    workspaceId: string,
  ) => Effect.Effect<
    typeof ShowWorkspace200.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   * * Admins
   */
  readonly UpdateWorkspace: (
    workspaceId: string,
    options: typeof UpdateWorkspaceRequest.Encoded,
  ) => Effect.Effect<
    typeof UpdateWorkspace200.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   * * Admins
   */
  readonly DeleteWorkspace: (
    workspaceId: string,
  ) => Effect.Effect<void, HttpClientError.HttpClientError | ParseError>;
  /**
   * #### Allowed For
   * * Admins
   */
  readonly DestroyManyWorkspaces: (
    options: typeof DestroyManyWorkspacesParams.Encoded,
  ) => Effect.Effect<
    typeof DestroyManyWorkspaces200.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * #### Allowed For
   * * Admins
   */
  readonly ReorderWorkspaces: (
    options: typeof ReorderWorkspacesRequest.Encoded,
  ) => Effect.Effect<
    typeof ReorderWorkspaces200.Type,
    HttpClientError.HttpClientError | ParseError
  >;
  /**
   * Returns an OAuth access token in exchange for an [authorization code](https://support.zendesk.com/hc/en-us/articles/203663836#topic_pvr_ncl_1l) valid for 120 seconds.
   *
   * Using a Zendesk username and password to gain an OAuth access token (password grant type flow) has been deprecated and is highly discouraged.
   *
   * An access token can be revoked. Use the [OAuth Tokens API](/api-reference/ticketing/oauth/oauth_tokens) to list, show, or revoke tokens.
   *
   * The refresh token grant type allows for refreshing an access token that has either expired or is about to expire. See [Oauth Tokens for Grant Types](/api-reference/ticketing/oauth/grant_type_tokens/).
   *
   * #### Request parameters
   *
   * The POST request takes the following parameters, which must be formatted as JSON:
   *
   * | Name          | Description
   * | ------------- | --------------------------------------------------
   * | grant_type    | "authorization_code" or "refresh_token"
   * | code          | Authorization grant flow only. The authorization code you received from Zendesk after the user granted access. See [Handle the user's authorization decision](https://support.zendesk.com/hc/en-us/articles/203663836#topic_tfc_cdl_1l) in Help Center
   * | client_id     | The **Unique Identifier** specified in an OAuth client in the Support admin interface (**Admin** > **Channels** > **API** > **OAuth Clients**). See [Registering your application with Zendesk](https://support.zendesk.com/hc/en-us/articles/203663836#topic_s21_lfs_qk)
   * | client_secret | The **Secret** specified in an OAuth client in the Support admin interface (**Admin** > **Channels** > **API** > **OAuth Clients**). See [Registering your application with Zendesk](https://support.zendesk.com/hc/en-us/articles/203663836#topic_s21_lfs_qk)
   * | redirect_uri  | Authorization grant flow only. The redirect URL you specified when you sent the user to the Zendesk authorization page. For ID purposes only. See [Send the user to the Zendesk authorization page](https://support.zendesk.com/hc/en-us/articles/203663836#topic_qk3_d3s_qk)
   * | scope         | Valid scope for this token. A string of space-separated values. See [Scope](#scope) below
   * | expires_in    | Number of seconds the access token is valid. Must be more than 300 seconds (5 minutes) and less than 172,800 seconds (2 days), or less than `refresh_token_expires_in`, whichever is the smallest. Defaults to null
   * | refresh_token_expires_in | Number of seconds the refresh token is valid. Must be more than 604,800 seconds (7 days) or `expires_in` (if given), and less than 7,776,000 seconds (90 days). Defaults to 2,592,000 seconds (30 days)
   * | refresh_token | The refresh token
   *
   * **Example Node.js authorization code grant flow**
   *
   * ```javascript
   * const tokenResponse = await axios.post(
   *   `https://${ZENDESK_SUBDOMAIN}.zendesk.com/oauth/tokens`,
   *   {
   *     grant_type: "authorization_code",
   *     code: req.query.code,
   *     client_id: ZENDESK_CLIENT_ID,
   *     redirect_uri: REDIRECT_URI_PKCE,
   *     scope: "read write",
   *     code_verifier: CODE_VERIFIER,
   *     expires_in: 86400,
   *     refresh_token_expires_in: 604800,
   *   },
   *   { headers: { "Content-Type": "application/json" } }
   * );
   * ```
   *
   * **Example Node.js refresh token grant flow**
   *
   * ```javascript
   * const tokenResponse = await axios.post(
   *   `https://${ZENDESK_SUBDOMAIN}.zendesk.com/oauth/tokens`,
   *   {
   *     grant_type: "refresh_token",
   *     refresh_token: refresh_token,
   *     client_id: ZENDESK_CLIENT_ID,
   *     client_secret: ZENDESK_CLIENT_SECRET,
   *     scopes: "tickets:write",
   *     expires_in: 86400,
   *     refresh_token_expires_in: 604800,
   *   },
   *   { headers: { "Content-Type": "application/json" } }
   * );
   * ```
   *
   * #### Scope
   *
   * You must specify a scope to control the app's access to Zendesk resources. The "read" scope gives access to GET endpoints. It includes permission to sideload related resources. The "write" scope gives access to POST, PUT, and DELETE endpoints for creating, updating, and deleting resources.
   *
   * **Note**: Don't confuse the **scope** parameter (singular) with the **scopes** parameter (plural) for non-grant-type tokens described in [OAuth Tokens](/api-reference/ticketing/oauth/oauth_tokens).
   *
   * The "impersonate" scope allows a Zendesk admin to make requests on behalf of end users. See [Making API requests on behalf of end users](/documentation/ticketing/using-the-zendesk-api/making-api-requests-on-behalf-of-end-users/).
   *
   * For example, the following parameter gives read access to all resources:
   *
   * `"scope": "read"`
   *
   * The following parameter gives read and write access to all resources:
   *
   * `"scope": "read write"`
   *
   * You can fine-tune the scope of the following resources:
   *
   * - tickets
   * - users
   * - auditlogs (read only)
   * - organizations
   * - hc
   * - apps
   * - triggers
   * - automations
   * - targets
   * - webhooks
   *
   * The syntax is as follows:
   *
   * `"scope": "resource:scope"`
   *
   * For example, the following parameter restricts the scope to only reading tickets:
   *
   * `"scope": "tickets:read"`
   *
   * To give read and write access to a resource, specify both scopes:
   *
   * `"scope": "users:read users:write"`
   *
   * To give write access only to one resource, such as organizations, and read access to everything else:
   *
   * `"scope": "organizations:write read"`
   *
   * **Note**: The endpoint returns an access token even if you specify an invalid scope such as `"scope": ["read", "write"]` (no parentheses). Any request you make with the token will return a "Forbidden" error.
   *
   * #### Tokens for Implicit Grant Type
   *
   * The implicit grant flow has been deprecated. It's considered insecure and its use is highly discouraged.
   */
  readonly CreateTokenForGrantType: () => Effect.Effect<
    typeof OAuthTokenForGrantTypesObject.Type,
    HttpClientError.HttpClientError | ParseError
  >;
}

export interface ClientError<Tag extends string, E> {
  readonly _tag: Tag;
  readonly request: HttpClientRequest.HttpClientRequest;
  readonly response: HttpClientResponse.HttpClientResponse;
  readonly cause: E;
}

class ClientErrorImpl extends Data.Error<{
  _tag: string;
  cause: any;
  request: HttpClientRequest.HttpClientRequest;
  response: HttpClientResponse.HttpClientResponse;
}> {}

export const ClientError = <Tag extends string, E>(
  tag: Tag,
  cause: E,
  response: HttpClientResponse.HttpClientResponse,
): ClientError<Tag, E> =>
  new ClientErrorImpl({
    _tag: tag,
    cause,
    response,
    request: response.request,
  }) as any;
