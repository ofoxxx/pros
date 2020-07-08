(module
 (table 0 anyfunc)
 (memory $0 1)
 (data (i32.const 12) "\00\00\00\00")
 (export "memory" (memory $0))
 (export "main" (func $main))
 (func $main (; 0 ;) (result i32)
  (local $0 i32)
  (i32.store8
   (i32.load offset=12
    (i32.const 0)
   )
   (i32.const 72)
  )
  (i32.store8 offset=1
   (i32.load offset=12
    (i32.const 0)
   )
   (i32.const 101)
  )
  (i32.store8 offset=2
   (i32.load offset=12
    (i32.const 0)
   )
   (i32.const 108)
  )
  (i32.store8 offset=3
   (i32.load offset=12
    (i32.const 0)
   )
   (i32.const 108)
  )
  (i64.store offset=4 align=1
   (tee_local $0
    (i32.load offset=12
     (i32.const 0)
    )
   )
   (i64.const 6278138205982564463)
  )
  (i32.store16 offset=12 align=1
   (get_local $0)
   (i32.const 21313)
  )
  (i32.store8 offset=14
   (get_local $0)
   (i32.const 77)
  )
  (i32.const 15)
 )
)
