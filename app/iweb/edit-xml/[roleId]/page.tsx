'use client';

import { UiButton } from "@/components/ui/form/ui-button";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function IwebEditXMLModrole() {
    const { roleId } = useParams();
    const router = useRouter();
    const [xmlstring, setXmlstring] = useState<string | null>(null);

    useEffect(() => {
        if (!roleId || typeof +roleId !== 'number') {
            router.back();
        }
    }, [roleId]);

    return (
        <div className="max-w-[550px] mx-auto">
            <h1 className="text-center font-bold">Iweb | Редактирование XML персонажа: {roleId}</h1>

            <form action="saverolexml.jsp" method="post">
                <textarea className="w-full break-all bg-slate-200" cols={80} rows={20} name="rolexml">
                    {xmlstring}
                </textarea>
            </form>
          
            <UiButton onClick={() => router.back()}>Сохранить</UiButton>
            <UiButton onClick={() => router.back()}>Вернуться назад</UiButton>
        </div>
    );
};