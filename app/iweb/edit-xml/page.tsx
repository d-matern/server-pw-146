import { UiButton } from "@/components/ui/form/ui-button";
import { UiInput } from "@/components/ui/form/ui-input";
import { UiLabel } from "@/components/ui/form/ui-label";
import Link from "next/link";

export default function IwebHome() {
    const defaultCharacter = [
        {
            genus: 'Люди',
            classes: ['Воин', 'Маг']
        },
        {
            genus: 'Сиды',
            classes: ['Лучник', 'Жрец']
        },
        {
            genus: 'Зооморфы',
            classes: ['Друид', 'Оборотень']
        },
        {
            genus: 'Амфибии',
            classes: ['Убийца', 'Шаман']
        },
        {
            genus: 'Древние',
            classes: ['Страж', 'Мистик']
        }
    ]
    return (
        <div className="max-w-[550px] mx-auto ">
          <h1 className="text-center font-bold">Iweb | Редактирование XML</h1>

          <div className="mt-5">
            <h2 className="font-semibold">
                Просмотр и редактирование стандартных персонажей:
            </h2>
            <ul className="mt-3">
                {defaultCharacter.map(char => (
                    <li key={char.genus} className="border-t last:border-b">
                        {char.classes.map((cs, index) => (
                            <Link key={index} className="block text-sm" href="#">{char.genus} - {cs}</Link>
                        ))}
                    </li>
                ))}
            </ul>
          </div>

          <div className="mt-5">
            <h2 className="font-semibold">
                Просмотр конкретного персонажа:
            </h2>

            <form className="mt-2">
                <UiLabel className="flex-row items-center text-xs" label="Введите ID персонажа:">
                    <UiInput type="number" />
                </UiLabel>

                <UiLabel className="mt-1 flex-row items-center text-xs" label="Введите имя персонажа:">
                    <UiInput />
                </UiLabel>

                <UiButton className="mt-3" type="button">
                    Стандартная информация о персонаже
                </UiButton>

                <UiButton className="mt-1" type="button">
                    XML персонажа
                </UiButton>
            </form>
          </div>
        </div>
    );
};