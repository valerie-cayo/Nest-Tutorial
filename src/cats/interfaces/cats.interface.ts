import {ApiModelProperty} from '@nestjs/swagger'

export class ConceptLibrary {
    @ApiModelProperty()
    id: number

    @ApiModelProperty()
    name: string

    @ApiModelProperty()
    age: string

    @ApiModelProperty()
    color: string
}
