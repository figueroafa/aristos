import {Injectable} from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
  {
    id: 'other',
    title: 'Admin',
    type: 'group',
    icon: 'feather icon-align-left',
    children: [
      {
        id: 'home',
        title: 'Nosotros',
        type: 'item',
        url: '/home',
        classes: 'nav-item',
        icon: 'feather icon-sidebar',
      },
      {
        id: 'emisores',
        title: 'Entidades Emisoras',
        type: 'item',
        url: '/emisores/list',
        classes: 'nav-item',
        icon: 'feather icon-sidebar',
      },
      {
        id: 'marketplace',
        title: 'Marketplace',
        type: 'collapse',
        url: '/marketplace/mercado-primario',
        classes: 'nav-item',
        icon: 'feather icon-sidebar',
        children: [
          {
            id: 'mercado_primario',
            title: 'Mercado Primario',
            type: 'item',
            url: '/marketplace/mercado-primario',
            classes: 'nav-item',
            icon: 'feather icon-sidebar'
          },
          {
            id: 'mercado_secundario',
            title: 'Mercado Secundario',
            type: 'item',
            url: '/marketplace/mercado-primario',
            classes: 'nav-item',
            icon: 'feather icon-sidebar'
          },
        ]
      },
      {
        id: 'inmobiliario',
        title: 'Financiación',
        type: 'collapse',
        url: '/proyectos/inmobiliario',
        classes: 'nav-item',
        icon: 'feather icon-sidebar',
        children: [
          {
            id: 'create_account',
            title: 'Crear cuenta',
            type: 'collapse',
            url: '/proyectos/inmobiliario',
            classes: 'nav-item',
            icon: 'feather icon-sidebar',
            children: [
              {
                id: 'create_account_natural',
                title: 'Registro Persona',
                type: 'item',
                url: '/financiacion/registro-natural',
                classes: 'nav-item',
                icon: 'feather icon-sidebar'
              },
              {
                id: 'create_account_empresa',
                title: 'Registro Empresa',
                type: 'item',
                url: '/financiacion/registro-empresa',
                classes: 'nav-item',
                icon: 'feather icon-sidebar'
              }
            ]
          },
          {
            id: 'solicitud_financ',
            title: 'Solicitud Financiamiento',
            type: 'collapse',
            url: '/proyectos/inmobiliario',
            classes: 'nav-item',
            icon: 'feather icon-sidebar',
            children: [
              {
                id: 'create_account_natural',
                title: 'Consulta / Aprobación / Rechazo',
                type: 'item',
                url: '/home',
                classes: 'nav-item',
                icon: 'feather icon-sidebar'
              }
            ]
          }
        ]
      },
      {
        id: 'inversiones',
        title: 'Inversiones',
        type: 'collapse',
        url: '/proyectos/inmobiliario',
        classes: 'nav-item',
        icon: 'feather icon-sidebar',
        children: [
          {
            id: 'proyectos',
            title: 'Proyectos',
            type: 'item',
            url: '/inversiones/inmobiliario',
            classes: 'nav-item',
            icon: 'feather icon-sidebar'
          },
          {
            id: 'reg_inv',
            title: 'Crear cuenta de inversión',
            type: 'collapse',
            url: '/proyectos/reg_inversion',
            classes: 'nav-item',
            icon: 'feather icon-sidebar',
            children: [
              {
                id: 'create_account_natural',
                title: 'Registro Persona',
                type: 'item',
                url: '/financiacion/registro-natural',
                classes: 'nav-item',
                icon: 'feather icon-sidebar'
              },
              {
                id: 'create_account_empresa',
                title: 'Registro Empresa',
                type: 'item',
                url: '/financiacion/registro-empresa',
                classes: 'nav-item',
                icon: 'feather icon-sidebar'
              }
            ]
          },
        ]
      },
    ]
  }
];

@Injectable()
export class NavigationItem {
  public get() {
    return NavigationItems;
  }
}
