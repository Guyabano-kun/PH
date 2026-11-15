# PH Chat Start

Copy this single prompt into a new ChatGPT conversation:

> Продолжаем проект Сайт PH. Работай строго по GitHub repository `Guyabano-kun/PH`, branch `main`. Сначала прочитай непосредственно из актуального `main` файлы `AGENTS.md`, `docs/PROJECT_DECISIONS.md`, `docs/PROJECT_STATUS.md` и `docs/CHAT_START.md`. Затем проверь текущий HEAD и исходники, относящиеся к текущему этапу. GitHub является единственным источником истины по коду, данным, решениям и статусу; не полагайся на старые локальные копии или пересказы истории чатов. Продолжай с точного следующего шага из `docs/PROJECT_STATUS.md`, не повторяя утверждённые решения и не меняя архитектуру или последовательность без критической причины. Соблюдай `AGENTS.md`, особенно требования к географической точности, источникам и неизвестным данным. Перед изменениями читай актуальные файлы; после изменений проверяй diff, целостность, ссылки, JSON, совместимость и публикацию. Не заявляй PASS/DONE без фактической проверки. После существенного этапа обнови `docs/PROJECT_STATUS.md` и при необходимости `docs/PROJECT_DECISIONS.md`, чтобы следующий чат продолжил работу без повторного ввода контекста. Отвечай по-русски, кратко и по делу.

## Use
- Copy only the prompt above into a new chat.
- The new chat must reload all four repository files from current `main`; this file is not a substitute for reading them.
- If this file conflicts with `AGENTS.md`, follow `AGENTS.md` and reconcile the documentation.
- `docs/PROJECT_STATUS.md` defines the next work step; do not infer it from old chat history.


Standing authorization: The repository owner has explicitly authorized ChatGPT to read and modify the repository directly, commit/push routine project changes to `main`, and publish GitHub Pages without repeated approval. Do not ask for routine re-approval. Respect GitHub authentication/branch protection and report genuine technical blockers accurately.
