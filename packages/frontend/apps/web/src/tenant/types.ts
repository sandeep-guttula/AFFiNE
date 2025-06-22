export interface TenantConfig {
  name: string;
  logoUrl: string;
  primaryColor: string;
  secondaryColor?: string;
  chatwoot: {
    baseUrl: string;
    websiteToken: string;
  };
  branding?: {
    companyName: string;
    supportEmail: string;
    favicon: string;
  };
  themeColors?: Record<string, string>;
}

export const defaultTenantConfig: TenantConfig = {
  name: 'ACME Corporation',
  logoUrl:
    'https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png',
  primaryColor: '#3fcc2d',
  secondaryColor: '#FF8E8E',
  chatwoot: {
    baseUrl: 'https://app.chatwoot.com',
    websiteToken: 'ZWzES3MyNDBXczMYUa74fyBi',
  },
  branding: {
    companyName: 'ACME Corporation',
    supportEmail: 'support@acme.com',
    favicon:
      'https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png',
  },
  themeColors: {
    '--affine-theme-mode': 'light',
    '--affine-brand-color': '#3fcc2d',
    '--affine-primary-color': '#3fcc2d',
    '--affine-secondary-color': '#FF8E8E',
    '--affine-hover-color': 'rgba(63, 204, 45, 0.08)',
    '--affine-hover-color-filled': '#e8f9e5',
    '--affine-link-color': '#2da62a',
    '--affine-success-color': '#29cc7a',
    '--affine-error-color': '#e74c3c',
    '--affine-warning-color': '#f39c12',
    '--affine-background-primary-color': '#ffffff',
    '--affine-background-secondary-color': '#f5f5f5',
    '--affine-background-tertiary-color': '#eeeeee',
    '--affine-background-code-block': '#f2fef4',
    '--affine-background-overlay-panel-color': '#f7fff7',
    '--affine-text-primary-color': '#1e1e1e',
    '--affine-text-secondary-color': '#606c38',
    '--affine-text-disable-color': '#a0a0a0',
    '--affine-text-emphasis-color': '#3fcc2d',
    '--affine-border-color': '#d9e8d6',
    '--affine-divider-color': '#e0e0e0',
    '--affine-placeholder-color': '#bdbdbd',
    '--affine-icon-color': '#7e997b',
    '--affine-icon-secondary': 'rgba(30, 30, 30, 0.4)',
  },
};