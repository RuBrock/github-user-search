import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

type DateParams = {
    date: string;
}

export const dateFormatted = ({ date }: DateParams) => {
    return dayjs(date).format('DD/MM/YYYY');
}