import { PrismaClient } from "@prisma/client"

// Thiết lập Pisma Client để vận hành CSDL
declare global {
  var prisma: PrismaClient | undefined     // chỉ được khai báo với biến var mới sử dụng được globalThis
}

const client = globalThis.prisma || new PrismaClient()
if (process.env.NODE_ENV !== "production") globalThis.prisma = client

export default client;