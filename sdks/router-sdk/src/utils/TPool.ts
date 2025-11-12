import { Pool as V4Pool } from '@maxosllc/v4-sdk'
import { Pair } from '@maxosllc/v2-sdk'
import { Pool as V3Pool } from '@maxosllc/v3-sdk'

export type TPool = Pair | V3Pool | V4Pool
