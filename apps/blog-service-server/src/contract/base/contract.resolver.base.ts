/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Contract } from "./Contract";
import { ContractCountArgs } from "./ContractCountArgs";
import { ContractFindManyArgs } from "./ContractFindManyArgs";
import { ContractFindUniqueArgs } from "./ContractFindUniqueArgs";
import { CreateContractArgs } from "./CreateContractArgs";
import { UpdateContractArgs } from "./UpdateContractArgs";
import { DeleteContractArgs } from "./DeleteContractArgs";
import { SignatureFindManyArgs } from "../../signature/base/SignatureFindManyArgs";
import { Signature } from "../../signature/base/Signature";
import { ClientFindManyArgs } from "../../client/base/ClientFindManyArgs";
import { Client } from "../../client/base/Client";
import { ContractService } from "../contract.service";
@graphql.Resolver(() => Contract)
export class ContractResolverBase {
  constructor(protected readonly service: ContractService) {}

  async _contractsMeta(
    @graphql.Args() args: ContractCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Contract])
  async contracts(
    @graphql.Args() args: ContractFindManyArgs
  ): Promise<Contract[]> {
    return this.service.contracts(args);
  }

  @graphql.Query(() => Contract, { nullable: true })
  async contract(
    @graphql.Args() args: ContractFindUniqueArgs
  ): Promise<Contract | null> {
    const result = await this.service.contract(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Contract)
  async createContract(
    @graphql.Args() args: CreateContractArgs
  ): Promise<Contract> {
    return await this.service.createContract({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Contract)
  async updateContract(
    @graphql.Args() args: UpdateContractArgs
  ): Promise<Contract | null> {
    try {
      return await this.service.updateContract({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Contract)
  async deleteContract(
    @graphql.Args() args: DeleteContractArgs
  ): Promise<Contract | null> {
    try {
      return await this.service.deleteContract(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Signature], { name: "signatures" })
  async findSignatures(
    @graphql.Parent() parent: Contract,
    @graphql.Args() args: SignatureFindManyArgs
  ): Promise<Signature[]> {
    const results = await this.service.findSignatures(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Client], { name: "clients" })
  async findClients(
    @graphql.Parent() parent: Contract,
    @graphql.Args() args: ClientFindManyArgs
  ): Promise<Client[]> {
    const results = await this.service.findClients(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}