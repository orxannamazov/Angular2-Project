import { Pipe, PipeTransform } from 'angular2/core';
import { IPolice } from './police';


@Pipe({
    name: 'policeFilter'
})
export class ProductFilterPipe implements PipeTransform {
    transform (value: IPolice[], args: string[]): IPolice[]{
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
        return filter ? value.filter((product: IPolice) => 
        product.no.toLocaleLowerCase().indexOf(filter) != -1): value;
    }
}