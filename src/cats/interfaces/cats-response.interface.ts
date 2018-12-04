import {ApiModelProperty} from '@nestjs/swagger'
import {ConceptLibrary} from './cats.interface'

export class ConceptLibrariesResponse {
    @ApiModelProperty({type: [ConceptLibrary]})
    libraries: ConceptLibrary[]
}
