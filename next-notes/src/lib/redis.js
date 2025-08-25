import Redis from "ioredis";

const uuidUtil = () => (Date.now() / (Math.random() * 10)).toFixed().toString(16);

/**
 * Redis 客户端配置
 * @type {Redis}
 */
const redisClient = new Redis({
  host: "localhost",
  port: 6379,
  retryDelayOnFailover: 100,
  maxRetriesPerRequest: 3,
  lazyConnect: true,
  keepAlive: 30000,
});

// 监听连接事件
redisClient.on('connect', () => {
  console.log('✅ Redis 连接成功');
});

// 监听错误事件
redisClient.on('error', (err) => {
  console.error('❌ Redis 连接错误:', err.message);
});

// 监听断开事件
redisClient.on('close', () => {
  console.log('🔌 Redis 连接断开');
});

// 监听重连事件
redisClient.on('reconnecting', () => {
  console.log('🔄 Redis 正在重连...');
});
const inittialData = {
    [uuidUtil()]: '{"title":"sunt aut","content":"quia et suscipit suscipit recusandae","updateTime":"2023-12-13T09:19:48.837Z"}',
    [uuidUtil()]: '{"title":"qui est","content":"est rerum tempore vitae sequi sint","updateTime":"2023-12-13T09:19:48.837Z"}',
    [uuidUtil()]: '{"title":"ea molestias","content":"et iusto sed quo iure","updateTime":"2023-12-13T09:19:48.837Z"}'
};
/**
 * 获取所有笔记
 * @returns 
 */
export async function getAllNotes() {
    const data = await redisClient.hgetall("notes");
    if(Object.keys(data).length === 0) {
        await redisClient.hset("notes", inittialData);
    }
    return await redisClient.hgetall("notes");
}

export async function getNoteById(id) {
    const note = await redisClient.hget("notes", id);
    return note;
}

/**
 * 添加笔记
 * @param {Object} data 笔记数据
 * @returns {Promise<string>} 笔记的uuid
 */
export async function addNote(data) {
    const uuid = uuidUtil();
    await redisClient.hset("notes", [uuid], data);
    return uuid;
}
/**
 * 更新笔记
 * @param {string} uuid 笔记的uuid
 * @param {Object} data 笔记数据
 * @returns {Promise<string>} 笔记的uuid
 */
export async function updateNote(uuid, data) {
    await redisClient.hset("notes", [uuid], data);
    return uuid;
}
/**
 * 删除笔记
 * @param {string} uuid 笔记的uuid
 */
export async function deleteNote(uuid) {
    await redisClient.hdel("notes", [uuid]);
}
export default redisClient;
