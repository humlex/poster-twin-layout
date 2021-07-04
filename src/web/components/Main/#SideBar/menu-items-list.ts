import { BiStats } from 'react-icons/bi';
import { FaWarehouse } from 'react-icons/fa';
import { FiFileText } from 'react-icons/fi';
import { IoSettingsOutline, IoStatsChart } from 'react-icons/io5';
import { MdAttachMoney } from 'react-icons/md';
import { SiOpenaccess } from 'react-icons/si';

export const menuItems = [
  {
    icon: IoStatsChart,
    title: 'Статистика',
    submenu: [
      { title: 'Продажі', link: '/' },
      { title: 'Клієнти', link: '/clients' },
      { title: 'Працівники', link: '/workers' },
      { title: 'Цехи', link: '/workshop' },
      { title: 'Столи', link: '/tables' },
      { title: 'Категорії', link: '/categories' },
      { title: 'Товари', link: '/products' },
      { title: 'АВС-аналіз', link: '/abc' },
      { title: 'Чеки', link: '/checks' },
      { title: 'Оплати', link: '/payments' },
      { title: 'Податки', link: '/taxes' },
    ],
  },

  {
    icon: MdAttachMoney,
    title: 'Финансы',
    submenu: [
      { title: 'Продажі', link: '/' },
      { title: 'Клієнти', link: '/' },
      { title: 'Продажі', link: '/' },
      { title: 'Клієнти', link: '/' },
    ],
  },
  {
    icon: FiFileText,
    title: 'Меню',
    submenu: [
      { title: 'Продажі', link: '/' },
      { title: 'Клієнти', link: '/' },
      { title: 'Продажі', link: '/' },
      { title: 'Клієнти', link: '/' },
    ],
  },
  {
    icon: FaWarehouse,
    title: 'Склад',
  },
  {
    icon: BiStats,
    title: 'Маркетинг',
  },
  {
    icon: SiOpenaccess,
    title: 'Доступ',
    submenu: [
      { title: 'Продажі', link: '/' },
      { title: 'Клієнти', link: '/' },
      { title: 'Продажі', link: '/' },
      { title: 'Клієнти', link: '/' },
    ],
  },
  {
    icon: IoSettingsOutline,
    title: 'Настройки',
    submenu: [
      { title: 'Продажі', link: '/' },
      { title: 'Клієнти', link: '/' },
      { title: 'Продажі', link: '/' },
      { title: 'Клієнти', link: '/' },
    ],
  },
];
