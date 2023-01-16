# React

- 冗長な props の渡し方をしていないか確認(...props を使う)

- 純粋関数で記述できているか確認

  - 外部の変数を参照していないか？(参照していい変数は引数のみ)
  - 関数外部に影響を及ぼしていないか？(外部の変数を変更したり、window.alert などを関数内で行う)
  - 引数として渡された配列やオブジェクトに対して直接変更を加えていないか？(新しい配列等に「...」で展開して使う。Immutability の保持)

- 配列の状態を変更するとき、filter などを使って綺麗に書けているか？(配列を変更する時には、どうせ新しい配列を定義するので、filter などを使うと綺麗にかける)

- 簡単な処理->useState
- 複雑な処理やテストが必要な処理->useReducer
- さらに複雑->Redux

- createPortal: トーストやポップアップの作成に使用
- useRef: 値変更しても再レンダリングされない．DOM を直接操作するときに使用
- 他コンポーネントの DOM を操作する際には forwardRef を用いる
- ref へのアクセスを制限する場合には useImperativeHandle を用いる
  ＊なるべく useState などで書いた方がいい(forwardRef などを使うと複雑になるため)

- useState:状態の更新の仕方は利用側に託す。
- useReducer:状態の更新の仕方も状態側で担当する。
- useContext: props のバケツリレーを簡単に記述できる

- useState の値と関数を useContext を渡すには Provider を使う。

- useContext は Context ファイルにまとめる(050_context_file)

- UseState の value と更新用関数の Context は別々に作成した方がパフォーマンスが上がる

## useEffect

- useEffect はコンポーネントが生成されたときに一回だけ呼ばれる(第二引数がからの時)
- 正確には第二引数(依存配列)に含めた state が更新されると呼ばれる。

- useEffect は state の更新に伴って処理を行いたい場合に使う

- 依存配列に含められた state を、その useEffect の中で変更してはならない

- useEffect で return する関数(クリーンナップ関数)は、依存配列がからの場合、コンポーネントが削除されたときに実行されるもの
- 依存配列に state がある場合は、state が変更されたとき、最後に実行されるもの。後始末が必要な場合などに使う

- useLayoutEffect は useEffect よりも先に実行される

- useLayoutEffect はコンポーネント生成時、画面反映前に実行される。
  (最初に state=0 として、useEffect で初期値を更新すると、マウント時、一瞬だけ初期値 0 が表示された後で更新値が表示される。useLayoutEffect にすると、初期値を更新した値が最初に表示されるのでそのようなちらつきがなくなる)

## ReactHooks

- useEffect や useState などの React Hook は、コンポーネントの root の他に、use 〇〇のような名前の関数(カスタム Hook)の中で使うことができる。
  -> 既存の React Hook からカスタム Hook(use 〇〇)を自作することができる。
  (ex:同じタイマーを使いたいが、画面上の見せ方は変えたいというときに、useEffect を ReactHook として切り出して使いまわすことができる)

### React における副作用

- JSX の構築に直接関係のない処理は全て副作用として扱われる。
  ex: コンソールへの出力/DOM 操作/タイマー処理/サーバとの通信/ランダムな値の生成など
  ->副作用は useEffect かイベントハンドラ内に記述

## Redux

- Redux は useContext と useReducer を組み合わせたようなもの。
- ただし、**基本的に、グローバルステートの管理には useContext ではなく Redux を使う。**
- そのほうが拡張性とパフォーマンスに優れる

- Redux を用いる際、dispatch に渡す値は actions によって生成されたものを使うとミスが減る

- toolkit の中では、ミュータブルな操作がイミュータブルとして扱われる(immer の影響)

- Redux において、非同期処理は middleware(Redux Thunk)に記述する

## Strict モード

Strict モード：開発時には、２回関数コンポーネントを実行する．本番環境では一回のみ

## React のパフォーマンス

- React.memo によって，子コンポーネントの不要な再レンダリングを防ぐことができる
- しかし、親コンポーネントで定義した関数を props として子コンポーネントに渡している場合、memo を使っていても、親コンポーネントが再レンダリングされるたびに関数が再定義されるため、子コンポーネントも再レンダリングされる。
  ->関数を useCallback で囲う

- useCallback の第二引数は依存配列となる
- 依存配列に含まれる値が変更されると、関数が再定義される．(空の場合には最初のレンダリング時のみ)

- useMemo:あらゆる値をメモ化
- React.memo:コンポーネントをメモ化
- メモ化=キャッシュ化

- **複数の子コンポーネントで構成されているコンポーネントや、肥大化が予想されるコンポーネントは memo で囲っておいた方がいい**

- useMemo の第二引数には依存配列
- **コストの高い処理のみ useMemo でメモ化する。**(useMemo 自体の実行もコストがかかるため、重い処理のみに使用すること)

## API

**フロントから API を叩くときは API フォルダにメソッドをまとめる**

## import

- static import: js ファイルの上で読み込む通常のやつ
- dynamic import: import メソッドを用いる。引数を渡すことで、動的にモジュールを選択できる

- dynamic import では、都度通信が発生する。
- React は lazy メソッドの中で実現できる。

## React Router Dom

- ReactRouter で、URL パラメータやクエリパラメータ以外の方法で、画面遷移時に情報を渡すときは state で渡す

- history などで、前のページに戻るなどができる。

## Atomic Design

- 画面要素を五段階に分け，組み合わせることで UI を実現
- コンポーネント化された要素が画面を構成しているという考え方

### 五段階

1. Atom:
   最も小さくそれ以上分解できない要素(ex:ボタン、テキストボックス、アイコン)

2. Molecules:
   Atom の組み合わせで意味を持つデザインパーツ(ex: プロフィール画像+テキストボックス，アイコンセット)

3. Organisms
   Atom や Molecules で構成される単体である程度の意味を持つ要素群(ex: メニューバー、１ツイート)

4. Template
   ページのレイアウトのみを表現。実際のデータは持たない。

5. Pages
   最終的に表示される一画面

## TS と React

`useState<Type>()`

`axios.get<Type>()`

みたいな書き方する

- オブジェクトの型定義の中で、必須でないものは？をつける。
- 例えば`completed?: boolean`など
- その際は，props の展開時に default の値を指定すると良い。

- Pick を使うと、オブジェクトの型定義の中で必要なもののみをとってくることができる。
- Omit を使うと、オブジェクトの型定義の中で必要ないもの以外を取ってくることができる。

- 関数型コンポーネントでは、props の型定義は FC で行う
  ↓ は props は Props 型を持つので、

```
export const Text: FC<Props> = (props) => {
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>テキストです</p>;
};
```

### オプショナルチェイニング

- `arr?: string[]` などとしたとき、arr のない props が渡される可能性もある。
- しかし、`arr.join('/');` などどしていた時、arr が渡されないとエラーになる。
- そういうものに関しては、`arr?.join('/');` と書いてあげる
