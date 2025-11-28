import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

// Build a safe DATABASE_URL for environments that use pgBouncer (e.g. Supabase).
// When pgBouncer is used in transaction pooling mode, prepared statements may fail
// with "prepared statement \"sX\" already exists". Adding `pgbouncer=true`
// to the connection string signals Prisma to avoid certain prepared-statement
// behaviour. This is a recommended workaround when deploying to serverless
// platforms that sit behind a connection pooler.
function prismaDatabaseUrl(): string | undefined {
	const raw = process.env.DATABASE_URL;
	if (!raw) return undefined;

	// If it already includes pgbouncer flag, return as-is
	if (raw.includes('pgbouncer')) return raw;

	// Append the flag preserving existing query params
	return raw.includes('?') ? `${raw}&pgbouncer=true` : `${raw}?pgbouncer=true`;
}

const dbUrl = prismaDatabaseUrl();

export const prisma =
	globalForPrisma.prisma ||
	new PrismaClient({
		datasources: { db: { url: dbUrl ?? process.env.DATABASE_URL } },
	});

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;