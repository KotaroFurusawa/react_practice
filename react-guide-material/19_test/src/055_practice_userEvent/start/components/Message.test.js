import { render, screen } from "@testing-library/react";
import Message from "./Message";
import userEvent from "@testing-library/user-event";

describe('Messageコンポーネントの動作確認',()=>{
    describe('初期表示の正常性確認',()=>{
        test('input要素が存在',()=>{
            render(<Message />);
            const inputEl = screen.getByRole('textbox');
            expect(inputEl).toBeInTheDocument();
        })
    })

    describe('画面操作正常性確認',()=>{
        test('入力値の変更 > 反映', async ()=>{
            const user = userEvent.setup();
            render(<Message />);
            const inputEl = screen.getByRole('textbox');

            await user.type(inputEl, "こんにちは");

            expect(inputEl.value).toBe("こんにちは");
        })
    })
})