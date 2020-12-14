class MaxIntSet
  attr_reader :max, :store

  def initialize(max)
    @max = max
    @store = Array.new(max)# { Hash.new } #{|h, k| h[k] = false}
  end

  def insert(num)
    raise "Out of bounds" if !num.between?(0, @max) #num > @max || num < 0
    @store[num] = true

  end

  def remove(num)
    @store = @store[0...num] + @store[num+1..-1]

  end

  def include?(num)
    @store[num]
  end

  private

  def is_valid?(num)
  end

  def validate!(num)
  end
end


class IntSet
  attr_reader :num_buckets
  def initialize(num_buckets = 20)
    @num_buckets = num_buckets
    @store = Array.new(num_buckets) { Array.new }
  end
  def [](pos)
    row,col = pos
    @store[row][col]
  end
  def []=(pos,value)
    row,col = pos
    @store[row][col]=value
  end
  

  def insert(num)
    i = num % num_buckets
    @store[i] << num

  end

  def remove(num)
  end

  def include?(num)
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
  end

  def num_buckets
    @store.length
  end
end

class ResizingIntSet
  attr_reader :count

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(num)
  end

  def remove(num)
  end

  def include?(num)
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
  end

  def num_buckets
    @store.length
  end

  def resize!
  end
end
