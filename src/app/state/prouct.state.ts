export  enum DataStateEnum {
  LOADING,
  LOADED,
  ERROR
}


export interface AppDataState <T>{
  dataState? : DataStateEnum,
  data?:T,
  errorMessage? : String
}


export  enum ActionState{
  get_all_product,
  get_selected_product,
  get_avaliable_product,
  search_product,
  new_product,
  on_select,
  on_delete

}

export  interface ActionEventType {
  type:ActionState ,
  payload: any

}
