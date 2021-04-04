declare namespace API {
  export interface CurrentUser {
    avatar?: string;
    name?: string;
    title?: string;
    group?: string;
    signature?: string;
    tags?: {
      key: string;
      label: string;
    }[];
    userid?: string;
    access?: 'user' | 'guest' | 'admin';
    dataSet: any[];
  }
  export interface ResponseStruct {
    errCode: number;
    errMsg: string;
  }
  export interface LoginStateType {
    errMsg?: 'ok' | 'error';
    errCode?: number;
  }

  export interface NoticeIconData {
    id: string;
    key: string;
    avatar: string;
    title: string;
    datetime: string;
    type: string;
    read?: boolean;
    description: string;
    clickClose?: boolean;
    extra: any;
    status: string;
  }

  export interface DataSet<T> extends ResponseStruct {
    errMsg(errMsg: any);
    errCode: number;
    dataSet: T[];
    total?: number;
  }

  export interface Data<T> extends ResponseStruct {
    data: T;
  }
}
