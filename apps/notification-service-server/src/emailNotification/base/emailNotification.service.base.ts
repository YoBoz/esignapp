/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  EmailNotification as PrismaEmailNotification,
} from "@prisma/client";

export class EmailNotificationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.EmailNotificationCountArgs, "select">
  ): Promise<number> {
    return this.prisma.emailNotification.count(args);
  }

  async emailNotifications(
    args: Prisma.EmailNotificationFindManyArgs
  ): Promise<PrismaEmailNotification[]> {
    return this.prisma.emailNotification.findMany(args);
  }
  async emailNotification(
    args: Prisma.EmailNotificationFindUniqueArgs
  ): Promise<PrismaEmailNotification | null> {
    return this.prisma.emailNotification.findUnique(args);
  }
  async createEmailNotification(
    args: Prisma.EmailNotificationCreateArgs
  ): Promise<PrismaEmailNotification> {
    return this.prisma.emailNotification.create(args);
  }
  async updateEmailNotification(
    args: Prisma.EmailNotificationUpdateArgs
  ): Promise<PrismaEmailNotification> {
    return this.prisma.emailNotification.update(args);
  }
  async deleteEmailNotification(
    args: Prisma.EmailNotificationDeleteArgs
  ): Promise<PrismaEmailNotification> {
    return this.prisma.emailNotification.delete(args);
  }
}
