import { WaitingIcon, DeliveryTruckIcon, SecureIcon, MoneyBagsIcon } from '@/components/ui/Icons'
import { RoadMapItem, type RoadMapItemData } from './RoadMapItem/RoadMapItem'
import { Statistics } from './Statistics/Statistics'
import classes from './HowItWorks.module.scss'

const roadMapItems: Array<RoadMapItemData> = [
  { Icon: WaitingIcon, title: 'Прочитай задание внимательно', text: 'Думаю у тебя не займет это больше двух-трех минут' },
  { Icon: DeliveryTruckIcon, title: 'Изучи весь макет заранее', text: 'Подумай как это будет работать на разных разрешениях и при скролле' },
  { Icon: SecureIcon, title: 'Сделай хорошо', text: 'Чтобы мы могли тебе доверить подобные задачи в будущем' },
  { Icon: MoneyBagsIcon, title: 'Получи предложение', text: 'Ну тут все просто, не я придумал правила, но думаю так и будет)))' },
]

export function HowItWorksSection() {
  return (
    <section className={classes.howItWorks} id='howItWorks'>
      <div className='container'>
        <h2 className={classes.title}>Как это работает</h2>
        <div className={classes.roadMap}>
          {
            roadMapItems.map(({ Icon, title, text }) => {
              return (
                <RoadMapItem 
                  key={title}
                  Icon={Icon}
                  title={title}
                  text={text}
                />
              )
            })
          }
        </div>
        <Statistics />
      </div>
    </section>
  )
}
