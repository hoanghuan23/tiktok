// useState

// useEffect
1 cập nhật lại state
2 cập nhật lại DOM (mutated)
3 Render lại UI
4 gọi cleanup nếu deps thay đổi
5 gọi useEffect callback

// useLayoutEffect
1 cập nhật lại state
2 cập nhật DOM (mutated)
3 gọi cleanup nếu deps thay đổi (sync)
4 gọi useLayoutEffect callback (sync)
5 Render lại UI

// useRef
1 Khi chúng ta dùng useRef để lưu giá trị, thì khi phải render lại một function component, giá trị đã lưu sẽ không bị thay đổi, mà vẫn giữ được giá trị đã lưu trước đó.

// memo
1 dùng để ghi nhớ các props của 1 component 
2 nhận nhiều prop nếu có ít nhất 1 prop thay đổi thì nó sẽ render lại

// useCallback
1 *Lưu ý: dùng useCallback thì phải dùng kết hợp React.memo, không thì vô nghĩa!!!

// memo
1 tránh thực hiện render không cần thiết

// usememo hook
1 tránh thực hiện logic không cần thiết

// useReducer
dùng trong trường hợp cần nhiều useState
1 khởi tạo biến ban đầu
2 phân tích logic (ví dụ nhấn up + 1, down -1)
3 reduce
4  dispatch

//useContext hook

//useReducer hook

