import {Redis} from '@upstash/redis'


// vercel redis bug heree
export const db = Redis.fromEnv()
