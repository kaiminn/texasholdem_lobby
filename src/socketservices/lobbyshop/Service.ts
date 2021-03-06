import * as _ from 'lodash';
import 'reflect-metadata';
import { inject, provide } from '../../ioc/ioc';
import BaseService from '../../models/BaseService';
import SocketExceptions from '../../models/SocketExceptions';
import Repository from './Repository';

@provide('LobbyShopServer')
export default class LobbyShopServer extends BaseService {
    constructor(@inject('LobbyShopRepository') private repository: Repository) {
        super();
    }
    public async getShopItemList(data: any): Promise<any> {
        const res = await this.repository.getShopItemList();
        if (res.s) {
            res.d.status = true;
            return res.d;
        }
        throw new SocketExceptions(res.e, 'Server error !!');
    }
}
