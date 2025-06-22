import type { TenantConfig } from './types';

export const applyTenantBranding = (config: TenantConfig) => {
  const root = document.documentElement;

  root.style.setProperty('--tenant-primary-color', config.primaryColor);
  root.style.setProperty(
    '--tenant-secondary-color',
    config.secondaryColor || config.primaryColor
  );
  root.style.setProperty('--tenant-name', `"${config.name}"`);

  if (config.themeColors) {
    Object.entries(config.themeColors).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }

  // Set document title
  const companyName = config.branding?.companyName || config.name;
  document.title = `${companyName} - Collaborative Workspace`;

  // Set favicon
  if (config.branding?.favicon) {
    const rels = ['icon', 'shortcut icon', 'apple-touch-icon'];

    rels.forEach(rel => {
      let link = document.querySelector(
        `link[rel="${rel}"]`
      ) as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.rel = rel;
        document.head.appendChild(link);
      }
      link.href = config.branding.favicon;
    });
  }

  // Update meta description
  const metaDescription = document.querySelector(
    'meta[name="description"]'
  ) as HTMLMetaElement;
  if (metaDescription) {
    metaDescription.content = `${companyName} - Collaborative Workspace Platform`;
  }

  // Inject tenant-specific styles
  const style = document.createElement('style');
  style.id = 'tenant-styles';
  style.textContent = `
     :root {
       --affine-primary-color: ${config.primaryColor};
       --affine-brand-color: ${config.primaryColor};
       --affine-hover-color: ${config.secondaryColor || config.primaryColor};
     }
     .affine-button-primary,
     .ant-btn-primary {
       background-color: ${config.primaryColor} !important;
       border-color: ${config.primaryColor} !important;
     }
     .affine-button-primary:hover,
     .ant-btn-primary:hover {
       background-color: ${config.secondaryColor || config.primaryColor} !important;
       border-color: ${config.secondaryColor || config.primaryColor} !important;
     }
     a, .affine-link {
       color: ${config.primaryColor} !important;
     }
     a:hover, .affine-link:hover {
       color: ${config.secondaryColor || config.primaryColor} !important;
     }
   `;

  const existingStyle = document.getElementById('tenant-styles');
  if (existingStyle) existingStyle.remove();

  document.head.appendChild(style);
};
