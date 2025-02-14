import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
@Schema()
export class Driver {
    @Prop({ required: true })
    driverId: string;
    @Prop({ required: true })
    firstName: string;
    @Prop({ required: true })
    lastName: string;
    @Prop({ required: true })
    address: string;
    @Prop({ required: true })
    city: string;
    @Prop({ required: true })
    state: string;
    @Prop({ required: true })
    pinCode: string;
    @Prop({ required: true })
    profilePic: string
    @Prop({ required: true })
    operatorId: string
    // @Prop({ type: [String], required: false })
    // members: string[];
    @Prop({ required: false, })
    isDeleted: false;
    @Prop({ required: false, })
    createdOn: Date;
    @Prop({ required: false, })
    modifiedOn: Date;
}

export const DriverSchema = SchemaFactory.createForClass(Driver);

DriverSchema.index({driverId:1});
DriverSchema.index({email:1});
DriverSchema.index({phoneNumber:1});
DriverSchema.index({createdOn:1});
DriverSchema.index({modifiedOn:1});

export type DriverSchemaType = HydratedDocument<Driver>;