export interface BrevoContact {
  email: string;
  attributes: BrevoContactAttributes;
  emailBlacklisted?: boolean;
  smsBlacklisted?: boolean;
  listIds: number[];
  updateEnabled?: boolean;
  smtpBlacklistSender?: string[];
}

export interface BrevoContactAttributes {
  PRENOM: string;
  NOM?: string;
}
