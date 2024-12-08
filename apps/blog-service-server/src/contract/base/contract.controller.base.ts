/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ContractService } from "../contract.service";
import { ContractCreateInput } from "./ContractCreateInput";
import { Contract } from "./Contract";
import { ContractFindManyArgs } from "./ContractFindManyArgs";
import { ContractWhereUniqueInput } from "./ContractWhereUniqueInput";
import { ContractUpdateInput } from "./ContractUpdateInput";
import { SignatureFindManyArgs } from "../../signature/base/SignatureFindManyArgs";
import { Signature } from "../../signature/base/Signature";
import { SignatureWhereUniqueInput } from "../../signature/base/SignatureWhereUniqueInput";
import { ClientFindManyArgs } from "../../client/base/ClientFindManyArgs";
import { Client } from "../../client/base/Client";
import { ClientWhereUniqueInput } from "../../client/base/ClientWhereUniqueInput";

export class ContractControllerBase {
  constructor(protected readonly service: ContractService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Contract })
  async createContract(
    @common.Body() data: ContractCreateInput
  ): Promise<Contract> {
    return await this.service.createContract({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        title: true,
        content: true,
        status: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Contract] })
  @ApiNestedQuery(ContractFindManyArgs)
  async contracts(@common.Req() request: Request): Promise<Contract[]> {
    const args = plainToClass(ContractFindManyArgs, request.query);
    return this.service.contracts({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        title: true,
        content: true,
        status: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Contract })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async contract(
    @common.Param() params: ContractWhereUniqueInput
  ): Promise<Contract | null> {
    const result = await this.service.contract({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        title: true,
        content: true,
        status: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Contract })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateContract(
    @common.Param() params: ContractWhereUniqueInput,
    @common.Body() data: ContractUpdateInput
  ): Promise<Contract | null> {
    try {
      return await this.service.updateContract({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          title: true,
          content: true,
          status: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Contract })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteContract(
    @common.Param() params: ContractWhereUniqueInput
  ): Promise<Contract | null> {
    try {
      return await this.service.deleteContract({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          title: true,
          content: true,
          status: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/signatures")
  @ApiNestedQuery(SignatureFindManyArgs)
  async findSignatures(
    @common.Req() request: Request,
    @common.Param() params: ContractWhereUniqueInput
  ): Promise<Signature[]> {
    const query = plainToClass(SignatureFindManyArgs, request.query);
    const results = await this.service.findSignatures(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        signerEmail: true,
        signedAt: true,
        signatureImage: true,

        contract: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/signatures")
  async connectSignatures(
    @common.Param() params: ContractWhereUniqueInput,
    @common.Body() body: SignatureWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      signatures: {
        connect: body,
      },
    };
    await this.service.updateContract({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/signatures")
  async updateSignatures(
    @common.Param() params: ContractWhereUniqueInput,
    @common.Body() body: SignatureWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      signatures: {
        set: body,
      },
    };
    await this.service.updateContract({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/signatures")
  async disconnectSignatures(
    @common.Param() params: ContractWhereUniqueInput,
    @common.Body() body: SignatureWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      signatures: {
        disconnect: body,
      },
    };
    await this.service.updateContract({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/clients")
  @ApiNestedQuery(ClientFindManyArgs)
  async findClients(
    @common.Req() request: Request,
    @common.Param() params: ContractWhereUniqueInput
  ): Promise<Client[]> {
    const query = plainToClass(ClientFindManyArgs, request.query);
    const results = await this.service.findClients(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        email: true,

        contract: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/clients")
  async connectClients(
    @common.Param() params: ContractWhereUniqueInput,
    @common.Body() body: ClientWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      clients: {
        connect: body,
      },
    };
    await this.service.updateContract({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/clients")
  async updateClients(
    @common.Param() params: ContractWhereUniqueInput,
    @common.Body() body: ClientWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      clients: {
        set: body,
      },
    };
    await this.service.updateContract({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/clients")
  async disconnectClients(
    @common.Param() params: ContractWhereUniqueInput,
    @common.Body() body: ClientWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      clients: {
        disconnect: body,
      },
    };
    await this.service.updateContract({
      where: params,
      data,
      select: { id: true },
    });
  }
}
