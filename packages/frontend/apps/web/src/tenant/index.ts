import type { TenantConfig } from "./types"

const CONFIG_SERVER_URL = 'http://localhost:8081';

export async function fetchTenantConfig(tenant: string): Promise<TenantConfig> {
  const res = await fetch(`${CONFIG_SERVER_URL}/tenant/${tenant}/config`);
  if (!res.ok) {
    throw new Error(`Tenant config not found for: ${tenant}`);
  }
  return res.json();
}
 